import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { readProjects } from "@/lib/content";
import { ProjectForm } from "@/components/admin/project-form";

export const metadata = { title: "Edit case study" };

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const project = (await readProjects()).find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Edit: {project.title}</h1>
      <ProjectForm project={project} />
    </div>
  );
}
