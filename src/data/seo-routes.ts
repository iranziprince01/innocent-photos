import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
};

/** All indexable public routes — single source for sitemap generation */
export const INDEXABLE_ROUTES: SitemapEntry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.75, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/photography/us", priority: 0.85, changeFrequency: "monthly" },
  { path: "/photography/canada", priority: 0.85, changeFrequency: "monthly" },
  { path: "/wedding-photographer-us", priority: 0.85, changeFrequency: "monthly" },
  { path: "/portrait-photographer-canada", priority: 0.85, changeFrequency: "monthly" },
  { path: "/event-photographer-us-canada", priority: 0.85, changeFrequency: "monthly" },
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.65,
    changeFrequency: "monthly" as const,
  })),
];

export const SEO_FOOTER_LINKS = [
  { href: "/photography/us", label: "Photography — USA" },
  { href: "/photography/canada", label: "Photography — Canada" },
  { href: "/wedding-photographer-us", label: "Wedding Photographer USA" },
  { href: "/portrait-photographer-canada", label: "Portrait Photographer Canada" },
  { href: "/event-photographer-us-canada", label: "Event Photographer US & Canada" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;
