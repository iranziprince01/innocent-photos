import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";
import { BRAND_ASSETS } from "@/data/brand";

const defaultOgImage = BRAND_ASSETS.ogImage;

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
}: PageMeta): Metadata {
  const url = `${BUSINESS.siteUrl}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${BUSINESS.name} | ${BUSINESS.tagline}`
      : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BUSINESS.siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        {
          url: BRAND_ASSETS.faviconLight,
          type: "image/png",
        },
        {
          url: BRAND_ASSETS.faviconLight,
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: BRAND_ASSETS.favicon,
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      shortcut: BRAND_ASSETS.faviconLight,
      apple: BRAND_ASSETS.faviconLight,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS.name,
    image: `${BUSINESS.siteUrl}${BRAND_ASSETS.ogImage}`,
    description: BUSINESS.heroSubheadline,
    telephone: "+1-850-300-1264",
    email: BUSINESS.email,
    url: BUSINESS.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "US",
    },
    areaServed: ["USA"],
    sameAs: [BUSINESS.instagram],
    founder: {
      "@type": "Person",
      name: BUSINESS.photographer,
    },
  };
}
