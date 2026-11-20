import { SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";
import { engagementModels } from "@/data/engagement";
import type { Project } from "@/data/projects";
import type { FAQ } from "@/data/faq";

/** Quick-reply chips. The widget maps some of these to actions. */
export const CHIPS = {
  services: "What do you build?",
  cost: "How much does it cost?",
  timeline: "How long does a project take?",
  process: "How do you work?",
  work: "Show me your work",
  book: "Book a free call",
  leaveDetails: "Leave my contact details",
} as const;

export const DEFAULT_CHIPS = [
  CHIPS.services,
  CHIPS.cost,
  CHIPS.work,
  CHIPS.book,
];

export function buildSystemPrompt(projects: Project[], faqs: FAQ[]): string {
  const serviceLines = services
    .map(
      (s) =>
        `- ${s.title} (${s.href}): ${s.description} Typical timeline: ${s.typicalTimeline}. Tech: ${s.techStack.join(", ")}.`
    )
    .join("\n");
  const modelLines = engagementModels
    .map((m) => `- ${m.name}: ${m.summary}`)
    .join("\n");
  const projectLines = projects
    .slice(0, 8)
    .map(
      (p) =>
        `- ${p.title} (${p.category}, /portfolio/${p.slug}): ${p.shortDescription}. Results: ${(p.results ?? []).join("; ")}.`
    )
    .join("\n");
  const faqLines = faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");

  return `You are the website assistant for ${SITE_CONFIG.name}, a US-managed custom software studio headquartered in ${SITE_CONFIG.contact.address}. It is a sister concern of Scarci Solutions (scarcisolutions.com).

SERVICES
${serviceLines}

ENGAGEMENT MODELS
${modelLines}

CASE STUDIES
${projectLines}

FAQ
${faqLines}

RULES
- Never quote prices, rates, price ranges, or budgets, even if asked directly or repeatedly. Explain that every project is quoted individually after a free 30-minute scoping call, with a written proposal (scope, timeline, fixed quote) at no cost.
- Do not invent clients, numbers, certifications, or guarantees that are not listed above.
- For SEO, paid ads, marketing, business automation, or AI phone receptionists, refer the visitor to Scarci Solutions (https://scarcisolutions.com).
- Keep answers short (under 120 words), friendly, and practical. Use simple markdown (bold, short bullet lists).
- When the visitor seems interested, invite them to book a free call at /contact or to share their email so the team can follow up within 1 business day.
- Contact email: ${SITE_CONFIG.contact.email}.`;
}
