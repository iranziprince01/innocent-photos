"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  PORTFOLIO_CATEGORIES,
  portfolioImages,
} from "@/data/portfolio";
import { PortfolioFilter } from "./PortfolioFilter";
import { PortfolioLightbox } from "./PortfolioLightbox";
import type { PortfolioCategory } from "@/types";
import { IMAGE_SIZES } from "@/lib/images";
import { fadeUp, stagger } from "@/lib/motion";

export function PortfolioMasonry() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioImages
        : portfolioImages.filter((img) => img.category === active),
    [active]
  );

  return (
    <>
      <PortfolioFilter
        categories={PORTFOLIO_CATEGORIES}
        active={active}
        onChange={setActive}
      />

      <motion.div
        key={active}
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="masonry-grid mt-12"
      >
        {filtered.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(index)}
            aria-label={`View ${image.alt}`}
            className="masonry-item group relative w-full overflow-hidden rounded-sm text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={Math.min(image.width, 1200)}
              height={Math.min(image.height, 1600)}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes={IMAGE_SIZES.masonry}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
            <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.15em] text-white opacity-0 transition-opacity group-hover:opacity-100">
              {image.category}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <PortfolioLightbox
        images={filtered}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}
