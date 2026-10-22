import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart,
  TrendingUp,
  CreditCard,
  RefreshCw,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Shopify & E-Commerce Store Development | Scarci Digital",
  description:
    "Enterprise Shopify Plus, WooCommerce, and headless e-commerce store engineering. Engineered for high conversion, checkout speed, and international multi-currency scale.",
};

const ecommerceFeatures = [
  {
    title: "Shopify & Shopify Plus Engineering",
    description:
      "Custom bespoke Liquid themes, private apps, checkout extensibility, and automated script setups for scaling DTC and B2B brands.",
    icon: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Frictionless 1-click checkouts, dynamic sticky cart drawers, upselling widgets, and heatmapped UX improvements that drive higher AOV.",
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Multi-Currency & Global Markets",
    description:
      "Seamless international sales with automated geotargeting, localized currencies, international duty/tax calculation, and multi-language catalogs.",
    icon: <CreditCard className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Subscriptions & Recurring Billing",
    description:
      "End-to-end subscription store architecture using ReCharge and native Shopify APIs for predictable monthly recurring revenue (MRR).",
    icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Headless Commerce (Next.js + Shopify)",
    description:
      "Blazing-fast headless storefronts using Next.js App Router and Shopify Storefront GraphQL for brands seeking unmatched custom performance.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "ERP, CRM & 3PL Logistics Integration",
    description:
      "Real-time synchronization with warehouse fulfillment systems, custom inventory management, and CRM customer tracking.",
    icon: <PackageCheck className="w-6 h-6 text-pink-400" />,
  },
];

export default function EcommercePage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-emerald-400 font-medium">E-Commerce Development</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Turn Browsers Into Buyers With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              High-Converting Stores
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From high-growth Shopify Plus storefronts to complex WooCommerce marketplaces, we build digital storefronts that generate measurable revenue and scale seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Build Your Store
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/urbanthread-ecommerce" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                View 340% Revenue Growth Case Study
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid of Capabilities */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="success" dot className="mx-auto">
              E-COMMERCE ARCHITECTURE
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineered For Speed, Scale & High Average Order Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ecommerceFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Metric Banner */}
      <section className="py-16 sm:py-20 bg-[#040914] border-y border-white/5">
        <Container size="narrow">
          <div className="p-5 sm:p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0A1628] to-blue-950/40 border border-emerald-500/30 text-center space-y-6">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              CASE HIGHLIGHT • URBANTHREAD CO.
            </span>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight break-words">
              +340% Revenue Growth
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              We rebuilt UrbanThread&apos;s checkout flow on Shopify Plus with custom Liquid components, decreasing cart abandonment by 42% and unlocking $4.8M in annual recurring GMV.
            </p>
            <Link href="/portfolio/urbanthread-ecommerce" className="inline-block">
              <Button variant="secondary" size="md">
                Read UrbanThread Case Study →
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
