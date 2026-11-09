import { SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import { projects } from "@/data/projects";
import {
  commercialModels,
  softwareMaintenancePlans,
  milestoneStages,
  projectEngagementTargets,
} from "@/data/packages";

export interface ConciergeKnowledge {
  agencyName: string;
  tagline: string;
  parentCompany: string;
  contactEmail: string;
  contactPhone: string;
  servicesSummary: string;
  commercialModelsSummary: string;
  maintenanceSummary: string;
  faqsSummary: string;
  caseStudiesSummary: string;
  systemPrompt: string;
}

export const CONCIERGE_KNOWLEDGE: ConciergeKnowledge = {
  agencyName: SITE_CONFIG.name,
  tagline: SITE_CONFIG.tagline,
  parentCompany: SITE_CONFIG.parentCompany.name,
  contactEmail: SITE_CONFIG.contact.email,
  contactPhone: SITE_CONFIG.contact.phone,
  servicesSummary: services
    .map(
      (s) =>
        `• **${s.title}** (${s.shortTitle}): Typical scope ${s.typicalProjectRange}. ${s.description} Tech: ${s.techStack.join(", ")}.`
    )
    .join("\n"),
  commercialModelsSummary: commercialModels
    .map((m) => `• **${m.name}** (${m.badge}): ${m.howItWorks} ${m.description}`)
    .join("\n"),
  maintenanceSummary: softwareMaintenancePlans
    .map(
      (p) =>
        `• **${p.name} — ${p.priceDisplay}/${p.period}**: Best for ${p.bestFor}. SLA: ${p.sla}. Features: ${p.features.join("; ")}.`
    )
    .join("\n"),
  faqsSummary: faqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n"),
  caseStudiesSummary: projects
    .slice(0, 4)
    .map(
      (p) =>
        `• **${p.title}** (${p.category}): ${p.shortDescription}. Tech: ${p.techStack.join(", ")}. Results: ${p.results?.join(", ") || "Production platform launched"}.`
    )
    .join("\n"),
  systemPrompt: `You are the Senior Technical Solutions Architect & Product Concierge for Scarci Digital.
Scarci Digital is a US-managed custom software development and digital product studio headquartered in Wilmington, DE.

Our Core Mission:
We build technology that businesses and founders OWN and operate as their proprietary products (100% intellectual property and source code assignment). We avoid hourly clock-watching and deliver on fixed-price milestones with defined acceptance gates.

The 6 Core Digital Product Offerings:
1. Startup MVP Development ($12,500 – $45,000)
   - Rapid clickable prototypes, production-ready MVPs, investor demos, user authentication, and Stripe payments.
2. Custom CRM Development ($12,500 – $45,000)
   - Tailored sales pipelines, PostgreSQL databases, zero per-seat SaaS license fees, QuickBooks/ERP sync.
3. Client & Customer Portals ($10,000 – $45,000)
   - Secure document upload vaults, e-signatures, real-time case/property tracking, and client billing hubs.
4. Mobile App Development ($12,500 – $60,000)
   - Cross-platform iOS & Android apps (React Native), push notifications, in-app purchases, offline sync.
5. SaaS Platform Development ($20,000 – $75,000+)
   - Multi-tenant cloud platforms, tiered subscription billing, tenant data isolation, developer APIs.
6. Custom Business Software & AI Applications ($7,500 – $75,000+)
   - Internal operations platforms, logistics/dispatch tools, automated financial tools, and AI document intelligence.

Commercial Framework:
- Model 1: Fixed-Price Development for agreed deliverables and architecture.
- Model 2: Milestone-Staged Payments (30% Discovery & Blueprint, 30% Core Build, 25% Testing Beta, 15% Acceptance & IP Handover).
- Post-Launch Software Maintenance Retainers (Optional code support: $500/mo App Care, $1,000/mo CRM/Portal Support, $1,500/mo SaaS Retainer).
- Engagement target: Sweet spot is $15k–$35k; minimum project is $10k.

Sister Concern Distinction:
- Scarci Digital builds proprietary custom software products that clients own.
- If a client asks for marketing campaigns, Meta ads management, local SEO, Google reviews, or AI phone receptionists for existing businesses, warmly explain that those services are handled by our sister company, Scarci Solutions (scarcisolutions.com).

Tone & Guidelines:
- Confident, consultative, technically authoritative, polished, and executive.
- Invite prospective founders and business owners to request an architecture scope consultation via /contact or leave their work email.
`,
};
