import type { PortfolioCategory, PortfolioImage } from "@/types";
import { SERVICE_IMAGES } from "@/data/services";
import { PHOTOS, PUBLIC_IMAGES, unsplashPhoto } from "@/lib/placeholders";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Portraits",
  "Events",
  "Family",
  "Models",
  "Real Estate",
  "Sports",
  "Wildlife",
];

const p = unsplashPhoto;

export const portfolioImages: PortfolioImage[] = [
  { id: "p1", src: PUBLIC_IMAGES.portraits, category: "Portraits", alt: "Elegant portrait in natural light", width: 5504, height: 8256, featured: true },
  { id: "p2", src: p(PHOTOS.portrait2, 800, 1000), category: "Portraits", alt: "Editorial portrait session", width: 800, height: 1000, featured: true },
  { id: "e1", src: p(PHOTOS.event1, 800, 1100), category: "Events", alt: "Wedding celebration moment", width: 800, height: 1100, featured: true },
  { id: "f1", src: p(PHOTOS.family1, 800, 900), category: "Family", alt: "Family laughing together outdoors", width: 800, height: 900, featured: true },
  { id: "m1", src: p(PHOTOS.model1, 800, 1300), category: "Models", alt: "Fashion model editorial shoot", width: 800, height: 1300, featured: true },
  { id: "r1", src: p(PHOTOS.realEstate1, 800, 600), category: "Real Estate", alt: "Luxury home interior", width: 800, height: 600, featured: true },
  { id: "s1", src: p(PHOTOS.sports1, 800, 1000), category: "Sports", alt: "Athlete in peak action", width: 800, height: 1000, featured: true },
  { id: "w1", src: p(PHOTOS.wildlife1, 800, 1100), category: "Wildlife", alt: "Wildlife in natural habitat", width: 800, height: 1100, featured: true },
  { id: "p3", src: p(PHOTOS.portrait3, 800, 950), category: "Portraits", alt: "Close-up portrait with soft bokeh", width: 800, height: 950, featured: true },
  { id: "e2", src: p(PHOTOS.weddingReception, 800, 1050), category: "Events", alt: "Elegant event reception", width: 800, height: 1050, featured: true },
  { id: "f2", src: p(PHOTOS.family2, 800, 1150), category: "Family", alt: "Parents with children outdoors", width: 800, height: 1150 },
  { id: "m2", src: p(PHOTOS.model2, 800, 1000), category: "Models", alt: "Studio model portrait", width: 800, height: 1000 },
  { id: "r2", src: p(PHOTOS.realEstate2, 800, 700), category: "Real Estate", alt: "Modern property exterior", width: 800, height: 700 },
  { id: "s2", src: p(PHOTOS.sports2, 800, 900), category: "Sports", alt: "Basketball player mid-game", width: 800, height: 900 },
  { id: "w2", src: p(PHOTOS.wildlife2, 800, 1200), category: "Wildlife", alt: "Forest landscape at dawn", width: 800, height: 1200 },
  { id: "p4", src: p(PHOTOS.portrait4, 800, 1100), category: "Portraits", alt: "Professional headshot", width: 800, height: 1100 },
  { id: "e3", src: p(PHOTOS.event2, 800, 800), category: "Events", alt: "Graduation celebration", width: 800, height: 800 },
  { id: "f3", src: SERVICE_IMAGES.family, category: "Family", alt: "Family adventure outdoors", width: 800, height: 1000 },
  { id: "m3", src: p(PHOTOS.model3, 800, 1050), category: "Models", alt: "Creative fashion portrait", width: 800, height: 1050 },
  { id: "r3", src: p(PHOTOS.realEstate3, 800, 650), category: "Real Estate", alt: "Bright living room staging", width: 800, height: 650 },
  { id: "s3", src: SERVICE_IMAGES.sports, category: "Sports", alt: "Sports action on the field", width: 800, height: 1100 },
];

export const featuredImages = portfolioImages.filter((img) => img.featured).slice(0, 10);
