"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { ease, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  subtitle,
  image,
  className,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-[40vh] items-end overflow-hidden bg-charcoal pt-28",
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
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </>
      )}

      <SectionBackground tone="charcoal" variant="aperture" orbs />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="container-page relative pb-16 pt-8"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-medium text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
