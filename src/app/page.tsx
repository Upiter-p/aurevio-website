import type { Metadata } from "next";
import { Suspense } from "react";
import { HomePage } from "@/components/home/homepage";

export const metadata: Metadata = {
  title: "AurevioPro | Premium Digital Growth Agency for Service Businesses",
  description:
    "AurevioPro builds premium websites, landing pages, SEO systems, paid ad funnels, and smart lead-handling automation for service businesses across Europe and North America.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  );
}
