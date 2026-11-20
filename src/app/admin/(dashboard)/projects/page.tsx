import Link from "next/link";
import { Plus, Star, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { readProjects } from "@/lib/content";
import { deleteProjectAction, moveProjectAction } from "@/app/admin/actions";
import { ConfirmForm } from "@/components/admin/form-controls";
import { ReorderButtons } from "@/components/admin/reorder-buttons";
import { Notice } from "@/components/admin/notice";

export const metadata = { title: "Case studies" };

export default async function AdminProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  await requireAdmin();
  const [{ saved, deleted }, projects] = await Promise.all([searchParams, readProjects()]);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Case studies</h1>
          <p className="text-sm text-slate-400 mt-1">Shown on the Work page, the home page (featured), and service pages. Order here is the order on the site.</p>
        </div>
        <Link href="/admin/projects/new" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
          <Plus className="w-4 h-4" /> New case study
        </Link>
      </div>

      {saved && <Notice>Saved. The website is updated.</Notice>}
      {deleted && <Notice>Case study deleted.</Notice>}

      <ul className="rounded-xl border border-white/10 bg-[#0A1628] divide-y divide-white/5">
        {projects.map((project, idx) => (
          <li key={project.id} className="p-4 flex flex-wrap items-center gap-4">
            <ReorderButtons action={moveProjectAction} id={project.id} isFirst={idx === 0} isLast={idx === projects.length - 1} />
            <div className="flex-1 min-w-[200px]">
              <p className="font-medium text-white flex items-center gap-2">
                {project.title}
                {project.featured && <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-label="Featured" />}
              </p>
              <p className="text-xs text-slate-500">
                {project.category} · {project.client} · {project.year}
              </p>
            </div>
            <a href={`/portfolio/${project.slug}`} target="_blank" className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1">
              View <ExternalLink className="w-3 h-3" />
            </a>
            <Link href={`/admin/projects/${project.id}`} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/5">
              Edit
            </Link>
            <ConfirmForm action={deleteProjectAction} id={project.id} message={`Delete "${project.title}"? This removes it from the website.`}>
              Delete
            </ConfirmForm>
          </li>
        ))}
        {projects.length === 0 && <li className="p-6 text-sm text-slate-500">No case studies yet.</li>}
      </ul>
    </div>
  );
}
