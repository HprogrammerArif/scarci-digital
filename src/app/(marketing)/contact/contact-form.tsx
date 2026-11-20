"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { projectStages, projectTimelines } from "@/data/engagement";

const OTHER_OPTIONS = [
  { value: "support", label: "Support for an existing product" },
  { value: "not-sure", label: "Not sure yet" },
];

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors";
const selectClass =
  "w-full bg-[#081324] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors";
const labelClass =
  "text-xs font-semibold text-slate-300 uppercase tracking-wider block";

function initialService(param: string | null): string {
  if (!param) return "not-sure";
  const known =
    services.some((s) => s.slug === param) ||
    OTHER_OPTIONS.some((o) => o.value === param);
  return known ? param : "not-sure";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const emptyForm = React.useMemo(
    () => ({
      fullName: "",
      email: "",
      company: "",
      service: initialService(searchParams.get("service")),
      stage: projectStages[0],
      timeline: projectTimelines[1],
      message: "",
      website: "", // honeypot: real visitors never see or fill this
    }),
    [searchParams]
  );

  const [formData, setFormData] = React.useState(emptyForm);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const update =
    (field: keyof typeof formData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const serviceLabel =
        services.find((s) => s.slug === formData.service)?.title ||
        OTHER_OPTIONS.find((o) => o.value === formData.service)?.label ||
        formData.service;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceLabel,
          pageUrl: window.location.pathname + window.location.search,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.message || "Please check your details and try again."
        );
      }
      setSuccess(true);
      setFormData(emptyForm);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4" role="status">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Thanks, we got it!</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          We&apos;ll review your project and reply within 1 business day to
          set up a free scoping call.
        </p>
        <Button variant="secondary" size="md" onClick={() => setSuccess(false)} className="mt-4">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm" role="alert">
          {error}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={update("website")}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cf-name" className={labelClass}>Your name *</label>
          <input id="cf-name" type="text" required autoComplete="name" value={formData.fullName} onChange={update("fullName")} placeholder="Jane Doe" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-email" className={labelClass}>Work email *</label>
          <input id="cf-email" type="email" required autoComplete="email" value={formData.email} onChange={update("email")} placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cf-company" className={labelClass}>Company</label>
          <input id="cf-company" type="text" autoComplete="organization" value={formData.company} onChange={update("company")} placeholder="Acme Inc." className={inputClass} />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-service" className={labelClass}>What do you need? *</label>
          <select id="cf-service" value={formData.service} onChange={update("service")} className={selectClass}>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            {OTHER_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="cf-stage" className={labelClass}>Where are you today?</label>
          <select id="cf-stage" value={formData.stage} onChange={update("stage")} className={selectClass}>
            {projectStages.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-timeline" className={labelClass}>When do you want to start?</label>
          <select id="cf-timeline" value={formData.timeline} onChange={update("timeline")} className={selectClass}>
            {projectTimelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="cf-message" className={labelClass}>Tell us about your project *</label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={formData.message}
          onChange={update("message")}
          placeholder="What are you building, who is it for, and what problem should it solve? Mention any tools it needs to connect with."
          className={`${inputClass} resize-none`}
        />
      </div>

      <p className="flex items-center gap-2 text-xs text-slate-400">
        <Lock className="w-3.5 h-3.5 text-blue-400" />
        Your details stay confidential. We&apos;re happy to sign an NDA before you share specifics.
      </p>

      <Button type="submit" variant="glow" size="lg" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Project Brief
          </>
        )}
      </Button>
    </form>
  );
}
