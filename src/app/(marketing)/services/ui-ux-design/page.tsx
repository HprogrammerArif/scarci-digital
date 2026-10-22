import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  Sparkles,
  Layers,
  Eye,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MousePointerClick,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "UI/UX Design & Design Systems | Scarci Digital",
  description:
    "Research-driven UI/UX design, interactive Figma prototypes, and scalable component systems designed for high engagement and intuitive product experiences.",
};

const designSteps = [
  {
    title: "User Research & Journey Mapping",
    description:
      "We dissect your target audience's pain points, analyze competitor touchpoints, and map friction-free user paths from landing to conversion.",
    icon: <Eye className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "Wireframing & Information Architecture",
    description:
      "Structural wireframes that organize complex information hierarchies, content modules, and navigation menus before visual styling.",
    icon: <Layers className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "High-Fidelity Figma Prototyping",
    description:
      "Stunning visual design with interactive clickable animations that simulate the final product so you can test before engineering begins.",
    icon: <MousePointerClick className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Design Systems & Token Libraries",
    description:
      "Comprehensive Figma UI kits containing color palettes, typography scales, iconography, and responsive components for rapid brand iteration.",
    icon: <Palette className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Mobile-First Responsive Layouts",
    description:
      "Flawless user experiences engineered for smartphone, tablet, laptop, and ultra-wide desktop viewports with fluid typography.",
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "WCAG Accessibility Compliance",
    description:
      "Contrast validation, keyboard navigation semantics, and screen-reader accessibility meeting strict WCAG 2.1 AA standards.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
  },
];

export default function UIUXDesignPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-pink-400 font-medium">UI/UX Design</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Design That Captivates Minds &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-indigo-400">
              Accelerates Conversions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We craft sleek, research-backed digital products and websites that users genuinely love to use—transforming complex requirements into intuitive experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                Request Design Sprint
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                View Design Showcase
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-20 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              DESIGN METHODOLOGY
            </Badge>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Human-Centered Design Meets High-Impact Aesthetics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {designSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-pink-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
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
