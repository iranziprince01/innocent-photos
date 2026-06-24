import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";
import { BRAND_ASSETS } from "@/data/brand";
import { portfolioImages } from "@/data/portfolio";
import type { FaqItem } from "@/data/faq";

const defaultOgImage = BRAND_ASSETS.ogImage;

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

export const SEO_KEYWORDS = [
  "Innocent Photos",
  "Bahati Innocent",
  "photographer",
  "photography",
  "wedding photography",
  "wedding photographer USA",
  "wedding photographer Canada",
  "portrait photographer USA",
  "portrait photographer Canada",
  "event photographer USA",
  "corporate event photography Canada",
  "destination wedding photographer",
  "destination photographer Africa",
  "international photographer",
  "photographer for hire USA Canada",
  "travel photographer worldwide",
  "affordable wedding photographer USA",
  "business headshots photographer USA",
  "conference photographer North America",
  "Kigali photographer",
  "Tallahassee photographer",
  "Florida photography",
] as const;

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  skipCanonical?: boolean;
  keywords?: string[];
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailingSlash =
    normalized.length > 1 && normalized.endsWith("/")
      ? normalized.slice(0, -1)
      : normalized;
  return `${BUSINESS.siteUrl}${withoutTrailingSlash}`;
}

function trimTitle(value: string, max = TITLE_MAX): string {
  if (value.length <= max) return value;
  const trimmed = value.slice(0, max - 1).trimEnd();
  return `${trimmed}…`;
}

function trimDescription(value: string, max = DESCRIPTION_MAX): string {
  if (value.length <= max) return value;
  const trimmed = value.slice(0, max - 1).trimEnd();
  return `${trimmed}…`;
}

function buildFullTitle(title: string, path: string): string {
  if (path === "" || path === "/") {
    return trimTitle(`${BUSINESS.name} | ${BUSINESS.tagline}`);
  }
  return trimTitle(`${title} | ${BUSINESS.name}`);
}

export function createMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
  skipCanonical = false,
  keywords,
}: PageMeta): Metadata {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const url = absoluteUrl(normalizedPath);
  const fullTitle = buildFullTitle(title, normalizedPath);
  const metaDescription = trimDescription(description);
  const ogImageUrl = image.startsWith("http") ? image : absoluteUrl(image);
  const keywordList = keywords ? [...new Set([...keywords, ...SEO_KEYWORDS])] : [...SEO_KEYWORDS];

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(BUSINESS.siteUrl),
    ...(skipCanonical ? {} : { alternates: { canonical: url } }),
    keywords: keywordList,
    authors: [{ name: BUSINESS.photographer, url: BUSINESS.siteUrl }],
    creator: BUSINESS.photographer,
    publisher: BUSINESS.name,
    category: "photography",
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImageUrl],
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
      icon: [{ url: BRAND_ASSETS.favicon, type: "image/png" }],
      shortcut: BRAND_ASSETS.favicon,
      apple: BRAND_ASSETS.favicon,
    },
  };
}

function areaServedSchema() {
  return [
    { "@type": "City", name: "Kigali", containedInPlace: { "@type": "Country", name: "Rwanda" } },
    { "@type": "City", name: "Tallahassee", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ];
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
        description: BUSINESS.internationalTagline,
        inLanguage: "en-US",
        publisher: { "@id": businessId },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
        "@id": businessId,
        name: BUSINESS.name,
        image: absoluteUrl(BRAND_ASSETS.ogImage),
        logo: absoluteUrl(BRAND_ASSETS.logoColor),
        description: BUSINESS.internationalTagline,
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.4518,
          longitude: -84.27277,
        },
        areaServed: areaServedSchema(),
        sameAs: [BUSINESS.instagram],
        knowsAbout: [
          "Wedding Photography",
          "Portrait Photography",
          "Family Photography",
          "Event Photography",
          "Corporate Event Photography",
          "Destination Wedding Photography",
          "Business Headshots",
          "Graduation Photography",
        ],
        founder: { "@id": photographerId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Photography Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Photography" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Photography" } },
          ],
        },
      },
      {
        "@type": ["Person", "Photographer"],
        "@id": photographerId,
        name: BUSINESS.photographer,
        jobTitle: "Professional Photographer",
        worksFor: { "@id": businessId },
        url: `${BUSINESS.siteUrl}/about`,
        sameAs: [BUSINESS.instagram],
        image: absoluteUrl(BRAND_ASSETS.ogImage),
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function servicePageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${BUSINESS.siteUrl}/#business` },
    areaServed: areaServedSchema(),
    serviceType: "Photography",
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  publishedAt,
  image,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: { "@id": `${BUSINESS.siteUrl}/#photographer` },
    publisher: {
      "@id": `${BUSINESS.siteUrl}/#business`,
      logo: { "@type": "ImageObject", url: absoluteUrl(BRAND_ASSETS.logoColor) },
    },
    image: absoluteUrl(image),
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function portfolioGalleryJsonLd() {
  const portfolioUrl = `${BUSINESS.siteUrl}/portfolio`;

  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${BUSINESS.name} Portfolio`,
    description:
      "Wedding, portrait, family, event, sports, and lifestyle photography by Innocent Photos for US, Canada, and international clients.",
    url: portfolioUrl,
    author: { "@id": `${BUSINESS.siteUrl}/#photographer` },
    publisher: { "@id": `${BUSINESS.siteUrl}/#business` },
    image: portfolioImages.map((image) => ({
      "@type": "ImageObject",
      "@id": `${portfolioUrl}#${image.id}`,
      contentUrl: absoluteUrl(image.src),
      ...(image.seoFilename
        ? { encodingFormat: "image/webp", contentLocation: image.seoFilename }
        : {}),
      name: image.alt,
      description: `${image.category} photography by ${BUSINESS.name} — ${image.alt}`,
      width: image.width,
      height: image.height,
      author: { "@id": `${BUSINESS.siteUrl}/#photographer` },
      copyrightHolder: { "@id": `${BUSINESS.siteUrl}/#business` },
    })),
  };
}

/** @deprecated Use siteJsonLd — kept for compatibility */
export function localBusinessJsonLd() {
  return siteJsonLd();
}
