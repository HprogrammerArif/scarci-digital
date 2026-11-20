"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { refresh, updateTag } from "next/cache";
import { z } from "zod";
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  checkPassword,
  createSessionToken,
  isAdminConfigured,
} from "@/lib/admin-token";
import { requireAdmin } from "@/lib/admin-auth";
import { CONTENT, readFaqs, readProjects, readTestimonials } from "@/lib/content";
import { kvSetJSON, StorageNotConfiguredError } from "@/lib/store";
import { LEAD_STATUSES, deleteLead, updateLead } from "@/lib/leads";
import type { Project } from "@/data/projects";
import type { Testimonial } from "@/data/testimonials";
import type { FAQ } from "@/data/faq";

export type ActionState = { error?: string; success?: string } | undefined;

// ---------- helpers ----------

const str = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim();

const lines = (value: string) =>
  value
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

const list = (value: string) =>
  value
    .split(",")
    .map((l) => l.trim())
    .filter(Boolean);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function newId() {
  return crypto.randomUUID().slice(0, 8);
}

function errorMessage(error: unknown): string {
  if (error instanceof StorageNotConfiguredError) return error.message;
  if (error instanceof z.ZodError) return error.issues[0]?.message ?? "Invalid input";
  if (error instanceof Error) return error.message;
  return "Something went wrong.";
}

function move<T extends { id: string }>(items: T[], id: string, direction: string): T[] {
  const index = items.findIndex((i) => i.id === id);
  const target = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || target < 0 || target >= items.length) return items;
  const copy = [...items];
  [copy[index], copy[target]] = [copy[target], copy[index]];
  return copy;
}

// ---------- auth ----------

export async function loginAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!isAdminConfigured()) {
    return { error: "ADMIN_PASSWORD is not set. Add it to your environment variables." };
  }
  const ok = await checkPassword(str(formData, "password"));
  if (!ok) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return { error: "Incorrect password." };
  }

  (await cookies()).set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  const next = str(formData, "next");
  redirect(next.startsWith("/admin") && !next.startsWith("//") ? next : "/admin");
}

export async function logoutAction() {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

// ---------- projects ----------

const projectSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string().min(2, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and dashes"),
  category: z.string().min(1, "Category is required"),
  client: z.string().min(1, "Client is required"),
  year: z.string().min(4, "Year is required"),
  timeline: z.string().min(1, "Timeline is required"),
  description: z.string().min(10, "Description is required"),
  shortDescription: z.string().min(3, "Short description is required"),
  clientOverview: z.string(),
  image: z.string(),
  liveUrl: z.string().url("Live URL must be a full URL (https://...)").or(z.literal("")),
});

export async function saveProjectAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireAdmin();
  try {
    const id = str(formData, "id");
    const base = projectSchema.parse({
      title: str(formData, "title"),
      slug: slugify(str(formData, "slug") || str(formData, "title")),
      category: str(formData, "category"),
      client: str(formData, "client"),
      year: str(formData, "year"),
      timeline: str(formData, "timeline"),
      description: str(formData, "description"),
      shortDescription: str(formData, "shortDescription"),
      clientOverview: str(formData, "clientOverview"),
      image: str(formData, "image"),
      liveUrl: str(formData, "liveUrl"),
    });

    const architecturePoints = lines(str(formData, "architecturePoints")).map((line) => {
      const [title, ...rest] = line.split("|");
      return { title: title.trim(), desc: rest.join("|").trim() };
    });

    const quote = str(formData, "quote");
    const project: Project = {
      ...base,
      id: id || newId(),
      liveUrl: base.liveUrl || undefined,
      featured: formData.get("featured") === "on",
      techStack: list(str(formData, "techStack")),
      results: lines(str(formData, "results")),
      challenge: {
        summary: str(formData, "challengeSummary"),
        bulletPoints: lines(str(formData, "challengeBullets")),
      },
      solution: {
        summary: str(formData, "solutionSummary"),
        architecturePoints,
      },
      clientQuote: quote
        ? { quote, author: str(formData, "quoteAuthor"), role: str(formData, "quoteRole") }
        : undefined,
    };

    const projects = await readProjects();
    if (projects.some((p) => p.slug === project.slug && p.id !== project.id)) {
      return { error: `Another project already uses the slug "${project.slug}".` };
    }
    const exists = projects.some((p) => p.id === project.id);
    const next = exists
      ? projects.map((p) => (p.id === project.id ? project : p))
      : [...projects, project];

    await kvSetJSON(CONTENT.projects.key, next);
    updateTag(CONTENT.projects.tag);
  } catch (error) {
    return { error: errorMessage(error) };
  }
  redirect("/admin/projects?saved=1");
}

