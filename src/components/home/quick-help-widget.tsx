"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import type { HomeTranslations, QuestionKey, QuickHelpTranslations } from "@/components/home/translations";
import { submitLead } from "@/lib/lead-submit";

type Answers = Record<QuestionKey, string>;
type OverlayEventDetail = { source: "menu" | "quick-help"; open: boolean };
type OpenAssistantEventDetail = {
  serviceSlug?: string;
  locale?: string;
  serviceTitle?: string;
  packageName?: string;
  sourcePage?: string;
};
type AssistantContext = {
  serviceSlug: string;
  serviceTitle: string;
  packageName: string;
  sourcePage: string;
  locale: string;
};
const OVERLAY_EVENT = "aureviopro:overlay-change";
const OPEN_ASSISTANT_EVENT = "aurevio:open-assistant";

function createInitialAnswers(): Answers {
  return {
    service: "",
    region: "",
    budget: "",
    timeline: "",
    contact: "",
  };
}

function createInitialLeadForm() {
  return {
    name: "",
    email: "",
    phone: "",
    consent: false,
    honeypot: "",
  };
}

function createInitialAssistantContext(): AssistantContext {
  return {
    serviceSlug: "",
    serviceTitle: "",
    packageName: "",
    sourcePage: "",
    locale: "",
  };
}

const quickLeadCopy = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone / WhatsApp",
    consent: "I agree that AurevioPro can contact me about this enquiry.",
    privacy: "We’ll use your details only to respond to this enquiry.",
    sending: "Sending...",
    success: "Thanks. Your enquiry was received.",
    fallback: "Please use WhatsApp or email as a backup.",
  },
  ua: {
    name: "Ім’я",
    email: "Email",
    phone: "Телефон / WhatsApp",
    consent: "Я погоджуюся, що AurevioPro може зв’язатися зі мною щодо цього запиту.",
    privacy: "Ми використаємо ваші дані лише для відповіді на цей запит.",
    sending: "Надсилаємо...",
    success: "Дякуємо. Ваш запит отримано.",
    fallback: "Скористайтеся WhatsApp або email як резервним способом.",
  },
  ru: {
    name: "Имя",
    email: "Email",
    phone: "Телефон / WhatsApp",
    consent: "Я согласен, что AurevioPro может связаться со мной по этому запросу.",
    privacy: "Мы используем ваши данные только для ответа на этот запрос.",
    sending: "Отправляем...",
    success: "Спасибо. Ваш запрос получен.",
    fallback: "Используйте WhatsApp или email как резервный способ.",
  },
};

