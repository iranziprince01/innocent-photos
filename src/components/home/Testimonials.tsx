"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { fadeUp, stagger } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="relative section-padding overflow-hidden bg-ivory">
      <SectionBackground tone="gold" variant="grid" />
      <div className="container-page relative">
        <SectionHeading eyebrow="Testimonials" title="Messages from our clients" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2"
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
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 30vw, 15vw"
                />
              </div>
              <div className="flex w-[70%] flex-col justify-center p-5 sm:p-6">
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-charcoal">
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
