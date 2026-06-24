"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export function WhatsAppQuickBooking() {
  return (
    <Reveal variant="scale">
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="relative overflow-hidden rounded-sm border border-border/80 bg-white p-6 shadow-[0_2px_20px_rgba(26,24,20,0.06)] ring-1 ring-black/[0.03] sm:p-8"
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-gold" aria-hidden />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4 pl-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Fastest response
              </p>
              <h2 className="mt-1.5 font-display text-xl text-charcoal sm:text-2xl">
                Quick WhatsApp booking
              </h2>
              <p className="mt-2 text-sm text-warm-gray">
                Message Innocent directly to check availability.
              </p>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="h-11 shrink-0 rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white hover:bg-[#20bd5a] sm:min-w-[188px]"
          >
            <a href={LINKS.whatsappBook} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    </Reveal>
  );
}