export async function deleteProjectAction(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const projects = await readProjects();
  await kvSetJSON(CONTENT.projects.key, projects.filter((p) => p.id !== id));
  updateTag(CONTENT.projects.tag);
  redirect("/admin/projects?deleted=1");
}

export async function moveProjectAction(formData: FormData) {
  await requireAdmin();
  const projects = await readProjects();
  await kvSetJSON(
    CONTENT.projects.key,
    move(projects, str(formData, "id"), str(formData, "direction"))
  );
  updateTag(CONTENT.projects.tag);
  refresh();
}

// ---------- testimonials ----------

const testimonialSchema = z.object({
  quote: z.string().min(10, "Quote is required"),
  author: z.string().min(2, "Name is required"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  rating: z.coerce.number().int().min(1).max(5),
});

export async function saveTestimonialAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireAdmin();
  try {
    const id = str(formData, "id");
    const base = testimonialSchema.parse({
      quote: str(formData, "quote"),
      author: str(formData, "author"),
      role: str(formData, "role"),
      company: str(formData, "company"),
      rating: str(formData, "rating") || "5",
    });
    const testimonial: Testimonial = {
      ...base,
      id: id || newId(),
      projectSlug: str(formData, "projectSlug") || undefined,
      avatar: str(formData, "avatar") || undefined,
    };
    const items = await readTestimonials();
    const next = items.some((t) => t.id === testimonial.id)
      ? items.map((t) => (t.id === testimonial.id ? testimonial : t))
      : [...items, testimonial];
    await kvSetJSON(CONTENT.testimonials.key, next);
    updateTag(CONTENT.testimonials.tag);
  } catch (error) {
    return { error: errorMessage(error) };
  }
  redirect("/admin/testimonials?saved=1");
}

export async function deleteTestimonialAction(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const items = await readTestimonials();
  await kvSetJSON(CONTENT.testimonials.key, items.filter((t) => t.id !== id));
  updateTag(CONTENT.testimonials.tag);
  redirect("/admin/testimonials?deleted=1");
}

export async function moveTestimonialAction(formData: FormData) {
  await requireAdmin();
  const items = await readTestimonials();
  await kvSetJSON(
    CONTENT.testimonials.key,
    move(items, str(formData, "id"), str(formData, "direction"))
  );
  updateTag(CONTENT.testimonials.tag);
  refresh();
}

// ---------- FAQs ----------

const faqSchema = z.object({
  question: z.string().min(5, "Question is required"),
  answer: z.string().min(5, "Answer is required"),
});

export async function saveFaqAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireAdmin();
  try {
    const id = str(formData, "id");
    const base = faqSchema.parse({
      question: str(formData, "question"),
      answer: str(formData, "answer"),
    });
    const faq: FAQ = { ...base, id: id || newId() };
    const items = await readFaqs();
    const next = items.some((f) => f.id === faq.id)
      ? items.map((f) => (f.id === faq.id ? faq : f))
      : [...items, faq];
    await kvSetJSON(CONTENT.faqs.key, next);
    updateTag(CONTENT.faqs.tag);
    refresh();
    return { success: id ? "Saved." : "FAQ added." };
  } catch (error) {
    return { error: errorMessage(error) };
  }
}

export async function deleteFaqAction(formData: FormData) {
  await requireAdmin();
  const id = str(formData, "id");
  const items = await readFaqs();
  await kvSetJSON(CONTENT.faqs.key, items.filter((f) => f.id !== id));
  updateTag(CONTENT.faqs.tag);
  refresh();
}

export async function moveFaqAction(formData: FormData) {
  await requireAdmin();
  const items = await readFaqs();
  await kvSetJSON(CONTENT.faqs.key, move(items, str(formData, "id"), str(formData, "direction")));
  updateTag(CONTENT.faqs.tag);
  refresh();
}

// ---------- leads ----------

export async function updateLeadAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  await requireAdmin();
  try {
    const status = z.enum(LEAD_STATUSES).parse(str(formData, "status"));
    await updateLead(str(formData, "id"), {
      status,
      notes: str(formData, "notes") || undefined,
    });
    refresh();
    return { success: "Saved." };
  } catch (error) {
    return { error: errorMessage(error) };
  }
}

export async function deleteLeadAction(formData: FormData) {
  await requireAdmin();
  await deleteLead(str(formData, "id"));
  redirect("/admin/leads?deleted=1");
}
