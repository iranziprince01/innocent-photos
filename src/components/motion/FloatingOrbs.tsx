"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OrbTone = "gold" | "ivory" | "charcoal";

const toneClasses: Record<OrbTone, string> = {
  gold: "bg-gold/20",
  ivory: "bg-gold-bright/30",
  charcoal: "bg-white/10",
};

export function FloatingOrbs({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: OrbTone;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  const orbClass = toneClasses[tone];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.span
        className={cn("absolute -left-8 top-1/4 h-40 w-40 rounded-full blur-3xl", orbClass)}
        animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className={cn("absolute right-0 top-10 h-52 w-52 rounded-full blur-3xl", orbClass)}
        animate={{ x: [0, -22, 0], y: [0, 16, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.span
        className={cn("absolute bottom-8 left-1/3 h-32 w-32 rounded-full blur-3xl", orbClass)}
        animate={{ x: [0, 12, 0], y: [0, 10, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}
