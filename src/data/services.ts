export type ServiceIcon =
  | "Rocket"
  | "Database"
  | "ShieldCheck"
  | "Smartphone"
  | "Cloud"
  | "Cpu"
  | "Store";

export interface ServiceFeatureGroup {
  title: string;
  items: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  navDescription: string;
  tagline: string;
  description: string;
  href: string;
  icon: ServiceIcon;
  accent: string;
  typicalTimeline: string;
  idealFor: string[];
  techStack: string[];
  features: string[];
  featureGroups: ServiceFeatureGroup[];
  outcomes: { title: string; desc: string }[];
  relatedProjectCategories: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "mvp-development",
    slug: "mvp-development",
    title: "Startup MVP & Product Development",
    shortTitle: "Startup MVPs",
    navDescription: "Investor-ready MVPs and first product launches",
    tagline: "From idea to a product real customers can use.",
    description:
      "We turn your concept into a production-ready product you can put in front of customers, demo to investors, and keep building on. No throwaway prototypes.",
    href: "/services/mvp-development",
    icon: "Rocket",
    accent: "#3B82F6",
    typicalTimeline: "6–10 weeks",
    idealFor: [
      "Founders validating a new product idea",
      "Non-technical founders who need a technical partner",
      "Teams preparing for a fundraise or pilot customers",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Clickable prototype and user-flow validation",
      "Production-ready architecture and database design",
      "Authentication, user roles, and permissions",
      "Stripe payments and subscriptions",
      "Admin console and product analytics",
      "Cloud deployment with CI/CD",
    ],
    featureGroups: [
      {
        title: "Product & Design",
        items: [
          "Discovery workshop and feature prioritization",
          "Clickable Figma prototype tested with real users",
          "Design system that scales past version one",
        ],
      },
      {
        title: "Engineering",
        items: [
          "Typed, documented codebase you fully own",
          "Authentication, roles, and permissions",
          "Stripe payments, subscriptions, and invoicing",
          "Admin console and event analytics",
        ],
      },
      {
        title: "Launch",
        items: [
          "Cloud deployment on Vercel or AWS",
          "Automated CI/CD and staging environment",
          "Technical documentation for investors and future hires",
        ],
      },
    ],
    outcomes: [
      { title: "Launch-ready, not demo-ready", desc: "Built on the same architecture you will scale on, so nothing gets thrown away after validation." },
      { title: "Clear scope from day one", desc: "A written scope, feature list, and acceptance criteria before development starts." },
      { title: "You own everything", desc: "Source code, designs, and infrastructure accounts are transferred to you." },
    ],
    relatedProjectCategories: ["CRM"],
    seoTitle: "Startup MVP Development Company | Scarci Digital",
    seoDescription:
      "Launch an investor-ready MVP with a US-managed product team. Discovery, design, development, and launch, with full source code ownership.",
  },
  {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Platform Development",
    shortTitle: "SaaS Platforms",
    navDescription: "Multi-tenant subscription software",
    tagline: "Subscription software built to grow with your customers.",
    description:
      "Multi-tenant cloud platforms with subscription billing, team management, and the admin tooling you need to run a software business.",
    href: "/services/saas-development",
    icon: "Cloud",
    accent: "#10B981",
    typicalTimeline: "10–16 weeks",
    idealFor: [
      "Companies turning an internal tool into a product",
      "Founders building B2B or vertical SaaS",
      "Existing SaaS teams that need extra engineering capacity",
    ],
    techStack: ["Next.js", "PostgreSQL", "Stripe Billing", "Docker", "AWS"],
    features: [
      "Multi-tenant architecture with tenant isolation",
      "Tiered and usage-based subscription billing",
      "Team invites, roles, and self-service onboarding",
      "Public APIs and webhooks",
      "Platform admin for revenue, churn, and usage",
      "Scalable cloud infrastructure",
    ],
    featureGroups: [
      {
        title: "Platform Core",
        items: [
          "Multi-tenant data model with strict tenant isolation",
          "Organizations, team invites, and role-based access",
          "Self-service sign-up and onboarding flows",
        ],
      },
      {
        title: "Billing & Growth",
        items: [
          "Stripe Billing with plans, trials, and usage metering",
          "Customer billing portal and dunning",
          "Product analytics and in-app announcements",
        ],
      },
      {
        title: "Operations",
        items: [
          "Internal admin for accounts, revenue, and support",
          "Public REST APIs and webhooks",
          "Monitoring, alerting, and automated backups",
        ],
      },
    ],
    outcomes: [
      { title: "Built for scale from the start", desc: "Tenant isolation, background jobs, and caching are planned in the architecture, not bolted on later." },
      { title: "Revenue-ready", desc: "Billing, trials, upgrades, and cancellations work on launch day." },
      { title: "Operable by your team", desc: "Admin tools so support and sales do not need an engineer for routine tasks." },
    ],
    relatedProjectCategories: [],
    seoTitle: "SaaS Development Company | Multi-Tenant Platforms | Scarci Digital",
    seoDescription:
      "We design and build multi-tenant SaaS platforms with Stripe billing, team management, APIs, and admin tooling. You own 100% of the code.",
  },
  {
    id: "custom-crm-development",
    slug: "custom-crm-development",
    title: "Custom CRM Development",
    shortTitle: "Custom CRMs",
    navDescription: "Pipelines built around how your team sells",
    tagline: "A CRM that fits your sales process, not the other way around.",
    description:
      "Custom pipeline and customer management systems built around your exact workflow, without per-seat license fees that grow with every hire.",
    href: "/services/custom-crm-development",
    icon: "Database",
    accent: "#F59E0B",
    typicalTimeline: "8–12 weeks",
    idealFor: [
      "Teams paying for CRM seats they barely use",
      "Businesses with a sales process off-the-shelf tools can't model",
      "Companies running deals out of spreadsheets",
    ],
    techStack: ["PostgreSQL", "Node.js", "React", "Prisma", "REST / GraphQL"],
    features: [
      "Drag-and-drop pipelines matched to your deal stages",
      "Lead scoring, routing, and follow-up automation",
      "Complete customer history in one place",
      "Sync with QuickBooks, Stripe, email, and calendars",
      "Role-based access and commission tracking",
      "Executive dashboards and reporting",
    ],
    featureGroups: [
      {
        title: "Pipeline",
        items: [
          "Deal stages, fields, and views modeled on your process",
          "Kanban and table views with saved filters",
          "Tasks, reminders, and deadline alerts",
        ],
      },
      {
        title: "Automation",
        items: [
          "Lead capture from forms, email, and ads",
          "Scoring and round-robin routing rules",
          "Automated follow-ups and Slack / email notifications",
        ],
      },
      {
        title: "Data & Integrations",
        items: [
          "Two-way sync with QuickBooks, Stripe, Google, and Microsoft 365",
          "Migration from Salesforce, HubSpot, or spreadsheets",
          "Audit logs and role-based permissions",
        ],
      },
    ],
    outcomes: [
      { title: "No per-seat fees", desc: "Add team members without your software bill growing with them." },
      { title: "Higher adoption", desc: "Fewer clicks and only the fields your team actually uses." },
      { title: "Your data, your database", desc: "Hosted in your cloud account with full export at any time." },
    ],
    relatedProjectCategories: ["CRM"],
    seoTitle: "Custom CRM Development Services | Scarci Digital",
    seoDescription:
      "Replace expensive CRM seats with a custom CRM built around your sales process. Pipelines, automation, integrations, and full data ownership.",
  },
  {
    id: "client-portals",
    slug: "client-portals",
    title: "Client & Customer Portals",
    shortTitle: "Client Portals",
    navDescription: "Secure portals for documents, status, and billing",
    tagline: "Give clients one secure place to log in, track, and pay.",
    description:
      "Branded, secure portals where your clients upload documents, track project or case status, sign agreements, and pay invoices.",
    href: "/services/client-portals",
    icon: "ShieldCheck",
    accent: "#EC4899",
    typicalTimeline: "6–12 weeks",
    idealFor: [
      "Professional services: law, accounting, consulting",
      "Real estate, property management, and construction",
      "Healthcare and wellness providers",
    ],
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS S3"],
    features: [
      "Encrypted document vaults and e-signatures",
      "Live project, case, or property status tracking",
      "Invoices, payments, and receipts",
      "Granular permissions for clients and staff",
      "Email, SMS, and in-app notifications",
      "Audit logs and data isolation",
    ],
    featureGroups: [
      {
        title: "Client Experience",
        items: [
          "Branded login with magic links or SSO",
          "Status timelines and milestone updates",
          "Mobile-friendly document upload",
        ],
      },
      {
        title: "Documents & Billing",
        items: [
          "Encrypted file storage with version history",
          "E-signature workflows",
          "Invoices, online payments, and receipts",
        ],
      },
      {
        title: "Security",
        items: [
          "Per-client data isolation",
          "Role-based permissions for staff and partners",
          "Audit logs of every access and change",
        ],
      },
    ],
    outcomes: [
      { title: "Fewer status emails", desc: "Clients check progress themselves instead of calling your team." },
      { title: "Faster payments", desc: "Invoices and payment links live where clients already log in." },
      { title: "A more professional experience", desc: "A branded portal instead of scattered email attachments." },
    ],
    relatedProjectCategories: ["CMS", "CRM"],
    seoTitle: "Client Portal Development | Secure Customer Portals | Scarci Digital",
    seoDescription:
      "Custom client portals with secure document sharing, e-signatures, status tracking, and online payments, built for your business.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    navDescription: "iOS and Android apps from one codebase",
    tagline: "iOS and Android apps your customers will keep using.",
    description:
      "Cross-platform iOS and Android apps for customer engagement, bookings, and field operations, from App Store submission to ongoing releases.",
    href: "/services/mobile-app-development",
    icon: "Smartphone",
    accent: "#8B5CF6",
    typicalTimeline: "10–16 weeks",
    idealFor: [
      "Businesses adding a mobile channel for customers",
      "Field service teams that need offline-capable tools",
      "Startups whose product is mobile-first",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    features: [
      "One codebase for iOS and Android",
      "App Store and Google Play submission",
      "Push notifications and in-app messaging",
      "In-app purchases and subscriptions",
      "Offline sync and location features",
      "Biometric sign-in and camera integration",
    ],
    featureGroups: [
      {
        title: "App Experience",
        items: [
          "Native-feeling UI for iOS and Android",
          "Push notifications and deep links",
          "Biometric login (Face ID / fingerprint)",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Offline mode with background sync",
          "Camera, maps, and location services",
          "In-app purchases and subscriptions",
        ],
      },
      {
        title: "Release",
        items: [
          "App Store and Google Play submission",
          "Over-the-air updates for quick fixes",
          "Crash reporting and usage analytics",
        ],
      },
    ],
    outcomes: [
      { title: "Both platforms, one budget", desc: "A shared codebase keeps development and maintenance efficient." },
      { title: "Store approval handled", desc: "We manage submissions, review feedback, and release notes." },
      { title: "Ready to iterate", desc: "Over-the-air updates let you ship fixes without waiting on store review." },
    ],
    relatedProjectCategories: [],
    seoTitle: "Mobile App Development Company | iOS & Android | Scarci Digital",
    seoDescription:
      "Cross-platform iOS and Android app development with React Native. Design, build, App Store submission, and post-launch support.",
  },
  {
    id: "business-software-ai",
    slug: "business-software-ai",
    title: "Business Software & AI Applications",
    shortTitle: "Business Software & AI",
    navDescription: "Internal tools, automation, and AI features",
    tagline: "Replace spreadsheets and manual work with software built for you.",
    description:
      "Internal operations platforms, workflow automation, and practical AI features such as document processing and knowledge search, built around how your business runs.",
    href: "/services/business-software-ai",
    icon: "Cpu",
    accent: "#06B6D4",
    typicalTimeline: "4–12 weeks",
    idealFor: [
      "Operations teams stuck in spreadsheets",
      "Businesses with legacy software that is hard to change",
      "Companies exploring practical, measurable AI use cases",
    ],
    techStack: ["Python", "Node.js", "OpenAI / Claude APIs", "PostgreSQL", "Next.js"],
    features: [
      "Internal dashboards and operations consoles",
      "Dispatch, scheduling, and field service tools",
      "AI document extraction and knowledge search",
      "Inventory, supplier, and order management",
      "Automated reporting and reconciliation",
      "Legacy system modernization and API integrations",
    ],
    featureGroups: [
      {
        title: "Operations Software",
        items: [
          "Custom dashboards for the metrics you actually track",
          "Scheduling, dispatch, and job tracking",
          "Inventory, ordering, and supplier management",
        ],
      },
      {
        title: "AI Features",
        items: [
          "Document and invoice data extraction",
          "Search and Q&A across your internal knowledge",
          "AI-assisted drafting and classification with human review",
        ],
      },
      {
        title: "Modernization",
        items: [
          "Replace legacy desktop or Access-style systems",
          "Data migration from spreadsheets and old databases",
          "API integrations between the tools you already use",
        ],
      },
    ],
    outcomes: [
      { title: "Hours back every week", desc: "Automate the repetitive steps your team does by hand today." },
      { title: "One source of truth", desc: "Data lives in one system instead of copies across spreadsheets." },
      { title: "AI with guardrails", desc: "AI features scoped to real tasks, with review steps where accuracy matters." },
    ],
    relatedProjectCategories: ["CRM"],
    seoTitle: "Custom Business Software & AI Development | Scarci Digital",
    seoDescription:
      "Custom internal tools, workflow automation, and AI applications that replace spreadsheets and legacy systems. Built and owned by you.",
  },
  {
    id: "web-ecommerce",
    slug: "web-ecommerce",
    title: "Websites & E-commerce",
    shortTitle: "Web & E-commerce",
    navDescription: "Shopify, WordPress, Webflow, and Next.js",
    tagline: "Fast websites and online stores that turn visitors into customers.",
    description:
      "Business websites and online stores on Shopify, WooCommerce, WordPress, Webflow, or Next.js, built for speed, search visibility, and conversion.",
    href: "/services/web-ecommerce",
    icon: "Store",
    accent: "#22C55E",
    typicalTimeline: "4–10 weeks",
    idealFor: [
      "Brands launching or replatforming an online store",
      "Companies whose website no longer reflects the business",
      "Marketing teams that need to edit content without a developer",
    ],
    techStack: ["Shopify", "WooCommerce", "WordPress", "Webflow", "Next.js"],
    features: [
      "Shopify and WooCommerce store builds",
      "Custom themes and Figma-to-Webflow development",
      "Payments, shipping, tax, and multi-currency setup",
      "Subscriptions and digital products",
      "Store and website migrations",
      "Speed, SEO, and conversion optimization",
    ],
    featureGroups: [
      {
        title: "Websites",
        items: [
          "Corporate, startup, and professional service websites",
          "Webflow and WordPress (Elementor, ACF) builds",
          "Multilingual sites and landing pages",
        ],
      },
      {
        title: "E-commerce",
        items: [
          "Shopify and WooCommerce store design and development",
          "Product catalog, variants, and inventory setup",
          "Payment gateways, shipping, and tax configuration",
          "Subscriptions, digital products, and marketplace feeds",
        ],
      },
      {
        title: "Growth",
        items: [
          "Checkout and conversion rate optimization",
          "Abandoned-cart recovery and email flows",
          "Analytics, sales tracking, and technical SEO",
        ],
      },
    ],
    outcomes: [
      { title: "Fast on every device", desc: "Performance budgets and Core Web Vitals checks are part of every build." },
      { title: "Easy to update", desc: "Your team edits pages and products without touching code." },
      { title: "Built to convert", desc: "Clear structure, strong calls to action, and a smooth checkout." },
    ],
    relatedProjectCategories: ["E-Commerce", "Website", "CMS"],
    seoTitle: "Shopify, WordPress & Webflow Development | Scarci Digital",
    seoDescription:
      "Custom websites and e-commerce stores on Shopify, WooCommerce, WordPress, Webflow, and Next.js, built for speed, SEO, and conversions.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
