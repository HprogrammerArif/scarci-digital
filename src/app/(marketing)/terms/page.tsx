import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service | Scarci Digital",
  description: "Terms of service and client engagement terms of Scarci Digital.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <Container size="narrow" className="py-16 sm:py-24 space-y-8">
        <Badge variant="glow">LEGAL & TERMS</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 font-mono">Last updated: October 2026</p>

        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
          <p>
            Welcome to Scarci Digital. By accessing our website, services, or engaging our engineering team, you agree to be bound by the following Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Scope of Engagement</h2>
          <p>
            All custom software development, website builds, Shopify implementations, and CRM engineering projects are governed by detailed Statements of Work (SOW) executed between the client and Scarci Digital.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Intellectual Property (IP) Ownership</h2>
          <p>
            Upon final milestone payment completion, 100% of all custom code, design assets, database schemas, and documentation created specifically for the client transfer entirely to the client.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Post-Launch Warranty & SLA</h2>
          <p>
            All projects include a guaranteed post-launch code warranty period (30–90 days, depending on tier) covering bug remediation, security patches, and deployment support without additional billing.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the United States.
          </p>
        </div>
      </Container>
    </div>
  );
}
