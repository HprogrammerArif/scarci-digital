import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services } from "@/data/services";
import { BOOK_CALL_HREF } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#050B14] relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <Badge variant="glow" dot className="mx-auto">
            WHAT WE BUILD
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One team for your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              whole product
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Strategy, design, engineering, and launch under one roof. Pick a
            starting point, or tell us the problem and we&apos;ll recommend
            the right approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl p-6 bg-[#081224]/80 border border-white/10 hover:border-blue-500/40 hover:bg-[#0A1628] transition-all duration-300 flex flex-col"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                style={{ backgroundColor: service.accent }}
              />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-blue-500/40 transition-colors">
                <ServiceIcon name={service.icon} className="w-6 h-6" style={{ color: service.accent }} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                {service.tagline}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-5 pt-4 border-t border-white/5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}

          <Link
            href={BOOK_CALL_HREF}
            className="group rounded-2xl p-6 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent border border-blue-500/30 hover:border-blue-400/60 transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-5">
              <MessageCircle className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-lg font-bold text-white">Not sure what you need?</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed flex-1">
              Tell us the problem you&apos;re trying to solve. We&apos;ll give
              you an honest recommendation, even if that&apos;s an
              off-the-shelf tool.
            </p>
            <span className="mt-5 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Talk to us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
