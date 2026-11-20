"use client";

import * as React from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { cn } from "@/lib/cn";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const categories = React.useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const [active, setActive] = React.useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer",
              active === category
                ? "bg-[#0066FF] text-white shadow-lg shadow-blue-500/25"
                : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
