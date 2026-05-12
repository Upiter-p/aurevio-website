import type { Metadata } from "next";
import { Suspense } from "react";
import { HomePage } from "@/components/home/homepage";

const siteUrl = "https://aurevio.pro";
const pageTitle = "Lead-Generation Websites, AI Agents & SEO Pages for Small Businesses";
const pageDescription =
  "AurevioPro helps small and local businesses turn their websites into clearer lead-generation systems with SEO landing pages, AI agents, WhatsApp lead capture, and automation.";
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "AurevioPro - AI agents, lead-generation websites and automation for growing businesses",
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "AurevioPro",
      url: siteUrl,
      email: "aureviodig@gmail.com",
      telephone: "+447388772715",
      description:
        "AurevioPro builds lead-generation websites, SEO landing pages, AI agents, WhatsApp lead capture flows, and business automation systems for small and local businesses.",
      areaServed: ["United Kingdom", "Europe", "United States", "Canada"],
      serviceType: [
        "Lead-generation website design",
        "AI agents for businesses",
        "SEO landing pages",
        "WhatsApp lead capture",
        "Business automation",
        "Local business digital growth",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "AurevioPro",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AurevioPro",
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-image"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </Suspense>
  );
}
