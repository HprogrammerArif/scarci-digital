import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ServiceIcon } from "@/components/ui/service-icon";
import { CTASection } from "@/components/sections/cta-section";
import { SisterReferral } from "@/components/sections/sister-referral";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services: Custom Software, Apps & Websites",
  description:
    "Startup MVPs, SaaS platforms, custom CRMs, client portals, mobile apps, AI business software, and Shopify, WordPress, and Webflow websites. One US-managed team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            SERVICES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              launch and grow
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From a first MVP to a full SaaS platform, CRM, or online store, one
            team handles strategy, design, development, and support.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="space-y-6">
          {services.map((service, idx) => (
            <article
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl bg-[#081224]/80 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <ServiceIcon name={service.icon} className="w-6 h-6" style={{ color: service.accent }} />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                <p className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Typical timeline: <span className="text-white font-medium">{service.typicalTimeline}</span>
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Explore {service.shortTitle}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What we deliver
                  </h3>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    A good fit for
                  </h3>
                  <ul className="space-y-2.5">
                    {service.idealFor.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <SisterReferral />
      <CTASection />
    </div>
  );
}
