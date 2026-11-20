import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Industries } from "@/components/sections/industries";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesGrid />
      <PortfolioShowcase />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <Industries />
      <TechStack />
      <FAQSection />
      <CTASection />
    </>
  );
}
