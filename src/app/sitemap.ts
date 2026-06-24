import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";
import { INDEXABLE_ROUTES } from "@/data/seo-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BUSINESS.siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
