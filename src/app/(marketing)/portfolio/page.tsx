import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work: Case Studies",
  description:
    "Case studies from Scarci Digital: custom CRMs, SaaS marketing sites, Shopify stores, and WordPress rebuilds, with the problem, solution, and results.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <section className="relative pb-14 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            OUR WORK
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Case studies &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              client results
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The problem each client came to us with, what we built, and what
            changed afterward.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <Testimonials />
      <CTASection />
    </div>
  );
}
