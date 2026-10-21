import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle2,
  Calendar,
  Building2,
  Code2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { CTASection } from "@/components/sections/cta-section";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | Case Study | Scarci Digital`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Header */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto space-y-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Badge variant="glow">{project.category}</Badge>
            <span className="text-xs text-slate-500 font-mono">
              Completed {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Quick Metrics Header */}
          {project.results && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3"
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-white">{res}</span>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Main Content Deep Dive */}
      <section className="py-20 sm:py-28">
        <Container size="narrow">
          <div className="space-y-16">
            {/* Meta Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#091527] border border-white/10">
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono uppercase">Client</span>
                <p className="text-sm font-bold text-white">{project.client}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono uppercase">Category</span>
                <p className="text-sm font-bold text-white">{project.category}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono uppercase">Timeline</span>
                <p className="text-sm font-bold text-white">6-10 Weeks</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono uppercase">Team</span>
                <p className="text-sm font-bold text-white">4 Senior Engineers</p>
              </div>
            </div>

            {/* Section 1: The Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Challenge & Bottleneck
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Before partnering with Scarci Digital, {project.client} was grappling with high bounce rates, an outdated legacy framework, and sluggish checkout or lead ingestion pipelines that failed under heavy traffic spikes.
              </p>
              <ul className="space-y-2 pt-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Legacy code that restricted rapid marketing and campaign iteration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Poor mobile performance and sub-optimal core web vitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>Disjointed customer data across disparate third-party applications</span>
                </li>
              </ul>
            </div>

            {/* Section 2: The Solution */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Scarci Digital Solution & Architecture
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Our engineering team initiated a deep discovery phase, stripping out bloated third-party plugins in favor of a modern, modular architecture. We engineered custom components tailored to their core workflows.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <h4 className="font-semibold text-white text-sm">Modular Architecture</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Built with clean, maintainable TypeScript and scalable component libraries.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <h4 className="font-semibold text-white text-sm">Optimized Data Ingestion</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated webhooks that route events seamlessly into backend pipelines in real time.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Technology Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Technologies Utilized</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
