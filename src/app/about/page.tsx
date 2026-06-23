import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/seo";
import { images } from "@/data/images";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Meet Bahati Innocent, photographer and founder of Innocent Photos in Tallahassee, Florida. Honest, natural wedding, portrait, and family photography.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Photographer, storyteller, and founder of Innocent Photos."
        image={images.pages.about.src}
        imageAlt={images.pages.about.alt}
      />

      <AboutIntro />

      <AboutStorySection />

      <AboutPhilosophy />
    </>
  );
}
