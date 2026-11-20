import {
  Code2,
  Users,
  MonitorPlay,
  ShieldCheck,
  Wrench,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { commitments } from "@/data/engagement";

const ICONS = [Code2, Users, MonitorPlay, ShieldCheck, Wrench, Clock];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-28 bg-[#040914] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
            <Badge variant="glow" dot>
              WHY SCARCI DIGITAL
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              The things clients worry about,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                handled up front.
              </span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Hiring a development partner is a big decision. These are the
              commitments we make in writing on every project.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commitments.map((item, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
