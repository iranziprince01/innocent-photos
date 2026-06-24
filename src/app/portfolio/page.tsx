import type { Metadata } from "next";
import { PortfolioPageSection } from "@/components/portfolio/PortfolioPageSection";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata, portfolioGalleryJsonLd } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "Wedding, portrait, family, and event photography portfolio by Innocent Photos — serving clients in the USA, Canada, and worldwide.",
  path: "/portfolio",
  keywords: ["photography portfolio", "wedding photographer USA", "portrait photographer Canada"],
});

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioGalleryJsonLd()),
        }}
      />
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
