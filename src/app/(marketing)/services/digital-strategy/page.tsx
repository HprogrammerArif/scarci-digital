import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  Zap,
  BarChart2,
  Target,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Digital Strategy, SEO & Performance Consulting | Scarci Digital",
  description:
    "Data-driven technical SEO, conversion rate optimization, Core Web Vitals speed acceleration, and digital growth consulting for market leaders.",
};

const strategyServices = [
  {
    title: "Technical SEO & Schema Architecture",
    description:
      "Deep crawl audits, indexation optimization, structured data schemas, and international hreflang tags to rank #1 for high-intent buyer searches.",
    icon: <Search className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Core Web Vitals & Speed Optimization",
    description:
      "Drastic reduction of Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) to secure top Google rank and prevent visitor bounce.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Conversion Funnel & CRO Audits",
    description:
      "Quantitative analytics analysis paired with qualitative heatmapping to eliminate friction in sign-up, lead-capture, and checkout flows.",
    icon: <Target className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Enterprise Analytics & Server-Side GTM",
    description:
      "Bulletproof Google Analytics 4, Tag Manager, and server-side tracking setups compliant with modern privacy standards and ad attribution.",
    icon: <BarChart2 className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Competitive Landscape & Tech Audits",
    description:
      "In-depth reverse-engineering of competitors' tech stacks, backlink profiles, content gaps, and growth vectors to outmaneuver them.",
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "Strategic guidance on migrating legacy manual workflows into automated cloud platforms, custom CRM hubs, and scalable web apps.",
    icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
  },
];

export default function DigitalStrategyPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-cyan-400 font-medium">Digital Strategy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Data-Driven Strategy That Accelerates{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400">
              Sustainable Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Great software requires smart distribution. We audit, optimize, and engineer digital strategies that maximize visibility, organic rankings, and ROI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Request Free Strategy Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Measurable Case Studies
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              STRATEGIC SERVICES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Optimize Every Dimension Of Your Digital Footprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyServices.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-cyan-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
