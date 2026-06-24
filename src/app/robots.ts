import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/shop"],
      },
    ],
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
    host: BUSINESS.siteUrl.replace(/^https?:\/\//, ""),
  };
}
