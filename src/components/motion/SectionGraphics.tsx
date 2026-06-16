"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SectionGraphicTone = "gold" | "ivory" | "charcoal" | "light";
export type SectionGraphicVariant =
  | "grid"
  | "rings"
  | "aperture"
  | "lines"
  | "mixed";

const strokeByTone: Record<SectionGraphicTone, string> = {
  gold: "#6f4428",
  ivory: "#a67b52",
  charcoal: "#ffffff",
  light: "#6f4428",
};

const dotByTone: Record<SectionGraphicTone, string> = {
  gold: "rgba(111, 68, 40, 0.18)",
  ivory: "rgba(111, 68, 40, 0.14)",
  charcoal: "rgba(255, 255, 255, 0.16)",
  light: "rgba(111, 68, 40, 0.16)",
};

function DotGrid({ tone }: { tone: SectionGraphicTone }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, ${dotByTone[tone]} 1.25px, transparent 1.25px)`,
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 85% 75% at 50% 45%, black 20%, transparent 100%)",
      }}
    />
  );
}

function RingCluster({
  stroke,
  animate,
  className,
}: {
  stroke: string;
  animate: boolean;
  className?: string;
}) {
  const rings = [
    { size: 220, opacity: 0.3, delay: 0 },
    { size: 320, opacity: 0.2, delay: 0.4 },
    { size: 420, opacity: 0.14, delay: 0.8 },
  ];

  return (
    <div className={cn("absolute", className)}>
      {rings.map((ring) =>
        animate ? (
          <motion.span
            key={ring.size}
            className="absolute rounded-full border"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: stroke,
              opacity: ring.opacity,
              right: 0,
              top: 0,
              translate: "30% -25%",
            }}
            animate={{ rotate: [0, 8, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ring.delay,
            }}
          />
        ) : (
          <span
            key={ring.size}
            className="absolute rounded-full border"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: stroke,
              opacity: ring.opacity,
              right: 0,
              top: 0,
              translate: "30% -25%",
            }}
          />
        )
      )}
    </div>
  );
}

function ViewfinderCorners({ stroke }: { stroke: string }) {
  const cornerClass =
    "absolute h-14 w-14 sm:h-20 sm:w-20";
  const style = { borderColor: stroke, opacity: 0.38 };

  return (
    <>
      <span className={cn(cornerClass, "left-4 top-4 border-l-2 border-t-2 sm:left-8 sm:top-8")} style={style} />
      <span className={cn(cornerClass, "right-4 top-4 border-r-2 border-t-2 sm:right-8 sm:top-8")} style={style} />
      <span className={cn(cornerClass, "bottom-4 left-4 border-b-2 border-l-2 sm:bottom-8 sm:left-8")} style={style} />
      <span
        className={cn(cornerClass, "bottom-4 right-4 border-b-2 border-r-2 sm:bottom-8 sm:right-8")}
        style={style}
      />
    </>
  );
}

function ApertureMarks({
  stroke,
  animate,
}: {
  stroke: string;
  animate: boolean;
}) {
  const marks = [
    { className: "left-[8%] top-[18%] h-16 w-16", rotate: 0 },
    { className: "right-[10%] top-[28%] h-12 w-12", rotate: 45 },
    { className: "bottom-[16%] left-[14%] h-10 w-10", rotate: -20 },
    { className: "bottom-[22%] right-[12%] h-14 w-14", rotate: 12 },
  ];

  return (
    <>
      {marks.map((mark, index) =>
        animate ? (
          <motion.span
            key={index}
            className={cn("absolute rounded-full border", mark.className)}
            style={{ borderColor: stroke, opacity: 0.2 }}
            animate={{ rotate: [mark.rotate, mark.rotate + 12, mark.rotate], scale: [1, 1.06, 1] }}
            transition={{ duration: 10 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <span
            key={index}
            className={cn("absolute rounded-full border", mark.className)}
            style={{ borderColor: stroke, opacity: 0.2, rotate: `${mark.rotate}deg` }}
          />
        )
      )}
      <svg
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] sm:h-72 sm:w-72"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="24"
            stroke={stroke}
            strokeWidth="1"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="54" stroke={stroke} strokeWidth="1.25" />
        <circle cx="100" cy="100" r="28" stroke={stroke} strokeWidth="1" opacity="0.7" />
      </svg>
    </>
  );
}

function DiagonalLines({ stroke }: { stroke: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.16]"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line x1="0" y1="120" x2="1200" y2="320" stroke={stroke} strokeWidth="1" />
      <line x1="0" y1="360" x2="1200" y2="560" stroke={stroke} strokeWidth="1" />
      <line x1="0" y1="600" x2="1200" y2="760" stroke={stroke} strokeWidth="1" />
      <line x1="180" y1="0" x2="420" y2="800" stroke={stroke} strokeWidth="1" opacity="0.55" />
      <line x1="760" y1="0" x2="980" y2="800" stroke={stroke} strokeWidth="1" opacity="0.55" />
    </svg>
  );
}

function FocusCrosses({ stroke, animate }: { stroke: string; animate: boolean }) {
  const crosses = [
    { className: "left-[12%] top-[24%]" },
    { className: "right-[16%] top-[18%]" },
    { className: "left-[20%] bottom-[20%]" },
    { className: "right-[14%] bottom-[24%]" },
  ];

  return (
    <>
      {crosses.map((cross, index) => (
        <span key={index} className={cn("absolute h-8 w-8", cross.className)}>
          {animate ? (
            <motion.span
              className="absolute inset-0"
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.08, 1] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              <span
                className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                style={{ backgroundColor: stroke }}
              />
              <span
                className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
                style={{ backgroundColor: stroke }}
              />
            </motion.span>
          ) : (
            <span className="absolute inset-0 opacity-40">
              <span
                className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                style={{ backgroundColor: stroke }}
              />
              <span
                className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
                style={{ backgroundColor: stroke }}
              />
            </span>
          )}
        </span>
      ))}
    </>
  );
}

export function SectionGraphics({
  className,
  tone = "gold",
  variant = "mixed",
}: {
  className?: string;
  tone?: SectionGraphicTone;
  variant?: SectionGraphicVariant;
}) {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  const stroke = strokeByTone[tone];

  const showGrid = variant === "grid" || variant === "mixed" || variant === "lines";
  const showRings = variant === "rings" || variant === "mixed";
  const showAperture = variant === "aperture" || variant === "mixed";
  const showLines = variant === "lines" || variant === "mixed";
  const showCorners = variant === "aperture" || variant === "grid";
  const showCrosses = variant === "mixed" || variant === "grid";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {showGrid ? <DotGrid tone={tone} /> : null}
      {showLines ? <DiagonalLines stroke={stroke} /> : null}
      {showRings ? (
        <RingCluster stroke={stroke} animate={animate} className="inset-0" />
      ) : null}
      {showRings ? (
        <RingCluster
          stroke={stroke}
          animate={animate}
          className="inset-0 scale-x-[-1] scale-y-[-1]"
        />
      ) : null}
      {showAperture ? <ApertureMarks stroke={stroke} animate={animate} /> : null}
      {showCorners ? <ViewfinderCorners stroke={stroke} /> : null}
      {showCrosses ? <FocusCrosses stroke={stroke} animate={animate} /> : null}
    </div>
  );
}
