import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
