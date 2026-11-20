import { Star } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { readProjects, readTestimonials } from "@/lib/content";
import {
  deleteTestimonialAction,
  moveTestimonialAction,
  saveTestimonialAction,
} from "@/app/admin/actions";
import { ActionForm, ConfirmForm, SubmitButton, fieldClass, labelClass } from "@/components/admin/form-controls";
import { ReorderButtons } from "@/components/admin/reorder-buttons";
import { Notice } from "@/components/admin/notice";
import type { Testimonial } from "@/data/testimonials";
import type { Project } from "@/data/projects";

export const metadata = { title: "Testimonials" };

function TestimonialFields({ t, projects }: { t?: Testimonial; projects: Project[] }) {
  return (
    <div className="space-y-4">
      <input type="hidden" name="id" value={t?.id ?? ""} />
      <div>
        <label className={labelClass}>Quote *</label>
        <textarea name="quote" rows={4} defaultValue={t?.quote} required className={`${fieldClass} resize-y`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input name="author" defaultValue={t?.author} required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Role *</label>
          <input name="role" defaultValue={t?.role} required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Company *</label>
          <input name="company" defaultValue={t?.company} required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Rating</label>
          <select name="rating" defaultValue={String(t?.rating ?? 5)} className={`${fieldClass} bg-[#081324]`}>
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} stars
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Linked case study</label>
          <select name="projectSlug" defaultValue={t?.projectSlug ?? ""} className={`${fieldClass} bg-[#081324]`}>
            <option value="">None</option>
            {projects.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Photo URL</label>
          <input name="avatar" defaultValue={t?.avatar} placeholder="Optional" className={fieldClass} />
        </div>
      </div>
    </div>
  );
}

export default async function AdminTestimonialsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  await requireAdmin();
  const [{ saved, deleted }, testimonials, projects] = await Promise.all([
    searchParams,
    readTestimonials(),
    readProjects(),
  ]);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Testimonials</h1>
        <p className="text-sm text-slate-400 mt-1">
          Shown on the home and Work pages. Only publish quotes your clients have approved.
        </p>
      </div>

      {saved && <Notice>Saved. The website is updated.</Notice>}
      {deleted && <Notice>Testimonial deleted.</Notice>}

      <ul className="space-y-3">
        {testimonials.map((t, idx) => (
          <li key={t.id} className="rounded-xl border border-white/10 bg-[#0A1628]">
            <details>
              <summary className="list-none [&::-webkit-details-marker]:hidden p-4 flex flex-wrap items-center gap-4 cursor-pointer">
                <div className="flex-1 min-w-[200px]">
                  <p className="font-medium text-white">
                    {t.author} <span className="text-slate-500 font-normal">· {t.company}</span>
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-1">{t.quote}</p>
                </div>
                <span className="flex items-center gap-0.5 text-amber-400 text-xs">
                  {t.rating} <Star className="w-3.5 h-3.5 fill-amber-400" />
                </span>
                <span className="text-xs text-blue-400">Edit</span>
              </summary>
              <div className="p-4 pt-0 space-y-4">
                <ActionForm action={saveTestimonialAction} className="space-y-4">
                  <TestimonialFields t={t} projects={projects} />
                  <SubmitButton>Save</SubmitButton>
                </ActionForm>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <ReorderButtons action={moveTestimonialAction} id={t.id} isFirst={idx === 0} isLast={idx === testimonials.length - 1} />
                  <ConfirmForm action={deleteTestimonialAction} id={t.id} message={`Delete the testimonial from ${t.author}?`}>
                    Delete
                  </ConfirmForm>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>

      <section className="rounded-xl border border-dashed border-white/15 p-5 space-y-4">
        <h2 className="font-semibold text-white">Add a testimonial</h2>
        <ActionForm action={saveTestimonialAction} className="space-y-4">
          <TestimonialFields projects={projects} />
          <SubmitButton>Add testimonial</SubmitButton>
        </ActionForm>
      </section>
    </div>
  );
}
