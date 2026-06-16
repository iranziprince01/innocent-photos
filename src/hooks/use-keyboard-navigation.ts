"use client";

import { useEffect } from "react";

export function useKeyboardNavigation({
  onPrev,
  onNext,
  onClose,
  enabled = true,
}: {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
  enabled?: boolean;
}) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onPrev, onNext, onClose]);
}
