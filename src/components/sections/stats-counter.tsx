"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { DollarSign, Clock, CheckCircle2, Globe2 } from "lucide-react";

const stats = [
  {
    value: "$45M+",
    label: "Client Revenue Generated",
    subtext: "Tracked across e-commerce & digital campaigns",
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
  },
  {
    value: "99.4%",
    label: "On-Time Milestone Delivery",
    subtext: "Agile sprints and transparent roadmap tracking",
    icon: <Clock className="w-5 h-5 text-blue-400" />,
  },
  {
    value: "120+",
    label: "Enterprise Platforms Built",
    subtext: "Next.js, Shopify, Webflow, and custom CRMs",
    icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />,
  },
  {
    value: "20+",
    label: "Global Markets Served",
    subtext: "USA, Canada, UK, Germany, and beyond",
    icon: <Globe2 className="w-5 h-5 text-cyan-400" />,
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
