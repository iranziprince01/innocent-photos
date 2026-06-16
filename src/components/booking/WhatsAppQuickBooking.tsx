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
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="rounded-sm border border-border bg-ivory/60 p-6 sm:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Fastest response
              </p>
              <h2 className="mt-1 font-display text-xl text-charcoal sm:text-2xl">
                Quick WhatsApp Booking
              </h2>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white hover:bg-[#20bd5a] sm:min-w-[200px]"
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
