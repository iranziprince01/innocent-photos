import type { MetadataRoute } from "next";
import { BUSINESS } from "@/data/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.name,
    description: BUSINESS.heroSubheadline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1814",
    lang: "en-US",
    icons: [
      {
        src: "/favicon2.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
