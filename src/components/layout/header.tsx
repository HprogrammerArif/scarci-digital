"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/ui/service-icon";
import { BOOK_CALL_HREF, NAV_LINKS, SERVICE_NAV } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  const closeMobile = () => setMobileMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen
          ? "py-3 bg-[#050B14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <Image
              src="/assets/projects/Logo-scarcidigital.svg"
              alt="Scarci Digital home"
              width={185}
              height={45}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md"
          >
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                      servicesOpen || isActive(link.href)
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180 text-blue-400"
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[660px] z-50">
                      <div className="rounded-2xl bg-[#0A1628]/95 border border-white/10 p-4 shadow-2xl backdrop-blur-2xl">
                        <div className="grid grid-cols-2 gap-1">
                          {SERVICE_NAV.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/40 transition-colors shrink-0">
                                <ServiceIcon
                                  name={item.icon}
                                  className="w-4 h-4 text-blue-400"
                                />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                                  {item.label}
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/10 hover:border-blue-500/40 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            All services
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs px-2 text-slate-400">
                          <span>Need SEO, ads, or an AI receptionist?</span>
                          <a
                            href="https://scarcisolutions.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
                          >
                            Scarci Solutions
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href={BOOK_CALL_HREF}>
              <Button variant="glow" size="md">
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] h-[calc(100dvh-64px)] bg-[#050B14] border-t border-white/10 overflow-y-auto px-4 pt-4 pb-[max(2rem,env(safe-area-inset-bottom))] z-40 flex flex-col justify-between gap-6">
          <nav aria-label="Mobile" className="space-y-1">
            <span className="block px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-3 border-b border-white/10">
              {SERVICE_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 text-sm text-slate-200"
                >
                  <ServiceIcon name={item.icon} className="w-4 h-4 text-blue-400 shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
            {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={cn(
                  "block px-4 py-3 rounded-xl hover:bg-white/5 font-medium text-base",
                  isActive(link.href) ? "text-blue-400" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            <Link href={BOOK_CALL_HREF} onClick={closeMobile} className="block">
              <Button variant="glow" size="lg" className="w-full">
                Book a Free Call
              </Button>
            </Link>
            <p className="text-center text-xs text-slate-500">
              A sister concern of{" "}
              <a
                href="https://scarcisolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Scarci Solutions
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
