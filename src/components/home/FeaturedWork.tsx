"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredImages } from "@/data/portfolio";
import { FeaturedPhotoLink } from "@/components/photos/FeaturedPhotoLink";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { Reveal } from "@/components/motion/Reveal";
import { fadeUp, stagger } from "@/lib/motion";

export function FeaturedWork() {
  return (
    <section id="featured" className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="light" variant="lines" />
      <div className="container-page relative">
        <SectionHeading eyebrow="Featured Work" title="Moments worth remembering" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="masonry-grid section-stack"
        >
          {featuredImages.map((image) => (
            <motion.div key={image.id} variants={fadeUp} className="masonry-item">
              <FeaturedPhotoLink
                href="/portfolio"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="section-stack text-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-gold bg-gold/10 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-gold shadow-sm transition-colors hover:bg-gold hover:text-white"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
