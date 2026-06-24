import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/event-photographer-us-canada")!;

export const metadata = seoLandingMetadata(page);

export default function EventPhotographerUsCanadaPage() {
  return <SeoLandingPageView page={page} />;
}
