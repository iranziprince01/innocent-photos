"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ServicePhotoCardProps = {
  title: string;
  image: string;
  href?: string;
  showTitle?: boolean;
};

export function ServicePhotoCard({
  title,
  image,
  href = "/book",
  showTitle = true,
}: ServicePhotoCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        className="group block overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {showTitle ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl text-white">{title}</h3>
              </div>
            </>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
