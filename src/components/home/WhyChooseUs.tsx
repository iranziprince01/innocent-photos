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

/** Subtle card tints — all within brand palette */
const cardThemes = [
  {
    card: "border-border/80 bg-ivory",
    icon: "bg-gold/[0.08] text-gold",
  },
  {
    card: "border-gold-bright/50 bg-gold-bright/25",
    icon: "bg-white text-gold",
  },
  {
    card: "border-border bg-white shadow-sm",
    icon: "bg-gold-light/10 text-gold-light",
  },
  {
    card: "border-gold-light/25 bg-gold-light/[0.07]",
    icon: "bg-white text-gold",
  },
  {
    card: "border-charcoal/10 bg-charcoal/[0.03]",
    icon: "bg-ivory text-gold-light",
  },
  {
    card: "border-gold/20 bg-ivory",
    icon: "bg-gold-bright/35 text-gold",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
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
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
                <h3 className="font-display text-xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
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
