import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/about", "/pricing", "/book", "/contact", "/shop"];

  return routes.map((route) => ({
    url: `${BUSINESS.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
