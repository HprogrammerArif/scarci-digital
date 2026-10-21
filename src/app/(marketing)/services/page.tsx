import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Layout,
  Database,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities | Scarci Digital",
  description:
    "Explore our complete suite of enterprise digital services: Website Development, E-Commerce & Shopify, Webflow/WordPress CMS, Custom CRM Solutions, UI/UX Design, and Digital Strategy.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-blue-400" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
  Layout: <Layout className="w-8 h-8 text-purple-400" />,
  Database: <Database className="w-8 h-8 text-amber-400" />,
  Palette: <Palette className="w-8 h-8 text-pink-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-cyan-400" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Header */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            FULL-SERVICE AGENCY CAPABILITIES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Digital Engineering &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              CRM Architecture
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We partner with businesses to design, engineer, and optimize digital solutions that scale. Every service is delivered with enterprise rigor by senior engineers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Schedule a Technical Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Past Deliverables
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Breakdown List */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-3xl bg-[#091527]/80 border border-white/10 p-8 sm:p-12 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        {serviceIcons[service.icon]}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider">
                          SERVICE 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                        Core Capabilities Included
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 mr-2">Stack:</span>
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link href={service.href}>
                        <Button variant="primary" size="md">
                          Deep Dive Into {service.shortTitle}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Box */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#050B14] border border-white/10 p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-xs text-slate-400 font-mono">
                          spec.{service.id}.json
                        </span>
                        <Badge variant="glow" size="sm">
                          Enterprise Ready
                        </Badge>
                      </div>

                      <div className="space-y-3 text-xs text-slate-300">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                          <span className="text-slate-400 block font-mono">Turnaround Timeline</span>
                          <span className="font-semibold text-white">4 to 8 Weeks (Milestone-based)</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                          <span className="text-slate-400 block font-mono">Delivery Model</span>
                          <span className="font-semibold text-white">Dedicated Team & Sprint Reviews</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                          <span className="text-slate-400 block font-mono">SLA & Warranty</span>
                          <span className="font-semibold text-white">90-Day Post-Launch Code Warranty</span>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <Link
                          href="/contact"
                          className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                        >
                          Request Custom Scope & Pricing →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
