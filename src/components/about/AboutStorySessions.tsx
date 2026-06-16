"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { FeaturedPhotoLink } from "@/components/photos/FeaturedPhotoLink";
import { fadeUp, stagger } from "@/lib/motion";

/** Six session photos — same masonry column flow as Featured Work */
const storySessions = services.slice(0, 6);

/**
 * Masonry column pattern (items fill col 1 → col 2 → col 3):
 * Top row: tall · short · tall — bottom: short · tall · short
 */
const storyDimensions = [
  { width: 800, height: 1120 }, // col 1 top — tall
  { width: 800, height: 460 }, // col 2 top — short
  { width: 800, height: 1180 }, // col 3 top — tall
  { width: 800, height: 500 }, // col 1 bottom — short
  { width: 800, height: 1520 }, // col 2 bottom — tall, fills center gap
  { width: 800, height: 480 }, // col 3 bottom — short
] as const;

export function AboutStorySessions() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="masonry-grid mt-14"
    >
      {storySessions.map((service, index) => (
        <motion.div key={service.id} variants={fadeUp} className="masonry-item">
          <FeaturedPhotoLink
            href="/book"
            src={service.image}
            alt={service.title}
            width={storyDimensions[index].width}
            height={storyDimensions[index].height}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
