"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageEnter } from "@/lib/motion";

export function PageEnter({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={pageEnter}
      initial="hidden"
      animate="visible"
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
