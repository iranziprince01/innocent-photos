import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/wedding-photographer-us")!;

export const metadata = seoLandingMetadata(page);

export default function WeddingPhotographerUsPage() {
  return <SeoLandingPageView page={page} />;
}
