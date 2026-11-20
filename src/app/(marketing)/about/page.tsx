import type { Metadata } from "next";
import {
  ShieldCheck,
  Globe2,
  Code2,
  ExternalLink,
  Target,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessSteps } from "@/components/sections/process-steps";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Scarci Digital is a US-managed custom software studio and sister concern of Scarci Solutions, building software for clients in the US, Canada, the UK, Europe, and Australia.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Engineering Excellence First",
    description:
      "We write clean, typed, modular code built for longevity. We refuse fragile shortcuts and plugin overload in favor of maintainable software.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Zero Ambiguity & Transparency",
    description:
      "Written scope, weekly demos, and a shared project board. You always know what is being built, when it ships, and what it costs before work starts.",
    icon: <Target className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Business Outcome Driven",
    description:
      "Good-looking software that nobody uses is a failure. We define what success means for your business up front and build toward it.",
    icon: <Award className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Global Reach, US Accountability",
    description:
      "Registered and managed in the United States, serving clients in North America, the UK, Europe, and Australia with a distributed engineering team.",
    icon: <Globe2 className="w-6 h-6 text-purple-400" />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            ABOUT SCARCI DIGITAL
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We build the software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              growing businesses run on
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Scarci Digital is a custom software studio for founders and growing companies who want a reliable technical partner: thoughtful product design, solid engineering, and honest communication.
          </p>
        </Container>
      </section>

      {/* Sister Concern Story */}
      <section className="py-20 bg-[#040810] border-b border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#081224] border border-blue-500/20 p-5 sm:p-8 lg:p-12 space-y-6 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  OUR STORY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  A Sister Concern of Scarci Solutions
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Scarci Digital is the software development arm of the Scarci family, working alongside{" "}
              <a
                href="https://scarcisolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline font-semibold inline-flex items-center gap-1"
              >
                Scarci Solutions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              . Scarci Solutions helps businesses grow with SEO, paid ads, automation, and AI receptionists. Scarci Digital builds the products themselves: MVPs, SaaS platforms, CRMs, portals, mobile apps, and websites. Clients get one family of companies that can take them from idea to launched product to growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="font-bold text-white block">USA Headquarters</span>
                <span>Wilmington, DE, United States</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Where we work</span>
                <span>US, Canada, UK, Europe & Australia</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Full Lifecycle</span>
                <span>Strategy, design, development & support</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              OUR CORE PRINCIPLES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What you can expect from us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-blue-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyUs />
      <ProcessSteps />
      <CTASection />
    </div>
  );
}
