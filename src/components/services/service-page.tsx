import Link from "next/link";
import { getHomeTranslations } from "@/components/home/translations";
import { QuickHelpWidget } from "@/components/home/quick-help-widget";
import { ServiceAssistantButton } from "@/components/services/service-assistant-button";
import {
  contactEmail,
  getLocalizedServiceContent,
  serviceChromeTranslations,
  siteUrl,
  type ServiceLocale,
  type ServicePage,
  whatsappNumber,
} from "@/components/services/service-pages";

type ServicePageViewProps = {
  page: ServicePage;
  locale: ServiceLocale;
};

export function ServicePageView({ page, locale }: ServicePageViewProps) {
  const pageUrl = `${siteUrl}/services/${page.slug}`;
  const hero = page.hero?.copy?.[locale] ?? page.hero?.copy?.en;
  const heroImage = page.hero?.image;
  const content = getLocalizedServiceContent(page, locale);
  const { copy: homeCopy } = getHomeTranslations(locale);
  const chrome = serviceChromeTranslations[locale] ?? serviceChromeTranslations.en;
  const heroEyebrow = hero?.eyebrow ?? page.eyebrow ?? page.title;
  const heroTitle = hero?.h1 ?? page.h1 ?? page.title;
  const heroIntro = hero?.intro ?? page.intro ?? page.description;
  const heroPrimaryLabel = hero?.primaryLabel ?? content.cta.primaryLabel;
  const heroSecondaryLabel = hero?.secondaryLabel ?? content.cta.secondaryLabel;
  const homeHref = `/?lang=${locale}`;
  const contactHref = `${homeHref}#contact`;
  const serviceHref = `${homeHref}#services`;
  const workHref = `${homeHref}#work`;
  const pricingHref = `${homeHref}#pricing`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi AurevioPro, I would like to discuss ${page.title}.`
  )}`;
  const mailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(`AurevioPro enquiry: ${page.title}`)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.title,
        description: page.description,
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "AurevioPro",
          url: siteUrl,
        },
        areaServed: ["United Kingdom", "Europe", "United States", "Canada"],
        serviceType: page.title,
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[var(--bg-main)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-[78svh] overflow-hidden border-b border-[var(--line-soft)] bg-[#0d1117]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,130,190,0.34),transparent_32%),radial-gradient(circle_at_78%_30%,rgba(47,77,120,0.28),transparent_34%),linear-gradient(118deg,#06080d_0%,#0d1420_42%,#101827_70%,#05070b_100%)]" />
        {heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url(${heroImage})`,
              filter: "brightness(1.18) contrast(1.06) saturate(1.08)",
            }}
            aria-hidden
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(5,8,13,0.76)_0%,rgba(5,8,13,0.62)_34%,rgba(5,8,13,0.28)_58%,rgba(5,8,13,0.10)_78%,rgba(5,8,13,0.18)_100%)]" aria-hidden />
        <div className="absolute left-[7%] top-[22%] h-44 w-44 rounded-full bg-[#3f659b]/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-[#1e3554]/35 blur-3xl" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),transparent)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(0deg,rgba(0,0,0,0.18),transparent)]" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1240px] flex-col px-4 py-6 sm:px-6 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <Link href={homeHref} className="text-base font-semibold tracking-[-0.01em] text-white">
              AurevioPro
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <nav className="flex items-center gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/72">
                <Link href={serviceHref} className="hover:text-white">
                  {chrome.nav.services}
                </Link>
                <Link href={workHref} className="hover:text-white">
                  {chrome.nav.work}
                </Link>
                <Link href={pricingHref} className="hover:text-white">
                  {chrome.nav.pricing}
                </Link>
                <Link href={contactHref} className="hover:text-white">
                  {chrome.nav.contact}
                </Link>
              </nav>
              <LanguageSwitcher pageSlug={page.slug} locale={locale} ariaLabel={chrome.nav.languageSwitcherAriaLabel} />
              <Link
                href={contactHref}
                className="inline-flex min-h-10 items-center justify-center rounded-md bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_16px_30px_-20px_rgba(28,47,74,0.92)]"
              >
                {chrome.nav.bookCall}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher pageSlug={page.slug} locale={locale} ariaLabel={chrome.nav.languageSwitcherAriaLabel} compact />
              <Link
                href={contactHref}
                className="inline-flex min-h-9 items-center justify-center rounded-md bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white"
              >
                {chrome.nav.contact}
              </Link>
            </div>
          </header>

          <nav className="mt-4 grid grid-cols-4 gap-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/72 md:hidden">
            <Link href={serviceHref} className="rounded-md border border-white/15 bg-black/20 px-2 py-2 hover:text-white">
              {chrome.nav.services}
            </Link>
            <Link href={workHref} className="rounded-md border border-white/15 bg-black/20 px-2 py-2 hover:text-white">
              {chrome.nav.work}
            </Link>
            <Link href={pricingHref} className="rounded-md border border-white/15 bg-black/20 px-2 py-2 hover:text-white">
              {chrome.nav.pricing}
            </Link>
            <Link href={contactHref} className="rounded-md border border-white/15 bg-black/20 px-2 py-2 hover:text-white">
              {chrome.nav.contact}
            </Link>
          </nav>

          <div className="flex flex-1 items-center py-14 sm:py-16 lg:py-20">
            <div className="max-w-3xl space-y-7">
              <p className="inline-flex items-center rounded-full bg-white/12 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/90">
                {heroEyebrow}
              </p>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[4.2rem]">
                  {heroTitle}
                </h1>
                <p className="max-w-2xl text-[1.02rem] leading-8 text-white/82 sm:text-[1.14rem]">{heroIntro}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ServiceAssistantButton
                  fallbackHref={contactHref}
                  locale={locale}
                  serviceSlug={page.slug}
                  serviceTitle={heroTitle}
                  sourcePage={`/services/${page.slug}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#3c659e_0%,#2a4770_100%)] px-6 text-sm font-semibold text-white shadow-[0_22px_40px_-24px_rgba(21,37,58,0.95)]"
                >
                  {heroPrimaryLabel}
                </ServiceAssistantButton>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 bg-white/8 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_-20px_rgba(0,0,0,0.7)]"
                >
                  {heroSecondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <section className="grid gap-4 lg:grid-cols-3">
          <InfoPanel title={chrome.sections.forWho} items={content.forWho} />
          <InfoPanel title={chrome.sections.delivers} items={content.delivers} />
          <InfoPanel title={chrome.sections.benefits} items={content.benefits} />
        </section>

        <section className="mt-12 space-y-6">
          <header className="space-y-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {chrome.sections.processEyebrow}
            </p>
            <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.3rem]">
              {chrome.sections.processTitle}
            </h2>
          </header>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-5 shadow-[0_16px_36px_-30px_rgba(14,19,28,0.75)]"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {chrome.sections.step} {index + 1}
                </p>
                <h3 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.012em] text-[var(--text-main)]">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-[var(--text-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <header className="space-y-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {chrome.sections.faqEyebrow}
            </p>
            <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--text-main)] sm:text-[2.3rem]">
              {chrome.sections.faqTitle}
            </h2>
          </header>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-5 shadow-[0_16px_36px_-30px_rgba(14,19,28,0.75)]"
              >
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.012em] text-[var(--text-main)]">{faq.question}</h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-[var(--text-muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[1.8rem] border border-[var(--line-soft)] bg-[var(--surface-main)] px-6 py-10 text-center shadow-[0_26px_58px_-42px_rgba(14,19,28,0.85)] sm:px-8">
          <h2 className="mx-auto max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text-main)] sm:text-[2.6rem]">
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--text-muted)] sm:text-[1.08rem]">
            {content.cta.text}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ServiceAssistantButton
              fallbackHref={contactHref}
              locale={locale}
              serviceSlug={page.slug}
              serviceTitle={heroTitle}
              sourcePage={`/services/${page.slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-[0_18px_36px_-22px_rgba(33,54,89,0.82)]"
            >
              {content.cta.primaryLabel}
            </ServiceAssistantButton>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-main)] px-6 text-sm font-semibold text-[var(--text-main)]"
            >
              {content.cta.secondaryLabel}
            </a>
            <a
              href={mailHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-main)] px-6 text-sm font-semibold text-[var(--text-main)]"
            >
              {content.cta.emailLabel}
            </a>
          </div>
        </section>
      </div>
      <QuickHelpWidget copy={homeCopy.quickHelp} contact={homeCopy.contact} locale={locale} />
    </main>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-main)] p-5 shadow-[0_18px_40px_-35px_rgba(14,19,28,0.7)]">
      <h2 className="text-[1.25rem] font-semibold tracking-[-0.015em] text-[var(--text-main)]">{title}</h2>
      <ul className="mt-4 space-y-3 text-[0.94rem] leading-7 text-[var(--text-muted)]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LanguageSwitcher({
  pageSlug,
  locale,
  ariaLabel,
  compact = false,
}: {
  pageSlug: string;
  locale: ServiceLocale;
  ariaLabel: string;
  compact?: boolean;
}) {
  const locales: ServiceLocale[] = ["en", "ua", "ru"];

  return (
    <div className="inline-flex items-center rounded-md border border-white/20 bg-black/35 p-0.5 backdrop-blur" aria-label={ariaLabel} role="group">
      {locales.map((nextLocale) => (
        <Link
          key={nextLocale}
          href={`/services/${pageSlug}?lang=${nextLocale}`}
          aria-current={locale === nextLocale ? "page" : undefined}
          className={`inline-flex min-h-7.5 min-w-9 items-center justify-center rounded-sm px-2 text-[0.67rem] font-semibold uppercase tracking-[0.12em] transition ${
            locale === nextLocale ? "bg-[var(--accent)] text-white" : "text-white/72 hover:bg-white/10 hover:text-white"
          } ${compact ? "min-w-8 px-1.5" : ""}`}
        >
          {nextLocale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
