"use client";

import * as React from "react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Layout,
  Database,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-blue-400" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
  Layout: <Layout className="w-6 h-6 text-purple-400" />,
  Database: <Database className="w-6 h-6 text-amber-400" />,
  Palette: <Palette className="w-6 h-6 text-pink-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-400" />,
};

const serviceGradients: Record<string, string> = {
  "website-development": "from-blue-500/20 via-transparent to-transparent",
  ecommerce: "from-emerald-500/20 via-transparent to-transparent",
  "cms-development": "from-purple-500/20 via-transparent to-transparent",
  "crm-solutions": "from-amber-500/20 via-transparent to-transparent",
  "ui-ux-design": "from-pink-500/20 via-transparent to-transparent",
  "digital-strategy": "from-cyan-500/20 via-transparent to-transparent",
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#050B14] relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <Badge variant="glow" dot className="mx-auto">
            FULL-SERVICE CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Impact.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Tailored For Growth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Whether you need a bespoke corporate web platform, a Shopify store optimized for 8-figure revenue, or a custom CRM to automate operations—we build it with precision.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative overflow-hidden flex flex-col justify-between group p-8 bg-[#081224]/80 border-white/10 hover:border-blue-500/40 hover:bg-[#0A1628] transition-all duration-300"
            >
              {/* Subtle top corner gradient */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${
                  serviceGradients[service.id] || "from-blue-500/20"
                } rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-6 relative z-10">
                {/* Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all shadow-lg">
                    {serviceIcons[service.icon] || (
                      <Sparkles className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                    {service.shortTitle}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 border-t border-white/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    What We Deliver
                  </span>
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <span className="text-[11px] text-slate-400 pl-5 block">
                      +{service.features.length - 4} more specialized capabilities
                    </span>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-white/5 relative z-10">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors gap-2"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
