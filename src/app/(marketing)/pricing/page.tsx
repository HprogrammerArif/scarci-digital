import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Transparent Agency Pricing | Scarci Digital",
  description:
    "Predictable, transparent agency pricing for custom website development, Shopify e-commerce stores, and bespoke CRM software systems.",
};

const tiers = [
  {
    name: "Corporate & Web",
    badge: "Website & CMS",
    price: "$4,500",
    description:
      "Ideal for businesses needing a high-speed corporate website, Webflow marketing platform, or conversion landing page.",
    timeline: "4–6 Weeks",
    features: [
      "Custom responsive Next.js or Webflow build",
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
    badge: "Most Popular",
    price: "$8,500",
    description:
      "Full-featured e-commerce storefront engineered for high volume, multi-currency international sales, and CRO.",
    timeline: "6–8 Weeks",
    features: [
      "Shopify Plus custom Liquid theme",
      "1-click checkout & sticky cart drawer",
      "Product catalog & inventory setup",
      "Multi-currency & localized payment gateways",
      "Subscription / recurring billing setup",
      "Klaviyo email flows & abandoned cart recovery",
      "60-day post-launch warranty & support",
    ],
    popular: true,
  },
  {
    name: "Custom CRM & System",
    badge: "Enterprise Platform",
    price: "$14,500",
    description:
      "Bespoke CRM software engineered to match your exact team workflows, automated pipelines, and private database.",
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
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            PREDICTABLE PRICING
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Guaranteed Deliverables
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            No surprise invoices or hidden retainers. We deliver fixed-milestone contracts with guaranteed timelines and post-launch code warranties.
          </p>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
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
                      Recommended
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400">Starting from</span>
                    <div className="text-4xl font-extrabold text-white tracking-tight">
                      {tier.price}
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Estimated timeline: {tier.timeline}
                    </span>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      Everything Included:
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
                  <Link href="/contact" className="w-full block">
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
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
