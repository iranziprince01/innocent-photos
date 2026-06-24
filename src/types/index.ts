export type PortfolioCategory =
  | "Portraits"
  | "Events"
  | "Family"
  | "Models"
  | "Real Estate"
  | "Sports"
  | "Wildlife";

export interface PortfolioImage {
  id: string;
  src: string;
  category: PortfolioCategory;
  alt: string;
  seoFilename?: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  startingAt: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ShopItem {
  id: string;
  name: string;
  image: string;
}

export type ServiceType =
  | "Wedding"
  | "Portrait"
  | "Family"
  | "Event"
  | "Graduation"
  | "Real Estate"
  | "Sports"
  | "Wildlife"
  | "Other";
