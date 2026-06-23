"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  Heart,
  MapPin,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { whyChooseItems } from "@/data/why-choose";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { fadeUp, stagger } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Camera,
  Clock,
  MapPin,
  Sparkles,
  Shield,
};

/** Card surface + icon accents — white base lifts off warm section bg */
const cardBase =
  "border bg-white shadow-[0_2px_16px_rgba(26,24,20,0.08)] ring-1 ring-black/[0.03]";

const cardThemes = [
  {
    card: `${cardBase} border-border/90`,
    icon: "bg-gold/12 text-gold",
  },
  {
    card: `${cardBase} border-gold/30`,
    icon: "bg-gold-bright/70 text-gold",
  },
  {
    card: `${cardBase} border-border`,
    icon: "bg-gold-light/15 text-gold",
  },
  {
    card: `${cardBase} border-gold-light/35`,
    icon: "bg-gold-bright/55 text-gold",
  },
  {
    card: `${cardBase} border-charcoal/15`,
    icon: "bg-ivory text-gold ring-1 ring-border/80",
  },
  {
    card: `${cardBase} border-gold/25`,
    icon: "bg-gold-bright/65 text-gold",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative section-padding section-bg-warm overflow-hidden">
      <SectionBackground tone="gold" variant="mixed" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Why Innocent Photos"
          title="Trusted by clients across the USA"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="section-stack grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {whyChooseItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Heart;
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-sm border p-8 ${theme.card}`}
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${theme.icon}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-charcoal sm:text-xl">{item.title}</h3>
                <p className="body-text-sm mt-3 text-warm-gray/95">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
