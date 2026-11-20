// How we engage with clients. Deliberately contains no prices:
// every project is quoted individually after a free scoping call.

export interface EngagementModel {
  id: string;
  name: string;
  summary: string;
  bestFor: string;
  highlights: string[];
}

export interface DeliveryPhase {
  number: string;
  name: string;
  summary: string;
  deliverables: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    id: "fixed-scope",
    name: "Fixed-Scope Project",
    summary:
      "Scope, deliverables, timeline, and acceptance criteria are agreed in writing before development starts. You know exactly what you are getting.",
    bestFor: "MVPs, portals, CRMs, websites, and stores with a clear feature list.",
    highlights: [
      "Written scope and acceptance criteria",
      "Milestone-based delivery with demos at each stage",
      "Change requests handled transparently, never silently",
      "Full code and IP handover at completion",
    ],
  },
  {
    id: "dedicated-team",
    name: "Dedicated Product Team",
    summary:
      "A dedicated team of engineers and a product lead working as an extension of your company, with a shared roadmap and sprint cadence.",
    bestFor: "SaaS products and platforms with an evolving roadmap.",
    highlights: [
      "Senior engineers assigned to your product",
      "Two-week sprints with demos and planning",
      "Direct Slack access to the team",
      "Scale the team up or down as priorities change",
    ],
  },
  {
    id: "ongoing-support",
    name: "Ongoing Support & Growth",
    summary:
      "After launch, we keep your software secure, fast, and moving forward with maintenance, monitoring, and planned feature work.",
    bestFor: "Any product we have built, or an existing codebase we take over.",
    highlights: [
      "Security patches and dependency updates",
      "Uptime monitoring, backups, and incident response",
      "Reserved engineering time for improvements",
      "Monthly health report and roadmap check-in",
    ],
  },
];

export const deliveryPhases: DeliveryPhase[] = [
  {
    number: "01",
    name: "Discovery & Scope",
    summary:
      "We learn your business, users, and goals, then turn them into a written scope with a timeline you can plan around.",
    deliverables: [
      "Requirements and user stories",
      "Technical architecture plan",
      "Milestone timeline",
    ],
  },
  {
    number: "02",
    name: "Design & Prototype",
    summary:
      "We design the experience in Figma and validate it with a clickable prototype before any code is written.",
    deliverables: [
      "User flows and wireframes",
      "High-fidelity UI design",
      "Clickable prototype",
    ],
  },
  {
    number: "03",
    name: "Build & Test",
    summary:
      "Development in short sprints with a live staging link, so you see working software every week, not just at the end.",
    deliverables: [
      "Weekly staging releases",
      "Automated and manual QA",
      "Integrations and data migration",
    ],
  },
  {
    number: "04",
    name: "Launch & Grow",
    summary:
      "We deploy to production, hand over code and documentation, train your team, and stay on for support and next features.",
    deliverables: [
      "Production deployment",
      "Code, accounts, and docs handover",
      "Post-launch warranty and support",
    ],
  },
];

export const commitments = [
  {
    title: "You own 100% of the code",
    desc: "Source code, designs, and cloud accounts are transferred to you. No lock-in.",
  },
  {
    title: "Senior engineers, US-managed",
    desc: "Your project is led from the US with a single point of contact who owns delivery.",
  },
  {
    title: "Weekly demos",
    desc: "You see working software on a staging link every week, not just at the end.",
  },
  {
    title: "NDA from the first call",
    desc: "We sign a mutual NDA before you share anything confidential.",
  },
  {
    title: "Post-launch warranty",
    desc: "Bugs found after launch in the delivered scope are fixed at no extra cost during the warranty period.",
  },
  {
    title: "Reply within 1 business day",
    desc: "Every inquiry gets a personal reply from our team within one business day.",
  },
];

export const sisterConcernReferral = {
  title: "Looking for marketing, SEO, or AI receptionists?",
  description:
    "Scarci Digital focuses on building software. For SEO, paid ads, business automation, and AI phone receptionists for your existing business, work with our sister company.",
  sisterCompanyName: "Scarci Solutions",
  sisterCompanyUrl: "https://scarcisolutions.com",
  linkText: "Visit Scarci Solutions",
};

export const industries = [
  { name: "SaaS & Technology", desc: "Platforms, internal tools, and product teams that need to ship faster." },
  { name: "E-commerce & Retail", desc: "Online stores, subscriptions, and order operations." },
  { name: "Healthcare & Wellness", desc: "Booking, patient portals, and HIPAA-aware workflows." },
  { name: "Real Estate & Construction", desc: "Deal pipelines, property portals, and project tracking." },
  { name: "Finance & Professional Services", desc: "Client portals, CRMs, and document workflows." },
  { name: "Logistics & Field Services", desc: "Dispatch, scheduling, and mobile tools for crews." },
];

export const projectTimelines = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring for now",
];

export const projectStages = [
  "Just an idea",
  "Have designs or a spec",
  "Existing product to improve",
  "Replacing an existing system",
];
