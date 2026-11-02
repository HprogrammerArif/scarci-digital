"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { ShieldCheck, Zap, Clock, Code2 } from "lucide-react";

const stats = [
  {
    value: "99.98%",
    label: "Production Uptime SLA",
    subtext: "Continuous monitoring & enterprise edge infrastructure",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  },
  {
    value: "<120ms",
    label: "Global Edge TTFB",
    subtext: "Next.js App Router, edge caching & query optimization",
    icon: <Zap className="w-5 h-5 text-blue-400" />,
  },
  {
    value: "14 Days",
    label: "Staging Sprint Velocity",
    subtext: "From architecture approval to interactive staging deployment",
    icon: <Clock className="w-5 h-5 text-indigo-400" />,
  },
  {
    value: "100%",
    label: "Full Codebase Ownership",
    subtext: "Clean typed repos, direct IP transfer & zero vendor lock-in",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
  },
];

export function StatsCounter() {
  return (
    <section className="py-16 bg-[#040914] border-y border-white/5 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
