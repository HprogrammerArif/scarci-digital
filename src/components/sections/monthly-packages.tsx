import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Layers,
  Code2,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  monthlyPlans,
  customSoftwareQuote,
  adSpendGuidelines,
  planTermsNotice,
  planSafeguards,
} from "@/data/packages";

interface MonthlyPackagesProps {
  id?: string;
  showBuildLink?: boolean;
}

export function MonthlyPackages({
  id = "monthly-plans",
  showBuildLink = false,
}: MonthlyPackagesProps) {
  return (
    <section
      id={id}
      className="py-24 sm:py-32 bg-[#040914] border-y border-white/5 relative overflow-hidden scroll-mt-24"
    >
      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/12 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="wide" className="relative z-10 max-w-[1380px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <Badge variant="glow" dot className="mx-auto">
            MONTH-TO-MONTH &middot; NO SETUP FEE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Monthly Care,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Meta Ads &amp; Automations
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Three transparent monthly tiers built uniformly across the Scarci
            ecosystem—keeping your website fast and secure, scaling your inbound
            leads with managed Meta ads, and automating daily operations.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Month-to-Month Flexibility
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              $0 Setup Fee
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Guaranteed Response SLAs
            </span>
          </div>
        </div>

        {/* 3-Tier Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {monthlyPlans.map((plan) => {
            const isPopular = Boolean(plan.isPopular || plan.isRecommended);
            const contactHref = `/contact?service=${encodeURIComponent(
              plan.serviceValue
            )}&budget=${encodeURIComponent(
              plan.budgetValue
            )}&timeline=${encodeURIComponent("Immediate (Monthly Plan)")}`;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                  isPopular
                    ? "bg-[#09172E] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-2"
                    : "bg-[#081224]/90 border border-white/10 hover:border-blue-500/35 hover:bg-[#0A162B]"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Top Content */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-widest block ${
                        isPopular ? "text-blue-400" : "text-slate-400"
                      }`}
                    >
                      {plan.number} &middot; MONTHLY PLAN
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pb-4 border-b border-white/10 space-y-1">
                    <div className="flex items-baseline flex-wrap gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-sm font-mono uppercase tracking-wider text-slate-400">
                        /{plan.period}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300">
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>
                    {plan.priceSuffix && (
                      <p className="text-[11px] text-slate-400 pt-0.5">
                        Client pays ad spend directly to Meta
                      </p>
                    )}
                  </div>

                  {/* Best For Callout */}
                  <div
                    className={`p-4 rounded-2xl text-xs leading-relaxed border ${
                      isPopular
                        ? "bg-blue-500/10 border-blue-400/25 text-slate-200"
                        : "bg-white/[0.03] border-white/5 text-slate-300"
                    }`}
                  >
                    <span className="font-semibold text-white">Best for: </span>
                    {plan.bestFor}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 pt-1">
                    {plan.includesFrom ? (
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl">
                        <Layers className="w-3.5 h-3.5 shrink-0" />
                        <span>{plan.includesFrom}, plus:</span>
                      </div>
                    ) : (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                        Included Every Month:
                      </span>
                    )}

                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300 leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Response SLA & CTA */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400">Response time: </span>
                      <span className="font-semibold text-white">
                        {plan.responseTime}
                      </span>
                    </div>
                  </div>

                  <Link href={contactHref} className="w-full block">
                    <Button
                      variant={isPopular ? "glow" : "secondary"}
                      size="md"
                      className="w-full py-3.5 font-semibold text-xs sm:text-sm"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below the plans: Custom Software, Portals & Integrations Quote Banner */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#09152B] to-indigo-950/40 border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 mt-1 sm:mt-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white flex flex-wrap items-center gap-2">
                <span>{customSoftwareQuote.headline}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold">
                  {customSoftwareQuote.subline}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                {customSoftwareQuote.description}
              </p>
            </div>
          </div>
          <Link href={customSoftwareQuote.href} className="shrink-0 w-full md:w-auto">
            <Button variant="primary" size="md" className="w-full md:w-auto text-xs sm:text-sm px-6 py-3">
              <span>{customSoftwareQuote.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Ad Spend & Terms Advisory Box */}
        <div className="mt-6 rounded-3xl bg-[#081224]/80 border border-white/10 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Ad Spend Transparency &amp; Engagement Terms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Meta Ad Spend Paid Directly to Meta</span>
              </div>
              <p className="text-slate-400">
                {adSpendGuidelines.directPayment}{" "}
                <strong className="text-slate-200">
                  {adSpendGuidelines.recommendedBudget}
                </strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>{planTermsNotice.terms}</span>
              </div>
              <p className="text-slate-400">{planTermsNotice.note}</p>
            </div>
          </div>
        </div>

        {/* Plan & Scope Safeguards */}
        <div className="mt-6 rounded-3xl bg-[#081224]/70 border border-white/10 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Scope Clarity &amp; Delivery Standards</span>
            </div>

            {showBuildLink && (
              <Link
                href="/pricing#custom-builds"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors"
              >
                <span>Need a brand-new website, store, or CRM built first?</span>
                <span className="text-blue-400 underline underline-offset-4">
                  Explore Custom Builds &rarr;
                </span>
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400 leading-relaxed">
            {planSafeguards.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
