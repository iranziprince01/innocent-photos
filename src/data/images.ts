import { SERVICE_IMAGES } from "@/data/services";
import { PUBLIC_IMAGES } from "@/lib/placeholders";

export const images = {
  hero: {
    src: SERVICE_IMAGES.weddings,
    alt: "Wedding photographer USA — bride and groom in golden hour light",
  },
  /** Page banner backgrounds — local photos matched to each page */
  pages: {
    about: {
      src: PUBLIC_IMAGES.bannerAbout,
      alt: "About Innocent Photos",
    },
    portfolio: {
      src: PUBLIC_IMAGES.bannerPortfolio,
      alt: "Portfolio — wedding and portrait photography USA and Canada",
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
      src: PUBLIC_IMAGES.bannerContact,
      alt: "Contact Innocent Photos",
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
