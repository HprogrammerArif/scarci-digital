import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, FileText, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProcessSteps } from "@/components/sections/process-steps";
import { WhyUs } from "@/components/sections/why-us";
import { CTASection } from "@/components/sections/cta-section";
import { SisterReferral } from "@/components/sections/sister-referral";
import { engagementModels } from "@/data/engagement";
import { BOOK_CALL_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How We Work: Process & Engagement Models",
  description:
    "How Scarci Digital scopes, designs, builds, and supports custom software. Fixed-scope projects, dedicated product teams, and ongoing support.",
  alternates: { canonical: "/process" },
};

const firstSteps = [
  {
    icon: MessageSquare,
    title: "1. Free scoping call",
    desc: "A 30-minute conversation about your goals, users, and constraints. We'll tell you honestly whether custom software is the right answer.",
  },
  {
    icon: FileText,
    title: "2. Written proposal",
    desc: "Within a few business days you get a proposal with scope, milestones, timeline, team, and a fixed quote. No obligation.",
  },
  {
    icon: Handshake,
    title: "3. Kickoff",
    desc: "Once you approve, we sign the agreement and NDA, set up your project board and Slack channel, and start discovery.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            HOW WE WORK
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            A clear process,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              from first call to launch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every project is quoted individually after a free scoping call, so
            you only pay for what your product actually needs.
          </p>
        </Container>
      </section>

      {/* Getting started */}
      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-center mb-12">
            Getting started is simple
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firstSteps.map((step) => (
              <div key={step.title} className="p-7 rounded-2xl bg-[#091527]/80 border border-white/10 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={BOOK_CALL_HREF}>
              <Button variant="glow" size="lg">
                Book your free scoping call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <ProcessSteps showLink={false} />

      {/* Engagement models */}
      <section className="py-24 sm:py-28 bg-[#040914] border-y border-white/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <Badge variant="glow" dot className="mx-auto">
              ENGAGEMENT MODELS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Work with us the way that fits
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              We&apos;ll recommend a model on your scoping call based on how
              defined your project is and how fast it will evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className="rounded-3xl p-7 sm:p-8 bg-[#081224]/90 border border-white/10 hover:border-blue-500/35 transition-colors flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{model.summary}</p>
                <p className="mt-4 text-xs text-blue-300">
                  <span className="font-semibold">Best for:</span> {model.bestFor}
                </p>
                <ul className="mt-6 pt-6 border-t border-white/10 space-y-3 flex-1">
                  {model.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8 block">
                  <Button variant="secondary" size="md" className="w-full">
                    Discuss this option
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyUs />
      <div className="pt-16" />
      <SisterReferral />
      <CTASection />
    </div>
  );
}
