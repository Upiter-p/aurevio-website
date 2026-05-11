export type LeadSubmissionPayload = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  package?: string;
  message?: string;
  source: string;
  locale?: string;
  pagePath?: string;
  intakeSummary?: string;
  conversation?: string;
  consent: boolean;
  honeypot?: string;
};

export type LeadSubmissionResult =
  | {
      success: true;
      deliveryMethod?: "webhook" | "email_fallback";
    }
  | {
      success: false;
      message: string;
      reason?: string;
    };

export async function submitLead(payload: LeadSubmissionPayload): Promise<LeadSubmissionResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => null)) as Partial<LeadSubmissionResult> | null;

    if (response.ok && data?.success === true) {
      return {
        success: true,
        deliveryMethod: data.deliveryMethod,
      };
    }

    return {
      success: false,
      message:
        data?.success === false && data.message
          ? data.message
          : "We could not send this enquiry right now. Please use WhatsApp or email as a backup.",
      reason: data?.success === false ? data.reason : undefined,
    };
  } catch {
    return {
      success: false,
      message: "We could not send this enquiry right now. Please use WhatsApp or email as a backup.",
      reason: "network_error",
    };
  }
}
