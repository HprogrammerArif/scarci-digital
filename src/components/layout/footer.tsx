import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Calendar, Clock, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { BOOK_CALL_HREF, SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "How We Work", href: "/process" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#03070E] border-t border-white/10 relative overflow-hidden pt-16 sm:pt-20 pb-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/projects/Logo-scarcidigital.svg"
                alt="Scarci Digital"
                width={185}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A US-managed software studio building MVPs, SaaS platforms,
              CRMs, portals, mobile apps, and websites. You own every line of
              code we write.
            </p>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Practical notes on building software, once a month
              </span>
              <NewsletterForm />
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase">
              Services
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.parentCompany.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  Scarci Solutions
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase">
              Get in Touch
            </h2>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                <Link href={BOOK_CALL_HREF} className="hover:text-white transition-colors">
                  Book a free 30-minute call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved. A sister
            concern of{" "}
            <a
              href={SITE_CONFIG.parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              Scarci Solutions
            </a>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
