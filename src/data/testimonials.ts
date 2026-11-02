export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Our biggest bottleneck was mobile checkout drop-off during high-traffic apparel drops. Scarci Digital stripped out 18 bloated third-party apps, rebuilt our Shopify Plus theme with custom Liquid web components, and migrated us to Checkout Extensibility. Checkout speed improved by 75% and our mobile completion jumped by 38%.",
    author: "Michael Rodriguez",
    role: "Co-Founder & COO",
    company: "UrbanThread Co.",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Most agencies just throw a heavy WordPress template together with 40 plugins. Scarci Digital engineered a modern Next.js platform that scores 99 on Lighthouse, loads under a second globally, and gives our marketing team an effortless visual CMS without touching production code.",
    author: "Sarah Chen",
    role: "VP of Growth",
    company: "Nexus Consulting Group",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "We were spending over $35,000 annually on Salesforce seat licenses for features our team actively avoided. Scarci Digital built us a bespoke, lightning-fast CRM on PostgreSQL and Next.js tailored specifically to our 4-stage debt advisory deal flow. Adoption was 100% within the first two weeks.",
    author: "David Okafor",
    role: "Head of Revenue Operations",
    company: "Meridian Partners",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "The engineering discipline they brought to our e-commerce storefront was refreshing. The code is typed, modular, and WCAG accessibility compliant. Our sticky cart drawer and multi-currency routing delivered an immediate 22% bump in average order value.",
    author: "Emma Larsson",
    role: "Founder & Creative Director",
    company: "Nordic Essentials",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "As a venture fund evaluating digital partners, Scarci Digital stands apart because they are backed by the software engineering pedigree of Scarci Solutions. They understand microservices, API security, and database indexing. You're working with true software engineers, not template assemblers.",
    author: "James Whitfield",
    role: "Partner & CTO",
    company: "ScaleUp Ventures",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Our multi-location clinic needed a secure, intuitive patient booking portal. Scarci Digital delivered a clean, HIPAA-aligned Webflow and API integration that reduced phone intake volume by 45% while providing a seamless mobile patient experience.",
    author: "Dr. Priya Sharma",
    role: "Operations Director",
    company: "Elevate Health Network",
    rating: 5,
  },
];
