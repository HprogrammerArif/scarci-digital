import Link from "next/link";
import { Inbox, Briefcase, MessageSquareQuote, HelpCircle, ArrowRight } from "lucide-react";
import { requireAdmin } from "@/lib/admin-auth";
import { listLeads, leadSourceLabel } from "@/lib/leads";
import { readFaqs, readProjects, readTestimonials } from "@/lib/content";

export const metadata = { title: "Overview" };

export default async function AdminOverviewPage() {
  await requireAdmin();
  const [leads, projects, testimonials, faqs] = await Promise.all([
    listLeads(),
    readProjects(),
    readTestimonials(),
    readFaqs(),
  ]);
  const newLeads = leads.filter((l) => l.status === "new");

  const cards = [
    { label: "New leads", value: newLeads.length, sub: `${leads.length} total`, href: "/admin/leads", icon: Inbox },
    { label: "Case studies", value: projects.length, sub: `${projects.filter((p) => p.featured).length} featured on home`, href: "/admin/projects", icon: Briefcase },
    { label: "Testimonials", value: testimonials.length, sub: "Shown on home & work", href: "/admin/testimonials", icon: MessageSquareQuote },
    { label: "FAQs", value: faqs.length, sub: "Shown on home page", href: "/admin/faqs", icon: HelpCircle },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-white">Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map(({ label, value, sub, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl bg-[#0A1628] border border-white/10 hover:border-blue-500/40 p-5 transition-colors"
          >
            <div className="flex items-center justify-between text-slate-400 text-sm">
              {label}
              <Icon className="w-4 h-4" />
            </div>
            <p className="mt-3 text-3xl font-bold text-white">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{sub}</p>
          </Link>
        ))}
      </div>

      <section className="rounded-xl bg-[#0A1628] border border-white/10">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="font-semibold text-white">Latest leads</h2>
          <Link href="/admin/leads" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
            All leads <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {leads.length === 0 ? (
          <p className="p-5 text-sm text-slate-500">
            No leads yet. Contact form, chat, and newsletter submissions will appear here.
          </p>
        ) : (
          <ul className="divide-y divide-white/5">
            {leads.slice(0, 6).map((lead) => (
              <li key={lead.id} className="p-5 flex flex-wrap items-center justify-between gap-2 text-sm">
                <div className="min-w-0">
                  <p className="font-medium text-white truncate">
                    {lead.name || lead.email || lead.phone}
                  </p>
                  <p className="text-xs text-slate-500">
                    {leadSourceLabel(lead.source)}
                    {lead.service ? ` · ${lead.service}` : ""}
                  </p>
                </div>
                <time className="text-xs text-slate-500" dateTime={lead.createdAt}>
                  {new Date(lead.createdAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
