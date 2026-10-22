import type { Metadata } from "next";
import Link from "next/link";
import {
  Layout,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  RefreshCw,
  FileCode,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "CMS Development (Webflow, WordPress, Shopify) | Scarci Digital",
  description:
    "Expert CMS engineering across Webflow, WordPress, and Shopify. We empower marketing teams with intuitive visual editing while preserving developer-grade code quality.",
};

const cmsPlatforms = [
  {
    name: "Webflow Development",
    badge: "SaaS & Marketing",
    description:
      "Award-winning Webflow builds with custom interactions, Client-First CMS architecture, and pixel-perfect Figma translation.",
    features: [
      "Figma-to-Webflow development",
      "Dynamic CMS collections & relational data",
      "Custom GSAP / Webflow micro-animations",
      "Marketing team autonomy without developer bottlenecks",
    ],
  },
  {
    name: "WordPress & Elementor Pro",
    badge: "Enterprise Content",
    description:
      "Custom WordPress architectures engineered with Elementor Pro, Advanced Custom Fields (ACF), and streamlined plugin ecosystems.",
    features: [
      "Custom Elementor design systems",
      "Advanced Custom Fields (ACF Pro) structures",
      "WooCommerce catalog integration",
      "Hardened WordPress security & automated backups",
    ],
  },
  {
    name: "Shopify Theme Architecture",
    badge: "Commerce CMS",
    description:
      "Custom Shopify Liquid theme development allowing content managers to create landing pages effortlessly using native OS 2.0 sections.",
    features: [
      "Online Store 2.0 modular blocks & sections",
      "Product & collection layout customization",
      "Zero app bloat code optimization",
      "Native metafields & custom checkout workflows",
    ],
  },
];

export default function CMSDevelopmentPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-purple-400 font-medium">CMS Development</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Manage Content With Ease,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Never Settle On Quality
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We build intuitive content management systems on Webflow, WordPress, and Shopify that liberate your marketing team while delivering pristine speed and SEO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Discuss CMS Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Explore CMS Implementations
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Platforms Grid */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              PLATFORMS WE MASTER
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              The Perfect Platform For Your Content Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {cmsPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                      {platform.badge}
                    </span>
                    <Layout className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 space-y-2.5">
                    {platform.features.map((item, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <Link href="/contact">
                    <Button variant="secondary" size="sm" className="w-full">
                      Get {platform.name.split(" ")[0]} Estimate
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Migration Feature */}
      <section className="py-20 bg-[#040810] border-y border-white/5">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#081224] border border-white/10 text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Seamless CMS Migrations With Zero SEO Loss
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Migrating from legacy WordPress to Webflow, or re-platforming to Shopify Plus? We map every 301 redirect, preserve historical meta tags, and migrate thousands of records without data loss.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="md">
                Plan a CMS Migration
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
