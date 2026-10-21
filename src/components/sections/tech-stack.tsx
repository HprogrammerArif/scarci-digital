"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Code2, ShoppingBag, Database, Cpu } from "lucide-react";

const categories = [
  {
    name: "Web & Frontend",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    description: "Lightning-fast, SEO-optimized web interfaces",
    tools: [
      { name: "Next.js", badge: "App Router" },
      { name: "React 19", badge: "Core UI" },
      { name: "TypeScript", badge: "Type Safety" },
      { name: "Tailwind CSS", badge: "Styling" },
      { name: "Framer Motion", badge: "Micro-interactions" },
    ],
  },
  {
    name: "E-Commerce & CMS",
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    description: "High-converting storefronts & content engines",
    tools: [
      { name: "Shopify Plus", badge: "Custom Themes" },
      { name: "Webflow", badge: "Visual CMS" },
      { name: "WordPress", badge: "Elementor / ACF" },
      { name: "WooCommerce", badge: "E-Com" },
      { name: "Klaviyo", badge: "Email / CRM" },
    ],
  },
  {
    name: "Backend & Custom CRM",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    description: "Scalable data pipelines & internal tooling",
    tools: [
      { name: "Node.js", badge: "Server Logic" },
      { name: "PostgreSQL", badge: "Relational DB" },
      { name: "Supabase / Prisma", badge: "ORM & Auth" },
      { name: "Redis", badge: "High-speed Caching" },
      { name: "REST & Webhooks", badge: "APIs" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    description: "Global edge networks and bulletproof security",
    tools: [
      { name: "Vercel", badge: "Edge Deployment" },
      { name: "AWS Cloud", badge: "Scalable Hosting" },
      { name: "Stripe", badge: "Payment Processing" },
      { name: "Figma", badge: "Design Systems" },
      { name: "Cloudflare", badge: "CDN & WAF" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" dot className="mx-auto">
            MODERN TECH ARCHITECTURE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built On Modern,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Future-Proof Technologies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            We select the optimal stack tailored to your speed, scalability, and maintainability requirements. No vendor lock-in, just clean engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#091527]/80 border border-white/10 hover:border-blue-500/40 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5">
                {cat.tools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="font-semibold text-slate-200">{tool.name}</span>
                    <span className="font-mono text-[10px] text-blue-400">
                      {tool.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
