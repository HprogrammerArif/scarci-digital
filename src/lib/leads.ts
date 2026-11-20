/**
 * Lead capture: every contact form, chat inquiry, and newsletter signup is
 * saved here and shown in the admin dashboard (/admin/leads).
 */
import {
  getStorageMode,
  hashDelete,
  hashGetAllJSON,
  hashGetJSON,
  hashSetJSON,
} from "@/lib/store";
import { SITE_CONFIG } from "@/lib/constants";

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "qualified",
  "won",
  "lost",
  "archived",
] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type LeadSource = "contact-form" | "chat-form" | "chat" | "newsletter";

export interface Lead {
  id: string;
  createdAt: string;
  source: LeadSource;
  status: LeadStatus;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  stage?: string;
  timeline?: string;
  message?: string;
  pageUrl?: string;
  notes?: string;
}

const LEADS_KEY = "leads";

export type NewLead = Omit<Lead, "id" | "createdAt" | "status">;

/**
 * Saves a lead and sends an email notification when configured.
 * Never throws: a storage outage must not break the visitor's form submission.
 */
export async function saveLead(input: NewLead): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
  };

  // Always log, so leads are recoverable from Vercel logs if storage fails.
  console.log("[NEW LEAD]", JSON.stringify(lead));

  if (getStorageMode() !== "unconfigured") {
    try {
      await hashSetJSON(LEADS_KEY, lead.id, lead);
    } catch (error) {
      console.error("Failed to store lead:", error);
    }
  }

  await notifyNewLead(lead);
  return lead;
}

export async function listLeads(): Promise<Lead[]> {
  const leads = await hashGetAllJSON<Lead>(LEADS_KEY);
  return leads.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getLead(id: string): Promise<Lead | null> {
  return hashGetJSON<Lead>(LEADS_KEY, id);
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<Lead, "status" | "notes">>
): Promise<void> {
  const lead = await getLead(id);
  if (!lead) throw new Error("Lead not found");
  await hashSetJSON(LEADS_KEY, id, { ...lead, ...patch });
}

export async function deleteLead(id: string): Promise<void> {
  await hashDelete(LEADS_KEY, id);
}

const SOURCE_LABELS: Record<LeadSource, string> = {
  "contact-form": "Contact form",
  "chat-form": "Chat assistant form",
  chat: "Chat conversation",
  newsletter: "Newsletter signup",
};

export function leadSourceLabel(source: LeadSource): string {
  return SOURCE_LABELS[source] ?? source;
}

/**
 * Optional email alert through Resend (https://resend.com).
 * Set RESEND_API_KEY, LEAD_NOTIFICATION_EMAIL, and optionally LEAD_FROM_EMAIL.
 */
async function notifyNewLead(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !to) return;

  const from =
    process.env.LEAD_FROM_EMAIL || "Scarci Digital <onboarding@resend.dev>";
  const rows = (
    [
      ["Source", leadSourceLabel(lead.source)],
      ["Name", lead.name],
      ["Email", lead.email],
      ["Phone", lead.phone],
      ["Company", lead.company],
      ["Service", lead.service],
      ["Project stage", lead.stage],
      ["Timeline", lead.timeline],
      ["Page", lead.pageUrl],
      ["Message", lead.message],
    ] as const
  )
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email || undefined,
        subject: `New lead: ${lead.name || lead.email || lead.phone || "website visitor"}`,
        text: `${rows}\n\nManage leads: ${SITE_CONFIG.url}/admin/leads`,
      }),
    });
    if (!res.ok) {
      console.error("Lead email failed:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Lead email failed:", error);
  }
}
