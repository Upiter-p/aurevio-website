"use client";

import { useEffect, useMemo, useState } from "react";
import type { HomeTranslations, QuestionKey, QuickHelpTranslations } from "@/components/home/translations";

type Answers = Record<QuestionKey, string>;
type OverlayEventDetail = { source: "menu" | "quick-help"; open: boolean };
const OVERLAY_EVENT = "aureviopro:overlay-change";

function createInitialAnswers(): Answers {
  return {
    service: "",
    region: "",
    budget: "",
    timeline: "",
    contact: "",
  };
}

export function QuickHelpWidget({
  copy,
  contact,
}: {
  copy: QuickHelpTranslations;
  contact: HomeTranslations["contact"];
}) {
  const questions = copy.questions;
  const totalSteps = questions.length;

  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => createInitialAnswers());

  const isSummaryStep = step >= totalSteps;
  const currentQuestion = questions[Math.min(step, totalSteps - 1)];

  const completedCount = Object.values(answers).filter(Boolean).length;
  const progress = Math.max(10, Math.round((completedCount / totalSteps) * 100));

  const enquiryBody = useMemo(() => {
    return [
      copy.enquiryLabel,
      "",
      `${questions[0].label} ${answers.service || "-"}`,
      `${questions[1].label} ${answers.region || "-"}`,
      `${questions[2].label} ${answers.budget || "-"}`,
      `${questions[3].label} ${answers.timeline || "-"}`,
      `${questions[4].label} ${answers.contact || "-"}`,
    ].join("\n");
  }, [answers, copy.enquiryLabel, questions]);

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
  }

  function closeWidget() {
    setIsOpen(false);
    resetWidgetState();
    emitQuickHelpOverlayChange(false);
  }

  function openWidget() {
    resetWidgetState();
    emitQuickHelpOverlayChange(true);
    setIsOpen(true);
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
                    <a
                      href={mailtoHref}
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-subtle)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionSubmit}
                    </a>
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
                    <a
                      href={mailtoHref}
                      onClick={closeWidget}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-subtle)] px-5 text-sm font-semibold text-[var(--text-main)]"
                    >
                      {copy.actionSubmit}
                    </a>
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
