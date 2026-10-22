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
  Quote,
  Layers,
  ExternalLink,
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

  // Find next project for bottom pagination
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Header */}
      <section className="relative pb-16 border-b border-white/5">
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
              Delivered in {project.year}
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
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 backdrop-blur-sm"
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">{res}</span>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Featured UI Mockup Frame */}
      <section className="py-12 bg-[#040810] border-b border-white/5">
        <Container className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-[#091527] border border-white/10 p-3 sm:p-5 shadow-2xl shadow-blue-950/30">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                  https://preview.{project.slug}.com
                </span>
              </div>
              <Badge variant="glow" size="sm">
                Production Verified
              </Badge>
            </div>

            {/* High-Res Showcase Screenshot */}
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-white/5 shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
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
                <p className="text-sm font-bold text-white">6–10 Weeks</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-mono uppercase">Team</span>
                <p className="text-sm font-bold text-white">Dedicated Sr. Engineers</p>
              </div>
            </div>

            {/* Client Context */}
            <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                CLIENT CONTEXT
              </span>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.clientOverview}
              </p>
            </div>

            {/* Section 1: The Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Challenge & Bottleneck
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.challenge.summary}
              </p>
              <ul className="space-y-3 pt-2 text-slate-300 text-sm">
                {project.challenge.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: The Solution */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                The Scarci Digital Solution & Architecture
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.solution.summary}
              </p>
              <div className="grid grid-cols-1 gap-4 pt-2">
                {project.solution.architecturePoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <h4 className="font-semibold text-white text-base">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Client Testimonial */}
            {project.clientQuote && (
              <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0A1628] to-indigo-950/40 border border-blue-500/30 space-y-6">
                <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                <p className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
                  &ldquo;{project.clientQuote.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white text-sm">
                      {project.clientQuote.author}
                    </h5>
                    <p className="text-xs text-slate-400">
                      {project.clientQuote.role}
                    </p>
                  </div>
                  <Badge variant="glow" size="sm">
                    Verified Executive Review
                  </Badge>
                </div>
              </div>
            )}

            {/* Section 4: Technology Stack */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xl font-bold text-white">Technologies Utilized</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Project Footer Bar */}
            <div className="p-6 rounded-2xl bg-[#081224] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-mono uppercase">
                  Next Case Study
                </span>
                <h4 className="text-base font-bold text-white">
                  {nextProject.title}
                </h4>
              </div>
              <Link href={`/portfolio/${nextProject.slug}`}>
                <Button variant="secondary" size="md">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
