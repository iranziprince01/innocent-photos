"use client";

import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import {
  SectionGraphics,
  type SectionGraphicTone,
  type SectionGraphicVariant,
} from "@/components/motion/SectionGraphics";
import { SECTION_GRAPHIC_OPACITY } from "@/lib/motion";
import { cn } from "@/lib/utils";

type OrbTone = "gold" | "ivory" | "charcoal";

export function SectionBackground({
  className,
  tone = "gold",
  variant = "mixed",
  orbs = true,
}: {
  className?: string;
  tone?: SectionGraphicTone | OrbTone;
  variant?: SectionGraphicVariant;
  orbs?: boolean;
}) {
  const orbTone: OrbTone = tone === "light" ? "gold" : (tone as OrbTone);
  const graphicTone: SectionGraphicTone =
    tone === "charcoal"
      ? "charcoal"
      : tone === "ivory"
        ? "ivory"
        : tone === "gold"
          ? "gold"
          : "light";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: SECTION_GRAPHIC_OPACITY }}
    >
      <SectionGraphics tone={graphicTone} variant={variant} />
      {orbs ? <FloatingOrbs tone={orbTone} /> : null}
    </div>
  );
}
