export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  typicalProjectRange: string;
  href: string;
  icon: string;
  color: string;
  techStack: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Startup MVP & Product Development",
    shortTitle: "Startup MVPs",
    description:
      "Transform your concept into a production-ready software product that can be validated with real customers, demonstrated to investors, and scaled efficiently.",
    typicalProjectRange: "$12,500 – $45,000",
    href: "/services/website-development",
    icon: "Globe",
    color: "#0066FF",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    features: [
      "Clickable interactive prototypes & user testing flows",
      "Production-ready MVP architecture and database setup",
      "User authentication, profile management, and permissions",
      "Stripe payment & subscription checkout integration",
      "Admin telemetry, user analytics, and management consoles",
      "Cloud deployment on AWS / Vercel with CI/CD automation",
      "Investor-ready technical documentation and code handover",
    ],
  },
  {
    id: "crm-solutions",
    title: "Custom CRM Development",
    shortTitle: "Custom CRMs",
    description:
      "Proprietary customer relationship and pipeline systems engineered around your exact workflow—eliminating monthly per-user SaaS license fees entirely.",
    typicalProjectRange: "$12,500 – $45,000",
    href: "/services/crm-solutions",
    icon: "Database",
    color: "#F59E0B",
    techStack: ["PostgreSQL", "Node.js", "React", "Prisma", "REST / GraphQL"],
    features: [
      "Drag-and-drop deal pipelines tailored to your sales process",
      "Automated lead scoring, routing, and qualification triggers",
      "Unified 360° customer communication history and activity logs",
      "Bi-directional synchronization with QuickBooks, Stripe & ERPs",
      "Encrypted PostgreSQL database with zero per-seat subscription overhead",
      "Role-based access controls (RBAC) and team commission tracking",
      "Custom analytics dashboards for executive reporting",
    ],
  },
  {
    id: "ui-ux-design",
    title: "Client & Customer Portals",
    shortTitle: "Client Portals",
    description:
      "Secure, branded digital environments where your clients log in to access information, upload documents, track project status, and pay invoices.",
    typicalProjectRange: "$10,000 – $45,000",
    href: "/services/ui-ux-design",
    icon: "Palette",
    color: "#EC4899",
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS S3"],
    features: [
      "Encrypted document upload vaults and e-signature workflows",
      "Real-time case, project, or property status tracking feeds",
      "Integrated billing, invoice history, and automated payment receipts",
      "Granular user permissions for clients, partners, and employees",
      "Custom notifications via email, SMS, and in-app alerts",
      "Mobile-optimized responsive portal UI matching your brand identity",
      "Audit logging and secure data isolation",
    ],
  },
  {
    id: "cms-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps",
    description:
      "Cross-platform iOS and Android applications engineered for seamless customer engagement, on-demand booking, and mobile field operations.",
    typicalProjectRange: "$12,500 – $60,000",
    href: "/services/cms-development",
    icon: "Layout",
    color: "#8B5CF6",
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    features: [
      "Unified single-codebase iOS and Android cross-platform delivery",
      "App Store & Google Play submission and approval management",
      "Push notification systems and real-time messaging",
      "In-app purchases, recurring subscriptions, and payment wallets",
      "Offline data synchronization and background location tracking",
      "Biometric authentication (FaceID / Fingerprint)",
      "High-performance native device APIs and camera integration",
    ],
  },
  {
    id: "ecommerce",
    title: "SaaS Platform Development",
    shortTitle: "SaaS Platforms",
    description:
      "Build multi-tenant, subscription-based cloud software that your customers pay to access on a recurring monthly or annual basis.",
    typicalProjectRange: "$20,000 – $75,000+",
    href: "/services/ecommerce",
    icon: "ShoppingCart",
    color: "#10B981",
    techStack: ["Next.js", "PostgreSQL", "Stripe Billing", "Docker", "AWS"],
    features: [
      "Multi-tenant database schema architecture with complete tenant isolation",
      "Stripe Billing integration with tiered subscription plans & usage billing",
      "Self-service team onboarding, member invites, and role management",
      "Public REST / GraphQL developer APIs and webhook infrastructure",
      "High-availability cloud deployment with automated scaling",
      "Comprehensive admin dashboard for platform MRR, churn, and telemetry",
      "Full source code and intellectual property (IP) assignment",
    ],
  },
  {
    id: "digital-strategy",
    title: "Custom Business Software & AI Applications",
    shortTitle: "Business Software & AI",
    description:
      "Replace disconnected spreadsheets and manual bottlenecks with custom operations platforms, intelligent document processors, and internal business tools.",
    typicalProjectRange: "$7,500 – $75,000+",
    href: "/services/digital-strategy",
    icon: "TrendingUp",
    color: "#06B6D4",
    techStack: ["Python", "Node.js", "OpenAI / Claude APIs", "PostgreSQL", "Next.js"],
    features: [
      "Custom internal operations dashboards and executive consoles",
      "Automated logistics, dispatch, and field service management tools",
      "AI document analysis, contract extraction, and knowledge management",
      "Inventory tracking, supplier management, and order fulfillment systems",
      "Automated financial reconciliation and reporting software",
      "Legacy software modernization and custom API data pipelines",
      "100% proprietary code you own without ongoing per-seat license taxes",
    ],
  },
];
