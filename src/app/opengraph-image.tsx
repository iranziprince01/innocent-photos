import { BUSINESS } from "@/data/business";
import {
  generateOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/og-image";

export const alt = `${BUSINESS.name} — ${BUSINESS.tagline}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return generateOgImage();
}
