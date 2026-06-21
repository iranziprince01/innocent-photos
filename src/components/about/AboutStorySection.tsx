"use client";

import { AboutStoryLead } from "@/components/about/AboutStoryLead";
import { AboutStorySessions } from "@/components/about/AboutStorySessions";
import { SectionBackground } from "@/components/motion/SectionBackground";

export function AboutStorySection() {
  return (
    <section className="relative section-padding section-bg-warm overflow-hidden">
      <SectionBackground tone="gold" variant="mixed" />
      <div className="container-page relative">
        <AboutStoryLead />
        <AboutStorySessions />
      </div>
    </section>
  );
}
