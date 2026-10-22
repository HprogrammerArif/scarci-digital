export const SITE_CONFIG = {
  name: "Scarci Digital",
  tagline: "We Build Digital Experiences That Drive Growth",
  description:
    "Full-service digital agency specializing in website development, e-commerce, CMS solutions, and CRM development. A sister concern of Scarci Solutions.",
  url: "https://scarcidigital.com",
  parentCompany: {
    name: "Scarci Solutions",
    url: "https://scarcisolutions.com",
  },
  contact: {
    email: "hello@scarcidigital.com",
    phone: "+1 (555) 123-4567",
    address: "United States",
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
        group: "Development",
        items: [
          {
            label: "Website Development",
            href: "/services/website-development",
            description: "Corporate, startup, and business websites",
            icon: "Globe",
          },
          {
            label: "E-Commerce Development",
            href: "/services/ecommerce",
            description: "Shopify, WooCommerce, and custom stores",
            icon: "ShoppingCart",
          },
          {
            label: "CMS Development",
            href: "/services/cms-development",
            description: "Shopify, Webflow, WordPress solutions",
            icon: "Layout",
          },
        ],
      },
      {
        group: "Solutions",
        items: [
          {
            label: "CRM Solutions",
            href: "/services/crm-solutions",
            description: "Custom CRM development and integration",
            icon: "Database",
          },
          {
            label: "UI/UX Design",
            href: "/services/ui-ux-design",
            description: "User research, prototyping, design systems",
            icon: "Palette",
          },
          {
            label: "Digital Strategy",
            href: "/services/digital-strategy",
            description: "SEO, performance, digital transformation",
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
    label: "Pricing & Scope",
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
