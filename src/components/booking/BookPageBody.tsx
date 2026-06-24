"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookingForm } from "@/components/booking/BookingForm";
import { WhatsAppQuickBooking } from "@/components/booking/WhatsAppQuickBooking";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { images } from "@/data/images";
import { IMAGE_SIZES } from "@/lib/images";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { SeoContextLinks } from "@/components/seo/SeoContextLinks";
import { SEO_CONTEXT } from "@/data/seo-routes";

export function BookPageBody() {
  const panel = images.pages.bookPanel;

  return (
    <section className="relative section-padding section-bg-light overflow-hidden">
      <SectionBackground tone="ivory" variant="grid" />
      <div className="container-page relative">
        <div className="relative mb-10 aspect-[5/3] w-full overflow-hidden lg:hidden">
          <Image
            src={panel.src}
            alt={panel.alt}
            fill
            loading="lazy"
            decoding="async"
            className="object-cover"
            sizes={IMAGE_SIZES.bookPanelMobile}
          />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <div className="w-full max-w-lg space-y-8 lg:max-w-none">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <WhatsAppQuickBooking />
            </motion.div>

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.08 }}
            >
              <BookingForm />
            </motion.div>

            <SeoContextLinks
              links={SEO_CONTEXT.book}
              prefix="Booking from the US or Canada?"
              className="border-t border-border/50 pt-6"
            />
          </div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative hidden min-h-[44rem] w-full lg:block xl:min-h-[50rem]"
          >
            <div className="sticky top-28 h-[calc(100vh-8rem)] max-h-[52rem] min-h-[44rem] w-full overflow-hidden">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover object-center"
                sizes={IMAGE_SIZES.bookPanelDesktop}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
