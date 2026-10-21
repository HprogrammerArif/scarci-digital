import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Scarci Digital",
  description: "Privacy policy and client data protection practices of Scarci Digital.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      <Container size="narrow" className="py-16 sm:py-24 space-y-8">
        <Badge variant="glow">LEGAL & PRIVACY</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 font-mono">Last updated: October 2026</p>

        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
          <p>
            Scarci Digital (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a sister concern of Scarci Solutions, is committed to safeguarding the privacy and confidentiality of our clients, prospective customers, and website visitors.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            When you inquire about our services, book a discovery call, or subscribe to our insights newsletter, we may collect your name, business email address, company name, phone number, and project requirements.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. How We Use Your Data</h2>
          <p>
            Information collected is strictly utilized to communicate project scopes, generate transparent proposals, manage ongoing technical sprints, and maintain enterprise customer support. We never sell, lease, or monetize client data.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Data Security & Storage</h2>
          <p>
            All data transmitted through our systems is secured with enterprise-grade SSL/TLS encryption. We adhere to rigorous security standards aligned with SOC 2 compliance frameworks and strict non-disclosure agreements (NDAs).
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Contact Our Privacy Officer</h2>
          <p>
            For inquiries regarding our privacy standards or to request data removal, please contact{" "}
            <a href="mailto:privacy@scarcidigital.com" className="text-blue-400 underline">
              privacy@scarcidigital.com
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
