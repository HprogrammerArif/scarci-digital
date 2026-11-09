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
      "We offer three uniform monthly tiers across the Scarci ecosystem (month-to-month, no setup fee): Essentials ($349/mo) for owner-operated businesses needing uptime monitoring, weekly backups & security updates, small text/image edits each month, local SEO (Google Business Profile plus on-page), Google reviews management, ongoing bug fixes, and a 2-business-day response SLA; Growth ($799/mo + ad spend, Most Popular) for businesses ready to bring in new customers with Meta ad campaigns built & managed, ad creative, custom landing pages, lead tracking, a monthly results report, and a 1-business-day SLA; and Pro ($1,499/mo + ad spend) for growing teams needing AI chatbots/assistants, business automations (booking, follow-up texts & emails, Calendly), and same-business-day priority support. Below these plans, we offer custom quotes for software, portals, or integrations starting at $1,999/mo.",
  },
  {
    id: "2",
    question: "How do custom website, store, or CRM builds work alongside monthly plans?",
    answer:
      "Full website redesigns, brand-new Shopify/Webflow/WordPress builds, and bespoke CRM systems are quoted separately as fixed-milestone projects (starting at $4,500 for web platforms, $8,500 for e-commerce, and $14,500 for custom CRMs). Once your new build launches, you can seamlessly transition onto any $349–$1,499/mo plan for ongoing SEO, Meta ads, reliability, and continuous improvements.",
  },
  {
    id: "3",
    question: "Is SEO included in the $349/month Essentials plan?",
    answer:
      "Yes! Essentials ($349/month) includes local SEO (Google Business Profile optimization plus on-page search checks) and Google reviews management alongside uptime alerts, weekly backups, security updates, small monthly edits, and ongoing bug fixes. Because Growth and Pro include everything in Essentials, all three tiers carry this complete local SEO and review management foundation.",
  },
  {
    id: "4",
    question: "How is Meta ad spend handled on the Growth and Pro plans?",
    answer:
      "Ad spend is paid by you directly to Meta through your own Meta Ads Manager account. This ensures you maintain 100% control over billing, data ownership, and receipts. We recommend a minimum ad budget of $10–$20/day ($300–$600/month) to give Meta's optimization algorithm enough volume to drive meaningful, scalable lead generation.",
  },
  {
    id: "5",
    question: "Do you offer free trial months or charge setup fees?",
    answer:
      "No. All of our monthly plans operate strictly month-to-month with $0 setup fees and no long-term contracts. We do not offer free trial months upfront—our pricing is uniform and transparent across the Scarci family. Any bespoke pilot arrangements or custom trial considerations are evaluated directly on discovery calls with our leadership team.",
  },
  {
    id: "6",
    question: "How long does a new custom build take?",
    answer:
      "Timeline depends on scope and complexity. A standard business website typically takes 4–6 weeks, while custom e-commerce storefronts or bespoke CRM systems take 6–12 weeks. Monthly care and Meta ad plans begin onboarding immediately.",
  },
  {
    id: "7",
    question: "Which platforms and CMS stacks do you support?",
    answer:
      "Our monthly plans and custom build teams support WordPress & Elementor, Webflow, Shopify & WooCommerce, Next.js/React, Meta Ads Manager, Google Business Profile, and custom Node.js/PostgreSQL CRM applications. During our 30-minute intro call, we review your current stack and recommend the cleanest path forward.",
  },
  {
    id: "8",
    question: "Can you maintain or improve our existing website without rebuilding from scratch?",
    answer:
      "Absolutely. Most monthly plan clients bring an existing WordPress, Shopify, Webflow, or custom website. We stabilize backups, forms, monitoring, broken links, local SEO, Google reviews, and automations right away—and only recommend a full rebuild if your current platform is genuinely holding back growth.",
  },
  {
    id: "9",
    question: "What makes Scarci Digital different from other agencies?",
    answer:
      "As a US-headquartered sister concern of Scarci Solutions, we pair small-business responsiveness and transparent monthly pricing with real software engineering and growth marketing depth. One US account point of contact owns your relationship while senior engineers and Meta ad specialists keep your digital presence growing reliably.",
  },
  {
    id: "10",
    question: "How do we get started?",
    answer:
      "Select your preferred monthly tier ($349–$1,499/mo) on our Pricing page or submit a quick note on our Contact page. We respond within 1 business day to schedule a 30-minute intro & tech review call.",
  },
];
