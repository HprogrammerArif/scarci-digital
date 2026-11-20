import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BOOK_CALL_HREF } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 via-indigo-600/25 to-cyan-500/20 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent shadow-2xl shadow-blue-950/40">
          <div className="rounded-[23px] bg-[#0A1628]/95 border border-white/10 px-5 py-12 sm:p-14 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-7">
              <Badge variant="glow" dot className="mx-auto">
                LET&apos;S TALK
              </Badge>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Have a project in mind?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Let&apos;s scope it together.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Book a free 30-minute call. We&apos;ll talk through your goals,
                suggest the right approach, and follow up with a written
                proposal: scope, timeline, and a fixed quote.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href={BOOK_CALL_HREF} className="w-full sm:w-auto">
                  <Button variant="glow" size="lg" className="w-full sm:w-auto px-8">
                    <Calendar className="w-4 h-4" />
                    Book a Free Call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8">
                    Send a Project Brief
                  </Button>
                </Link>
              </div>

              <ul className="pt-7 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Free consultation &amp; proposal
                </li>
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Mutual NDA on request
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Reply within 1 business day
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
