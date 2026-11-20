import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Mail, Calendar, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { BOOK_CALL_HREF, SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us: Start Your Project",
  description:
    "Tell us about your software, app, or website project. We reply within 1 business day to schedule a free scoping call and send a written proposal.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We reply within 1 business day",
  "Free 30-minute scoping call",
  "Written proposal with scope, timeline, and fixed quote",
];

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <section className="relative pb-14 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            CONTACT
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s talk about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              your project
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Share a few details and we&apos;ll come back with questions, ideas,
            and next steps. No sales pressure.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 bg-[#081224] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Send us a project brief
              </h2>
              <p className="text-sm text-slate-400 mb-8">
                The more context you share, the more useful our first call will be.
              </p>
              <Suspense fallback={<div className="py-12 text-center text-slate-400">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-[#081224]/80 border border-white/10 space-y-5">
                <h2 className="text-lg font-bold text-white">Prefer to talk first?</h2>
                <Link
                  href={BOOK_CALL_HREF}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-blue-600/15 border border-blue-500/30 hover:border-blue-400/60 transition-colors"
                >
                  <Calendar className="w-5 h-5 text-blue-300 shrink-0" />
                  <span>
                    <span className="block text-sm font-semibold text-white">Book a free 30-minute call</span>
                    <span className="block text-xs text-slate-400">
                      {SITE_CONFIG.bookingUrl ? "Pick a time that works for you" : "Send the form and we'll offer times"}
                    </span>
                  </span>
                </Link>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="block text-xs text-slate-400">Email</span>
                      <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white hover:text-blue-400 font-medium">
                        {SITE_CONFIG.contact.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="block text-xs text-slate-400">Headquarters</span>
                      <span className="text-white font-medium">{SITE_CONFIG.contact.address}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <span className="block text-xs text-slate-400">Hours</span>
                      <span className="text-white font-medium">{SITE_CONFIG.contact.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-7 rounded-3xl bg-blue-950/20 border border-blue-500/20 space-y-4">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-300">
                  <ShieldCheck className="w-4 h-4" />
                  What happens next
                </h2>
                <ol className="space-y-3">
                  {nextSteps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
