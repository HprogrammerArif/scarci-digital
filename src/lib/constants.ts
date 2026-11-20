import { services } from "@/data/services";

export const SITE_CONFIG = {
  name: "Scarci Digital",
  tagline: "Custom software, built around your business.",
  description:
    "US-managed custom software studio. We design and build startup MVPs, SaaS platforms, custom CRMs, client portals, mobile apps, AI-powered business tools, and high-performing websites. You own 100% of the code. Sister concern of Scarci Solutions.",
  url: "https://www.scarcidigital.com",
  parentCompany: {
    name: "Scarci Solutions",
    url: "https://scarcisolutions.com",
  },
  contact: {
    email: "hello@scarcidigital.com",
    phone: "",
    address: "Wilmington, DE, United States",
    hours: "Mon–Fri, 9am–6pm ET",
  },
  // Optional: a Cal.com / Calendly link. When set, "Book a call" buttons open it.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  social: {
    linkedin: "https://linkedin.com/company/scarcidigital",
    twitter: "https://x.com/scarcidigital",
    facebook: "https://facebook.com/scarcidigital",
    instagram: "https://instagram.com/scarcidigital",
  },
} as const;

export const BOOK_CALL_HREF = SITE_CONFIG.bookingUrl || "/contact";

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Work", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_NAV = services.map((s) => ({
  label: s.shortTitle,
  href: s.href,
  description: s.navDescription,
  icon: s.icon,
}));
