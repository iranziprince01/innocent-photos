/** Responsive `sizes` hints — match layout breakpoints for faster loads */
export const IMAGE_SIZES = {
  hero: "100vw",
  pageHero: "100vw",
  masonry: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  serviceCard: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  portrait: "(max-width: 1024px) 100vw, 50vw",
  bookPanelMobile: "100vw",
  bookPanelDesktop: "(max-width: 1024px) 0vw, 45vw",
  testimonial: "(max-width: 768px) 30vw, 140px",
  shopCard: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  lightbox: "(max-width: 1280px) 95vw, 1200px",
} as const;

export function clampDimension(value: number, max = 1200) {
  return Math.min(Math.max(value, 1), max);
}

export function isLocalImage(src: string) {
  return src.startsWith("/");
}
