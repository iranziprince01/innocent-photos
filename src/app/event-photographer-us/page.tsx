import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/event-photographer-us")!;

export const metadata = seoLandingMetadata(page);

export default function EventPhotographerUsPage() {
  return <SeoLandingPageView page={page} />;
}
