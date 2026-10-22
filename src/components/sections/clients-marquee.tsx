"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";

interface Partner {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: "Shopify Plus",
    category: "Enterprise E-Commerce",
    svg: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 2.45c-.048-.009-.096-.014-.144-.014-.26 0-.5.14-.62.36L12.5 6.64 10.427 2.8a.72.72 0 0 0-.624-.364c-.048 0-.096.005-.144.014L3.6 3.65a.72.72 0 0 0-.572.646L2 19.34a.72.72 0 0 0 .39.695l9.6 4.8a.72.72 0 0 0 .64 0l9.6-4.8a.72.72 0 0 0 .39-.695l-1.028-15.044a.72.72 0 0 0-.572-.646L15.337 2.45zm-2.837 5.75l1.6 3-1.6 1.2-1.6-1.2 1.6-3z" />
      </svg>
    ),
  },
  {
    name: "Next.js & Vercel",
    category: "Edge Infrastructure",
    svg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4.8l6.8 13.2H5.2L12 6.8z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    category: "Payment Infrastructure",
    svg: (
      <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.658.5 7.64.5 4.14 3.167 4.14 7.607c0 4.882 4.12 5.852 6.782 6.837 2.378.88 3.187 1.621 3.187 2.628 0 .979-.887 1.488-2.278 1.488-2.185 0-5.02-1.045-6.942-2.115l-.946 5.568c1.921.996 5.031 1.625 7.625 1.625 5.347 0 8.972-2.527 8.972-7.151 0-5.06-4.227-6.04-6.564-6.337z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Enterprise Database",
    svg: (
      <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7c0 1.5 1.65 2.8 4 3.45V14c0 2.21 3.58 4 8 4s8-1.79 8-4v-3.55c2.35-.65 4-1.95 4-3.45 0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.4 6 2s-2.13 2-6 2-6-1.4-6-2 2.13-2 6-2z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    category: "Enterprise Visual CMS",
    svg: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 8.4c-1.4 0-2.6.7-3.3 1.7L13.7 5h-4l3.5 10.3-2.3 3.7h3.8l5.8-10.6zm-11 5.3L5.4 5H1.2l4.8 14h3.9l2.4-7.2-2.5-3.5z" />
      </svg>
    ),
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Architecture",
    svg: (
      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Design Systems",
    svg: (
      <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2h4v8H8a4 4 0 1 1 0-8zm4 0h4a4 4 0 1 1 0 8h-4V2zm0 8h4a4 4 0 1 1-4 4v-4zm-4 4h4v4a4 4 0 1 1-4-4zm0-4h4v4H8a4 4 0 1 1 0-4z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Serverless Database & Auth",
    svg: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.4 1.5l-9.8 12.8a.8.8 0 0 0 .7 1.2h7.3l-1.3 7.5a.8.8 0 0 0 1.4.6l9.8-12.8a.8.8 0 0 0-.7-1.2h-7.3l1.3-7.5a.8.8 0 0 0-1.4-.6z" />
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    category: "Retention & CRM Automation",
    svg: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Strict Type Safety",
    svg: (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm10.5 8.5H16V9h-7v2.5h2.5V17h2v-5.5zm5.5 3.3c-.4.7-1.1 1.2-2 1.2-1.3 0-2.3-1-2.3-2.5s1-2.5 2.3-2.5c.8 0 1.5.4 1.9 1l-1.2.9c-.2-.4-.4-.5-.7-.5-.6 0-1 .5-1 1.1s.4 1.1 1 1.1c.3 0 .6-.1.8-.4l1.2.7z" />
      </svg>
    ),
  },
];

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-[#040810] border-y border-white/5 relative overflow-hidden">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Engineered With Enterprise Platforms & Verified Tech Ecosystems
          </p>
        </div>
      </Container>

      {/* Marquee Wrapper with fade edges */}
      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Left and right fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#040810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#040810] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all cursor-default backdrop-blur-sm shrink-0 group"
            >
              <div className="p-1 rounded-md bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {partner.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-tight">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium font-mono">
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
