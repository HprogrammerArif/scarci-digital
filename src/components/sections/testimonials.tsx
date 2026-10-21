"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#040812] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <Badge variant="glow" dot className="mx-auto">
            VERIFIED CLIENT REVIEWS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Visionary Leaders &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              High-Growth Brands
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Read firsthand how our engineering, UX, and CRM implementations transformed digital operations and drove bottom-line expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#081324]/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-500/30" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 inline" />
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300 font-medium">{item.company}</span>
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-blue-400">
                  {item.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
