import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { MonthlyPackages } from "@/components/sections/monthly-packages";
import { PricingCalculator } from "@/components/sections/pricing-calculator";
import { monthlyPlans } from "@/data/packages";

export const metadata: Metadata = {
  title: "Monthly Plans & Custom Build Pricing | Scarci Digital",
  description:
    "Predictable monthly website care, SEO, business automation, and fractional development plans starting at $249/mo—plus fixed-milestone custom website, Shopify, and CRM builds.",
};

const customBuildTiers = [
  {
    name: "Corporate & Web",
    badge: "Website & CMS",
    price: "$4,500",
    serviceValue: "website-development",
    budgetValue: "$5k - $10k",
    description:
      "Ideal for businesses needing a high-speed corporate website, WordPress or Webflow marketing site, or conversion landing page.",
    timeline: "4–6 Weeks",
    features: [
      "Custom responsive Next.js, Webflow, or WordPress build",
      "Tailwind CSS design system & Figma UI kit",
      "Sub-second page speeds (95+ Lighthouse)",
      "Technical SEO & schema structured data",
      "Contact & lead capture CRM webhooks",
      "30-day post-launch warranty & training",
    ],
    popular: false,
  },
  {
    name: "Shopify & E-Commerce",
    badge: "Most Popular Build",
    price: "$8,500",
    serviceValue: "ecommerce",
    budgetValue: "$5k - $10k",
    description:
      "Full-featured e-commerce storefront engineered for conversion, fast mobile checkout, and scalable catalog management.",
    timeline: "6–8 Weeks",
    features: [
      "Custom Shopify or WooCommerce storefront",
      "1-click checkout & sticky cart drawer",
      "Product catalog & inventory setup",
      "Multi-currency & localized payment gateways",
      "Subscription / recurring billing setup",
      "Automated email flows & abandoned cart recovery",
      "60-day post-launch warranty & support",
    ],
    popular: true,
  },
  {
    name: "Custom CRM & System",
    badge: "Bespoke Software",
    price: "$14,500",
    serviceValue: "crm-solutions",
    budgetValue: "$10k - $25k",
    description:
      "Bespoke CRM software and internal portals engineered around your exact team workflows, automated pipelines, and private database.",
    timeline: "8–12 Weeks",
    features: [
      "Custom drag-and-drop sales pipeline stages",
      "Automated lead scoring & smart routing",
      "360° unified customer activity timelines",
      "Dedicated PostgreSQL database & API backend",
      "Role-based access control (RBAC)",
      "Bi-directional QuickBooks / Stripe / ERP sync",
      "90-day dedicated SLA & developer support",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Scarci Digital Monthly Care, Automation & Fractional Engineering Plans",
    provider: {
      "@type": "Organization",
      name: "Scarci Digital",
      url: "https://scarcidigital.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Monthly Plans",
      itemListElement: monthlyPlans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Monthly Plan`,
        description: plan.bestFor,
        price: plan.price,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
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
            UNIFORM PLANS &amp; TRANSPARENT SCOPES
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Monthly Plans &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Fixed-Milestone Builds
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ongoing website reliability, SEO, workflow automation, and
            fractional software engineering starting at $249/month—plus turnkey
            custom builds when you need a brand-new platform.
          </p>

          {/* Quick Jump Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#monthly-plans"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-xs sm:text-sm font-semibold text-white hover:bg-blue-600/30 transition-colors"
            >
              <span>Monthly Plans ($249 – $1,499/mo)</span>
              <ArrowDown className="w-3.5 h-3.5 text-blue-400" />
            </a>
            <a
              href="#custom-builds"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <span>One-Time Custom Builds &amp; Estimator</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </Container>
      </section>

      {/* Primary Section: Uniform 4-Tier Monthly Plans */}
      <MonthlyPackages id="monthly-plans" />

      {/* Secondary Section: One-Time Custom Builds & Scope Calculator */}
      <section id="custom-builds" className="py-24 sm:py-32 scroll-mt-24">
        <Container className="space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="glow" dot className="mx-auto">
              NEW BUILDS &amp; REDESIGNS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Need a Brand-New Website, Store, or CRM First?
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Full redesigns and custom builds are delivered on fixed-milestone
              agreements—then seamlessly supported on any monthly plan above.
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
                      Popular Build
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
                      One-time build starting from
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
                      Included in Build:
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
                      Book Free Scope Call
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
                  The Scarci Solutions Sister Concern Guarantee
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  Every custom build includes full intellectual property (IP)
                  assignment and mutual NDA protection, backed by uniform
                  US-managed monthly care and engineering plans across the
                  Scarci family.
                </p>
              </div>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button variant="primary" size="md">
                Book 30-Min Intro Call
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
