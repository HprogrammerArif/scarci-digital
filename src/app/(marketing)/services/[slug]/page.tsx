import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/ui/service-icon";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CTASection } from "@/components/sections/cta-section";
import { getServiceBySlug, services } from "@/data/services";
import { getProjects } from "@/lib/content";
import { BOOK_CALL_HREF } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: service.href },
    openGraph: { title: service.seoTitle, description: service.seoDescription },
  };
}

async function RelatedWork({ categories }: { categories: string[] }) {
  if (categories.length === 0) return null;
  const projects = (await getProjects())
    .filter((p) => categories.includes(p.category))
    .slice(0, 3);
  if (projects.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-[#030812] border-t border-white/5">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Related work
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "Scarci Digital" },
    areaServed: ["US", "CA", "GB", "AU", "EU"],
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-[150px] rounded-full pointer-events-none opacity-20"
          style={{ backgroundColor: service.accent }}
        />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs">
            <Link href="/services" className="text-slate-400 hover:text-white">
              Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-medium">{service.shortTitle}</span>
          </nav>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <ServiceIcon name={service.icon} className="w-8 h-8" style={{ color: service.accent }} />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 font-medium">{service.tagline}</p>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href={BOOK_CALL_HREF} className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={`/contact?service=${service.slug}`} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Send a Project Brief
              </Button>
            </Link>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Clock className="w-4 h-4 text-blue-400" />
            Typical timeline: <span className="text-white font-medium">{service.typicalTimeline}</span>
          </p>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.outcomes.map((o) => (
              <div key={o.title} className="p-7 rounded-2xl bg-[#091527]/80 border border-white/10 space-y-3">
                <Target className="w-6 h-6 text-blue-400" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">{o.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scope */}
      <section className="py-20 sm:py-24 bg-[#040914] border-y border-white/5">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <Badge variant="glow" dot>
              WHAT&apos;S INCLUDED
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What we deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.featureGroups.map((group) => (
              <div key={group.title} className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white">A good fit for</h3>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white">Typical technology</h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                We recommend the stack in discovery based on your needs, team, and budget.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <RelatedWork categories={service.relatedProjectCategories} />
      <ProcessSteps />

      {/* Other services */}
      <section className="pb-8">
        <Container>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Other services
          </h2>
          <div className="flex flex-wrap gap-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/40 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <ServiceIcon name={s.icon} className="w-4 h-4" style={{ color: s.accent }} />
                  {s.title}
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
