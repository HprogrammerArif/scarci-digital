"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Layers, TrendingUp, Zap, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";
import { CTASection } from "@/components/sections/cta-section";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            PROVEN CLIENT SUCCESS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Selected Work & Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Business Outcomes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Browse our featured case studies across custom web development, high-growth Shopify stores, CMS platforms, and bespoke CRM architectures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#0066FF] text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#091527]/90 border border-white/10 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="space-y-6">
                  {/* Mockup Frame Header */}
                  <div className="rounded-xl bg-[#050B14] border border-white/10 p-5 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {project.slug}.scarcidigital.app
                      </span>
                    </div>

                    <div className="h-44 rounded-lg bg-gradient-to-tr from-blue-950/70 via-slate-900 to-indigo-950/70 border border-white/5 flex flex-col items-center justify-center p-6 text-center relative group-hover:scale-[1.02] transition-transform">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 shadow-inner">
                        <Layers className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">
                        {project.client}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        {project.category}
                      </span>

                      {project.results && project.results[0] && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1 shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          {project.results[0]}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary">{project.category}</Badge>
                      <span className="text-xs text-slate-500 font-mono">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {project.results && (
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      {project.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-slate-300 flex items-center gap-2"
                        >
                          <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-400 group-hover:text-blue-300 pt-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
