"use client";

import { Reveal } from "@/components/motion/Reveal";

export function AboutStoryLead() {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Story</p>
      <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl text-balance">
        Every session starts with connection
      </h2>
      <p className="mt-6 text-base leading-relaxed text-warm-gray">
        He started with curiosity and built a practice around turning everyday moments into images
        clients want to keep. His approach is warm, guided, and focused on helping people feel at
        ease.
      </p>
    </Reveal>
  );
}
