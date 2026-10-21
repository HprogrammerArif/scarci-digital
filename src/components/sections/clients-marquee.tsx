"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";

const partners = [
  { name: "Shopify Plus", category: "Certified Partner", icon: "🛍️" },
  { name: "Webflow", category: "Expert Partner", icon: "🌐" },
  { name: "Next.js & Vercel", category: "Edge Infrastructure", icon: "▲" },
  { name: "Stripe", category: "Verified Payments", icon: "💳" },
  { name: "WordPress VIP", category: "CMS Engineering", icon: "⚡" },
  { name: "HubSpot CRM", category: "Integration", icon: "🎯" },
  { name: "PostgreSQL", category: "Enterprise DB", icon: "🐘" },
  { name: "Klaviyo", category: "Email & Retention", icon: "✉️" },
  { name: "Amazon Web Services", category: "Cloud Architecture", icon: "☁️" },
  { name: "Figma", category: "Design Systems", icon: "🎨" },
];

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-[#040810] border-y border-white/5 relative overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Engineered With Industry-Standard Platforms & Partner Ecosystems
          </p>
        </div>
      </Container>

      {/* Marquee Wrapper with fade edges */}
      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Left and right fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040810] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {/* Double list to ensure smooth infinite loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all cursor-default backdrop-blur-sm shrink-0"
            >
              <span className="text-lg">{partner.icon}</span>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-white">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
