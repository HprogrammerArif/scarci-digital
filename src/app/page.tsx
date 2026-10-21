import { Hero } from "@/components/sections/hero";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import { ProcessSteps } from "@/components/sections/process-steps";
import { StatsCounter } from "@/components/sections/stats-counter";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <ServicesGrid />
      <PortfolioShowcase />
      <ProcessSteps />
      <StatsCounter />
      <TechStack />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
