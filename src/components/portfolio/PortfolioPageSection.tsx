"use client";

import { PortfolioMasonry } from "@/components/portfolio/PortfolioMasonry";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { SeoContextLinks } from "@/components/seo/SeoContextLinks";
import { SEO_CONTEXT } from "@/data/seo-routes";

export function PortfolioPageSection() {
  return (
    <section className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="ivory" variant="aperture" />
      <div className="container-page relative">
        <SeoContextLinks
          links={SEO_CONTEXT.portfolio}
          prefix="Explore services:"
          className="mb-8"
        />
        <PortfolioMasonry />
      </div>
    </section>
  );
}
