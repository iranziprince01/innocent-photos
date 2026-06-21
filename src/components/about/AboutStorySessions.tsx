"use client";

import { motion } from "framer-motion";
import { SERVICE_IMAGES } from "@/data/services";
import { PUBLIC_IMAGES } from "@/lib/placeholders";
import { FeaturedPhotoLink } from "@/components/photos/FeaturedPhotoLink";
import { fadeUp, stagger } from "@/lib/motion";

/**
 * Masonry column pattern (items fill col 1 → col 2 → col 3):
 * Row 1: tall · short · tall
 * Row 2: short · tall · short
 * Row 3: tall · short · tall
 * Row 4: short (col 1)
 */
const storyPhotos = [
  { src: SERVICE_IMAGES.weddings, alt: "Wedding photography by Innocent Photos" },
  { src: PUBLIC_IMAGES.family2, alt: "Portrait session by Innocent Photos" },
  { src: SERVICE_IMAGES.family, alt: "Family photography by Innocent Photos" },
  { src: SERVICE_IMAGES.events, alt: "Event photography by Innocent Photos" },
  { src: SERVICE_IMAGES.portraits, alt: "Portrait photography by Innocent Photos" },
  { src: SERVICE_IMAGES.realestate, alt: "Real estate photography by Innocent Photos" },
  { src: PUBLIC_IMAGES.portrait7, alt: "Photography by Innocent Photos" },
  { src: PUBLIC_IMAGES.portrait6, alt: "Graduation photography by Innocent Photos" },
  { src: PUBLIC_IMAGES.portrait2, alt: "Photography by Innocent Photos" },
  { src: PUBLIC_IMAGES.portrait9, alt: "Photography by Innocent Photos" },
] as const;

const storyDimensions = [
  { width: 800, height: 1120 }, // col 1 row 1 — tall
  { width: 800, height: 460 }, // col 2 row 1 — short (family2)
  { width: 800, height: 1180 }, // col 3 row 1 — tall
  { width: 800, height: 500 }, // col 1 row 2 — short
  { width: 800, height: 1520 }, // col 2 row 2 — tall (portraits)
  { width: 800, height: 480 }, // col 3 row 2 — short
  { width: 800, height: 1120 }, // col 1 row 3 — tall
  { width: 800, height: 460 }, // col 2 row 3 — short (portrait6)
  { width: 800, height: 1180 }, // col 3 row 3 — tall
  { width: 800, height: 500 }, // col 1 row 4 — short (portrait9)
] as const;

export function AboutStorySessions() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="masonry-grid section-stack"
    >
      {storyPhotos.map((photo, index) => (
        <motion.div key={`${photo.src}-${index}`} variants={fadeUp} className="masonry-item">
          <FeaturedPhotoLink
            href="/book"
            src={photo.src}
            alt={photo.alt}
            width={storyDimensions[index].width}
            height={storyDimensions[index].height}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
