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
        className="section-title font-medium text-charcoal text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="body-text mt-5 text-warm-gray">
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
        <h2 className="section-title font-medium text-charcoal text-balance">{title}</h2>
        {description && <p className="body-text mt-5 text-warm-gray">{description}</p>}
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
