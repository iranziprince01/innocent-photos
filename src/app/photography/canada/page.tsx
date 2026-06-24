import { getSeoLandingPage } from "@/data/seo-pages";
import { seoLandingMetadata, SeoLandingPageView } from "@/lib/seo-landing";

const page = getSeoLandingPage("/photography/canada")!;

export const metadata = seoLandingMetadata(page);

export default function PhotographyCanadaPage() {
  return <SeoLandingPageView page={page} />;
}
