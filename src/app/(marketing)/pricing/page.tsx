import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowDown, Code2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { MonthlyPackages } from "@/components/sections/monthly-packages";
import { PricingCalculator } from "@/components/sections/pricing-calculator";
import { commercialModels, softwareMaintenancePlans } from "@/data/packages";

export const metadata: Metadata = {
  title: "Commercial Models & Custom Software Estimator | Scarci Digital",
  description:
    "Fixed-price milestone custom software development, startup MVPs, SaaS platforms, and post-launch maintenance retainers. Engineered with 100% IP ownership.",
};

const customBuildTiers = [
  {
    name: "Startup MVP & Web Platform",
    badge: "Investor-Ready MVP",
    price: "$12,500",
    serviceValue: "website-development",
    budgetValue: "$10k - $25k",
    description:
      "Engineered for founders and entrepreneurs needing a functional product to test with customers, demo to investors, or launch quickly.",
    timeline: "4–6 Weeks",
    features: [
      "Clickable interactive prototype & design system",
      "Production Next.js & TypeScript architecture",
      "User authentication, profiles & role-based access",
      "Stripe payment & subscription checkout",
      "Admin telemetry & metrics management console",
      "30-day post-launch warranty & 100% IP handover",
    ],
    popular: false,
  },
  {
    name: "SaaS & Mobile Product",
    badge: "Most Popular Engagement",
    price: "$20,000",
    serviceValue: "ecommerce",
    budgetValue: "$25k - $50k",
    description:
      "Full-featured multi-tenant SaaS platform or cross-platform mobile application engineered for high-concurrency scale and customer onboarding.",
    timeline: "6–10 Weeks",
    features: [
      "Multi-tenant PostgreSQL schema with data isolation",
      "iOS & Android cross-platform mobile or web app",
      "Self-service team onboarding & member invites",
      "Tiered subscription billing & automated invoicing",
      "Automated email triggers & customer activity logs",
      "60-day post-launch code SLA & developer support",
    ],
    popular: true,
  },
  {
    name: "Custom CRM & Operations System",
    badge: "Proprietary Software",
    price: "$25,000",
    serviceValue: "crm-solutions",
    budgetValue: "$25k - $50k",
    description:
      "Bespoke CRM software and internal operations platforms engineered around your exact team workflows—eliminating per-seat SaaS license fees.",
    timeline: "8–12 Weeks",
    features: [
      "Custom drag-and-drop pipeline & dispatch stages",
      "Automated lead scoring, routing & webhook triggers",
      "360° unified customer communications & document vaults",
      "Dedicated PostgreSQL database & REST / GraphQL API",
      "Bi-directional QuickBooks / Stripe / ERP synchronization",
      "90-day dedicated SLA, admin training & developer support",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Scarci Digital Custom Software & Product Development",
    provider: {
      "@type": "Organization",
      name: "Scarci Digital",
      url: "https://scarcidigital.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Software Engineering Services",
      itemListElement: customBuildTiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        description: tier.description,
        price: tier.price.replace(/[^0-9]/g, ""),
        priceCurrency: "USD",
      })),
    },
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            DELIVERY GATES &amp; COMMERCIAL FRAMEWORK
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Commercial Models &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Custom Software Estimator
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            No open-ended hourly billing. Every software build is delivered on
            fixed-price milestones, protected by structured acceptance gates,
            and supported by optional post-launch code maintenance.
          </p>

          {/* Quick Jump Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#commercial-models"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-xs sm:text-sm font-semibold text-white hover:bg-blue-600/30 transition-colors"
            >
              <span>Commercial Models &amp; Staged Gates</span>
              <ArrowDown className="w-3.5 h-3.5 text-blue-400" />
            </a>
            <a
              href="#custom-builds"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <span>Custom Build Scope Estimator</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </Container>
      </section>

      {/* Primary Section: Commercial Models & Milestone Framework */}
      <MonthlyPackages id="commercial-models" />

      {/* Secondary Section: Custom Product Builds & Interactive Scope Estimator */}
      <section id="custom-builds" className="py-24 sm:py-32 scroll-mt-24">
        <Container className="space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="glow" dot className="mx-auto">
              SCOPED PRODUCT BUILDS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Representative Software Engagements
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Every build includes complete architecture, custom database schemas,
              UI/UX design systems, and 100% intellectual property assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customBuildTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-[#09172E] border-2 border-blue-500 shadow-2xl shadow-blue-500/15 lg:-translate-y-2"
                    : "bg-[#081224]/80 border border-white/10 hover:border-white/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                      Popular Engagement
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400">
                      Representative build starting from
                    </span>
                    <div className="text-4xl font-extrabold text-white tracking-tight">
                      {tier.price}
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Estimated timeline: {tier.timeline}
                    </span>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Included in Deliverables:
                    </span>
                    {tier.features.map((feat, fIdx) => (
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

                <div className="pt-8 mt-8 border-t border-white/10">
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      tier.serviceValue
                    )}&budget=${encodeURIComponent(tier.budgetValue)}`}
                    className="w-full block"
                  >
                    <Button
                      variant={tier.popular ? "glow" : "secondary"}
                      size="lg"
                      className="w-full"
                    >
                      Request Architecture Scope
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Scope & Cost Calculator */}
          <div className="pt-4">
            <PricingCalculator />
          </div>
        </Container>
      </section>

      {/* Sister Concern Guarantee Box */}
      <section className="py-16 bg-[#040810] border-t border-white/5">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0A1628] to-indigo-950/40 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  100% Intellectual Property &amp; Source Code Ownership
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  Every custom software build includes full IP assignment,
                  repository handover, and mutual NDA protection. You own your
                  code, your database, and your product—with zero recurring
                  vendor lock-in.
                </p>
              </div>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button variant="primary" size="md">
                Discuss Your Architecture
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
