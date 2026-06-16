import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
  };
}
