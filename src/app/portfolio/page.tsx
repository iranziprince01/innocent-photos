import type { Metadata } from "next";
import { PortfolioPageSection } from "@/components/portfolio/PortfolioPageSection";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "Browse wedding, portrait, family, event, sports, and lifestyle photography by Innocent Photos. Based in Tallahassee, Florida, serving clients across the USA.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="Weddings, portraits, families, events, and more from Innocent Photos."
        image={images.pages.portfolio.src}
        imageAlt={images.pages.portfolio.alt}
      />
      <PortfolioPageSection />
    </>
  );
}
