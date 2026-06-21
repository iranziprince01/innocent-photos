"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";
import { pricingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";

function packagePrice(startingAt: string) {
  return startingAt.replace(/^Starting at /i, "");
}

export function PricingCards() {
  return (
    <section className="relative section-padding section-bg-soft overflow-hidden">
      <SectionBackground tone="gold" variant="rings" />
      <div className="container-page relative">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Packages
          </p>
          <h2 className="section-title mt-3 text-charcoal text-balance">Clear starting rates</h2>
          <p className="body-text mt-5 text-warm-gray">
            Every session is tailored to you. These are starting points, and we&apos;ll shape the
            details together.
          </p>
        </Reveal>

        <StaggerReveal className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {pricingPackages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <motion.article
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={cn(
                  "flex h-full flex-col rounded-sm border bg-white p-8 shadow-sm sm:p-9",
                  pkg.highlighted
                    ? "border-gold/35 ring-1 ring-gold/10"
                    : "border-border/80"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {pkg.highlighted ? (
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        Popular choice
                      </p>
                    ) : null}
                    <h3 className="font-display text-2xl text-charcoal sm:text-[1.75rem]">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/80 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-gray">
                    Starting at
                  </p>
                  <p className="mt-1 font-display text-4xl text-gold">
                    {packagePrice(pkg.startingAt)}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 w-full rounded-full bg-gold text-white hover:bg-gold-light"
                >
                  <Link href="/book">Book Now</Link>
                </Button>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal className="mt-12 text-center text-sm text-warm-gray" delay={0.1}>
          Custom packages available.{" "}
          <Link href="/contact" className="text-gold underline-offset-4 hover:underline">
            Contact us
          </Link>{" "}
          to discuss your project.
        </Reveal>
      </div>
    </section>
  );
}
