import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { getProjects } from "@/lib/content";

export async function PortfolioShowcase() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);
  const shown = (featured.length > 0 ? featured : projects).slice(0, 3);
  if (shown.length === 0) return null;

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#030812] border-t border-white/5 relative">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <Badge variant="glow" dot>
              SELECTED WORK
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Results our clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                can measure
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              A few recent projects, with the problem we solved and what
              changed afterward.
            </p>
          </div>
          <Link href="/portfolio" className="shrink-0">
            <Button variant="secondary" size="md">
              View all work
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
