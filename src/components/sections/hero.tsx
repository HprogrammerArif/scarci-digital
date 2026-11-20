"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Users,
  FileText,
  LayoutDashboard,
  KanbanSquare,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BOOK_CALL_HREF } from "@/lib/constants";
import { cn } from "@/lib/cn";

type TabKey = "crm" | "portal" | "saas";

const TABS: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "crm", label: "Custom CRM", icon: <KanbanSquare className="w-3.5 h-3.5" /> },
  { key: "portal", label: "Client Portal", icon: <Lock className="w-3.5 h-3.5" /> },
  { key: "saas", label: "SaaS Dashboard", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
];

const PIPELINE = [
  { stage: "New Lead", color: "bg-blue-400", cards: ["Harbor Dental Group", "Atlas Freight"] },
  { stage: "Discovery", color: "bg-indigo-400", cards: ["Pine & Co. Legal", "Northwind Realty"] },
  { stage: "Proposal", color: "bg-amber-400", cards: ["Summit Clinics"] },
  { stage: "Won", color: "bg-emerald-400", cards: ["Bluewave Logistics"] },
];

const PORTAL_ITEMS = [
  { name: "Signed engagement letter.pdf", status: "Signed", tone: "text-emerald-400" },
  { name: "Q3 financial statements.xlsx", status: "Under review", tone: "text-amber-400" },
  { name: "Property inspection report.pdf", status: "Uploaded", tone: "text-blue-400" },
];

const BARS = [38, 52, 47, 61, 58, 72, 69, 84, 79, 92, 88, 97];

function CrmPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {PIPELINE.map((col) => (
        <div key={col.stage} className="rounded-xl bg-white/[0.03] border border-white/5 p-3 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className={cn("w-2 h-2 rounded-full", col.color)} />
            {col.stage}
          </div>
          {col.cards.map((card) => (
            <div key={card} className="rounded-lg bg-[#0D1D35] border border-white/10 p-2.5 space-y-1.5">
              <p className="text-xs font-medium text-white truncate">{card}</p>
              <div className="h-1.5 w-2/3 rounded bg-white/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function PortalPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 rounded-xl bg-white/[0.03] border border-white/5 p-4 space-y-3">
        <p className="text-xs font-semibold text-slate-300">Shared documents</p>
        {PORTAL_ITEMS.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-3 rounded-lg bg-[#0D1D35] border border-white/10 px-3 py-2.5">
            <span className="flex items-center gap-2 text-xs text-white min-w-0">
              <FileText className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">{item.name}</span>
            </span>
            <span className={cn("text-[11px] font-semibold shrink-0", item.tone)}>{item.status}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 space-y-3">
        <p className="text-xs font-semibold text-slate-300">Project status</p>
        {["Onboarding", "Document review", "Final report"].map((step, i) => (
          <div key={step} className="flex items-center gap-2 text-xs">
            <CheckCircle2 className={cn("w-4 h-4 shrink-0", i < 2 ? "text-emerald-400" : "text-slate-600")} />
            <span className={i < 2 ? "text-white" : "text-slate-500"}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 rounded-xl bg-white/[0.03] border border-white/5 p-4">
        <p className="text-xs font-semibold text-slate-300 mb-4">Active workspaces</p>
        <div className="flex items-end gap-1.5 h-28" aria-hidden="true">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-600/60 to-indigo-400/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 space-y-3">
        <p className="text-xs font-semibold text-slate-300">Team</p>
        {["Owner", "Admin", "Member"].map((role) => (
          <div key={role} className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-slate-400" />
            </span>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-white/15" />
              <p className="text-[10px] text-slate-500">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("crm");

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 lg:pb-28 overflow-hidden bg-[#050B14]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-7">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Custom software studio · US-managed · Sister concern of Scarci Solutions
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Software built around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              how your business works.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            We design and build MVPs, SaaS platforms, custom CRMs, client
            portals, mobile apps, and websites for growing companies. Clear
            scope, weekly demos, and you own every line of code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
            <Link href={BOOK_CALL_HREF} className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto px-8">
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-7">
                See Our Work
              </Button>
            </Link>
          </div>

          <ul className="pt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-400" />
              100% code &amp; IP ownership
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Fixed-scope proposals
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              NDA from the first call
            </li>
          </ul>
        </div>

        {/* Product preview */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl p-1 bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent shadow-2xl shadow-blue-900/30">
            <div className="rounded-[15px] bg-[#0A1628]/95 border border-white/10 p-4 sm:p-6 backdrop-blur-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs text-slate-400">The kind of software we build</span>
                </div>

                <div role="tablist" aria-label="Example products" className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/10 overflow-x-auto no-scrollbar">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0",
                        activeTab === tab.key
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div role="tabpanel" className="pt-5 animate-fadeIn" key={activeTab}>
                {activeTab === "crm" && <CrmPreview />}
                {activeTab === "portal" && <PortalPreview />}
                {activeTab === "saas" && <SaasPreview />}
              </div>

              <p className="mt-5 pt-4 border-t border-white/5 text-[11px] text-slate-500">
                Sample interface for illustration. Every build is designed around the client&apos;s own workflow.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
