export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  client: string;
  year: string;
  techStack: string[];
  image: string;
  featured: boolean;
  results?: string[];
  clientOverview: string;
  challenge: {
    summary: string;
    bulletPoints: string[];
  };
  solution: {
    summary: string;
    architecturePoints: { title: string; desc: string }[];
  };
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "UrbanThread E-Commerce Platform",
    slug: "urbanthread-ecommerce",
    category: "E-Commerce",
    description:
      "Complete Shopify Plus store redesign with custom theme development, advanced product filtering, and subscription integration. Resulted in 340% revenue increase.",
    shortDescription: "Shopify Plus store with 340% revenue growth",
    client: "UrbanThread Co.",
    year: "2026",
    techStack: ["Shopify Plus", "Liquid", "JavaScript", "Stripe", "Klaviyo"],
    image: "/assets/projects/urbanthread.jpg",
    featured: true,
    results: [
      "340% revenue increase",
      "2.1s average load time",
      "45% higher conversion rate",
    ],
    clientOverview:
      "UrbanThread Co. is a high-growth streetwear and lifestyle apparel brand scaling rapidly across North America and Europe, processing over 80,000 orders monthly.",
    challenge: {
      summary:
        "UrbanThread's previous storefront suffered from severe checkout drops during drop campaigns, unoptimized Liquid script bloat, and poor multi-currency geolocation for international shoppers.",
      bulletPoints: [
        "Checkout latency exceeding 6.8 seconds during limited-edition drops causing 42% cart abandonments",
        "Inefficient third-party app scripts degrading mobile performance down to a 28 Lighthouse score",
        "Disjointed currency conversion and manual tax reconciliation across 14 EU VAT zones",
      ],
    },
    solution: {
      summary:
        "Scarci Digital re-architected the entire storefront onto Shopify Plus Checkout Extensibility with a bespoke Liquid and TypeScript design system, integrated 1-click cart drawer, and automated geolocation routing.",
      architecturePoints: [
        {
          title: "Custom Headless-Grade Liquid Architecture",
          desc: "Eliminated 18 third-party apps, replacing them with native lightweight web components and optimized asset bundling.",
        },
        {
          title: "Instant Cart Drawer & 1-Click Upselling",
          desc: "Implemented predictive inventory reservation and high-converting cart drawer upsells that drove an immediate 22% increase in AOV.",
        },
        {
          title: "Automated Multi-Region Currency Routing",
          desc: "Integrated native Shopify Markets API with automatic IP geolocation, multi-currency pricing, and localized checkout endpoints.",
        },
      ],
    },
    clientQuote: {
      quote:
        "Scarci Digital transformed our entire online presence. Our e-commerce revenue increased by 340% within six months of launching our new store.",
      author: "Michael Rodriguez",
      role: "CEO, UrbanThread Co.",
    },
  },
  {
    id: "2",
    title: "Nexus Consulting Corporate Website",
    slug: "nexus-consulting-website",
    category: "Website",
    description:
      "Modern corporate website with advanced animations, multi-language support, and integrated CRM lead capture. Built on Next.js for blazing-fast performance.",
    shortDescription: "Next.js corporate site with multi-language support",
    client: "Nexus Consulting Group",
    year: "2026",
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    image: "/assets/projects/nexus.jpg",
    featured: true,
    results: [
      "98 Lighthouse score",
      "3x organic traffic growth",
      "60% more lead submissions",
    ],
    clientOverview:
      "Nexus Consulting Group is an international management consulting firm advising Fortune 500 executives on digital transformation, operations, and cross-border M&A.",
    challenge: {
      summary:
        "Nexus had an obsolete WordPress CMS that failed to convey their top-tier market position, loaded slowly on mobile devices, and lacked automated CRM synchronization for incoming enterprise RFPs.",
      bulletPoints: [
        "Cluttered legacy architecture with slow TTFB (1.8s) hurting executive visitor retention",
        "Absence of structured data schemas, causing loss of organic search visibility for high-intent advisory keywords",
        "Inability for the marketing team to rapidly publish localized research whitepapers across 5 languages",
      ],
    },
    solution: {
      summary:
        "We engineered a Next.js App Router corporate platform leveraging Edge caching, Tailwind CSS design system, and direct webhook ingestion into their CRM database.",
      architecturePoints: [
        {
          title: "Next.js 15 App Router on Vercel Edge",
          desc: "Static Generation (SSG) with Incremental Static Regeneration (ISR) guaranteeing sub-300ms global response times.",
        },
        {
          title: "Modular Whitepaper & Thought Leadership CMS",
          desc: "A custom headless content pipeline enabling one-click multi-language publication with built-in PDF gating.",
        },
        {
          title: "Bidirectional Lead Routing & Enrichment",
          desc: "Integrated real-time Clearbit enrichment webhooks directly validating corporate email domains and passing leads to senior partners.",
        },
      ],
    },
    clientQuote: {
      quote:
        "Their attention to detail is extraordinary. The website they built for us isn't just beautiful—it consistently generates 7-figure enterprise consulting pipeline.",
      author: "Sarah Chen",
      role: "Marketing Director, Nexus Consulting Group",
    },
  },
  {
    id: "3",
    title: "Nordic Essentials Shopify Store",
    slug: "nordic-essentials-store",
    category: "E-Commerce",
    description:
      "Minimalist Shopify store for a Scandinavian lifestyle brand with multi-currency support, subscription boxes, and abandoned cart recovery.",
    shortDescription: "Minimalist Shopify store with subscription model",
    client: "Nordic Essentials",
    year: "2025",
    techStack: ["Shopify", "Liquid", "Klaviyo", "ReCharge", "Alpine.js"],
    image: "/assets/projects/nordic.jpg",
    featured: true,
    results: [
      "10x traffic handling capacity",
      "28% cart recovery rate",
      "Multi-currency in 12 markets",
    ],
    clientOverview:
      "Nordic Essentials is an eco-luxury home decor and organic living brand based in Copenhagen, shipping handcrafted goods worldwide.",
    challenge: {
      summary:
        "The brand's bespoke aesthetic was being ruined by generic Shopify templates, high international cart abandonment, and zero subscription infrastructure for their recurring home scent lines.",
      bulletPoints: [
        "Inconsistent design language that failed to justify luxury price points ($180–$900 items)",
        "Zero automated recurring subscription options for seasonal refills and lifestyle memberships",
        "High international cart abandonment due to surprise shipping fees and delayed tax calculations at checkout",
      ],
    },
    solution: {
      summary:
        "Built a Scandinavian minimalist theme using custom Liquid, embedded ReCharge recurring subscription flows, and integrated upfront international duty calculators.",
      architecturePoints: [
        {
          title: "Editorial-First Luxury UI Kit",
          desc: "Art-directed typography and high-density image galleries optimized for Retina displays with zero layout shift.",
        },
        {
          title: "Seamless Subscription Engine",
          desc: "Integrated ReCharge API for bi-monthly curated Nordic boxes with customer self-service frequency management.",
        },
        {
          title: "Dynamic Klaviyo Flow Funnels",
          desc: "Multi-tiered behavioral abandoned cart and browse flows converting 28% of dropped carts within 48 hours.",
        },
      ],
    },
    clientQuote: {
      quote:
        "The Shopify store they built handles 10x our previous traffic without breaking a sweat. The conversion rate optimization alone paid for the entire project.",
      author: "Emma Larsson",
      role: "Founder, Nordic Essentials",
    },
  },
  {
    id: "4",
    title: "Meridian Partners CRM System",
    slug: "meridian-crm-system",
    category: "CRM",
    description:
      "Custom CRM built from the ground up with sales pipeline management, automated lead scoring, and real-time analytics dashboards.",
    shortDescription: "Custom CRM with AI-powered lead scoring",
    client: "Meridian Partners",
    year: "2025",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    image: "/assets/projects/meridian.jpg",
    featured: false,
    results: [
      "50% faster deal closure",
      "95% team adoption in 2 weeks",
      "Automated 70% of manual tasks",
    ],
    clientOverview:
      "Meridian Partners is a commercial real estate and private debt advisory firm managing over $350M in active transaction volume.",
    challenge: {
      summary:
        "The firm was paying over $6,500/month for rigid Salesforce enterprise licenses that their dealmakers refused to use, resulting in missing deal histories and lost follow-ups.",
      bulletPoints: [
        "Salesforce seat bloat with 80% unused enterprise features and complicated 12-click data entry",
        "Disorganized deal pipelines tracked across fragmented private Excel spreadsheets",
        "Zero automated reminder triggers for time-sensitive underwriting milestones and LOI expiration dates",
      ],
    },
    solution: {
      summary:
        "We engineered a private, lightning-fast custom CRM web application tailored precisely to commercial real estate deal stages with instant drag-and-drop pipeline Kanban boards.",
      architecturePoints: [
        {
          title: "PostgreSQL & Prisma Data Backbone",
          desc: "High-performance relational database with encrypted client documents, audit logs, and row-level security.",
        },
        {
          title: "Real-time Collaborative Pipeline",
          desc: "WebSocket-powered Kanban board with instantaneous updates when deal milestones change across partners.",
        },
        {
          title: "Automated Milestone Alerts",
          desc: "Slack and email webhook triggers notifying team leads 48 hours before key contract deadlines.",
        },
      ],
    },
    clientQuote: {
      quote:
        "We needed a CRM that actually fit our sales process, not the other way around. Scarci Digital delivered a custom solution that our team adopted in days, saving thousands monthly.",
      author: "David Okafor",
      role: "VP of Sales, Meridian Partners",
    },
  },
  {
    id: "5",
    title: "Elevate Health WordPress Redesign",
    slug: "elevate-health-wordpress",
    category: "CMS",
    description:
      "Complete WordPress redesign with custom Elementor theme, appointment booking integration, and HIPAA-compliant patient portal.",
    shortDescription: "Healthcare WordPress site with booking system",
    client: "Elevate Health Clinic",
    year: "2025",
    techStack: ["WordPress", "Elementor Pro", "PHP", "MySQL", "Cal.com API"],
    image: "/assets/projects/elevate.jpg",
    featured: false,
    results: [
      "80% faster load times",
      "2x conversion rate",
      "35% more online bookings",
    ],
    clientOverview:
      "Elevate Health is a multi-specialty wellness and integrative medicine clinic operating 4 facilities with 25 healthcare practitioners.",
    challenge: {
      summary:
        "Their old WordPress site was bloated with 47 unmaintained plugins, took over 5 seconds to load, and suffered frequent booking crashes that frustrated patients.",
      bulletPoints: [
        "Plugin vulnerability warnings and frequent database lockups during morning appointment rushes",
        "Confusing multi-step booking process leading to high patient bounce rates and phone line congestion",
        "Lack of accessibility (WCAG AA) compliance risking regulatory penalties",
      ],
    },
    solution: {
      summary:
        "We cleaned the codebase, removed 35 bloated plugins, built custom lightweight PHP/Elementor widgets, and connected a unified patient appointment scheduling engine.",
      architecturePoints: [
        {
          title: "Plugin Purge & Custom Theme Architecture",
          desc: "Replaced heavy plugins with clean custom code, dropping HTTP requests from 134 down to 24.",
        },
        {
          title: "Frictionless 3-Step Patient Scheduler",
          desc: "An intuitive mobile-first appointment booking interface integrated with their internal practice calendar.",
        },
        {
          title: "WCAG 2.1 AA Accessibility Standards",
          desc: "High-contrast color profiles, full screen-reader ARIA tags, and keyboard-friendly navigation.",
        },
      ],
    },
    clientQuote: {
      quote:
        "Our WordPress site was slow, outdated, and losing us patients. Scarci Digital rebuilt it on a modern stack—load times dropped by 80% and patient bookings doubled.",
      author: "Priya Sharma",
      role: "Operations Manager, Elevate Health Clinic",
    },
  },
  {
    id: "6",
    title: "ScaleUp Ventures SaaS Platform",
    slug: "scaleup-ventures-saas",
    category: "Website",
    description:
      "High-converting SaaS marketing website with interactive demos, pricing calculator, and integrated analytics tracking.",
    shortDescription: "SaaS marketing site with interactive demos",
    client: "ScaleUp Ventures",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/assets/projects/scaleup.jpg",
    featured: false,
    results: [
      "55% increase in demo requests",
      "Sub-1s page transitions",
      "99.9% uptime",
    ],
    clientOverview:
      "ScaleUp Ventures is an enterprise SaaS platform offering portfolio analytics, capital deployment tracking, and investor reporting.",
    challenge: {
      summary:
        "The founders needed a visually arresting, interactive marketing site that could explain their complex financial analytics product to busy institutional venture partners in under 60 seconds.",
      bulletPoints: [
        "Abstract and complex product features that text alone failed to communicate effectively",
        "High client acquisition costs due to low demo booking conversion on their previous landing pages",
        "Demand for lightning-fast page speed across both desktop and mobile executive devices",
      ],
    },
    solution: {
      summary:
        "Delivered a cutting-edge Next.js application featuring interactive product simulators, an interactive pricing calculator, and smooth Framer Motion micro-interactions.",
      architecturePoints: [
        {
          title: "Interactive Product Playground",
          desc: "Prospects can toggle features and see live dashboard metrics simulate in real-time right on the homepage.",
        },
        {
          title: "Self-Service ROI & Pricing Calculator",
          desc: "Dynamic sliders calculating expected hours saved and projected ROI based on fund size and deal flow.",
        },
        {
          title: "Streamlined Calendar Integration",
          desc: "Automated routing that pre-qualifies investors before placing them on the calendar of the right founding partner.",
        },
      ],
    },
    clientQuote: {
      quote:
        "Working with Scarci Digital felt like having an elite Silicon Valley product agency in-house. Demo bookings shot up 55% in our first month after launch.",
      author: "James Whitfield",
      role: "CTO, ScaleUp Ventures",
    },
  },
];

export const projectCategories = [
  "All",
  "E-Commerce",
  "Website",
  "CMS",
  "CRM",
] as const;
