/**
 * Verified placeholder images (Unsplash).
 * Replace with local files in /public/images/ later — update IDs/paths here only.
 */

import { clampDimension } from "@/lib/images";

export function unsplashPhoto(photoId: string, width: number, height: number) {
  const w = clampDimension(width);
  const h = clampDimension(height, 1600);
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;
}

export function pexelsPhoto(photoId: number, width: number, height: number) {
  const w = clampDimension(width);
  const h = clampDimension(height, 1600);
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}

export function unsplashSquare(photoId: string, size = 600) {
  return unsplashPhoto(photoId, size, size);
}

/** Curated, HTTP-verified Unsplash photo IDs */
export const PHOTOS = {
  wedding: "photo-1519741497674-611481863552",
  weddingReception: "photo-1464366400600-7168b8af9bc3",
  portrait1: "photo-1534528741775-53994a69daeb",
  portrait2: "photo-1524504388940-b1c1722653e1",
  portrait3: "photo-1544005313-94ddf0286df2",
  portrait4: "photo-1507003211169-0a1dd7228f2d",
  portrait5: "photo-1573496359142-b8d87734a5a2",
  family1: "photo-1511895426328-dc8714191300",
  family2: "photo-1529156069898-49953e39b3ac",
  event1: "photo-1511285560929-80b456fea0bc",
  event2: "photo-1434030216411-0b793f4b4173",
  model1: "photo-1529626455594-4ff0802cfb7e",
  model2: "photo-1488426862026-3ee34a7d66df",
  model3: "photo-1531746020798-e6953c6e8e04",
  realEstate1: "photo-1600596542815-ffad4c1539a9",
  realEstate2: "photo-1600585154340-be6161a56a0c",
  realEstate3: "photo-1600607687939-ce8a6c25118c",
  sports1: "photo-1574629810360-7efbbe195018",
  sports2: "photo-1579952363873-27f3bade9f55",
  wildlife1: "photo-1470071459604-3b5ec3a7fe05",
  wildlife2: "photo-1441974231531-c6227db76b6e",
  wildlife3: "photo-1506905925346-21bda4d32df4",
  photographer: "photo-1506794778202-cad84cf45f1d",
  cameraStory: "photo-1492691527719-9d1e07e534b4",
  coupleCta: "photo-1465495976277-4387d4b0b4c6",
  testimonial1: "photo-1438761681033-6461ffad8d80",
  testimonial2: "photo-1507003211169-0a1dd7228f2d",
  testimonial3: "photo-1544005313-94ddf0286df2",
  testimonial4: "photo-1472099645785-5658abf4ff4e",
  hoodie: "photo-1556821840-3a63f95609a7",
  tee: "photo-1521572163474-6864f9cf17ab",
  cap: "photo-1588850561407-ed78c282e89b",
  sweatshirt: "photo-1434389677669-e08b4cac3105",
  tote: "photo-1544816155-12df9643f363",
} as const;

/** Local assets in /public — swap files in place without code changes */
export const PUBLIC_IMAGES = {
  portraits: "/portraits.jpg",
  bio: "/Bio.jpeg",
  portrait1: "/portrait1.JPG",
  portrait2: "/portrait2.JPG",
  portrait3: "/portrait3.JPG",
  portrait4: "/portrait4.JPG",
  portrait5: "/portrait5.JPG",
  portrait6: "/portrait6.JPG",
  portrait7: "/portrait7.JPG",
  portrait8: "/portrait8.JPG",
  portrait9: "/portrait9.JPG",
  event1: "/event1.JPG",
  family1: "/family1.JPG",
  family2: "/family2.JPG",
  family3: "/family3.JPG",
  testimonialWedding: "/wedding.jpg",
  testimonialFamily: "/family2.JPG",
  testimonialGraduation: "/Test_grad.jpg",
  testimonialRealEstate: "/Test_restate.jpg",
  shopSweatshirt: "/Sweatshirt.jpg",
  shopTote: "/bag.jpg",
  shopLongSleeveShirt: "/long_sleeve_shirt.jpg",
  shopBanner: "/shop.jpg",
} as const;
