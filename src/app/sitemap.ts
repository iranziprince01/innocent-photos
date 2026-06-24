import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-15");

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BUSINESS.siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
