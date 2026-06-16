import { SERVICE_IMAGES } from "@/data/services";
import { PHOTOS, unsplashPhoto } from "@/lib/placeholders";

export const images = {
  hero: {
    src: SERVICE_IMAGES.weddings,
    alt: "Bride and groom in golden hour light",
  },
  /** Page banner backgrounds — local photos matched to each page */
  pages: {
    about: {
      src: SERVICE_IMAGES.portraits,
      alt: "Portrait photography by Innocent Photos",
    },
    portfolio: {
      src: SERVICE_IMAGES.events,
      alt: "Event and celebration photography",
    },
    pricing: {
      src: SERVICE_IMAGES.family,
      alt: "Family photography session outdoors",
    },
    book: {
      src: SERVICE_IMAGES.weddings,
      alt: "Wedding photography session",
    },
    bookPanel: {
      src: SERVICE_IMAGES.portraits,
      alt: "Portrait session by Innocent Photos",
    },
    contact: {
      src: SERVICE_IMAGES.family,
      alt: "Family photography session",
    },
    shop: {
      src: unsplashPhoto(PHOTOS.hoodie, 2400, 1200),
      alt: "Innocent Photos apparel preview",
    },
  },
  about: {
    portrait: unsplashPhoto(PHOTOS.photographer, 900, 1100),
    story: SERVICE_IMAGES.wildlife,
  },
  cta: unsplashPhoto(PHOTOS.coupleCta, 2400, 1200),
} as const;
