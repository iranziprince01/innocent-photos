"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const content = (
    <>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-medium leading-tight text-charcoal sm:text-4xl md:text-5xl text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-warm-gray sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </>
  );

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center",
          className
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-medium leading-tight text-charcoal sm:text-4xl md:text-5xl text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-warm-gray sm:text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {content}
    </motion.div>
  );
}
