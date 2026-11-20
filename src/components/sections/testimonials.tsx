import Link from "next/link";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { getTestimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export async function Testimonials() {
  const testimonials = await getTestimonials();
  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-[#040812] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <Badge variant="glow" dot className="mx-auto">
            CLIENT STORIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            In our clients&apos;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              own words
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            What it&apos;s like to work with us, from the people who hired us.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="break-inside-avoid p-7 rounded-2xl bg-[#081324]/80 border border-white/10 hover:border-blue-500/30 transition-colors flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-blue-500/30" aria-hidden="true" />
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="pt-4 border-t border-white/5 flex items-center gap-3">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element -- avatar URLs are set in the dashboard
                  <img
                    src={item.avatar}
                    alt=""
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-xs text-blue-300 shrink-0">
                    {initials(item.author)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white">{item.author}</p>
                  <p className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300">{item.company}</span>
                  </p>
                </div>
                {item.projectSlug && (
                  <Link
                    href={`/portfolio/${item.projectSlug}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-0.5 shrink-0"
                    aria-label={`Read the ${item.company} case study`}
                  >
                    Case study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
