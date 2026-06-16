import type { Metadata } from "next";
import { PortfolioPageSection } from "@/components/portfolio/PortfolioPageSection";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore wedding, portrait, family, event, and lifestyle photography by Innocent Photos in the USA.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="Weddings, portraits, families, and events from across the USA."
        image={images.pages.portfolio.src}
      />
      <PortfolioPageSection />
    </>
  );
}
