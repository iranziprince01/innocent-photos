"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_SIZES } from "@/lib/images";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { fadeUp, stagger } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="gold" variant="grid" />
      <div className="container-page relative">
        <SectionHeading eyebrow="Testimonials" title="Messages from our clients" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="section-stack grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="flex min-h-[200px] overflow-hidden rounded-sm border border-border/80 bg-white shadow-sm"
            >
              <div className="relative w-[30%] shrink-0">
                <Image
                  src={item.image}
                  alt={`${item.service} photography — ${item.name}`}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes={IMAGE_SIZES.testimonial}
                />
              </div>
              <div className="flex w-[70%] flex-col justify-center p-5 sm:p-6">
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="body-text-sm text-charcoal sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-3 font-display text-lg text-charcoal">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-warm-gray">
                  {item.service}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
