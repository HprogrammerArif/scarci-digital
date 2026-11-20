export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  /** Optional slug of the related case study in /portfolio. */
  projectSlug?: string;
  /** Optional path or URL to a headshot. */
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Our biggest problem was mobile checkout drop-off during high-traffic product drops. Scarci Digital removed 18 third-party apps, rebuilt our Shopify Plus theme, and moved us to Checkout Extensibility. Checkout now loads in under 1.2 seconds and mobile completion is up 38%.",
    author: "Michael Rodriguez",
    role: "Co-Founder & COO",
    company: "UrbanThread Co.",
    rating: 5,
    projectSlug: "urbanthread-ecommerce",
  },
  {
    id: "2",
    quote:
      "We came from a slow WordPress site with dozens of plugins. Scarci Digital built us a Next.js platform that scores 98 on Lighthouse and lets our marketing team publish in five languages without touching code.",
    author: "Sarah Chen",
    role: "VP of Growth",
    company: "Nexus Consulting Group",
    rating: 5,
    projectSlug: "nexus-consulting-website",
  },
  {
    id: "3",
    quote:
      "We were paying for Salesforce seats our dealmakers refused to use. Scarci Digital built a CRM around our actual deal stages, and 95% of the team was using it daily within two weeks.",
    author: "David Okafor",
    role: "Head of Revenue Operations",
    company: "Meridian Partners",
    rating: 5,
    projectSlug: "meridian-crm-system",
  },
  {
    id: "4",
    quote:
      "They understood that a premium brand needs a premium store. The new subscription setup and Klaviyo flows recover 28% of abandoned carts, and the site handled our biggest launch without a hiccup.",
    author: "Emma Larsson",
    role: "Founder",
    company: "Nordic Essentials",
    rating: 5,
    projectSlug: "nordic-essentials-store",
  },
  {
    id: "5",
    quote:
      "Our product is hard to explain in a sentence. The interactive demo they built on our new site does it in under a minute, and demo requests went up 55% in the first month.",
    author: "James Whitfield",
    role: "CTO",
    company: "ScaleUp Ventures",
    rating: 5,
    projectSlug: "scaleup-ventures-saas",
  },
  {
    id: "6",
    quote:
      "Patients used to call because our booking page kept failing. The rebuilt WordPress site loads 80% faster, booking takes three steps, and online appointments are up 35%.",
    author: "Priya Sharma",
    role: "Operations Director",
    company: "Elevate Health Clinic",
    rating: 5,
    projectSlug: "elevate-health-wordpress",
  },
];
