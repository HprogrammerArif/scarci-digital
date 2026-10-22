"use client";

import * as React from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Addon {
  id: string;
  name: string;
  price: number;
  weeks: number;
  description: string;
}

const solutions = [
  {
    id: "web",
    name: "Corporate Web Platform",
    tagline: "Next.js / Webflow Marketing Engine",
    basePrice: 4800,
    baseWeeks: 4,
    badge: "High-Performance Web",
    features: [
      "Sub-second Lighthouse speed (>95)",
      "Tailwind CSS design system & Figma UI kit",
      "Technical SEO & schema structured data",
      "Lead capture & CRM webhooks",
    ],
  },
  {
    id: "ecommerce",
    name: "Shopify Plus E-Commerce",
    tagline: "High-AOV DTC & B2B Storefront",
    basePrice: 8500,
    baseWeeks: 6,
    badge: "Revenue & Scale",
    features: [
      "Shopify Plus custom Liquid theme",
      "1-click checkout & sticky cart drawer",
      "Multi-currency & localized endpoints",
      "Product catalog & inventory setup",
    ],
  },
  {
    id: "crm",
    name: "Bespoke Custom CRM",
    tagline: "PostgreSQL & Next.js Dedicated System",
    basePrice: 14500,
    baseWeeks: 8,
    badge: "Enterprise Automation",
    features: [
      "Custom drag-and-drop pipeline stages",
      "Automated lead scoring & smart routing",
      "Encrypted PostgreSQL database & REST API",
      "Bi-directional QuickBooks / ERP sync",
    ],
  },
];

const availableAddons: Addon[] = [
  {
    id: "multi-currency",
    name: "Global Markets & Multi-Currency Geolocation",
    price: 1200,
    weeks: 1,
    description: "Automated IP-based currency switching & duty calculation.",
  },
  {
    id: "crm-sync",
    name: "Bi-Directional CRM & Webhook Automation",
    price: 1800,
    weeks: 1,
    description: "Instant event synchronization with HubSpot, Salesforce, or Slack.",
  },
  {
    id: "accessibility",
    name: "WCAG 2.1 AA Accessibility & Compliance Audit",
    price: 950,
    weeks: 1,
    description: "Strict screen-reader ARIA optimization and contrast testing.",
  },
  {
    id: "retention",
    name: "Klaviyo E-Commerce Retention Flows",
    price: 1400,
    weeks: 1,
    description: "Automated abandoned cart, browse, and VIP customer winbacks.",
  },
  {
    id: "sla-support",
    name: "90-Day Priority SLA & Developer Retainer",
    price: 2200,
    weeks: 0,
    description: "Direct Slack channel with senior architects and 2-hour bug SLA.",
  },
];

export function PricingCalculator() {
  const [selectedSolution, setSelectedSolution] = React.useState("ecommerce");
  const [selectedAddons, setSelectedAddons] = React.useState<string[]>([
    "multi-currency",
    "crm-sync",
  ]);

  const currentSolution =
    solutions.find((s) => s.id === selectedSolution) || solutions[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = availableAddons.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((sum, addonId) => {
    const addon = availableAddons.find((a) => a.id === addonId);
    return sum + (addon ? addon.weeks : 0);
  }, 0);

  const totalMinPrice = currentSolution.basePrice + addonsTotal;
  const totalMaxPrice = Math.round(totalMinPrice * 1.25);
  const totalWeeks = currentSolution.baseWeeks + addonsWeeks;

  // Build inquiry query string
  const contactUrl = `/contact?service=${encodeURIComponent(
    currentSolution.id === "ecommerce"
      ? "ecommerce"
      : currentSolution.id === "crm"
      ? "crm-solutions"
      : "website-development"
  )}&budget=${encodeURIComponent(
    totalMinPrice > 20000 ? "$25k+" : totalMinPrice > 10000 ? "$10k - $25k" : "$5k - $10k"
  )}`;

  return (
    <div className="rounded-3xl bg-[#091527] border border-blue-500/30 p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="glow" size="sm">
              <Calculator className="w-3.5 h-3.5 mr-1 text-blue-400" />
              INTERACTIVE SCOPE & COST ESTIMATOR
            </Badge>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Configure Your Project Scope
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Customize deliverables, optional features, and get an immediate estimate with guaranteed milestones.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Milestone Contracts • Fixed Price Guarantee</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 relative z-10">
        {/* Left Column: Solution Selector & Addons */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Base Platform */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider block">
              1. Select Primary Architecture
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => setSelectedSolution(sol.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedSolution === sol.id
                      ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {sol.badge}
                    </span>
                    <span className="text-sm font-bold text-white block">
                      {sol.name}
                    </span>
                  </div>
                  <span className="text-xs text-blue-400 font-mono mt-3 font-semibold">
                    From ${sol.basePrice.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Included in Base */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Included in {currentSolution.name}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {currentSolution.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Specialized Add-On Modules */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider block">
              2. Optional Enterprise Modules & Capabilities
            </span>
            <div className="space-y-2.5">
              {availableAddons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500/60"
                        : "bg-white/[0.02] border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all mt-0.5 sm:mt-0 ${
                          isSelected
                            ? "bg-blue-500 border-blue-400 text-white"
                            : "border-white/20 bg-white/5"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-white block">
                          {addon.name}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {addon.description}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-200 shrink-0 self-end sm:self-auto">
                      +${addon.price.toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 rounded-2xl bg-[#050B14] border border-white/15 p-5 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase">
                Estimated Project Scope
              </span>
              <Badge variant="glow" size="sm">
                Estimate Ready
              </Badge>
            </div>

            {/* Price Output */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Total Investment Range</span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-baseline gap-1.5">
                <span>${totalMinPrice.toLocaleString()}</span>
                <span className="text-lg sm:text-xl text-slate-400 font-normal">
                  – ${totalMaxPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Fixed-price milestone agreement. Zero hidden retainers.
              </p>
            </div>

            {/* Timeline & Delivery */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Timeline
                </span>
                <span className="text-sm font-bold text-white block">
                  {totalWeeks}–{totalWeeks + 2} Weeks
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Warranty
                </span>
                <span className="text-sm font-bold text-white block">
                  90-Day Code SLA
                </span>
              </div>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Base Architecture:</span>
                <span className="font-semibold text-white">
                  ${currentSolution.basePrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">
                  Configured Add-ons ({selectedAddons.length}):
                </span>
                <span className="font-semibold text-white">
                  ${addonsTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">IP & Code Ownership:</span>
                <span className="font-semibold text-emerald-400">100% Included</span>
              </div>
            </div>

            {/* CTA Transfer to Contact */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link href={contactUrl} className="w-full block">
                <Button variant="glow" size="lg" className="w-full text-sm">
                  <span>Lock In Scope & Book Call</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <p className="text-center text-[11px] text-slate-500">
                Transfers this configuration directly to our senior engineering lead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
