export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  techStack: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    description:
      "We craft high-performance websites that captivate your audience and drive conversions. From corporate platforms to startup landing pages, every pixel is engineered for impact.",
    href: "/services/website-development",
    icon: "Globe",
    color: "#0066FF",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Corporate and company websites",
      "Small business websites",
      "Professional service websites",
      "Agency and portfolio websites",
      "Landing pages and lead-generation websites",
      "Personal brand websites",
      "Startup websites",
      "Multilingual websites",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    shortTitle: "E-Commerce",
    description:
      "End-to-end e-commerce solutions that turn browsers into buyers. We build stores optimized for conversion, speed, and scale across every platform.",
    href: "/services/ecommerce",
    icon: "ShoppingCart",
    color: "#10B981",
    techStack: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
    features: [
      "Shopify store design and development",
      "WooCommerce store development",
      "Product catalog setup",
      "Payment gateway integration",
      "Shipping and tax configuration",
      "Subscription and recurring-payment stores",
      "Digital product stores",
      "Multi-language and multi-currency stores",
      "Marketplace integrations",
      "Checkout optimization",
      "Conversion rate optimization",
      "Abandoned-cart recovery setup",
      "Analytics and sales tracking",
    ],
  },
  {
    id: "cms-development",
    title: "CMS Development",
    shortTitle: "CMS",
    description:
      "Powerful content management solutions on Shopify, Webflow, and WordPress. We build systems that let you manage content with confidence.",
    href: "/services/cms-development",
    icon: "Layout",
    color: "#8B5CF6",
    techStack: ["Shopify", "Webflow", "WordPress", "Elementor"],
    features: [
      "Shopify store setup and theme customization",
      "Webflow marketing and SaaS websites",
      "Figma-to-Webflow development",
      "WordPress business websites",
      "Elementor and Elementor Pro",
      "Custom themes and page templates",
      "WooCommerce stores",
      "Plugin configuration and integrations",
      "CMS migrations and maintenance",
    ],
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    shortTitle: "CRM",
    description:
      "Custom CRM systems that streamline your operations and supercharge your sales pipeline. Built to fit your workflow, not the other way around.",
    href: "/services/crm-solutions",
    icon: "Database",
    color: "#F59E0B",
    techStack: ["Node.js", "React", "PostgreSQL", "REST API"],
    features: [
      "Custom CRM development",
      "Sales pipeline management",
      "Customer data management",
      "Marketing automation",
      "Lead scoring and tracking",
      "Reporting and analytics dashboards",
      "Third-party integrations",
      "Workflow automation",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "Design",
    description:
      "Research-driven design that users love. We create intuitive interfaces and seamless experiences that keep customers coming back.",
    href: "/services/ui-ux-design",
    icon: "Palette",
    color: "#EC4899",
    techStack: ["Figma", "Adobe XD", "Framer", "Principle"],
    features: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and UI",
      "Design systems and style guides",
      "Usability testing",
      "Responsive design",
      "Accessibility compliance",
    ],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy & Consulting",
    shortTitle: "Strategy",
    description:
      "Data-driven strategies that accelerate your digital transformation. From SEO to performance optimization, we help you grow smarter.",
    href: "/services/digital-strategy",
    icon: "TrendingUp",
    color: "#06B6D4",
    techStack: ["Google Analytics", "SEMrush", "GTM", "Lighthouse"],
    features: [
      "SEO optimization and strategy",
      "Performance optimization",
      "Digital transformation consulting",
      "Content strategy",
      "Conversion rate optimization",
      "Analytics and tracking setup",
      "Competitive analysis",
      "Growth hacking",
    ],
  },
];
