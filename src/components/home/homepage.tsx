"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QuickHelpWidget } from "@/components/home/quick-help-widget";
import { LOCALES, getHomeTranslations, type HomeTranslations, type Locale } from "@/components/home/translations";

type WorkItem = HomeTranslations["work"]["items"][number];
type OverlayEventDetail = { source: "menu" | "quick-help"; open: boolean };
const OVERLAY_EVENT = "aurevio:overlay-change";

type LanguageSwitcherProps = {
  lang: Locale;
  ariaLabel: string;
  compact?: boolean;
  onDark?: boolean;
};

function LanguageSwitcher({ lang, ariaLabel, compact = false, onDark = false }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchLocale(next: Locale) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", next);
    const query = params.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${pathname}?${query}${hash}`, { scroll: false });
  }

  return (
    <div
      className={`inline-flex items-center rounded-md border p-0.5 backdrop-blur ${
        onDark ? "border-white/20 bg-black/35" : "border-[var(--line-soft)]/80 bg-[var(--surface-main)]/95"
      } ${compact ? "" : onDark ? "shadow-[0_12px_22px_-18px_rgba(0,0,0,0.7)]" : "shadow-[0_12px_22px_-18px_rgba(14,19,28,0.62)]"}`}
      aria-label={ariaLabel}
      role="group"
    >
      {LOCALES.map((locale) => {
        const label = locale.toUpperCase();

        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLocale(locale)}
            aria-current={lang === locale ? "page" : undefined}
            className={`inline-flex min-h-7.5 min-w-9 items-center justify-center rounded-sm px-2 text-[0.67rem] font-semibold uppercase tracking-[0.12em] transition ${
              lang === locale
                ? "bg-[var(--accent)] text-white shadow-[0_8px_14px_-10px_rgba(33,54,89,0.82)]"
                : onDark
                  ? "text-white/72 hover:bg-white/10 hover:text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--text-main)]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function WorkCard({
  work,
  imageAltSuffix,
}: {
  work: WorkItem;
  imageAltSuffix: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] shadow-[0_22px_50px_-38px_rgba(14,19,28,0.82)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line-soft)] bg-[var(--surface-subtle)] p-3 sm:p-4">
        <div className="relative h-full w-full overflow-hidden rounded-lg border border-[var(--line-soft)] bg-white/90">
          <div className="absolute inset-x-0 top-0 h-8 border-b border-[var(--line-soft)] bg-[var(--surface-subtle)]" />
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
          </div>
          <Image
            src={work.image}
            alt={`${work.title} ${imageAltSuffix}`}
            fill
            className="object-contain object-center p-2 pt-10 sm:p-3 sm:pt-11"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </div>
      <div className="space-y-2.5 p-6">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">{work.category}</p>
        <h3 className="text-[1.28rem] font-semibold tracking-[-0.015em] text-[var(--text-main)]">{work.title}</h3>
        <p className="text-[0.97rem] leading-7 text-[var(--text-muted)]">{work.result}</p>
      </div>
    </article>
  );
}

type MobileMenuOverlayProps = {
  open: boolean;
  close: () => void;
  copy: HomeTranslations;
  lang: Locale;
};

