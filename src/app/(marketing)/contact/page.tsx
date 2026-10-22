"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Loader2,
  Calendar,
  Lock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "website-development";
  const initialBudget = searchParams.get("budget") || "$5k - $10k";

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    company: "",
    service: initialService,
    budget: initialBudget,
    timeline: "Standard (6–8 Weeks)",
    message: "",
  });

  // Sync if URL search params change
  React.useEffect(() => {
    const s = searchParams.get("service");
    const b = searchParams.get("budget");
    if (s || b) {
      setFormData((prev) => ({
        ...prev,
        ...(s ? { service: s } : {}),
        ...(b ? { budget: b } : {}),
      }));
    }
  }, [searchParams]);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

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
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "website-development",
        budget: "$5k - $10k",
        timeline: "Standard (6–8 Weeks)",
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
        <div className="rounded-3xl bg-[#091527]/90 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative">
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                Discovery Desk Active
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Submit Project Scope & Inquiry
            </h2>
            <p className="text-sm text-slate-400">
              Fill out your technical requirements below. Our principal architect reviews and responds within 24 hours.
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
                Thank you for contacting Scarci Digital. Our engineering leadership is reviewing your specifications and will deliver a preliminary proposal and calendar link within 24 hours.
              </p>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="md"
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
                    placeholder="e.g. Alexander Vance"
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
                    placeholder="alex@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Primary Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="website-development">Website Development (Next.js)</option>
                    <option value="ecommerce">Shopify Plus & E-Commerce</option>
                    <option value="cms-development">CMS (Webflow & WordPress)</option>
                    <option value="crm-solutions">Custom CRM Solutions</option>
                    <option value="ui-ux-design">UI/UX Design Architecture</option>
                    <option value="digital-strategy">Digital Strategy & SEO</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $10k">$5k – $10k (Recommended for standard builds)</option>
                    <option value="$10k - $25k">$10k – $25k (Full build / Custom CRM)</option>
                    <option value="$25k+">$25k+ (Enterprise Multi-Platform)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="ASAP (< 4 Weeks)">ASAP (&lt; 4 Weeks Sprint)</option>
                    <option value="Standard (6–8 Weeks)">Standard (6–8 Weeks Milestone)</option>
                    <option value="Flexible (2-3 Months)">Flexible (2–3 Months Roadmap)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  Project Scope & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project, target audience, technical requirements, or current challenges..."
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
                    Transmitting Discovery Scope...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Project Inquiry & Book Call
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
            Direct Engineering Contacts
          </h3>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Inquiries & RFPs</span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white hover:text-blue-400 transition-colors font-semibold"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Direct Phone</span>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-white hover:text-blue-400 transition-colors font-semibold"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Headquarters</span>
                <p className="text-white font-semibold">United States</p>
                <span className="text-xs text-slate-400">
                  Serving North America, UK, Europe & Worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Guaranteed engineer response within 24 hours</span>
          </div>
        </div>

        {/* Sister Concern Note */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-500/20 space-y-3 shadow-xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-sm font-bold text-white">Sister Concern Guarantee</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            As a sister concern of Scarci Solutions, all client agreements include enterprise non-disclosure protection (NDA), dedicated IP assignment, and 90-day post-launch code warranties.
          </p>
        </div>

        {/* Security badge */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400">
          <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>All client conversations and project scopes are protected by standard mutual non-disclosure (NDA).</span>
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
            START A CONVERSATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Digital Milestone
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you have a full RFP ready or want to bounce ideas off our senior architects, we reply within 24 hours with actionable technical guidance.
          </p>
        </Container>
      </section>

      {/* Main Grid: Form + Contact Info wrapped in Suspense */}
      <section className="py-20 sm:py-28">
        <Container>
          <React.Suspense
            fallback={
              <div className="p-12 text-center text-slate-400">
                Loading discovery form...
              </div>
            }
          >
            <ContactFormInner />
          </React.Suspense>
        </Container>
      </section>
    </div>
  );
}
