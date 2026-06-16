"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import type { PortfolioImage } from "@/types";
import { Button } from "@/components/ui/button";

type Props = {
  images: PortfolioImage[];
  initialIndex: number | null;
  onClose: () => void;
};

export function PortfolioLightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex ?? 0);
  const [zoomed, setZoomed] = useState(false);
  const open = initialIndex !== null;
  const current = images[index];

  useEffect(() => {
    if (initialIndex !== null) setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goPrev = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useKeyboardNavigation({
    enabled: open,
    onPrev: goPrev,
    onNext: goNext,
    onClose,
  });

  if (!open || !current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
          <p className="text-sm text-white/70">
            {index + 1} / {images.length} · {current.category}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 z-10 hidden text-white hover:bg-white/10 sm:left-4 sm:flex"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`relative max-h-full max-w-full overflow-auto transition-transform duration-300 ${
              zoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in"
            }`}
            onClick={() => setZoomed((z) => !z)}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-[80vh] w-auto object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 z-10 hidden text-white hover:bg-white/10 sm:right-4 sm:flex"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
