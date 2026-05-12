import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://aurevio.pro";
const defaultDescription =
  "AurevioPro builds lead-generation websites, SEO landing pages, AI agents, and business automation systems for small and local businesses.";
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "AurevioPro - AI agents, lead-generation websites and automation for growing businesses",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AurevioPro | Lead-Generation Websites & AI Automation",
    template: "%s | AurevioPro",
  },
  description: defaultDescription,
  applicationName: "AurevioPro",
  authors: [{ name: "AurevioPro" }],
  creator: "AurevioPro",
  publisher: "AurevioPro",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "AurevioPro",
    title: "AurevioPro | Lead-Generation Websites & AI Automation",
    description: defaultDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AurevioPro | Lead-Generation Websites & AI Automation",
    description: defaultDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
