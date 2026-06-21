import { SERVICE_IMAGES } from "@/data/services";
import { PUBLIC_IMAGES } from "@/lib/placeholders";

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
      src: PUBLIC_IMAGES.shopBanner,
      alt: "Innocent Photos merchandise and apparel",
    },
  },
  about: {
    portrait: PUBLIC_IMAGES.bio,
    story: SERVICE_IMAGES.wildlife,
  },
  cta: SERVICE_IMAGES.weddings,
} as const;
