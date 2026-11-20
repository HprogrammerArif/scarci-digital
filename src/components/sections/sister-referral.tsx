import { ExternalLink, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { sisterConcernReferral } from "@/data/engagement";

export function SisterReferral() {
  return (
    <section className="pb-8">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950/40 via-[#0B1528] to-blue-950/40 border border-indigo-500/30 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">{sisterConcernReferral.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {sisterConcernReferral.description}
              </p>
            </div>
          </div>
          <a
            href={sisterConcernReferral.sisterCompanyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-indigo-500/40 bg-white/5 hover:bg-indigo-600/20 text-sm font-semibold text-indigo-200 transition-colors"
          >
            {sisterConcernReferral.linkText}
            <ExternalLink className="w-4 h-4 text-indigo-400" />
          </a>
        </div>
      </Container>
    </section>
  );
}
