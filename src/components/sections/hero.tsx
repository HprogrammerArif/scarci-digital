"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Star,
  CheckCircle,
  Activity,
  Database,
  ShoppingCart,
  Gauge,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

type TabKey = "ecommerce" | "vitals" | "crm";

export function Hero() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("ecommerce");

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#050B14]">
      {/* Ambient gradient orbs (Codinism / Vercel style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_rgba(0,102,255,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
            <span className="font-semibold">SISTER CONCERN OF SCARCI SOLUTIONS</span>
            <span className="text-white/40">|</span>
            <span className="text-slate-300">USA-Based Digital Engineering</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            We Build Digital Experiences That Drive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              Exponential Growth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            Full-service digital agency engineering modern websites, high-converting Shopify & Webflow storefronts, and bespoke CRM software for ambitious businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto text-base px-8 py-4">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base px-7 py-4">
                Explore Our Portfolio
              </Button>
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star</span>
              <span>Client Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>120+ Digital Platforms Launched</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Enterprise SLA & Support</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Console (Codinism / Vercel style) */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto relative">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent shadow-2xl shadow-blue-900/30">
            <div className="rounded-[15px] bg-[#0A1628]/95 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl overflow-hidden relative">
              {/* Window Bar with Interactive Tab Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono hidden md:inline">
                    engine.scarcidigital.com/console
                  </span>
                </div>

                {/* Interactive Console Tabs */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab("ecommerce")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "ecommerce"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>E-Commerce Engine</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("vitals")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "vitals"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Lighthouse Vitals</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("crm")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "crm"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Custom CRM Pipeline</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Tab 1: E-Commerce Console */}
              {activeTab === "ecommerce" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 animate-fadeIn">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">GMV Run-Rate</span>
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +340% YoY
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      $4,820,000
                    </div>
                    <p className="text-xs text-slate-400">Shopify Plus custom theme with 1-click checkout</p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Checkout Speed</span>
                      <span className="text-xs text-blue-400 font-semibold flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" /> 180ms TTFB
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      1.2s Average
                    </div>
                    <p className="text-xs text-slate-400">Shopify Checkout Extensibility & zero app bloat</p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Cart Abandonment</span>
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        -42% Drop
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      28.4% Recovery
                    </div>
                    <p className="text-xs text-slate-400">Automated multi-currency Klaviyo flow triggers</p>
                  </div>
                </div>
              )}

              {/* Dynamic Tab 2: Lighthouse Vitals */}
              {activeTab === "vitals" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 animate-fadeIn">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-emerald-500/20 text-center space-y-2">
                    <div className="w-14 h-14 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      99
                    </div>
                    <span className="text-xs font-bold text-white block">Performance</span>
                    <span className="text-[11px] text-slate-400">FCP: 0.4s • LCP: 0.9s</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-emerald-500/20 text-center space-y-2">
                    <div className="w-14 h-14 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      100
                    </div>
                    <span className="text-xs font-bold text-white block">Accessibility</span>
                    <span className="text-[11px] text-slate-400">WCAG 2.1 AA Compliant</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-emerald-500/20 text-center space-y-2">
                    <div className="w-14 h-14 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      100
                    </div>
                    <span className="text-xs font-bold text-white block">Best Practices</span>
                    <span className="text-[11px] text-slate-400">Modern CSP & HTTPS</span>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-emerald-500/20 text-center space-y-2">
                    <div className="w-14 h-14 rounded-full border-4 border-emerald-400 text-emerald-400 font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                      100
                    </div>
                    <span className="text-xs font-bold text-white block">Technical SEO</span>
                    <span className="text-[11px] text-slate-400">JSON-LD Entity Graphs</span>
                  </div>
                </div>
              )}

              {/* Dynamic Tab 3: CRM Pipeline */}
              {activeTab === "crm" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 animate-fadeIn">
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-amber-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Pipeline Throughput</span>
                      <span className="text-xs text-amber-400 font-semibold">Real-Time Sync</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      14,250 Leads
                    </div>
                    <p className="text-xs text-slate-400">Automated scoring with PostgreSQL & WebSocket pipeline</p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Active Deal Volume</span>
                      <span className="text-xs text-blue-400 font-semibold">$350M+ Tracked</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      50% Faster Close
                    </div>
                    <p className="text-xs text-slate-400">Zero seat license fees, unlimited partner logins</p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-purple-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Webhook Ingestion</span>
                      <span className="text-xs text-purple-400 font-semibold">99.99% Uptime</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      &lt; 35ms Latency
                    </div>
                    <p className="text-xs text-slate-400">Encrypted events into QuickBooks, Stripe, & Slack</p>
                  </div>
                </div>
              )}

              {/* Bottom live status row */}
              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-slate-300 font-medium">
                    Continuous Delivery Active: Production Edge Node (US-East)
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Next.js 15</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Shopify Plus</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
