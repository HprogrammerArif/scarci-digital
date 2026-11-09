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
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { monthlyPlans } from "@/data/packages";

const PLAN_BUDGET_MAP: Record<string, string> = {
  ...Object.fromEntries(monthlyPlans.map((p) => [p.serviceValue, p.budgetValue])),
  "custom-software": "$1,999+/mo (Custom Software)",
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
  const paramService = searchParams.get("service") || "plan-growth";
  const paramBudget =
    searchParams.get("budget") ||
    PLAN_BUDGET_MAP[paramService] ||
    "$799/mo + ad spend (Growth)";
  const paramTimeline =
    searchParams.get("timeline") ||
    (paramService.startsWith("plan-") || paramService === "custom-software"
      ? "Immediate (Monthly Plan)"
      : "Standard (6–8 Weeks)");

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
    if (PLAN_BUDGET_MAP[newService]) {
      setFormData((prev) => ({
        ...prev,
        service: newService,
        budget: PLAN_BUDGET_MAP[newService],
        timeline: "Immediate (Monthly Plan)",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        service: newService,
        budget: prev.budget.includes("/mo") ? "$5k - $10k" : prev.budget,
        timeline:
          prev.timeline === "Immediate (Monthly Plan)"
            ? "Standard (6–8 Weeks)"
            : prev.timeline,
      }));
    }
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
        service: "plan-growth",
        budget: "$799/mo + ad spend (Growth)",
        timeline: "Immediate (Monthly Plan)",
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Form */}
      <div className="lg:col-span-7">
        <div className="rounded-3xl bg-[#091527]/90 border border-white/10 p-4 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-xl relative">
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                US-Managed Onboarding Desk
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Start a Monthly Plan or Scope a Build
            </h2>
            <p className="text-sm text-slate-400">
              Select a monthly plan ($349–$1,499/mo) or tell us about a custom
              build. Our lead responds within 1 business day.
            </p>
          </div>

          {success ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Inquiry Received Successfully!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Thank you for contacting Scarci Digital. Your US account &amp;
                engineering lead is reviewing your details and will reply within
                1 business day with next steps and a 30-minute intro calendar
                link.
              </p>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSuccess(false)}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Jane Doe"
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
                    Company / Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="acmeservices.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Primary Plan or Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <optgroup label="Monthly Plans (Month-to-Month · No Setup Fee)">
                      <option value="plan-essentials">
                        01 Essentials ($349/mo — Site, Google Presence &amp; Reviews)
                      </option>
                      <option value="plan-growth">
                        02 Growth ($799/mo + ad spend — Meta Ads &amp; Landing Page — Most Popular)
                      </option>
                      <option value="plan-pro">
                        03 Pro ($1,499/mo + ad spend — AI Assistant &amp; Automations)
                      </option>
                      <option value="custom-software">
                        Custom Software / Portals (Starting at $1,999/mo)
                      </option>
                    </optgroup>
                    <optgroup label="One-Time Custom Project Builds">
                      <option value="website-development">
                        Website Build (Next.js / Webflow / WordPress)
                      </option>
                      <option value="ecommerce">
                        Shopify &amp; E-Commerce Storefront
                      </option>
                      <option value="cms-development">
                        CMS Migration &amp; Theme Engineering
                      </option>
                      <option value="crm-solutions">
                        Custom CRM &amp; Portal Software
                      </option>
                      <option value="ui-ux-design">
                        UI/UX Design Architecture
                      </option>
                      <option value="digital-strategy">
                        Digital Strategy &amp; Technical SEO
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Monthly Tier / Build Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <optgroup label="Monthly Plans (Month-to-Month)">
                      <option value="$349/mo (Essentials)">
                        $349/mo — Essentials Plan
                      </option>
                      <option value="$799/mo + ad spend (Growth)">
                        $799/mo + ad spend — Growth (Most Popular)
                      </option>
                      <option value="$1,499/mo + ad spend (Pro)">
                        $1,499/mo + ad spend — Pro Plan
                      </option>
                      <option value="$1,999+/mo (Custom Software)">
                        $1,999+/mo — Custom Software &amp; Portals
                      </option>
                    </optgroup>
                    <optgroup label="One-Time Custom Builds">
                      <option value="Under $5k">Under $5k</option>
                      <option value="$5k - $10k">
                        $5k – $10k (Standard Website / Storefront)
                      </option>
                      <option value="$10k - $25k">
                        $10k – $25k (Full Build / Custom CRM)
                      </option>
                      <option value="$25k+">
                        $25k+ (Multi-Platform Software)
                      </option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Target Start / Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Immediate (Monthly Plan)">
                      Immediate Onboarding (Monthly Plan)
                    </option>
                    <option value="ASAP (< 4 Weeks)">
                      ASAP (&lt; 4 Weeks Build Sprint)
                    </option>
                    <option value="Standard (6–8 Weeks)">
                      Standard (6–8 Weeks Milestone Build)
                    </option>
                    <option value="Flexible (2-3 Months)">
                      Flexible (2–3 Months Roadmap)
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Website, Support, or Automation Goals (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share your current website URL, platform (WordPress, Shopify, Webflow, custom), or what you want maintained, automated, or built..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                variant="glow"
                size="lg"
                className="w-full text-base py-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry &amp; Book 30-Min Call
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Direct Info & Guarantees */}
      <div className="lg:col-span-5 space-y-6">
        {/* Direct Channels Card */}
        <div className="p-8 rounded-3xl bg-[#091527]/80 border border-white/10 space-y-6 shadow-xl">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Direct US Account &amp; Tech Desk
          </h3>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  30-Minute Intro &amp; Tech Review
                </span>
                <p className="text-white font-semibold">
                  Free Website, SEO &amp; Workflow Audit
                </p>
                <span className="text-xs text-slate-400">
                  We review your stack and recommend the best plan of action.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  Email Directly
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white hover:text-blue-400 transition-colors font-semibold"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">
                  Headquarters
                </span>
                <p className="text-white font-semibold">
                  {SITE_CONFIG.contact.address}
                </p>
                <span className="text-xs text-slate-400">
                  US-Managed Client Relationships &bull; Serving Worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Initial inquiry response within 1 business day</span>
          </div>
        </div>

        {/* Sister Concern Note */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-500/20 space-y-3 shadow-xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-sm font-bold text-white">
              Sister Concern Guarantee
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            As a sister concern of Scarci Solutions, all monthly plans and
            custom build agreements include mutual non-disclosure protection
            (NDA), full IP ownership, and clear SLA response guarantees.
          </p>
        </div>

        {/* Security badge */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
          <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            Credentials are managed strictly via encrypted per-client vaults—never
            shared over plain email or chat.
          </span>
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
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            GET IN TOUCH
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Book an Intro Call or{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Choose Your Plan
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you want reliable monthly care starting at $349/mo, Meta ads
            growth, workflow automation, or a custom software build, we reply
            within 1 business day.
          </p>
        </Container>
      </section>

      {/* Main Grid: Form + Contact Info wrapped in Suspense */}
      <section className="py-20 sm:py-28">
        <Container>
          <React.Suspense
            fallback={
              <div className="p-12 text-center text-slate-400">
                Loading inquiry form...
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
