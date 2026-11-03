export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What monthly plans do you offer, and what is included?",
    answer:
      "We offer four uniform monthly tiers across the Scarci ecosystem: Starter ($249/mo) for 0–4 employee businesses needing uptime monitoring, weekly backups, form testing, foundational SEO, small edits, and a 3-business-day SLA; Business Essentials ($499/mo) adding app & broken-link monitoring, bug fixes, mobile checks, missed-call text-back setup, and a 2-business-day SLA; Growth & Automation ($999/mo, Recommended) adding workflow automations, CRM/API maintenance, AI chatbot tuning, a monthly 30-min strategy call, and a 1-business-day SLA; and Fractional Development Team ($1,499/mo) adding 15 dedicated dev hours/month, portal/web-app enhancements, roadmap planning, and a 4-business-hour priority SLA.",
  },
  {
    id: "2",
    question: "How do custom website, store, or CRM builds work alongside monthly plans?",
    answer:
      "Full website redesigns, brand-new Shopify/Webflow/WordPress builds, and bespoke CRM systems are quoted separately as fixed-milestone projects (starting at $4,500 for web platforms, $8,500 for e-commerce, and $14,500 for custom CRMs). Once your new build launches, you can seamlessly transition onto any $249–$1,499/mo plan for ongoing SEO, reliability, and continuous improvements.",
  },
  {
    id: "3",
    question: "Is SEO included in the $249/month Starter plan?",
    answer:
      "Yes! Starter ($249/month) includes foundational on-page SEO and local search visibility checks alongside uptime monitoring, weekly backups, security updates, monthly form testing, small content updates, and a one-page monthly health report. Because every higher plan includes everything in Starter, all four monthly tiers include this SEO foundation.",
  },
  {
    id: "4",
    question: "How long does a new custom build take?",
    answer:
      "Timeline depends on scope and complexity. A standard business website typically takes 4–6 weeks, while custom e-commerce storefronts or bespoke CRM systems take 6–12 weeks. Monthly care and automation plans begin onboarding immediately.",
  },
  {
    id: "5",
    question: "Which platforms and CMS stacks do you support?",
    answer:
      "Our monthly plans and custom build teams support WordPress & Elementor, Webflow, Shopify & WooCommerce, Next.js/React, and custom Node.js/PostgreSQL CRM applications. During our 30-minute intro call, we review your current stack and recommend the cleanest path forward.",
  },
  {
    id: "6",
    question: "Can you maintain or improve our existing website without rebuilding from scratch?",
    answer:
      "Absolutely. Most monthly plan clients bring an existing WordPress, Shopify, Webflow, or custom website. We stabilize backups, forms, monitoring, broken links, missed-call text-back, and automations right away—and only recommend a full rebuild if your current platform is genuinely holding back growth.",
  },
  {
    id: "7",
    question: "What makes Scarci Digital different from other agencies?",
    answer:
      "As a US-headquartered sister concern of Scarci Solutions, we pair small-business responsiveness and transparent monthly pricing with real software engineering depth. One US account point of contact owns your relationship while senior engineers keep your website, lead forms, and automations running reliably.",
  },
  {
    id: "8",
    question: "How do we get started?",
    answer:
      "Select your preferred monthly tier ($249–$1,499/mo) on our Pricing page or submit a quick note on our Contact page. We respond within 1 business day to schedule a 30-minute intro & tech review call.",
  },
];
