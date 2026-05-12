import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/components/services/service-pages";

const siteUrl = "https://aurevio.pro";
const LAST_MODIFIED = new Date("2026-05-12");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePageSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
