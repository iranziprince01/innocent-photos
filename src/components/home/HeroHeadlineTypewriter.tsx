"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { ease } from "@/lib/motion";

const LETTER_MS = 155;
const START_DELAY_MS = 850;
const BETWEEN_WORDS_MS = 520;
const LETTER_EASE = [0.25, 0.46, 0.45, 0.94] as const;

const MOMENTS_TEXT = "Moments.";
const MEMORIES_TEXT = "Memories.";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function TypingCursor({
  visible,
  fadingOut,
  side,
}: {
  visible: boolean;
  fadingOut?: boolean;
  side: "left" | "right";
}) {
  if (!visible && !fadingOut) return null;

  return (
    <motion.span
      initial={{ opacity: 0, scaleY: 0.6 }}
      animate={{
        opacity: fadingOut ? 0 : [0.35, 1, 0.35],
        scaleY: fadingOut ? 0.4 : 1,
      }}
      transition={
        fadingOut
          ? { duration: 0.45, ease }
          : { duration: 1.05, repeat: Infinity, ease: "easeInOut" }
      }
      className={`inline-block h-[0.72em] w-[2px] shrink-0 rounded-full bg-gold align-middle ${
        side === "left" ? "mr-1" : "ml-1"
      }`}
      aria-hidden
    />
  );
}

function TypewriterBox({
  text,
  direction,
  visibleCount,
  isTyping,
  isComplete,
  runKey,
}: {
  text: string;
  direction: "ltr" | "rtl";
  visibleCount: number;
  isTyping: boolean;
  isComplete: boolean;
  runKey: number;
}) {
  const chars = useMemo(() => text.split(""), [text]);
  const hasStarted = visibleCount > 0 || isTyping;

  const visibleIndices = useMemo(() => {
    const order =
      direction === "rtl"
        ? chars.map((_, i) => chars.length - 1 - i)
        : chars.map((_, i) => i);
    return new Set(order.slice(0, visibleCount));
  }, [chars, direction, visibleCount]);

  const cursorBefore =
    isTyping && direction === "rtl" && visibleCount > 0;
  const cursorAfter =
    isTyping && direction === "ltr" && visibleCount > 0;
  const cursorFadeOut = isComplete && !isTyping;

  if (!hasStarted) {
    return (
      <span className="mt-1.5 block min-h-[1.1em] sm:mt-2" aria-hidden />
    );
  }

  return (
    <motion.span
      key={`box-${runKey}-${text}`}
      initial={{ opacity: 0, y: 6, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease }}
      className="hero-headline-box mt-1.5 inline-flex max-w-full items-center leading-none border border-white/95 bg-white/98 shadow-[0_4px_24px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.6)_inset] sm:mt-2"
    >
      {cursorBefore && <TypingCursor visible side="left" />}
      {chars.map((char, index) => {
        if (!visibleIndices.has(index)) return null;

        return (
          <motion.span
            key={`${runKey}-${char}-${index}`}
            initial={{ opacity: 0, y: 5, filter: "blur(2px)", scale: 0.94 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.38, ease: LETTER_EASE }}
            className="inline-block tracking-wide text-gold"
          >
            {char}
          </motion.span>
        );
      })}
      {cursorAfter && <TypingCursor visible side="right" />}
      {cursorFadeOut && (
        <TypingCursor visible fadingOut side="right" />
      )}
    </motion.span>
  );
}

function resetTypewriterState(setters: {
  setMomentsCount: (n: number) => void;
  setMemoriesCount: (n: number) => void;
  setActiveWord: (w: "moments" | "memories" | null) => void;
  setMemoriesDone: (d: boolean) => void;
  setMomentsComplete: (c: boolean) => void;
}) {
  setters.setMomentsCount(0);
  setters.setMemoriesCount(0);
  setters.setActiveWord(null);
  setters.setMemoriesDone(false);
  setters.setMomentsComplete(false);
}

export function HeroHeadlineTypewriter({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [momentsCount, setMomentsCount] = useState(0);
  const [memoriesCount, setMemoriesCount] = useState(0);
  const [activeWord, setActiveWord] = useState<"moments" | "memories" | null>(
    null
  );
  const [momentsComplete, setMomentsComplete] = useState(false);
  const [memoriesDone, setMemoriesDone] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const hasLeftHero = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          hasLeftHero.current = true;
          resetTypewriterState({
            setMomentsCount,
            setMemoriesCount,
            setActiveWord,
            setMemoriesDone,
            setMomentsComplete,
          });
          return;
        }

        if (hasLeftHero.current) {
          hasLeftHero.current = false;
          setRunKey((key) => key + 1);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMomentsCount(MOMENTS_TEXT.length);
      setMemoriesCount(MEMORIES_TEXT.length);
      setMomentsComplete(true);
      setMemoriesDone(true);
      return;
    }

    let cancelled = false;
    resetTypewriterState({
      setMomentsCount,
      setMemoriesCount,
      setActiveWord,
      setMemoriesDone,
      setMomentsComplete,
    });

    async function typeOnce() {
      await sleep(START_DELAY_MS);
      if (cancelled) return;

      setActiveWord("moments");
      for (let i = 1; i <= MOMENTS_TEXT.length; i++) {
        if (cancelled) return;
        setMomentsCount(i);
        await sleep(LETTER_MS);
      }
      setActiveWord(null);
      setMomentsComplete(true);

      await sleep(BETWEEN_WORDS_MS);
      if (cancelled) return;

      setActiveWord("memories");
      for (let i = 1; i <= MEMORIES_TEXT.length; i++) {
        if (cancelled) return;
        setMemoriesCount(i);
        await sleep(LETTER_MS);
      }
      setActiveWord(null);
      setMemoriesDone(true);
    }

    typeOnce();
    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion, runKey]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.9, ease }}
      className="hero-headline mx-auto w-full max-w-[18ch] px-2 font-display font-bold tracking-tight text-white text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-[20ch] md:max-w-[22ch] lg:max-w-none"
    >
      {BUSINESS.heroHeadlineLines.map((line, lineIndex) => {
        const leadVisible =
          lineIndex === 0 || momentsComplete || prefersReducedMotion;

        return (
          <span key={line.accent} className="mb-1.5 block last:mb-0 sm:mb-2">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={leadVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{
                duration: 0.75,
                ease,
              }}
              className="block text-white/95"
            >
              {line.lead.trimEnd()}
            </motion.span>
            <TypewriterBox
              text={line.accent}
              direction={line.direction}
              visibleCount={lineIndex === 0 ? momentsCount : memoriesCount}
              isTyping={
                !prefersReducedMotion &&
                (lineIndex === 0
                  ? activeWord === "moments"
                  : activeWord === "memories")
              }
              isComplete={lineIndex === 1 && memoriesDone}
              runKey={runKey}
            />
          </span>
        );
      })}
    </motion.h1>
  );
}
