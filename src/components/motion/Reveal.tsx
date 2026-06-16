"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  defaultViewport,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  popIn,
  scaleIn,
  stagger,
  staggerFast,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const motionVariants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  in: fadeIn,
  scale: scaleIn,
  pop: popIn,
} as const satisfies Record<string, Variants>;

type RevealVariant = keyof typeof motionVariants;

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={motionVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
  fast = false,
}: {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fast ? staggerFast : stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={motionVariants[variant]} className={cn(className)}>
      {children}
    </motion.div>
  );
}
