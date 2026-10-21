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
      "Scarci Digital transformed our entire online presence. Our e-commerce revenue increased by 340% within the first six months of launching the new store.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "UrbanThread Co.",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Their attention to detail is extraordinary. The website they built for us isn't just beautiful—it consistently ranks on the first page of Google for our target keywords.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "Nexus Consulting Group",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "We needed a CRM that actually fit our sales process, not the other way around. Scarci Digital delivered a custom solution that our team adopted in days, not months.",
    author: "David Okafor",
    role: "VP of Sales",
    company: "Meridian Partners",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "The Shopify store they built handles 10x our previous traffic without breaking a sweat. The conversion rate optimization alone paid for the entire project.",
    author: "Emma Larsson",
    role: "Founder",
    company: "Nordic Essentials",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Working with Scarci Digital felt like having a world-class tech team in-house. They understood our vision from day one and executed flawlessly.",
    author: "James Whitfield",
    role: "CTO",
    company: "ScaleUp Ventures",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Our WordPress site was slow, outdated, and losing us leads. Scarci Digital rebuilt it on a modern stack—load times dropped by 80% and conversions doubled.",
    author: "Priya Sharma",
    role: "Operations Manager",
    company: "Elevate Health Clinic",
    rating: 5,
  },
];