function MobileMenuOverlay({ open, close, copy, lang }: MobileMenuOverlayProps) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[1200] md:hidden">
      <button
        type="button"
        onClick={close}
        className="absolute inset-0 bg-black/72"
        aria-label={copy.nav.menu}
      />
      <div className="absolute right-3 top-[calc(env(safe-area-inset-top)+0.75rem)] w-[min(300px,calc(100vw-1.5rem))] max-h-[72svh] overflow-y-auto overscroll-contain rounded-xl border border-white/20 bg-[#0f1622] p-3.5 shadow-[0_28px_56px_-28px_rgba(0,0,0,0.92)]">
        <nav className="flex flex-col gap-1.5 text-sm font-medium text-white">
          <a href="#solutions" onClick={close} className="rounded-lg px-2 py-1.5 hover:bg-white/10">
            {copy.nav.services}
          </a>
          <a href="#work" onClick={close} className="rounded-lg px-2 py-1.5 hover:bg-white/10">
            {copy.nav.work}
          </a>
          <a href="#packages" onClick={close} className="rounded-lg px-2 py-1.5 hover:bg-white/10">
            {copy.nav.pricing}
          </a>
          <a href="#contact" onClick={close} className="rounded-lg px-2 py-1.5 hover:bg-white/10">
            {copy.nav.contact}
          </a>
        </nav>
        <div className="mt-3 border-t border-white/15 pt-3">
          <LanguageSwitcher lang={lang} ariaLabel={copy.nav.languageSwitcherAriaLabel} compact onDark />
          <a
            href="#contact"
            onClick={close}
            className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-md bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white"
          >
            {copy.nav.bookCall}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function HomePage() {
  const searchParams = useSearchParams();
  const { locale: lang, copy } = getHomeTranslations(searchParams.get("lang"));
  const hasHeroImage = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const strategyCallHref = `mailto:${copy.contact.email}?subject=${encodeURIComponent(copy.contact.strategyCallSubject)}`;
  const whatsappHref = `https://wa.me/${copy.contact.whatsappNumber}`;

  function emitMenuOverlayChange(open: boolean) {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent<OverlayEventDetail>(OVERLAY_EVENT, { detail: { source: "menu", open } }));
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    emitMenuOverlayChange(false);
  }

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
    emitMenuOverlayChange(true);
  }

  useEffect(() => {
    const onOverlayChange = (event: Event) => {
      const detail = (event as CustomEvent<OverlayEventDetail>).detail;
      if (detail?.source === "quick-help" && detail.open) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener(OVERLAY_EVENT, onOverlayChange as EventListener);
    return () => window.removeEventListener(OVERLAY_EVENT, onOverlayChange as EventListener);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-[var(--bg-main)]">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-[96svh] overflow-hidden border-b border-[var(--line-soft)] bg-[#0d1117]">
        {hasHeroImage ? (
          <Image
            src="/images/home/hero-main.png"
            alt={copy.hero.visualAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : null}

        <div
          className="absolute inset-0 bg-[linear-gradient(108deg,rgba(8,12,18,0.56)_0%,rgba(8,12,18,0.47)_36%,rgba(8,12,18,0.24)_63%,rgba(8,12,18,0.4)_100%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),transparent)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(0,0,0,0.08),transparent)]" aria-hidden />

        <header className="relative z-10 mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 pb-3 pt-5 sm:px-6 sm:pb-4 sm:pt-6 lg:px-10">
          <p className="text-base font-semibold tracking-[-0.01em] text-white">{copy.brand}</p>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/72">
              <a href="#solutions" className="hover:text-white">
                {copy.nav.services}
              </a>
              <a href="#work" className="hover:text-white">
                {copy.nav.work}
              </a>
              <a href="#packages" className="hover:text-white">
                {copy.nav.pricing}
              </a>
              <a href="#contact" className="hover:text-white">
                {copy.nav.contact}
              </a>
            </nav>
            <LanguageSwitcher lang={lang} ariaLabel={copy.nav.languageSwitcherAriaLabel} onDark />
            <a
              href="#contact"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_16px_30px_-20px_rgba(28,47,74,0.92)]"
            >
              {copy.nav.bookCall}
            </a>
          </div>

          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => (isMobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
              aria-expanded={isMobileMenuOpen}
              className="rounded-md border border-white/25 bg-black/35 px-3 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-white"
            >
              {copy.nav.menu}
            </button>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(96svh-78px)] w-full max-w-[1240px] items-center px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14">
          <div className="max-w-[740px] space-y-8">
            <p className="inline-flex items-center rounded-full bg-white/12 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/90">
              {copy.hero.eyebrow}
            </p>

            <div className="space-y-6">
              <h1 className="max-w-2xl text-[2.38rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[4.75rem]">
                {copy.hero.title}
              </h1>
              <p className="max-w-xl text-[1.01rem] leading-8 text-white/82 sm:text-[1.12rem]">{copy.hero.subtitle}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href="#contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-6 text-sm font-semibold text-white shadow-[0_22px_40px_-24px_rgba(21,37,58,0.95)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#work"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/35 bg-white/8 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_-20px_rgba(0,0,0,0.7)] transition hover:bg-white/12 sm:w-auto"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-5 sm:px-6 sm:pb-16 sm:pt-6 lg:px-10">
        <section className="mt-5 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-4 sm:p-5">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.capabilities.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] px-4 py-3 text-sm font-semibold tracking-[-0.01em] text-[var(--text-main)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="solutions" className="mt-12 space-y-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {copy.solutions.eyebrow}
              </p>
              <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.3rem]">
                {copy.solutions.title}
              </h2>
            </div>
            <a href="#contact" className="text-sm font-semibold text-[var(--accent)]">
              {copy.solutions.cta} <span aria-hidden>→</span>
            </a>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.solutions.items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-5 shadow-[0_18px_40px_-35px_rgba(14,19,28,0.7)] ${
                  copy.solutions.items.length % 3 === 1 && index === copy.solutions.items.length - 1
                    ? "lg:col-start-2"
                    : ""
                }`}
              >
                <h3 className="text-[1.12rem] font-semibold tracking-[-0.012em] text-[var(--text-main)]">{item.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-7 text-[var(--text-muted)]">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="mt-12 space-y-6">
          <header className="space-y-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">{copy.work.eyebrow}</p>
            <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.3rem]">
              {copy.work.title}
            </h2>
          </header>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-8 bg-gradient-to-r from-[var(--bg-main)] to-transparent lg:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-8 bg-gradient-to-l from-[var(--bg-main)] to-transparent lg:block" />

            <div className="flex touch-pan-x snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {copy.work.items.map((work) => (
                <div key={work.title} className="min-w-0 shrink-0 basis-full snap-start lg:basis-[calc(50%-0.625rem)]">
                  <WorkCard work={work} imageAltSuffix={copy.work.imageAltSuffix} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="mt-12 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-6 sm:p-7">
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {copy.industries.eyebrow}
            </p>
            <h2 className="text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.1rem]">
              {copy.industries.title}
            </h2>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.industries.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface-subtle)] px-4 py-3 text-[0.95rem] font-medium text-[var(--text-main)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="packages" className="mt-12 space-y-6">
          <header className="space-y-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {copy.packages.eyebrow}
            </p>
            <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.3rem]">
              {copy.packages.title}
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--text-muted)]">{copy.packages.subtitle}</p>
          </header>

          <div className="grid gap-4 lg:grid-cols-3">
            {copy.packages.items.map((item) => (
              <article
                key={item.name}
                className={`rounded-2xl border p-5 shadow-[0_18px_40px_-34px_rgba(14,19,28,0.72)] ${
                  item.featured
                    ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                    : item.premium
                      ? "border-[var(--line-strong)] bg-[var(--surface-main)]"
                      : "border-[var(--line-soft)] bg-[var(--surface-subtle)]"
                }`}
              >
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.015em] text-[var(--text-main)]">{item.name}</h3>
                <p className="mt-2 text-[1.42rem] font-semibold tracking-[-0.015em] text-[var(--text-main)]">{item.price}</p>
                <p className="mt-2 text-[0.92rem] leading-7 text-[var(--text-muted)]">{item.description}</p>
                <ul className="mt-5 space-y-2 text-[0.9rem] text-[var(--text-muted)]">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 rounded-[1.8rem] border border-[var(--line-soft)] bg-[var(--surface-main)] px-6 py-10 text-center shadow-[0_26px_58px_-42px_rgba(14,19,28,0.85)] sm:px-8"
        >
          <h2 className="mx-auto max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text-main)] sm:text-[2.6rem]">
            {copy.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--text-muted)] sm:text-[1.08rem]">
            {copy.finalCta.subtitle}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={strategyCallHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-[0_18px_36px_-22px_rgba(33,54,89,0.82)]"
            >
              {copy.finalCta.primaryCta}
            </a>
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-main)] px-6 text-sm font-semibold text-[var(--text-main)]"
            >
              {copy.finalCta.secondaryCta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line-soft)] bg-[var(--surface-main)]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 px-4 py-7 text-[0.86rem] text-[var(--text-muted)] sm:px-6 lg:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold tracking-[-0.01em] text-[var(--text-main)]">{copy.brand}</p>
            <p>{copy.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>{copy.footer.locales}</p>
            <a href={`mailto:${copy.contact.email}`} className="font-medium text-[var(--text-main)]">
              {copy.contact.email}
            </a>
          </div>
        </div>
      </footer>

      <MobileMenuOverlay open={isMobileMenuOpen} close={closeMobileMenu} copy={copy} lang={lang} />
      <QuickHelpWidget key={lang} copy={copy.quickHelp} contact={copy.contact} />
    </div>
  );
}
