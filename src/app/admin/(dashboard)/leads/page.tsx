import Link from "next/link";
import { Mail, Phone, Building2, Clock } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { LEAD_STATUSES, listLeads, leadSourceLabel, type LeadStatus } from "@/lib/leads";
import { deleteLeadAction, updateLeadAction } from "@/app/admin/actions";
import {
  ActionForm,
  ConfirmForm,
  SubmitButton,
  fieldClass,
} from "@/components/admin/form-controls";
import { cn } from "@/lib/cn";

export const metadata = { title: "Leads" };

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  contacted: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  qualified: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  won: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  lost: "bg-slate-500/15 text-slate-300 border-slate-500/30",
  archived: "bg-slate-500/10 text-slate-500 border-slate-500/20",
};

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  await requireAdmin();
  const { status } = await searchParams;
  const all = await listLeads();
  const filter = LEAD_STATUSES.includes(status as LeadStatus) ? (status as LeadStatus) : undefined;
  const leads = filter
    ? all.filter((l) => l.status === filter)
    : all.filter((l) => l.status !== "archived");

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Leads</h1>
        <p className="text-sm text-slate-400 mt-1">
          Everything submitted through the contact form, chat assistant, and newsletter signup.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/admin/leads"
          className={cn("px-3 py-1.5 rounded-full border", !filter ? "bg-white/10 border-white/20 text-white" : "border-white/10 text-slate-400 hover:text-white")}
        >
          Active ({all.filter((l) => l.status !== "archived").length})
        </Link>
        {LEAD_STATUSES.map((s) => (
          <Link
            key={s}
            href={`/admin/leads?status=${s}`}
            className={cn(
              "px-3 py-1.5 rounded-full border capitalize",
              filter === s ? "bg-white/10 border-white/20 text-white" : "border-white/10 text-slate-400 hover:text-white"
            )}
          >
            {s} ({all.filter((l) => l.status === s).length})
          </Link>
        ))}
      </div>

      {leads.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-[#0A1628] p-8 text-center text-sm text-slate-500">
          No leads here yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {leads.map((lead) => (
            <li key={lead.id} className="rounded-xl border border-white/10 bg-[#0A1628] p-5 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    {lead.name || lead.email || lead.phone || "Anonymous"}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                    {lead.email && (
                      <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1 hover:text-blue-400">
                        <Mail className="w-3.5 h-3.5" /> {lead.email}
                      </a>
                    )}
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1 hover:text-blue-400">
                        <Phone className="w-3.5 h-3.5" /> {lead.phone}
                      </a>
                    )}
                    {lead.company && (
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" /> {lead.company}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(lead.createdAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
                    </span>
                  </div>
                </div>
                <span className={cn("px-2.5 py-0.5 rounded-full border text-xs font-semibold capitalize", STATUS_STYLES[lead.status])}>
                  {lead.status}
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                {[
                  ["Source", leadSourceLabel(lead.source)],
                  ["Service", lead.service],
                  ["Stage", lead.stage],
                  ["Timeline", lead.timeline],
                ].map(([label, value]) =>
                  value ? (
                    <div key={label}>
                      <dt className="text-slate-500">{label}</dt>
                      <dd className="text-slate-200">{value}</dd>
                    </div>
                  ) : null
                )}
              </dl>

              {lead.message && (
                <p className="text-sm text-slate-300 whitespace-pre-wrap rounded-lg bg-white/[0.03] border border-white/5 p-3">
                  {lead.message}
                </p>
              )}
              {lead.pageUrl && <p className="text-xs text-slate-500">From page: {lead.pageUrl}</p>}

              <div className="flex flex-wrap items-end gap-3 pt-3 border-t border-white/5">
                <ActionForm action={updateLeadAction} className="flex flex-wrap items-end gap-3 flex-1">
                  <input type="hidden" name="id" value={lead.id} />
                  <label className="text-xs text-slate-400">
                    Status
                    <select name="status" defaultValue={lead.status} className={cn(fieldClass, "mt-1 bg-[#081324] capitalize")}>
                      {LEAD_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-xs text-slate-400 flex-1 min-w-[200px]">
                    Internal notes
                    <input name="notes" defaultValue={lead.notes ?? ""} placeholder="e.g. Call booked for Tuesday" className={cn(fieldClass, "mt-1")} />
                  </label>
                  <SubmitButton variant="secondary">Save</SubmitButton>
                </ActionForm>
                <ConfirmForm action={deleteLeadAction} id={lead.id} message="Delete this lead permanently?">
                  Delete
                </ConfirmForm>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
