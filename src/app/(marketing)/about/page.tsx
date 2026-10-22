import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Users2,
  Code2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Scarci Digital | Sister Concern of Scarci Solutions",
  description:
    "Learn about Scarci Digital, a USA-based digital development agency and proud sister concern of Scarci Solutions. Serving clients across 20+ countries.",
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
      "From fixed-scope milestone delivery to regular sprint demos, you always know exactly what is being built, when, and for how much.",
    icon: <Target className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Business Outcome Driven",
    description:
      "A gorgeous website or CRM is only as good as the revenue and efficiency it unlocks. We measure success by conversions and bottom-line impact.",
    icon: <Award className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Global Reach, US Accountability",
    description:
      "Registered and headquartered in the United States with global engineering firepower serving clients across 20+ countries.",
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
            We Build The Digital Infrastructure Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Modern Industry Leaders
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Scarci Digital was founded to bridge the gap between creative agency design and enterprise-level software engineering discipline.
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
                  CORPORATE HERITAGE
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  A Sister Concern of Scarci Solutions
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              As the specialized digital agency arm within the Scarci family, Scarci Digital operates in tandem with{" "}
              <a
                href="https://scarcisolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline font-semibold inline-flex items-center gap-1"
              >
                Scarci Solutions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              . This synergy allows us to bring Fortune-grade architectural standards, cybersecurity vigilance, and complex CRM engineering directly to growth-stage businesses, mid-market companies, and scaling enterprises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="font-bold text-white block">USA Headquarters</span>
                <span>Incorporated and based in the United States</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">20+ Countries</span>
                <span>Clients across North America, Europe & Asia</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Full Lifecycle</span>
                <span>From UI design to production CRM deployment</span>
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
              Built on Discipline, Transparency & Results
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

      <CTASection />
    </div>
  );
}
