"use client";

import { PortfolioMasonry } from "@/components/portfolio/PortfolioMasonry";
import { SectionBackground } from "@/components/motion/SectionBackground";

export function PortfolioPageSection() {
  return (
    <section className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="ivory" variant="aperture" />
      <div className="container-page relative">
        <PortfolioMasonry />
      </div>
    </section>
  );
}
