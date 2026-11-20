import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_CONFIG.url;
  const staticPages = ["", "/services", "/portfolio", "/process", "/about", "/blog", "/contact", "/privacy-policy", "/terms"];
  const projects = await getProjects();

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}${s.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...projects.map((p) => ({
      url: `${base}/portfolio/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
