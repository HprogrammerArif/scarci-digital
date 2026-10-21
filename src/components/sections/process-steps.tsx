"use client";

import * as React from "react";
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    description:
      "We unpack your business objectives, target audience, and system integrations to design an airtight technical and architectural roadmap.",
    icon: <Compass className="w-6 h-6 text-blue-400" />,
    deliverables: [
      "Requirements specification",
      "Tech stack recommendation",
      "Information architecture",
      "Milestone & timeline roadmap",
    ],
  },
  {
    number: "02",
    title: "UI/UX & Interactive Design",
    description:
      "We design modern, responsive interfaces focused on conversions, user delight, and brand authority in Figma before a single line of code is written.",
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    deliverables: [
      "High-fidelity Figma mockups",
      "Clickable user prototypes",
      "Design system & component library",
      "Mobile-first responsive layouts",
    ],
  },
  {
    number: "03",
    title: "Agile Development & Testing",
    description:
      "Enterprise engineering on Next.js, Shopify Plus, Webflow, or custom CRM backends with rigorous performance benchmarks and clean code standards.",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    deliverables: [
      "Clean TypeScript & React code",
      "API & webhook integrations",
      "Cross-browser & device testing",
      "Performance & SEO optimization",
    ],
  },
  {
    number: "04",
    title: "Launch & Growth Retainer",
    description:
      "Seamless production deployment with zero downtime, team onboarding, analytics tracking, and continuous SLA support to scale your digital asset.",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    deliverables: [
      "Zero-downtime deployment",
      "GA4 & tracking verification",
      "Admin CMS training & docs",
      "Monthly maintenance & SLA",
    ],
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <Badge variant="glow" dot className="mx-auto">
            AGILE ENGINEERING WORKFLOW
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Turn Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              High-Performing Software
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A battle-tested 4-phase delivery framework that guarantees milestone clarity, on-time launches, and measurable business returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-[#091527]/70 border border-white/10 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Step Number Watermark */}
              <div className="text-4xl font-extrabold text-white/5 absolute top-4 right-5 font-mono select-none group-hover:text-blue-500/10 transition-colors">
                {step.number}
              </div>

              <div className="space-y-5 relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/30 transition-all">
                  {step.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-400">
                      STEP {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
