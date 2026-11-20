import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group rounded-2xl bg-[#091527]/90 border border-white/10 hover:border-blue-500/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- images can be any URL set in the dashboard
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-indigo-900/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091527] via-transparent to-transparent" />
        {project.results?.[0] && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            {project.results[0]}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-between">
          <Badge variant="primary">{project.category}</Badge>
          <span className="text-xs text-slate-500">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="pt-4 mt-1 border-t border-white/5 inline-flex items-center justify-between text-sm font-semibold text-blue-400">
          Read case study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
