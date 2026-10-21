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
    techStack: ["Shopify Plus", "Liquid", "JavaScript", "Stripe"],
    image: "/assets/projects/urbanthread.webp",
    featured: true,
    results: [
      "340% revenue increase",
      "2.1s average load time",
      "45% higher conversion rate",
    ],
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
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/projects/nexus.webp",
    featured: true,
    results: [
      "98 Lighthouse score",
      "3x organic traffic growth",
      "60% more lead submissions",
    ],
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
    techStack: ["Shopify", "Liquid", "Klaviyo", "ReCharge"],
    image: "/assets/projects/nordic.webp",
    featured: true,
    results: [
      "10x traffic handling capacity",
      "28% cart recovery rate",
      "Multi-currency in 12 markets",
    ],
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
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    image: "/assets/projects/meridian.webp",
    featured: false,
    results: [
      "50% faster deal closure",
      "95% team adoption in 2 weeks",
      "Automated 70% of manual tasks",
    ],
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
    techStack: ["WordPress", "Elementor Pro", "PHP", "MySQL"],
    image: "/assets/projects/elevate.webp",
    featured: false,
    results: [
      "80% faster load times",
      "2x conversion rate",
      "35% more online bookings",
    ],
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
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
    image: "/assets/projects/scaleup.webp",
    featured: false,
    results: [
      "55% increase in demo requests",
      "Sub-1s page transitions",
      "99.9% uptime",
    ],
  },
];

export const projectCategories = [
  "All",
  "E-Commerce",
  "Website",
  "CMS",
  "CRM",
  "Design",
] as const;
