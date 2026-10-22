import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Agency Insights & Technical Blog | Scarci Digital",
  description:
    "Engineering insights on Next.js 15, Shopify Plus checkout optimization, Webflow scalability, and custom CRM software architectures.",
};

import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Hero */}
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="glow" dot className="mx-auto">
            THOUGHT LEADERSHIP & SPECIFICATIONS
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering & Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Insights
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical breakdowns, architectural patterns, and conversion strategies from our senior software engineers and designers.
          </p>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((art, idx) => (
              <article
                key={idx}
                className="p-8 rounded-3xl bg-[#091527]/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{art.date}</span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
