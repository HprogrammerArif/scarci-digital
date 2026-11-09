export interface CommercialModel {
  id: string;
  name: string;
  badge: string;
  howItWorks: string;
  recommendation: string;
  description: string;
  highlights: string[];
}

export interface SoftwareMaintenanceTier {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  period: string;
  bestFor: string;
  sla: string;
  isPopular?: boolean;
  features: string[];
}

export interface MilestoneStage {
  percentage: string;
  name: string;
  deliverables: string;
}

export const commercialModels: CommercialModel[] = [
  {
    id: "fixed-price",
    name: "Fixed-Price Development",
    badge: "Primary Commercial Model",
    howItWorks: "Agreed fixed investment for fully defined deliverables and architecture.",
    recommendation: "Standard across most custom software and MVP builds.",
    description:
      "A complete scope of work, technical architecture, wireframes, and acceptance criteria are locked in before development starts. Zero surprise invoices—you pay for results, not developer clock-watching.",
    highlights: [
      "100% intellectual property (IP) assignment upon final milestone",
      "Strict scope definition with defined change-order boundaries",
      "Guaranteed delivery schedules with built-in QA sprints",
      "Post-launch warranty included with every build",
    ],
  },
  {
    id: "milestone-staged",
    name: "Milestone-Staged Payments",
    badge: "Cash Flow & Progress Protected",
    howItWorks: "Payments tied to verifiable software delivery gates.",
    recommendation: "Recommended for engagements between $15,000 and $75,000+.",
    description:
      "Funds are released only when tangible, testable milestones are achieved. This gives leadership measurable progress, protects project cash flow, and ensures total team alignment at every stage.",
    highlights: [
      "30% — Discovery, architecture blueprint & UI design system",
      "30% — Core development milestone & API database architecture",
      "25% — Feature-complete, testing-ready staging build",
      "15% — Client acceptance, security audit & source code handover",
    ],
  },
  {
    id: "software-retainer",
    name: "Monthly Software Retainers",
    badge: "Post-Launch Code Support",
    howItWorks: "Ongoing application maintenance, security SLA, and dedicated dev hours.",
    recommendation: "Offered to established clients following platform launch.",
    description:
      "Keep your custom web app, CRM, portal, or SaaS platform secure, fast, and continuously updated. Separate from initial build fees, providing dependable engineering capacity as your user base scales.",
    highlights: [
      "Proactive security patches, framework and dependency updates",
      "Automated database backups & round-the-clock uptime monitoring",
      "Dedicated senior developer attention for iterative feature sprints",
      "Guaranteed priority response SLAs for mission-critical tickets",
    ],
  },
];

export const milestoneStages: MilestoneStage[] = [
  {
    percentage: "30%",
    name: "Agreement, Discovery & Technical Blueprint",
    deliverables: "Architecture schema, clickable Figma prototype, database entity diagrams, and locked delivery timeline.",
  },
  {
    percentage: "30%",
    name: "Core Development & Infrastructure Milestone",
    deliverables: "Database provisioning, API scaffolding, authentication (SSO/RBAC), and primary feature workflow implementation.",
  },
  {
    percentage: "25%",
    name: "Testing-Ready Beta Release",
    deliverables: "Feature-complete staging build, cross-browser/device validation, performance optimization, and end-to-end user acceptance testing (UAT).",
  },
  {
    percentage: "15%",
    name: "Acceptance, Final Handover & IP Assignment",
    deliverables: "Production deployment, repository transfer, environment documentation, admin training, and full IP/copyright assignment.",
  },
];

export const softwareMaintenancePlans: SoftwareMaintenanceTier[] = [
  {
    id: "app-care",
    name: "Application Care",
    price: 500,
    priceDisplay: "$500",
    period: "mo",
    bestFor: "Internal business tools, small dashboards, and simple client portals.",
    sla: "Within 2 business days",
    features: [
      "Weekly security patches & dependency updates",
      "Database snapshot backups & retention",
      "Uptime monitoring & automated error alerts",
      "Minor bug fixes and performance checks",
      "Monthly health and infrastructure report",
    ],
  },
  {
    id: "portal-crm",
    name: "CRM & Portal Support",
    price: 1000,
    priceDisplay: "$1,000",
    period: "mo",
    isPopular: true,
    bestFor: "Custom CRMs, active customer portals, and high-volume operations platforms.",
    sla: "Within 1 business day",
    features: [
      "Everything in Application Care",
      "Active API & third-party webhook maintenance (Stripe, QuickBooks, email)",
      "User permission & role management auditing",
      "Database query & speed optimization",
      "Up to 8 hours/month dedicated developer enhancement time",
      "Priority issue resolution SLA",
    ],
  },
  {
    id: "saas-platform",
    name: "SaaS Platform Retainer",
    price: 1500,
    priceDisplay: "$1,500",
    period: "mo",
    bestFor: "Multi-tenant SaaS products, customer-facing mobile apps, and marketplace platforms.",
    sla: "Same business day (priority response)",
    features: [
      "Everything in CRM & Portal Support",
      "Multi-tenant isolation & security monitoring",
      "Cloud infrastructure scaling & autoscaling oversight",
      "Continuous CI/CD pipeline management",
      "Up to 15 hours/month dedicated engineering backlog development",
      "Bi-weekly product roadmap alignment call",
    ],
  },
];

export const projectEngagementTargets = {
  minimumEngagement: "$10,000",
  idealProjectSweetSpot: "$15,000 – $35,000",
  largeEngagements: "$40,000 – $75,000+",
  pricingVisibility: "Private consultation & custom scope quote",
};

export const sisterConcernReferral = {
  title: "Looking for AI Automations, SEO or Meta Ads?",
  description:
    "Scarci Digital focuses strictly on custom software, application engineering, and product development. For business automation, AI receptionists, SEO, and paid Meta marketing for your current business operations, partner with our sister company:",
  sisterCompanyName: "Scarci Solutions",
  sisterCompanyUrl: "https://scarcisolutions.com",
  linkText: "Visit Scarci Solutions →",
};
