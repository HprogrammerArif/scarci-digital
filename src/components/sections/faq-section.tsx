"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/cn";

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>("1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050B14] relative">
      <Container size="narrow">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <Badge variant="glow" dot className="mx-auto">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              No Ambiguity
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Got questions about project scopes, development milestones, pricing models, or our sister concern relationship? We&apos;ve got you covered.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-[#091527] border-blue-500/40 shadow-lg shadow-blue-500/5"
                    : "bg-[#070F1E]/80 border-white/5 hover:border-white/10"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={cn(
                      "text-base sm:text-lg font-bold transition-colors",
                      isOpen ? "text-blue-400" : "text-white"
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                      isOpen
                        ? "bg-blue-500/20 text-blue-400 rotate-180"
                        : "bg-white/5 text-slate-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have a custom inquiry or tender?</h4>
              <p className="text-xs text-slate-400">Our engineering leads reply within 24 hours.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all shrink-0"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
