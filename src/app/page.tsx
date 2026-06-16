import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesSnapshot />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
