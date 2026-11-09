export const SITE_CONFIG = {
  name: "Scarci Digital",
  tagline: "Custom Software. Built Around Your Vision.",
  description:
    "US-managed custom software development and digital product studio. We engineer startup MVPs, SaaS platforms, custom CRMs, client portals, mobile applications, and purpose-built business software with 100% IP ownership. Sister concern of Scarci Solutions.",
  url: "https://scarcidigital.com",
  parentCompany: {
    name: "Scarci Solutions",
    url: "https://scarcisolutions.com",
  },
  contact: {
    email: "hello@scarcidigital.com",
    notificationEmail: "work.mohammadarif@gmail.com",
    phone: "",
    whatsappPhone: "",
    address: "Wilmington, DE • United States",
  },
  social: {
    facebook: "https://facebook.com/scarcidigital",
    linkedin: "https://linkedin.com/company/scarcidigital",
    twitter: "https://x.com/scarcidigital",
    instagram: "https://instagram.com/scarcidigital",
    youtube: "https://youtube.com/@scarcidigital",
  },
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    children: [
      {
        group: "Digital Products",
        items: [
          {
            label: "Startup MVP Development",
            href: "/services/website-development",
            description: "Rapid prototypes & investor-ready software MVPs",
            icon: "Globe",
          },
          {
            label: "SaaS Platform Development",
            href: "/services/ecommerce",
            description: "Multi-tenant cloud subscription platforms",
            icon: "ShoppingCart",
          },
          {
            label: "Mobile App Development",
            href: "/services/cms-development",
            description: "iOS & Android cross-platform applications",
            icon: "Layout",
          },
        ],
      },
      {
        group: "Enterprise & Operations",
        items: [
          {
            label: "Custom CRM Development",
            href: "/services/crm-solutions",
            description: "Tailored sales pipelines with zero seat fees",
            icon: "Database",
          },
          {
            label: "Client & Customer Portals",
            href: "/services/ui-ux-design",
            description: "Secure vaults, invoicing, and user portals",
            icon: "Palette",
          },
          {
            label: "Business Software & AI",
            href: "/services/digital-strategy",
            description: "Internal operations tools & intelligent apps",
            icon: "TrendingUp",
          },
        ],
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    hasDropdown: false,
  },
  {
    label: "Pricing & Models",
    href: "/pricing",
    hasDropdown: false,
  },
  {
    label: "About",
    href: "/about",
    hasDropdown: false,
  },
  {
    label: "Blog",
    href: "/blog",
    hasDropdown: false,
  },
  {
    label: "Contact",
    href: "/contact",
    hasDropdown: false,
  },
] as const;
