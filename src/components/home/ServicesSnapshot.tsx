"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServicePhotoCard } from "@/components/services/ServicePhotoCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackground } from "@/components/motion/SectionBackground";
import { fadeUp, stagger } from "@/lib/motion";

export function ServicesSnapshot() {
  return (
    <section className="relative section-padding overflow-hidden bg-ivory">
      <SectionBackground tone="ivory" variant="aperture" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Services"
          title="Photography for every chapter"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUp}>
              <ServicePhotoCard title={service.title} image={service.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
