import { NextResponse, type NextRequest } from "next/server";

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  package?: unknown;
  message?: unknown;
  source?: unknown;
  locale?: unknown;
  pagePath?: unknown;
  intakeSummary?: unknown;
  conversation?: unknown;
  consent?: unknown;
  honeypot?: unknown;
};

type ValidatedLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  package: string;
  message: string;
  source: string;
  locale: string;
  pagePath: string;
  intakeSummary: string;
  conversation: string;
  consent: true;
  submittedAt: string;
};

const MAX_BODY_BYTES = 20_000;
const MAX_FIELD_LENGTH = 2_000;
const MAX_SHORT_FIELD_LENGTH = 180;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_MAX_KEYS = 1_000;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function jsonError(message: string, reason: string, status = 400) {
  return NextResponse.json({ success: false, message, reason }, { status });
}

function sanitizeText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return "";

  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email: string) {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRateLimitKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown-ip";
  const userAgent = request.headers.get("user-agent") || "unknown-agent";
  return `${ip}:${userAgent.slice(0, 120)}`;
}

function isRateLimited(request: NextRequest) {
  const now = Date.now();
  const key = getRateLimitKey(request);

  if (rateLimitStore.size > RATE_LIMIT_MAX_KEYS) {
    for (const [storedKey, value] of rateLimitStore) {
      if (value.resetAt <= now) {
        rateLimitStore.delete(storedKey);
      }
    }
  }

  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

function validateLead(payload: LeadPayload): { lead: ValidatedLead } | { error: NextResponse } {
  const honeypot = sanitizeText(payload.honeypot, MAX_SHORT_FIELD_LENGTH);
  if (honeypot) {
    return { error: jsonError("We could not accept this enquiry.", "spam_detected", 400) };
  }

  if (payload.consent !== true) {
    return { error: jsonError("Please confirm that AurevioPro can contact you about this enquiry.", "consent_required", 400) };
  }

  const lead = {
    name: sanitizeText(payload.name, MAX_SHORT_FIELD_LENGTH),
    email: sanitizeText(payload.email, MAX_SHORT_FIELD_LENGTH),
    phone: sanitizeText(payload.phone, MAX_SHORT_FIELD_LENGTH),
    company: sanitizeText(payload.company, MAX_SHORT_FIELD_LENGTH),
    service: sanitizeText(payload.service, MAX_SHORT_FIELD_LENGTH),
    package: sanitizeText(payload.package, MAX_SHORT_FIELD_LENGTH),
    message: sanitizeText(payload.message),
    source: sanitizeText(payload.source, MAX_SHORT_FIELD_LENGTH),
    locale: sanitizeText(payload.locale, MAX_SHORT_FIELD_LENGTH),
    pagePath: sanitizeText(payload.pagePath, MAX_SHORT_FIELD_LENGTH),
    intakeSummary: sanitizeText(payload.intakeSummary, MAX_FIELD_LENGTH),
    conversation: sanitizeText(payload.conversation, MAX_FIELD_LENGTH),
    consent: true as const,
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name) {
    return { error: jsonError("Please enter your name.", "name_required", 400) };
  }

  if (!lead.email && !lead.phone) {
    return { error: jsonError("Please provide an email or phone number.", "contact_method_required", 400) };
  }

  if (!isValidEmail(lead.email)) {
    return { error: jsonError("Please enter a valid email address.", "invalid_email", 400) };
  }

  if (!lead.message && !lead.intakeSummary) {
    return { error: jsonError("Please add a short message or complete the intake summary.", "message_required", 400) };
  }

  if (!lead.source) {
    return { error: jsonError("Lead source is missing.", "source_required", 400) };
  }

  return { lead };
}

async function deliverWebhook(lead: ValidatedLead) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const token = process.env.LEAD_WEBHOOK_TOKEN;

  if (!webhookUrl) {
    return { configured: false, ok: false };
  }

  const webhookPayload = {
    submittedAt: lead.submittedAt,
    timestamp: lead.submittedAt,
    source: lead.source,
    locale: lead.locale,
    pagePath: lead.pagePath,
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    service: lead.service,
    package: lead.package,
    message: lead.message,
    intakeSummary: lead.intakeSummary,
    conversation: lead.conversation,
    consent: lead.consent,
    deliveryStatus: "validated",
    rawPayload: lead,
    lead,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}`, "x-webhook-token": token } : {}),
      },
      body: JSON.stringify(webhookPayload),
    });

    return { configured: true, ok: response.ok, status: response.status };
  } catch {
    return { configured: true, ok: false };
  }
}

function formatLeadEmail(lead: ValidatedLead) {
  return [
    "New AurevioPro enquiry",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email || "-"}`,
    `Phone: ${lead.phone || "-"}`,
    `Company: ${lead.company || "-"}`,
    `Service: ${lead.service || "-"}`,
    `Package: ${lead.package || "-"}`,
    `Source: ${lead.source}`,
    `Locale: ${lead.locale || "-"}`,
    `Page: ${lead.pagePath || "-"}`,
    "",
    "Message:",
    lead.message || "-",
    "",
    "Intake summary:",
    lead.intakeSummary || "-",
    "",
    "Conversation:",
    lead.conversation || "-",
    "",
    `Submitted at: ${lead.submittedAt}`,
  ].join("\n");
}

async function deliverEmailFallback(lead: ValidatedLead) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !recipient) {
    return { configured: false, ok: false };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "AurevioPro Leads <onboarding@resend.dev>",
        to: [recipient],
        subject: `New AurevioPro enquiry: ${lead.service || lead.source}`,
        text: formatLeadEmail(lead),
      }),
    });

    return { configured: true, ok: response.ok, status: response.status };
  } catch {
    return { configured: true, ok: false };
  }
}

export async function POST(request: NextRequest) {
  if (isRateLimited(request)) {
    return jsonError("Too many enquiries were sent. Please try again later or use WhatsApp.", "rate_limited", 429);
  }

  let rawBody = "";

  try {
    rawBody = await request.text();
  } catch {
    return jsonError("We could not read this enquiry.", "invalid_request", 400);
  }

  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
    return jsonError("This enquiry is too long. Please shorten it and try again.", "payload_too_large", 413);
  }

  let payload: LeadPayload;

  try {
    payload = JSON.parse(rawBody) as LeadPayload;
  } catch {
    return jsonError("Please send a valid enquiry payload.", "invalid_json", 400);
  }

  const validated = validateLead(payload);
  if ("error" in validated) {
    return validated.error;
  }

  const webhook = await deliverWebhook(validated.lead);
  if (webhook.ok) {
    return NextResponse.json({ success: true, deliveryMethod: "webhook" });
  }

  const emailFallback = await deliverEmailFallback(validated.lead);
  if (emailFallback.ok) {
    return NextResponse.json({ success: true, deliveryMethod: "email_fallback" });
  }

  if (!webhook.configured && !emailFallback.configured) {
    return jsonError(
      "Lead delivery is not configured yet. Please use WhatsApp or email so your enquiry is not missed.",
      "lead_delivery_not_configured",
      503
    );
  }

  return jsonError(
    "We could not deliver this enquiry right now. Please use WhatsApp or email as a backup.",
    "lead_delivery_failed",
    502
  );
}
