"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PortfolioCategory } from "@/types";

type Props = {
  categories: PortfolioCategory[];
  active: PortfolioCategory | "All";
  onChange: (category: PortfolioCategory | "All") => void;
};

export function PortfolioFilter({ categories, active, onChange }: Props) {
  const items: (PortfolioCategory | "All")[] = ["All", ...categories];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-2"
    >
      {items.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors",
            active === category
              ? "text-white"
              : "bg-ivory text-warm-gray hover:bg-charcoal/5 hover:text-charcoal"
          )}
        >
          {active === category ? (
            <motion.span
              layoutId="portfolio-filter-pill"
              className="absolute inset-0 rounded-full bg-charcoal"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          ) : null}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </motion.div>
  );
}
