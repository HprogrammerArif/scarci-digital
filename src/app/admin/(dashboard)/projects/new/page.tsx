import { requireAdmin } from "@/lib/admin-auth";
import { ProjectForm } from "@/components/admin/project-form";

export const metadata = { title: "New case study" };

export default async function NewProjectPage() {
  await requireAdmin();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">New case study</h1>
      <ProjectForm />
    </div>
  );
}
