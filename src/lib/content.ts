/**
 * Editable site content (projects, testimonials, FAQs).
 *
 * Public pages read through the cached getters below. The admin dashboard
 * writes to the store and calls updateTag() so pages refresh immediately.
 * If nothing has been saved yet, the defaults in src/data/* are used.
 */
import { cacheLife, cacheTag } from "next/cache";
import { projects as defaultProjects, type Project } from "@/data/projects";
import {
  testimonials as defaultTestimonials,
  type Testimonial,
} from "@/data/testimonials";
import { faqs as defaultFaqs, type FAQ } from "@/data/faq";
import { kvGetJSON } from "@/lib/store";

export const CONTENT = {
  projects: { key: "content:projects", tag: "projects" },
  testimonials: { key: "content:testimonials", tag: "testimonials" },
  faqs: { key: "content:faqs", tag: "faqs" },
} as const;

async function readOrDefault<T>(key: string, fallback: T): Promise<T> {
  try {
    const stored = await kvGetJSON<T>(key);
    return stored ?? fallback;
  } catch (error) {
    console.error(`Failed to read ${key}, using defaults:`, error);
    return fallback;
  }
}

// ---------- Uncached reads (admin dashboard) ----------

export function readProjects(): Promise<Project[]> {
  return readOrDefault(CONTENT.projects.key, defaultProjects);
}

export function readTestimonials(): Promise<Testimonial[]> {
  return readOrDefault(CONTENT.testimonials.key, defaultTestimonials);
}

export function readFaqs(): Promise<FAQ[]> {
  return readOrDefault(CONTENT.faqs.key, defaultFaqs);
}

// ---------- Cached reads (public site) ----------

export async function getProjects(): Promise<Project[]> {
  "use cache";
  cacheTag(CONTENT.projects.tag);
  cacheLife("days");
  return readProjects();
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  "use cache";
  cacheTag(CONTENT.testimonials.tag);
  cacheLife("days");
  return readTestimonials();
}

export async function getFaqs(): Promise<FAQ[]> {
  "use cache";
  cacheTag(CONTENT.faqs.tag);
  cacheLife("days");
  return readFaqs();
}
