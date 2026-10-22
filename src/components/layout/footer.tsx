"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#03070E] border-t border-white/10 relative overflow-hidden pt-20 pb-12">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <Container>
        {/* Top Sister Concern Banner */}
        <div className="rounded-2xl p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-950/40 via-[#0A1628]/80 to-indigo-950/40 border border-blue-500/20 backdrop-blur-md mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                  A Sister Concern of Scarci Solutions
                </span>
                <Badge variant="glow" size="sm">
                  Verified Sister Company
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Backing enterprise CRM, software engineering, and digital growth across the globe.
              </p>
            </div>
          </div>
          <a
            href="https://scarcisolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40"
          >
            Visit Scarci Solutions
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="font-bold text-white text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Scarci <span className="text-blue-500">Digital</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design and engineer enterprise-grade digital experiences, e-commerce storefronts, and custom CRM software that drive measurable revenue growth.
            </p>

            {/* Newsletter form */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Subscribe to Digital Growth Insights
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm py-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Thanks for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center gap-2 max-w-sm"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/services/website-development"
                  className="hover:text-white transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="hover:text-white transition-colors"
                >
                  Shopify & E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cms-development"
                  className="hover:text-white transition-colors"
                >
                  CMS & Webflow
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crm-solutions"
                  className="hover:text-white transition-colors"
                >
                  Custom CRM Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="hover:text-white transition-colors"
                >
                  UI/UX Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-strategy"
                  className="hover:text-white transition-colors"
                >
                  Digital Strategy & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Scarci Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Client Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Agency Blog & Insights
                </Link>
              </li>
              <li>
                <a
                  href="https://scarcisolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Scarci Solutions
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Global */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Global Presence
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Headquarters: United States (Serving North America & Europe)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {SITE_CONFIG.name}. All rights reserved. A
            sister concern of Scarci Solutions.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
