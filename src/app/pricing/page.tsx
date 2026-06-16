import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Premium photography packages for portraits, families, events, and weddings. Starting rates by Innocent Photos.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Starting rates for portraits, families, events, and weddings."
        image={images.pages.pricing.src}
      />
      <PricingCards />
    </>
  );
}
