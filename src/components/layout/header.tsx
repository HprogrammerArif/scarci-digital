"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ShoppingCart,
  Layout,
  Database,
  Palette,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
  Layout: <Layout className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-pink-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[#050B14]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all">
              <span className="font-bold text-white text-xl tracking-tighter">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight flex items-center gap-1.5">
                Scarci <span className="text-blue-500">Digital</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 -mt-1 font-medium">
                A Scarci Solutions Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors",
                        servicesOpen || pathname.startsWith(link.href)
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

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px] z-50">
                        <div className="rounded-2xl bg-[#0A1628]/95 border border-white/10 p-5 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-3">
                          {link.children?.flatMap((group) =>
                            group.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setServicesOpen(false)}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                              >
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 group-hover:border-blue-500/30 transition-all shrink-0">
                                  {iconMap[item.icon] || (
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                  )}
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                    {item.label}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                                  </div>
                                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          )}
                          <div className="col-span-2 pt-3 mt-1 border-t border-white/10 flex items-center justify-between text-xs px-2 text-slate-400">
                            <span>Looking for custom CRM integration?</span>
                            <Link
                              href="/contact"
                              onClick={() => setServicesOpen(false)}
                              className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                            >
                              Talk to an Engineer →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://scarcisolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex"
            >
              <Badge variant="glow" dot className="cursor-pointer hover:border-blue-400">
                Sister Concern
              </Badge>
            </Link>
            <Link href="/contact">
              <Button variant="glow" size="md">
                Book Discovery Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/contact">
              <Button variant="glow" size="sm">
                Get Started
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#050B14]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto p-6 z-40 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Navigation
              </span>
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  All Services
                </Link>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/website-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • Website Development
                  </Link>
                  <Link
                    href="/services/ecommerce"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • E-Commerce & Shopify
                  </Link>
                  <Link
                    href="/services/cms-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • CMS (Webflow, WordPress)
                  </Link>
                  <Link
                    href="/services/crm-solutions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • CRM Solutions
                  </Link>
                  <Link
                    href="/services/ui-ux-design"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • UI/UX Design
                  </Link>
                  <Link
                    href="/services/digital-strategy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-white"
                  >
                    • Digital Strategy & SEO
                  </Link>
                </div>
                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  Blog & Insights
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-white/5 text-white font-medium text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <Button variant="primary" size="lg" className="w-full">
                Book Discovery Call
              </Button>
            </Link>
            <p className="text-center text-xs text-slate-500">
              Sister Concern of{" "}
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
