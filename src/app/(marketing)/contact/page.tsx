"use client";

import * as React from "react";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";
import {
  Mail,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Loader2,
  Lock,
  Code2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";

const DEFAULT_BUDGET_MAP: Record<string, string> = {
  "website-development": "$10k - $25k",
  "crm-solutions": "$10k - $25k",
  "ui-ux-design": "$10k - $25k",
  "cms-development": "$10k - $25k",
  "ecommerce": "$25k - $50k",
  "digital-strategy": "$10k - $25k",
  "software-maintenance": "$500 - $1,500/mo",
};

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  return (
    <ContactFormInner
      key={searchParams.toString()}
      searchParams={searchParams}
    />
  );
}

function ContactFormInner({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) {
  const paramService = searchParams.get("service") || "website-development";
  const paramBudget =
    searchParams.get("budget") ||
    DEFAULT_BUDGET_MAP[paramService] ||
    "$10k - $25k";
  const paramTimeline =
    searchParams.get("timeline") || "Standard (6–10 Weeks)";

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    company: "",
    service: paramService,
    budget: paramBudget,
    timeline: paramTimeline,
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleServiceChange = (newService: string) => {
    setFormData((prev) => ({
      ...prev,
      service: newService,
      budget: DEFAULT_BUDGET_MAP[newService] || prev.budget,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg =
          data.message ||
          (data.errors && Object.values(data.errors).flat()[0]) ||
          "Please verify your details and try again.";
        throw new Error(String(errorMsg));
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "website-development",
        budget: "$10k - $25k",
        timeline: "Standard (6–10 Weeks)",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send inquiry. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Form */}
      <div className="lg:col-span-7 bg-[#081224] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="space-y-6 relative z-10">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <Code2 className="w-3.5 h-3.5" />
              <span>US-Managed Architecture Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Scope Your Custom Software Build
            </h2>
            <p className="text-sm text-slate-400">
              Select your product category or inquire about ongoing maintenance. Our technical architects respond within 1 business day.
            </p>
          </div>

          {success ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Project Scope Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. A senior solutions architect from our
                Wilmington, DE desk is reviewing your technical requirements and will
                follow up within 1 business day.
              </p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setSuccess(false)}
                className="mt-4"
              >
                Submit Another Project Brief
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Company or Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Acme Ventures or Stealth Startup"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Product Category *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <optgroup label="Core Digital Product Development">
                      <option value="website-development">
                        Startup MVP Development ($12.5k – $45k)
                      </option>
                      <option value="crm-solutions">
                        Custom CRM Development ($12.5k – $45k)
                      </option>
                      <option value="ui-ux-design">
                        Client &amp; Customer Portals ($10k – $45k)
                      </option>
                      <option value="cms-development">
                        Mobile App Development ($12.5k – $60k)
                      </option>
                      <option value="ecommerce">
                        SaaS Platform Development ($20k – $75k+)
                      </option>
                      <option value="digital-strategy">
                        Custom Business Software &amp; AI ($7.5k – $75k+)
                      </option>
                    </optgroup>
                    <optgroup label="Post-Launch Code Support">
                      <option value="software-maintenance">
                        Software Maintenance Retainer ($500 – $1,500/mo)
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Approximate Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="$10k - $25k">
                      $10k – $25k (Focused MVP / Core CRM / Portal)
                    </option>
                    <option value="$25k - $50k">
                      $25k – $50k (Full Application / SaaS Platform)
                    </option>
                    <option value="$50k - $100k+">
                      $50k – $100k+ (Enterprise Platform / Multi-Tenant)
                    </option>
                    <option value="Under $10k">
                      Under $10k (Interactive Prototype / Architecture Sprint)
                    </option>
                    <option value="$500 - $1,500/mo">
                      $500 – $1,500/mo (Software Maintenance Agreement)
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Target Start / Launch Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Rapid Sprint (4–6 Weeks)">
                      Rapid Sprint (4–6 Weeks)
                    </option>
                    <option value="Standard (6–10 Weeks)">
                      Standard (6–10 Weeks)
                    </option>
                    <option value="Complex Build (10–16 Weeks)">
                      Complex Build (10–16 Weeks)
                    </option>
                    <option value="Planning / Architecture Phase">
                      Planning / Architecture Phase
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Product Vision, Problem to Solve, or Key Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about the application you need built, primary user roles, desired integrations, or operational bottlenecks you want to eliminate..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Protected by mutual NDA and US data privacy standards.</span>
              </div>

              <Button
                type="submit"
                variant="glow"
                size="lg"
                disabled={loading}
                className="w-full justify-center text-sm font-semibold py-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Transmitting Technical Brief...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Technical Scope Brief
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Contact Details & Architecture Assurance */}
      <div className="lg:col-span-5 space-y-8">
        <div className="p-8 rounded-3xl bg-[#081224]/80 border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white">
            Architecture Consultation Desk
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our US-managed team partners with founders, non-technical entrepreneurs,
            and growing businesses to architect, build, and deploy production-grade software.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  Direct Inquiries
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white hover:text-blue-400 transition-colors font-medium"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  Headquarters
                </span>
                <span className="text-white font-medium">
                  {SITE_CONFIG.contact.address}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  Response SLA
                </span>
                <span className="text-white font-medium">
                  Within 1 business day for all technical briefs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ownership Guarantees */}
        <div className="p-6 rounded-3xl bg-blue-950/20 border border-blue-500/20 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Delivery Guarantees</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>100% IP &amp; Source Code Assignment:</strong> Full repository handover upon milestone completion.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Fixed-Price Milestones:</strong> Payments tied to testable deliverables, not hourly burn rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Post-Launch Warranty:</strong> Dedicated code bug-fix warranty on all production handovers.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            CUSTOM SOFTWARE CONSULTATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Discuss Your Vision &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Request Technical Scope
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us about your startup MVP, SaaS platform, custom CRM, customer
            portal, or mobile app. Our technical architects review your scope
            and provide a structured roadmap within 1 business day.
          </p>
        </Container>
      </section>

      {/* Main Grid: Form + Contact Info wrapped in Suspense */}
      <section className="py-20 sm:py-28">
        <Container>
          <React.Suspense
            fallback={
              <div className="p-12 text-center text-slate-400">
                Loading technical inquiry form...
              </div>
            }
          >
            <ContactFormWithParams />
          </React.Suspense>
        </Container>
      </section>
    </div>
  );
}
