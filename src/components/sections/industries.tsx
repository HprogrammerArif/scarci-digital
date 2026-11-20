import {
  Cloud,
  ShoppingBag,
  HeartPulse,
  Building2,
  Landmark,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { industries } from "@/data/engagement";

const ICONS = [Cloud, ShoppingBag, HeartPulse, Building2, Landmark, Truck];

export function Industries() {
  return (
    <section className="py-24 sm:py-28 bg-[#050B14]">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="glow" dot className="mx-auto">
            INDUSTRIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Different industries,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              same standard
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            We work with clients across the US, Canada, the UK, Europe, and
            Australia, in industries where software has to fit real-world
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={industry.name}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#091527]/70 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{industry.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{industry.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
