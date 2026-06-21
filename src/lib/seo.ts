import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";
import { BRAND_ASSETS } from "@/data/brand";

const defaultOgImage = BRAND_ASSETS.ogImage;

export const SEO_KEYWORDS = [
  "Innocent Photos",
  "Bahati Innocent",
  "photographer",
  "photography",
  "portraits",
  "wedding photography",
  "family photography",
  "graduation photos",
  "event photography",
  "Tallahassee photographer",
  "Florida photography",
  "USA photographer",
] as const;

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
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
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: BUSINESS.photographer, url: BUSINESS.siteUrl }],
    creator: BUSINESS.photographer,
    publisher: BUSINESS.name,
    category: "photography",
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
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: BRAND_ASSETS.faviconLight, type: "image/png" },
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

export function siteJsonLd() {
  const businessId = `${BUSINESS.siteUrl}/#business`;
  const websiteId = `${BUSINESS.siteUrl}/#website`;
  const photographerId = `${BUSINESS.siteUrl}/#photographer`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: BUSINESS.siteUrl,
        name: BUSINESS.name,
        description: BUSINESS.heroSubheadline,
        inLanguage: "en-US",
        publisher: { "@id": businessId },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: BUSINESS.name,
        image: `${BUSINESS.siteUrl}${BRAND_ASSETS.ogImage}`,
        logo: `${BUSINESS.siteUrl}${BRAND_ASSETS.logoColor}`,
        description: BUSINESS.heroSubheadline,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        url: BUSINESS.siteUrl,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.state,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.country,
        },
        areaServed: [
          { "@type": "City", name: "Tallahassee" },
          { "@type": "State", name: "Florida" },
          { "@type": "Country", name: "United States" },
        ],
        sameAs: [BUSINESS.instagram],
        knowsAbout: [
          "Wedding Photography",
          "Portrait Photography",
          "Family Photography",
          "Event Photography",
          "Graduation Photography",
          "Real Estate Photography",
          "Sports Photography",
        ],
        founder: { "@id": photographerId },
      },
      {
        "@type": "Person",
        "@id": photographerId,
        name: BUSINESS.photographer,
        jobTitle: "Photographer",
        worksFor: { "@id": businessId },
        url: `${BUSINESS.siteUrl}/about`,
        sameAs: [BUSINESS.instagram],
      },
    ],
  };
}

/** @deprecated Use siteJsonLd — kept for compatibility */
export function localBusinessJsonLd() {
  return siteJsonLd();
}
