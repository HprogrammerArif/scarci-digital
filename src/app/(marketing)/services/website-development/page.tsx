import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layout,
  Code2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Website Design & Development | Scarci Digital",
  description:
    "Custom high-performance corporate websites, startup web apps, and lead generation platforms engineered with Next.js, React, and Tailwind CSS.",
};

const offerings = [
  {
    title: "Corporate & Enterprise Websites",
    description:
      "Authoritative, multi-page web platforms engineered to elevate brand reputation, communicate value propositions, and convert enterprise buyers.",
  },
  {
    title: "Startup & SaaS Websites",
    description:
      "Fast-moving, high-converting product pages with interactive product tours, waitlist integrations, and analytics tracking.",
  },
  {
    title: "High-Converting Landing Pages",
    description:
      "Laser-targeted landing pages designed for paid acquisition campaigns, built for lightning-fast sub-second load times and maximum CRO.",
  },
  {
    title: "Multilingual Global Websites",
    description:
      "Fully localized websites supporting multi-region routing, currency toggles, dynamic language switching, and international SEO.",
  },
  {
    title: "Professional Service & Firm Websites",
    description:
      "Tailored web presences for legal, consulting, financial, and healthcare firms requiring compliant, trustworthy architectures.",
  },
  {
    title: "Personal Brand & Executive Portfolios",
    description:
      "Bespoke portfolios for founders, keynote speakers, and high-profile executives looking to assert market leadership.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-blue-400 font-medium">Website Development</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            High-Performance Websites Engineered For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Authority & Conversion
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From Fortune-grade corporate websites to high-speed startup platforms, we combine world-class UI design with Next.js edge performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Start Website Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                View Live Case Studies
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              WHAT WE BUILD
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Tailored Solutions For Every Growth Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-blue-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Specifications */}
      <section className="py-16 sm:py-20 bg-[#040810] border-y border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0A1628]/90 border border-white/10 p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  TECHNICAL STANDARDS
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Why Our Code Outperforms Templates
                </h3>
              </div>
              <Badge variant="glow">Score: 98+ Lighthouse</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sub-Second Load Times</strong>
                  Prerendered SSG and edge-cached SSR for near-instant interaction to slash bounce rates.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Enterprise Security & Compliance</strong>
                  Strict CSP headers, sanitized inputs, and zero vulnerable third-party plugin bloat.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layout className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Modular Component Library</strong>
                  Reusable, documented Tailwind CSS design systems your marketing team can scale effortlessly.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">CRM & Automation Hooks</strong>
                  Direct webhooks connecting form submissions into your custom CRM, HubSpot, or Salesforce.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
