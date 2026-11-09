export interface MonthlyPlan {
  id: "essentials" | "growth" | "pro";
  number: string;
  name: string;
  price: number;
  priceDisplay: string;
  priceSuffix?: string;
  period: string;
  bestFor: string;
  isPopular?: boolean;
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
    id: "essentials",
    number: "01",
    name: "Essentials",
    price: 349,
    priceDisplay: "$349",
    period: "mo",
    bestFor:
      "Owner-operated businesses that need their site, Google presence and reviews handled.",
    features: [
      "Uptime monitoring and alerts",
      "Weekly backups and security updates",
      "Small text or image changes each month",
      "Local SEO (Google Business Profile plus on-page)",
      "Google reviews management",
      "Ongoing support and bug fixes",
    ],
    responseTime: "2 business days",
    ctaText: "Choose Essentials",
    serviceValue: "plan-essentials",
    budgetValue: "$349/mo (Essentials)",
  },
  {
    id: "growth",
    number: "02",
    name: "Growth",
    price: 799,
    priceDisplay: "$799",
    priceSuffix: "+ ad spend",
    period: "mo",
    isPopular: true,
    isRecommended: true,
    bestFor: "Businesses ready to bring in new customers with Meta ads.",
    includesFrom: "Everything in Essentials",
    features: [
      "Meta ad campaigns built and managed for you",
      "Ad creative included",
      "A custom landing page for the ads",
      "Lead tracking setup & oversight",
      "Monthly results report",
    ],
    responseTime: "1 business day",
    ctaText: "Choose Growth (Most Popular)",
    serviceValue: "plan-growth",
    budgetValue: "$799/mo + ad spend (Growth)",
  },
  {
    id: "pro",
    number: "03",
    name: "Pro",
    price: 1499,
    priceDisplay: "$1,499",
    priceSuffix: "+ ad spend",
    period: "mo",
    bestFor: "Growing teams with lots of manual work.",
    includesFrom: "Everything in Growth",
    features: [
      "AI chatbot or assistant",
      "Automations (booking, follow-up texts & emails, Calendly)",
      "Priority support with fastest turnaround",
    ],
    responseTime: "Same business day",
    ctaText: "Choose Pro",
    serviceValue: "plan-pro",
    budgetValue: "$1,499/mo + ad spend (Pro)",
  },
];

export const customSoftwareQuote = {
  headline: "Need software, portals or custom integrations?",
  subline: "Custom quote, starting at $1,999/mo.",
  description:
    "For businesses needing custom web apps, internal portals, private APIs, or advanced CRM engineering—tailored to your exact operational workflow.",
  ctaText: "Request Custom Quote",
  href: "/contact?service=crm-solutions&budget=%241%2C999%2B%2Fmo&timeline=Immediate%20(Monthly%20Plan)",
};

export const adSpendGuidelines = {
  directPayment: "Ad spend is paid by the client directly to Meta.",
  recommendedBudget:
    "We recommend a minimum ad budget of $10–$20/day ($300–$600/month). Below that, ad algorithms lack the volume to optimize and generate reliable lead flow.",
};

export const planTermsNotice = {
  terms: "Month-to-month agreements • No setup fee • No free months",
  note: "All plans run month-to-month with no long-term lock-in and no setup fees. We do not offer free trial months upfront—any custom trial or pilot terms are evaluated directly on discovery calls.",
};

export const planSafeguards: string[] = [
  "Month-to-month flexibility with no setup fees and no long-term lock-in—cancel or upgrade anytime.",
  "Uniform pricing across Scarci Solutions: No free trial months; bespoke considerations decided on discovery calls.",
  "Meta ad spend is billed and paid by you directly to Meta (recommended min $10–$20/day or $300–$600/mo).",
  "One-time redesigns, ground-up storefronts, and standalone custom software are quoted separately via fixed milestones.",
];
