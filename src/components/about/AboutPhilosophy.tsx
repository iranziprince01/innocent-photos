"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

const philosophyPillars = [
  {
    title: "Light",
    text: "He works with natural light and clean tones so every image feels warm, clear, and true to the day.",
  },
  {
    title: "People",
    text: "He keeps sessions calm and guided, making room for real expressions instead of stiff, posed moments.",
  },
  {
    title: "Memory",
    text: "He focuses on the small details and honest emotions clients want to look back on for years to come.",
  },
] as const;

export function AboutPhilosophy() {
  return (
    <section className="relative section-padding section-bg-soft overflow-hidden">
      <SectionBackground tone="gold" variant="rings" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Philosophy
          </p>
          <h2 className="section-title mt-4 text-charcoal text-balance">Built on what lasts</h2>
          <p className="body-text mt-5 text-warm-gray">
            For Innocent, good photography is less about perfection and more about presence. These
            are the principles behind every session.
          </p>
        </Reveal>

        <StaggerReveal className="section-stack grid gap-8 md:grid-cols-3">
          {philosophyPillars.map((pillar) => (
            <StaggerItem key={pillar.title} className="list-none">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-sm border border-border/70 bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-xl text-charcoal">{pillar.title}</h3>
                <p className="body-text-sm mt-3 text-warm-gray">{pillar.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
