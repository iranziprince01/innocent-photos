"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { IMAGE_SIZES } from "@/lib/images";
import { ease, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  className,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-[44vh] items-end overflow-hidden bg-charcoal pt-28 sm:min-h-[48vh]",
        className
      )}
    >
      {image && (
        <>
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease }}
          >
            <Image
              src={image}
              alt={imageAlt ?? `${title} — Innocent Photos`}
              fill
              priority
              fetchPriority="high"
              decoding="async"
              className="object-cover opacity-50"
              sizes={IMAGE_SIZES.pageHero}
            />
          </motion.div>
          <div className="absolute inset-0 bg-charcoal/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/55" />
        </>
      )}

      <SectionBackground tone="charcoal" variant="aperture" orbs />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="container-page relative pb-20 pt-10 md:pb-24"
      >
        <motion.h1 variants={fadeUp} className="page-title font-medium text-white">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="body-text mt-5 max-w-xl text-white/90 sm:max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
