/** Bump when replacing logo/favicon files in /public to bust browser cache */
const BRAND_VERSION = "1";

const withVersion = (path: string) => `${path}?v=${BRAND_VERSION}`;

export const BRAND_ASSETS = {
  logoWhite: withVersion("/logo_white.svg"),
  logoColor: withVersion("/logo_color.svg"),
  favicon: withVersion("/favicon.png"),
  faviconLight: withVersion("/favicon2.png"),
  ogImage: "/opengraph-image",
} as const;
