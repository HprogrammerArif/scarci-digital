import Link from "next/link";
import { Compass, Layers, Code2, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { deliveryPhases } from "@/data/engagement";

const ICONS = [Compass, Layers, Code2, Rocket];

export function ProcessSteps({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="glow" dot className="mx-auto">
            HOW WE WORK
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Four phases.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              No surprises.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Every project follows the same proven path, so you always know
            where your product stands and what comes next.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryPhases.map((phase, idx) => {
            const Icon = ICONS[idx];
            return (
              <li
                key={phase.number}
                className="relative rounded-2xl bg-[#091527]/70 border border-white/10 hover:border-blue-500/40 p-6 transition-colors"
              >
                <div className="text-4xl font-extrabold text-white/5 absolute top-4 right-5 font-mono select-none" aria-hidden="true">
                  {phase.number}
                </div>
                <div className="space-y-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-blue-400">
                      STEP {phase.number}
                    </span>
                    <h3 className="text-lg font-bold text-white">{phase.name}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{phase.summary}</p>
                  </div>
                  <ul className="pt-4 border-t border-white/5 space-y-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        {showLink && (
          <div className="mt-10 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              See how we work in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
