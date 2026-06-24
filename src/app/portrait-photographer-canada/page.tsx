import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/portrait-photographer-canada")!;

export const metadata = seoLandingMetadata(page);

export default function PortraitPhotographerCanadaPage() {
  return <SeoLandingPageView page={page} />;
}
