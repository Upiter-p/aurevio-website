import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/components/services/service-pages";

const siteUrl = "https://aurevio.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePageSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
