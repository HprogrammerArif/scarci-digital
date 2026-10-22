import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { CTASection } from "@/components/sections/cta-section";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Scarci Digital Engineering Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Next article
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <div className="pt-28 sm:pt-36 bg-[#050B14]">
      {/* Header */}
      <section className="relative pb-16 border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-4xl mx-auto space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Badge variant="glow">{post.category}</Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="pt-4 flex items-center gap-3 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white shadow-md">
              {post.author.avatar}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Article */}
      <section className="py-20 sm:py-28">
        <Container size="narrow">
          <article className="space-y-12">
            {/* Intro Lead */}
            <div className="p-8 rounded-2xl bg-[#091527]/70 border border-white/10 text-slate-200 text-lg leading-relaxed font-normal">
              {post.content.intro}
            </div>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  {section.body}
                </p>

                {section.callout && (
                  <div className="p-5 rounded-xl bg-blue-500/10 border-l-4 border-blue-500 text-blue-200 text-sm leading-relaxed my-4">
                    {section.callout}
                  </div>
                )}

                {section.codeSnippet && (
                  <div className="rounded-2xl bg-[#03070E] border border-white/10 p-5 overflow-x-auto shadow-2xl my-4">
                    <pre className="text-xs font-mono text-blue-300 leading-relaxed">
                      <code>{section.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">Summary & Takeaway</h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {post.content.conclusion}
              </p>
            </div>

            {/* Author Bio Box */}
            <div className="p-8 rounded-3xl bg-[#081224] border border-blue-500/20 flex flex-col sm:flex-row items-center gap-6 mt-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-xl text-blue-400 shrink-0">
                {post.author.avatar}
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  Written by Senior Staff
                </span>
                <h4 className="text-lg font-bold text-white">
                  {post.author.name} — {post.author.role}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Published as part of the Scarci Digital technical advisory publication series.
                </p>
              </div>
            </div>

            {/* Next Article Recommendation */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-mono uppercase">
                  Up Next in Agency Insights
                </span>
                <h4 className="text-base font-bold text-white">
                  {nextPost.title}
                </h4>
              </div>
              <Link href={`/blog/${nextPost.slug}`}>
                <Button variant="secondary" size="md">
                  <span>Read Next Article</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
