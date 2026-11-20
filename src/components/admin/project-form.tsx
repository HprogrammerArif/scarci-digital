import Link from "next/link";
import type { Project } from "@/data/projects";
import { saveProjectAction } from "@/app/admin/actions";
import { ActionForm, SubmitButton, fieldClass, labelClass } from "@/components/admin/form-controls";

const CATEGORY_SUGGESTIONS = ["E-Commerce", "Website", "CMS", "CRM", "SaaS", "Mobile App", "Portal", "MVP"];

function Field({
  name,
  label,
  defaultValue,
  hint,
  required,
  placeholder,
  type = "text",
  list,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  list?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && " *"}
      </label>
      <input id={name} name={name} type={type} defaultValue={defaultValue} required={required} placeholder={placeholder} list={list} className={fieldClass} />
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

function Area({
  name,
  label,
  defaultValue,
  hint,
  rows = 3,
  required,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  hint?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && " *"}
      </label>
      <textarea id={name} name={name} rows={rows} defaultValue={defaultValue} required={required} className={`${fieldClass} resize-y`} />
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-xl border border-white/10 bg-[#0A1628] p-5 space-y-4">
      <legend className="px-2 text-sm font-semibold text-white">{title}</legend>
      {children}
    </fieldset>
  );
}

export function ProjectForm({ project }: { project?: Project }) {
  return (
    <ActionForm action={saveProjectAction} className="space-y-6 max-w-4xl">
      <input type="hidden" name="id" value={project?.id ?? ""} />
      <datalist id="category-options">
        {CATEGORY_SUGGESTIONS.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>

      <Section title="Basics">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field name="title" label="Project title" defaultValue={project?.title} required />
          <Field name="slug" label="URL slug" defaultValue={project?.slug} hint="Used in /portfolio/<slug>. Leave blank to generate from the title." />
          <Field name="client" label="Client name" defaultValue={project?.client} required />
          <Field name="category" label="Category" defaultValue={project?.category} list="category-options" required hint="Used for the filter on the Work page." />
          <Field name="year" label="Year" defaultValue={project?.year ?? String(new Date().getFullYear())} required />
          <Field name="timeline" label="Delivery timeline" defaultValue={project?.timeline} placeholder="8 weeks" required />
          <Field name="image" label="Image" defaultValue={project?.image} placeholder="/assets/projects/name.jpg or https://..." hint="Path to a file in /public or a full image URL." />
          <Field name="liveUrl" label="Live site URL" defaultValue={project?.liveUrl} placeholder="https://..." type="url" hint="Optional. Shows a “Visit live site” link." />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-300">
          <input type="checkbox" name="featured" defaultChecked={project?.featured ?? false} className="w-4 h-4 accent-blue-600" />
          Feature on the home page (up to 3 are shown)
        </label>
      </Section>

      <Section title="Summary">
        <Field name="shortDescription" label="Short description" defaultValue={project?.shortDescription} required hint="One line, used by the chat assistant." />
        <Area name="description" label="Card description" defaultValue={project?.description} required />
        <Area name="results" label="Key results" defaultValue={project?.results?.join("\n")} hint="One per line. The first one is shown as a badge on the card." />
        <Field name="techStack" label="Technologies" defaultValue={project?.techStack.join(", ")} hint="Comma separated, e.g. Next.js, PostgreSQL, Stripe" />
      </Section>

      <Section title="Case study">
        <Area name="clientOverview" label="Client overview" defaultValue={project?.clientOverview} />
        <Area name="challengeSummary" label="The challenge" defaultValue={project?.challenge.summary} />
        <Area name="challengeBullets" label="Challenge details" defaultValue={project?.challenge.bulletPoints.join("\n")} hint="One per line." rows={4} />
        <Area name="solutionSummary" label="What we built" defaultValue={project?.solution.summary} />
        <Area
          name="architecturePoints"
          label="Solution highlights"
          defaultValue={project?.solution.architecturePoints.map((p) => `${p.title} | ${p.desc}`).join("\n")}
          hint="One per line, formatted as: Title | Description"
          rows={4}
        />
      </Section>

      <Section title="Client quote (optional)">
        <Area name="quote" label="Quote" defaultValue={project?.clientQuote?.quote} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field name="quoteAuthor" label="Name" defaultValue={project?.clientQuote?.author} />
          <Field name="quoteRole" label="Role & company" defaultValue={project?.clientQuote?.role} />
        </div>
      </Section>

      <div className="flex items-center gap-3">
        <SubmitButton>{project ? "Save changes" : "Create case study"}</SubmitButton>
        <Link href="/admin/projects" className="text-sm text-slate-400 hover:text-white">
          Cancel
        </Link>
      </div>
    </ActionForm>
  );
}
