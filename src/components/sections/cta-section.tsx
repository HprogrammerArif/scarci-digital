"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/30 via-indigo-600/25 to-cyan-500/20 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent shadow-2xl shadow-blue-950/40">
          <div className="rounded-[23px] bg-[#0A1628]/95 border border-white/10 p-5 sm:p-12 lg:p-20 text-center backdrop-blur-2xl relative overflow-hidden">
            {/* Subtle inner grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <Badge variant="glow" dot className="mx-auto">
                TAKE THE NEXT STEP
              </Badge>

              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight break-words">
                Ready To Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Extraordinary?
                </span>
              </h2>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Schedule a 30-minute discovery call with our senior engineering architects. We&apos;ll evaluate your goals, review your technical stack, and provide an actionable roadmap within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="glow" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Discovery Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 justify-center">
                    Send Us Project Scope
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free Consultation & Estimate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Strict NDA Protection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Sister Concern of Scarci Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
