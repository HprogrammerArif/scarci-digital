import type { Metadata } from "next";
import Link from "next/link";
import {
  Database,
  Workflow,
  BarChart3,
  Users2,
  Lock,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Custom CRM Software Development | Scarci Digital",
  description:
    "Bespoke CRM software engineered for your exact business workflows. Automated pipelines, intelligent lead scoring, real-time analytics, and enterprise data security.",
};

const crmCapabilities = [
  {
    title: "Bespoke Sales Pipelines",
    description:
      "Interactive drag-and-drop Kanban pipelines configured around your team's exact deal stages, qualification criteria, and follow-up cadence.",
    icon: <Workflow className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Automated Lead Scoring & Routing",
    description:
      "Intelligent algorithms that score inbound inquiries based on company size, intent signals, and engagement, routing them to the right reps immediately.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Unified Customer Profiles (360° View)",
    description:
      "Consolidate email threads, meeting transcripts, deal values, support tickets, and invoices into a single, real-time customer timeline.",
    icon: <Users2 className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Executive Analytics & Forecasting",
    description:
      "Custom reporting dashboards with real-time revenue projection, sales velocity metrics, team quotas, and commission tracking.",
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "Granular permissions down to individual fields, ensuring sensitive client records, financials, and internal notes are strictly protected.",
    icon: <Lock className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "Third-Party API & ERP Ecosystem",
    description:
      "Seamless bi-directional synchronization with QuickBooks, Stripe, Google Workspace, Slack, Twilio, and existing ERP tools.",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
  },
];

export default function CRMSolutionsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-20 border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-600/15 blur-[150px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-xs text-slate-600">/</span>
            <span className="text-xs text-amber-400 font-medium">CRM Solutions</span>
          </div>

          <Badge variant="glow" dot className="mx-auto">
            CORE AGENCY SPECIALIZATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Custom CRM Software Built To Fit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
              Your Workflow, Not Force It
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Off-the-shelf CRMs charge hefty per-seat licenses for features you never use. We engineer custom, scalable CRM platforms tailored precisely to your operational pipelines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Schedule CRM Blueprint Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/meridian-crm-system">
              <Button variant="secondary" size="lg">
                See Meridian CRM Case Study
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="glow" dot className="mx-auto">
              ENTERPRISE CRM CAPABILITIES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Powerful Features Engineered For High-Volume Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-amber-500/40 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison: Custom vs SaaS */}
      <section className="py-20 bg-[#040810] border-y border-white/5">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#081224] border border-white/10 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                ROI COMPARISON
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Why Companies Switch From SaaS CRMs to Custom
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase">Generic SaaS CRMs</span>
                <ul className="space-y-2 text-slate-400">
                  <li>❌ Expensive per-user recurring monthly seat fees</li>
                  <li>❌ Generic fields that don&apos;t match your deal stages</li>
                  <li>❌ Complex workflows your team avoids using</li>
                  <li>❌ Your client data locked in vendor walled gardens</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <span className="text-xs font-bold text-amber-300 uppercase">Scarci Custom CRM</span>
                <ul className="space-y-2 text-slate-200">
                  <li>✅ 100% intellectual property ownership—no user limits</li>
                  <li>✅ Custom tailored UI designed for speed & adoption</li>
                  <li>✅ Automated workflows saving 20+ hours per rep weekly</li>
                  <li>✅ Fully dedicated PostgreSQL database with private access</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
