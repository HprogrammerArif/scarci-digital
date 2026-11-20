import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { getFaqs } from "@/lib/content";

export async function FAQSection() {
  const faqs = await getFaqs();
  if (faqs.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050B14] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container size="narrow">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="glow" dot className="mx-auto">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Questions we hear{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              most often
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={faq.id}
              open={idx === 0}
              className="group rounded-2xl border border-white/5 bg-[#070F1E]/80 open:bg-[#091527] open:border-blue-500/40 transition-colors"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer">
                <span className="text-sm sm:text-base lg:text-lg font-bold text-white group-open:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-slate-400 group-open:bg-blue-500/20 group-open:text-blue-400 group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Have a different question?</p>
              <p className="text-xs text-slate-400">We reply within 1 business day.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors shrink-0"
          >
            Ask us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
