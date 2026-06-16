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
    "Meet Bahati Innocent, a photographer based in the USA who focuses on honest, natural images.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="The person behind the lens."
        image={images.pages.about.src}
      />

      <AboutIntro />

      <AboutStorySection />

      <AboutPhilosophy />
    </>
  );
}