export function QuickHelpWidget({
  copy,
  contact,
  locale = "en",
}: {
  copy: QuickHelpTranslations;
  contact: HomeTranslations["contact"];
  locale?: "en" | "ua" | "ru";
}) {
  const questions = copy.questions;
  const totalSteps = questions.length;

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => createInitialAnswers());
  const [assistantContext, setAssistantContext] = useState<AssistantContext>(() => createInitialAssistantContext());
  const [leadForm, setLeadForm] = useState(() => createInitialLeadForm());
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const leadCopy = quickLeadCopy[locale];

  const isSummaryStep = step >= totalSteps;
  const currentQuestion = questions[Math.min(step, totalSteps - 1)];

  const completedCount = Object.values(answers).filter(Boolean).length;
  const progress = Math.max(10, Math.round((completedCount / totalSteps) * 100));

  const enquiryBody = useMemo(() => {
    const contextLines = [
      assistantContext.serviceTitle ? `Service context: ${assistantContext.serviceTitle}` : "",
      assistantContext.packageName ? `Package context: ${assistantContext.packageName}` : "",
      assistantContext.sourcePage ? `Source page: ${assistantContext.sourcePage}` : "",
    ].filter(Boolean);

    return [
      copy.enquiryLabel,
      "",
      ...contextLines,
      contextLines.length ? "" : "",
      `${questions[0].label} ${answers.service || "-"}`,
      `${questions[1].label} ${answers.region || "-"}`,
      `${questions[2].label} ${answers.budget || "-"}`,
      `${questions[3].label} ${answers.timeline || "-"}`,
      `${questions[4].label} ${answers.contact || "-"}`,
    ].join("\n");
  }, [answers, assistantContext.packageName, assistantContext.serviceTitle, assistantContext.sourcePage, copy.enquiryLabel, questions]);

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(copy.mailSubject)}&body=${encodeURIComponent(
    enquiryBody
  )}`;

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(enquiryBody)}`;
  const strategyCallHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.strategyCallSubject)}`;

  function emitQuickHelpOverlayChange(open: boolean) {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent<OverlayEventDetail>(OVERLAY_EVENT, { detail: { source: "quick-help", open } }));
  }

  function resetWidgetState() {
    setStep(0);
    setAnswers(createInitialAnswers());
    setLeadForm(createInitialLeadForm());
    setSubmitState({ status: "idle", message: "" });
  }

  function closeWidget() {
    setIsOpen(false);
    resetWidgetState();
    setAssistantContext(createInitialAssistantContext());
    emitQuickHelpOverlayChange(false);
  }

  function openWidget() {
    resetWidgetState();
    setAssistantContext(createInitialAssistantContext());
    emitQuickHelpOverlayChange(true);
    setIsOpen(true);
  }

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ status: "loading", message: leadCopy.sending });

    const result = await submitLead({
      name: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone,
      service: assistantContext.serviceTitle || answers.service,
      package: assistantContext.packageName,
      message: answers.service || assistantContext.serviceTitle || assistantContext.packageName || "Quick Help enquiry",
      source: "quick_help_widget",
      locale,
      pagePath: `${window.location.pathname}${window.location.search}`,
      intakeSummary: enquiryBody,
      conversation: JSON.stringify({ answers, assistantContext }),
      consent: leadForm.consent,
      honeypot: leadForm.honeypot,
    });

    if (result.success) {
      setSubmitState({ status: "success", message: leadCopy.success });
      return;
    }

    const fallbackMessage =
      result.reason === "lead_delivery_not_configured" || result.reason === "lead_delivery_failed"
        ? `${result.message} ${leadCopy.fallback}`
        : result.message;
    setSubmitState({ status: "error", message: fallbackMessage });
  }

  useEffect(() => {
    const onOverlayChange = (event: Event) => {
      const detail = (event as CustomEvent<OverlayEventDetail>).detail;
      if (detail?.source === "menu" && detail.open) {
        setIsOpen(false);
        setStep(0);
        setAnswers(createInitialAnswers());
      }
    };

    window.addEventListener(OVERLAY_EVENT, onOverlayChange as EventListener);
    return () => window.removeEventListener(OVERLAY_EVENT, onOverlayChange as EventListener);
  }, []);

  useEffect(() => {
    const onOpenAssistant = (event: Event) => {
      const detail = (event as CustomEvent<OpenAssistantEventDetail>).detail;
      const serviceAnswer = detail?.serviceTitle || detail?.serviceSlug || "";

      setAssistantContext({
        serviceSlug: detail?.serviceSlug || "",
        serviceTitle: detail?.serviceTitle || "",
        packageName: detail?.packageName || "",
        sourcePage: detail?.sourcePage || "",
        locale: detail?.locale || locale,
      });
      setAnswers({ ...createInitialAnswers(), service: serviceAnswer });
      setStep(serviceAnswer ? 1 : 0);
      setLeadForm(createInitialLeadForm());
      setSubmitState({ status: "idle", message: "" });
      emitQuickHelpOverlayChange(true);
      setIsOpen(true);
    };

    window.addEventListener(OPEN_ASSISTANT_EVENT, onOpenAssistant as EventListener);
    return () => window.removeEventListener(OPEN_ASSISTANT_EVENT, onOpenAssistant as EventListener);
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;
    if (!window.matchMedia("(max-width: 639px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function handleSelect(option: string) {
    const key = currentQuestion.key;
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setStep((prev) => (prev >= totalSteps - 1 ? totalSteps : prev + 1));
  }

  return (
    <>
      {isOpen ? (
        <>
          <div className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-[1px] sm:hidden" onClick={closeWidget} />
          <section className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.6rem)] z-[160] flex max-h-[min(72svh,640px)] flex-col overflow-hidden rounded-xl border border-[var(--line-soft)] bg-[var(--surface-main)] shadow-[0_28px_58px_-34px_rgba(14,19,28,0.85)] sm:hidden">
            <header className="border-b border-[var(--line-soft)] px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="max-w-[230px] text-[1rem] font-semibold tracking-[-0.01em] text-[var(--text-main)]">
                  {copy.title}
                </h3>
                <button
                  type="button"
                  onClick={closeWidget}
                  className="rounded-md border border-[var(--line-soft)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--text-muted)] transition hover:bg-[var(--surface-subtle)] hover:text-[var(--text-main)]"
                  aria-label={copy.close}
                >
                  {copy.close}
                </button>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-subtle)]">
                <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${progress}%` }} />
              </div>
            </header>

            <div className="min-h-0 overflow-y-auto overscroll-contain px-4 py-3">
              {isSummaryStep ? (
                <>
                  <div className="space-y-2 rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] p-3">
                    {questions.map((question) => (
                      <p key={question.key} className="text-[0.82rem] leading-6 text-[var(--text-main)]">
                      <span className="font-semibold">{question.label}</span> {answers[question.key]}
                    </p>
                  ))}
                </div>

                  <div className="mt-3 space-y-2">
                    <a
                      href="#contact"
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#365d93_0%,#28456c_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(33,54,89,0.8)]"
                    >
                      {copy.actionGetRecommendation}
                    </a>
                    <a
                      href={strategyCallHref}
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionBookCall}
                    </a>
                    <a
                      href={whatsappHref}
                      onClick={closeWidget}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionWhatsApp}
                    </a>
                    <form onSubmit={handleLeadSubmit} className="space-y-2 rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] p-3">
                      <input
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        value={leadForm.honeypot}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, honeypot: event.target.value }))}
                        aria-hidden="true"
                      />
                      <input
                        required
                        placeholder={leadCopy.name}
                        value={leadForm.name}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, name: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <input
                        type="email"
                        placeholder={leadCopy.email}
                        value={leadForm.email}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <input
                        placeholder={leadCopy.phone}
                        value={leadForm.phone}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, phone: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <label className="flex items-start gap-2 text-[0.75rem] leading-5 text-[var(--text-muted)]">
                        <input
                          required
                          type="checkbox"
                          checked={leadForm.consent}
                          onChange={(event) => setLeadForm((prev) => ({ ...prev, consent: event.target.checked }))}
                          className="mt-1"
                        />
                        <span>{leadCopy.consent}</span>
                      </label>
                      <p className="text-[0.72rem] leading-5 text-[var(--text-muted)]">{leadCopy.privacy}</p>
                      {submitState.message ? (
                        <p className="text-[0.78rem] leading-5 text-[var(--text-main)]">{submitState.message}</p>
                      ) : null}
                      <button
                        type="submit"
                        disabled={submitState.status === "loading" || submitState.status === "success"}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#365d93_0%,#28456c_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(33,54,89,0.8)] disabled:opacity-65"
                      >
                        {submitState.status === "loading" ? leadCopy.sending : copy.actionSubmit}
                      </button>
                      <a
                        href={mailtoHref}
                        className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                      >
                        {leadCopy.fallback}
                      </a>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold leading-6 text-[var(--text-main)]">{currentQuestion.label}</p>
                  <div className="mt-2.5 grid gap-2">
                    {currentQuestion.options.map((option) => {
                      const selected = answers[currentQuestion.key] === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelect(option)}
                          className={`rounded-xl border px-3 py-2.5 text-left text-[0.88rem] font-medium transition ${
                            selected
                              ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                              : "border-[var(--line-soft)] bg-[var(--surface-main)] text-[var(--text-main)] hover:bg-[var(--surface-subtle)]"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-3.5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                      disabled={step === 0}
                      className="rounded-md border border-[var(--line-soft)] px-3 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] disabled:opacity-40"
                    >
                      {copy.back}
                    </button>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[var(--text-muted)]">
                      {copy.step} {step + 1} / {totalSteps}
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      ) : null}

      <div className="fixed bottom-10 right-2 z-[90] w-[min(360px,calc(100vw-1rem))] sm:bottom-12 sm:right-3 sm:w-[360px]">
        {isOpen ? (
          <section className="mb-3 hidden overflow-hidden rounded-xl border border-[var(--line-soft)] bg-[var(--surface-main)] shadow-[0_28px_58px_-34px_rgba(14,19,28,0.85)] sm:block">
            <header className="border-b border-[var(--line-soft)] px-4 py-3 sm:px-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="max-w-[230px] text-[1rem] font-semibold tracking-[-0.01em] text-[var(--text-main)]">
                  {copy.title}
                </h3>
                <button
                  type="button"
                  onClick={closeWidget}
                  className="rounded-md border border-[var(--line-soft)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--text-muted)] transition hover:bg-[var(--surface-subtle)] hover:text-[var(--text-main)]"
                  aria-label={copy.close}
                >
                  {copy.close}
                </button>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-subtle)]">
                <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${progress}%` }} />
              </div>
            </header>

            <div className="space-y-4 px-4 py-4 sm:px-5">
              {isSummaryStep ? (
                <>
                  <div className="space-y-2 rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] p-3">
                    {questions.map((question) => (
                      <p key={question.key} className="text-[0.82rem] leading-6 text-[var(--text-main)]">
                        <span className="font-semibold">{question.label}</span> {answers[question.key]}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <a
                      href="#contact"
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#365d93_0%,#28456c_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(33,54,89,0.8)]"
                    >
                      {copy.actionGetRecommendation}
                    </a>
                    <a
                      href={strategyCallHref}
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionBookCall}
                    </a>
                    <a
                      href={whatsappHref}
                      onClick={closeWidget}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionWhatsApp}
                    </a>
                    <form onSubmit={handleLeadSubmit} className="space-y-2 rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] p-3">
                      <input
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        value={leadForm.honeypot}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, honeypot: event.target.value }))}
                        aria-hidden="true"
                      />
                      <input
                        required
                        placeholder={leadCopy.name}
                        value={leadForm.name}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, name: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <input
                        type="email"
                        placeholder={leadCopy.email}
                        value={leadForm.email}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <input
                        placeholder={leadCopy.phone}
                        value={leadForm.phone}
                        onChange={(event) => setLeadForm((prev) => ({ ...prev, phone: event.target.value }))}
                        className="min-h-10 w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-3 text-sm text-[var(--text-main)] outline-none focus:border-[var(--accent)]"
                      />
                      <label className="flex items-start gap-2 text-[0.75rem] leading-5 text-[var(--text-muted)]">
                        <input
                          required
                          type="checkbox"
                          checked={leadForm.consent}
                          onChange={(event) => setLeadForm((prev) => ({ ...prev, consent: event.target.checked }))}
                          className="mt-1"
                        />
                        <span>{leadCopy.consent}</span>
                      </label>
                      <p className="text-[0.72rem] leading-5 text-[var(--text-muted)]">{leadCopy.privacy}</p>
                      {submitState.message ? (
                        <p className="text-[0.78rem] leading-5 text-[var(--text-main)]">{submitState.message}</p>
                      ) : null}
                      <button
                        type="submit"
                        disabled={submitState.status === "loading" || submitState.status === "success"}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#365d93_0%,#28456c_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(33,54,89,0.8)] disabled:opacity-65"
                      >
                        {submitState.status === "loading" ? leadCopy.sending : copy.actionSubmit}
                      </button>
                      <a
                        href={mailtoHref}
                        className="inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-main)] px-5 text-sm font-semibold text-[var(--text-main)]"
                      >
                        {leadCopy.fallback}
                      </a>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold leading-6 text-[var(--text-main)]">{currentQuestion.label}</p>
                  <div className="grid gap-2">
                    {currentQuestion.options.map((option) => {
                      const selected = answers[currentQuestion.key] === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelect(option)}
                          className={`rounded-xl border px-3 py-2.5 text-left text-[0.88rem] font-medium transition ${
                            selected
                              ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                              : "border-[var(--line-soft)] bg-[var(--surface-main)] text-[var(--text-main)] hover:bg-[var(--surface-subtle)]"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                      disabled={step === 0}
                      className="rounded-md border border-[var(--line-soft)] px-3 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] disabled:opacity-40"
                    >
                      {copy.back}
                    </button>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-[var(--text-muted)]">
                      {copy.step} {step + 1} / {totalSteps}
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>
        ) : null}

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeWidget();
            return;
          }

          openWidget();
        }}
        aria-expanded={isOpen}
        className="ml-auto inline-flex min-h-12 items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--surface-main)] px-4 text-sm font-semibold text-[var(--text-main)] shadow-[0_16px_32px_-22px_rgba(14,19,28,0.82)] transition hover:-translate-y-0.5"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
        {copy.button}
      </button>
      </div>
    </>
  );
}
