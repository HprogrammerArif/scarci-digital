export interface MonthlyPlan {
  id: "starter" | "essentials" | "growth" | "fractional";
  number: string;
  name: string;
  price: number;
  priceDisplay: string;
  period: string;
  bestFor: string;
  isRecommended?: boolean;
  includesFrom?: string;
  features: string[];
  responseTime: string;
  ctaText: string;
  serviceValue: string;
  budgetValue: string;
}

export const monthlyPlans: MonthlyPlan[] = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    price: 249,
    priceDisplay: "$249",
    period: "month",
    bestFor:
      "Owner-operated businesses with 0–4 employees that just need their website, search visibility, and lead forms to keep working.",
    features: [
      "Uptime monitoring with alerts if the site goes down",
      "Weekly backups, plus security and plugin updates",
      "A monthly test of the contact, quote, and booking forms",
      "Foundational on-page SEO & local search visibility checks",
      "A few small text or image changes each month",
      "A one-page monthly health report",
    ],
    responseTime: "Within 3 business days",
    ctaText: "Get Started with Starter",
    serviceValue: "plan-starter",
    budgetValue: "$249/mo (Starter)",
  },
  {
    id: "essentials",
    number: "02",
    name: "Business Essentials",
    price: 499,
    priceDisplay: "$499",
    period: "month",
    bestFor:
      "HVAC companies, contractors, insurance agencies, and small professional-service firms.",
    includesFrom: "Everything in Starter",
    features: [
      "Monitoring for any supported applications, not just the website",
      "Broken-link monitoring and issue detection",
      "Small website improvements and bug fixes",
      "Performance and mobile-responsiveness checks",
      "A missed-call text-back setup, configured once and maintained",
    ],
    responseTime: "Within 2 business days",
    ctaText: "Choose Business Essentials",
    serviceValue: "plan-essentials",
    budgetValue: "$499/mo (Business Essentials)",
  },
  {
    id: "growth",
    number: "03",
    name: "Growth & Automation",
    price: 999,
    priceDisplay: "$999",
    period: "month",
    isRecommended: true,
    bestFor:
      "Growing service companies, property managers, and businesses with a lot of manual work.",
    includesFrom: "Everything in Business Essentials",
    features: [
      "Improvements to online intake, quote requests, and booking",
      "Building and improving small workflow automations, such as lead follow-up and review requests",
      "Maintaining CRM, email, scheduling, and API connections",
      "Tuning existing AI receptionists and chatbots",
      "A monthly process review with a 30-minute call",
      "Priority triage",
    ],
    responseTime: "Within 1 business day",
    ctaText: "Start Growth & Automation",
    serviceValue: "plan-growth",
    budgetValue: "$999/mo (Growth & Automation)",
  },
  {
    id: "fractional",
    number: "04",
    name: "Fractional Development Team",
    price: 1499,
    priceDisplay: "$1,499",
    period: "month",
    bestFor:
      "Marketing agencies (including white-label work), companies with portals or dashboards, and small businesses that depend on software.",
    includesFrom: "Everything in Growth & Automation",
    features: [
      "15 hours of dedicated development per month",
      "Custom web app, portal, and dashboard enhancements",
      "API integrations and complex automation work",
      "A prioritized development backlog with scheduled releases",
      "A quarterly technology roadmap and two 30-minute calls per month",
      "A monthly development and business-impact report",
      "Dedicated senior developer attention",
    ],
    responseTime: "Within 4 business hours for priority issues",
    ctaText: "Hire Fractional Team",
    serviceValue: "plan-fractional",
    budgetValue: "$1,499/mo (Fractional Dev Team)",
  },
];

export const planSafeguards: string[] = [
  "Transparent month-to-month predictability—upgrade, scale, or adjust plans as your operations grow.",
  "Covers WordPress, Shopify, Webflow, Next.js, and custom web/CRM stacks under one US-managed team.",
  "Full website redesigns, brand-new storefront or software builds, and paid ad spend are quoted separately.",
  "Additional approved engineering beyond monthly plan scope is available via fixed-milestone quotes or hourly blocks.",
];

