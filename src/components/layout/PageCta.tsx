"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function PageCta({ className }: { className?: string }) {
  return (
    <section
      aria-label="Call to action"
      className={cn("border-t border-border bg-white", className)}
    >
      <div className="container-page flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:py-16 md:text-left">
        <Reveal className="max-w-xl" variant="left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Get started
          </p>
          <h2 className="mt-2 font-display text-2xl text-charcoal sm:text-3xl text-balance">
            Ready to book your session?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-warm-gray">
            Weddings, portraits, families, graduations, and more. Let&apos;s talk about your session.
          </p>
        </Reveal>
        <Reveal variant="right" delay={0.1}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="h-12 shrink-0 rounded-full bg-gold px-8 text-white hover:bg-gold-light"
            >
              <Link href="/book">Book a Session</Link>
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
