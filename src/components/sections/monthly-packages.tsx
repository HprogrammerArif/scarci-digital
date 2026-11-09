import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Layers,
  Code2,
  ExternalLink,
  Milestone,
  FileCode,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  commercialModels,
  milestoneStages,
  softwareMaintenancePlans,
  sisterConcernReferral,
} from "@/data/packages";

interface MonthlyPackagesProps {
  id?: string;
  showBuildLink?: boolean;
}

export function MonthlyPackages({
  id = "commercial-models",
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

      <Container size="wide" className="relative z-10 max-w-[1380px] space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="glow" dot className="mx-auto">
            COMMERCIAL STRUCTURE &amp; DELIVERY GATES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fixed Milestones. Measurable Progress.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              100% IP Ownership.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We avoid open-ended hourly billing that rewards slow progress. Every
            software build is quoted on clearly defined deliverables, structured
            around verifiable milestone releases, and backed by complete code
            handover.
          </p>
        </div>

        {/* 3 Commercial Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {commercialModels.map((model, idx) => (
            <div
              key={model.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                idx === 0
                  ? "bg-[#09172E] border-2 border-blue-500 shadow-2xl shadow-blue-500/15 lg:-translate-y-2"
                  : "bg-[#081224]/90 border border-white/10 hover:border-blue-500/35 hover:bg-[#0A162B]"
              }`}
            >
              {idx === 0 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {model.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Model 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {model.name}
                  </h3>
                  <p className="text-xs text-blue-300 font-medium">
                    {model.howItWorks}
                  </p>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                  {model.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Safeguards &amp; Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {model.highlights.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full block"
                >
                  <Button
                    variant={idx === 0 ? "glow" : "secondary"}
                    size="md"
                    className="w-full text-xs sm:text-sm py-3 font-semibold"
                  >
                    <span>Discuss Your Scope</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Payment Structure Diagram */}
        <div className="rounded-3xl bg-[#081224]/80 border border-white/10 p-8 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                <Milestone className="w-4 h-4" />
                <span>Typical Milestone Payment Breakdown</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Staged Development Protects Your Cash Flow
              </h3>
            </div>
            <span className="text-xs text-slate-400 max-w-sm">
              Payments are released strictly upon demonstration of working code
              and client testing sign-off.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestoneStages.map((stage, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 relative group hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-400 font-mono">
                    {stage.percentage}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Gate 0{sIdx + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {stage.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stage.deliverables}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Launch Software Maintenance Agreements */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="glow" dot className="mx-auto">
              OPTIONAL POST-LAUNCH SUPPORT
            </Badge>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Software Maintenance &amp; Product Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Separate from initial build fees, these optional monthly
              agreements ensure your application stays fast, secure, and
              continuously enhanced as user demand grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {softwareMaintenancePlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "bg-[#09172E] border-2 border-blue-500 shadow-xl shadow-blue-500/10"
                    : "bg-[#081224]/80 border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      Most Selected
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {plan.bestFor}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 py-2 border-y border-white/10">
                    <span className="text-3xl font-extrabold text-white">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      /{plan.period}
                    </span>
                    <span className="text-[11px] text-blue-400 ml-auto font-mono">
                      {plan.sla}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href={`/contact?service=software-maintenance&budget=${encodeURIComponent(
                      plan.priceDisplay + "/mo"
                    )}`}
                    className="w-full block"
                  >
                    <Button
                      variant={plan.isPopular ? "glow" : "secondary"}
                      size="sm"
                      className="w-full text-xs font-semibold py-2.5"
                    >
                      Inquire About {plan.name}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sister Concern Cross-Referral Box (Scarci Solutions) */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950/40 via-[#0B1528] to-blue-950/40 border border-indigo-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Layers className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{sisterConcernReferral.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {sisterConcernReferral.description}
              </p>
            </div>
          </div>
          <a
            href={sisterConcernReferral.sisterCompanyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto"
          >
            <Button
              variant="secondary"
              size="md"
              className="w-full md:w-auto text-xs sm:text-sm px-6 py-3 border-indigo-500/40 hover:bg-indigo-600/20 text-indigo-200"
            >
              <span>{sisterConcernReferral.linkText}</span>
              <ExternalLink className="w-4 h-4 ml-2 text-indigo-400" />
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
