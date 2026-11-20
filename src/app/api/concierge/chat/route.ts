import { NextResponse } from "next/server";
import { z } from "zod";
import { CHIPS, DEFAULT_CHIPS, buildSystemPrompt } from "@/lib/concierge-knowledge";
import { services, type Service } from "@/data/services";
import { getFaqs, getProjects } from "@/lib/content";
import { saveLead } from "@/lib/leads";
import { SITE_CONFIG } from "@/lib/constants";

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(4000),
      })
    )
    .min(1)
    .max(40),
  pageContext: z.string().max(200).optional(),
});

type ChatMessage = z.infer<typeof requestSchema>["messages"][number];
type Reply = { reply: string; suggestedChips: string[] };

// Checked in order; more specific services first.
const SERVICE_KEYWORDS: Record<string, string[]> = {
  "business-software-ai": ["ai", "automation", "internal tool", "dashboard", "spreadsheet", "legacy", "erp"],
  "mvp-development": ["mvp", "startup", "prototype", "founder", "investor", "idea"],
  "saas-development": ["saas", "subscription", "multi-tenant", "platform"],
  "custom-crm-development": ["crm", "pipeline", "salesforce", "hubspot", "sales"],
  "client-portals": ["portal", "client login", "document", "e-sign"],
  "mobile-app-development": ["mobile", "ios", "android", "app store", "react native", "app"],
  "web-ecommerce": ["website", "shopify", "wordpress", "webflow", "woocommerce", "ecommerce", "e-commerce", "store", "landing page"],
};

// Matches at word starts so "ai" doesn't match "email" and "app" doesn't
// match "happy". Short words (<= 3 chars) must also end at a word boundary.
function includesAny(query: string, words: string[]) {
  return words.some((w) => {
    const escaped = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const end = w.length <= 3 ? "\\b" : "";
    return new RegExp(`\\b${escaped}${end}`).test(query);
  });
}

function serviceReply(service: Service): Reply {
  return {
    reply: `**${service.title}**: ${service.tagline}

${service.features
  .slice(0, 4)
  .map((f) => `- ${f}`)
  .join("\n")}

Typical timeline: **${service.typicalTimeline}**. [Read more](${service.href})`,
    suggestedChips: [CHIPS.cost, CHIPS.work, CHIPS.book],
  };
}

function ruleBasedReply(userQuery: string, pageContext?: string): Reply {
  const query = userQuery.toLowerCase();

  if (
    includesAny(query, ["price", "pricing", "cost", "quote", "budget", "rate", "how much", "fee", "expensive", "cheap"])
  ) {
    return {
      reply: `Every project is different, so we don't publish fixed prices. Here's how it works:

1. **Free 30-minute scoping call** about your goals and requirements
2. **Written proposal** with scope, milestones, timeline, and a **fixed quote**
3. No obligation. You decide if it's the right fit

Want to set up a call?`,
      suggestedChips: [CHIPS.book, CHIPS.leaveDetails, CHIPS.timeline],
    };
  }

  if (includesAny(query, ["seo", "meta ad", "facebook ad", "google ad", "marketing", "receptionist", "phone agent", "review"])) {
    return {
      reply: `We focus on building software and websites. For **SEO, paid ads, business automation, and AI receptionists**, our sister company [Scarci Solutions](https://scarcisolutions.com) is the right team.`,
      suggestedChips: [CHIPS.services, CHIPS.book],
    };
  }

  if (includesAny(query, ["how long", "timeline", "weeks", "deadline", "fast", "quick"])) {
    return {
      reply: `Typical timelines:

${services.map((s) => `- **${s.shortTitle}**: ${s.typicalTimeline}`).join("\n")}

You get a milestone plan in your proposal and see working software on a staging link every week.`,
      suggestedChips: [CHIPS.process, CHIPS.cost, CHIPS.book],
    };
  }

  if (includesAny(query, ["process", "how do you work", "how does it work", "steps", "milestone"])) {
    return {
      reply: `We work in four phases: **Discovery & Scope → Design & Prototype → Build & Test → Launch & Grow**.

You get a written scope before development, weekly demos, one US-based point of contact, and full code ownership at handover. [See the full process](/process)`,
      suggestedChips: [CHIPS.timeline, CHIPS.cost, CHIPS.book],
    };
  }

  if (includesAny(query, ["portfolio", "work", "case stud", "example", "client"])) {
    return {
      reply: `Some recent work includes a **custom CRM** that replaced Salesforce seats, a **Shopify Plus** rebuild with sub-1.2s checkout, and a **Next.js** corporate site scoring 98 on Lighthouse. [Browse all case studies](/portfolio)`,
      suggestedChips: [CHIPS.services, CHIPS.book],
    };
  }

  if (includesAny(query, ["own", "ip", "source code", "nda", "confidential"])) {
    return {
      reply: `You own **100% of the code and IP**. We transfer the repository, designs, docs, and cloud accounts at handover. We're also happy to sign a **mutual NDA** before you share anything confidential.`,
      suggestedChips: [CHIPS.process, CHIPS.book],
    };
  }

  if (includesAny(query, ["where", "location", "based", "sister", "scarci solutions", "about", "who are you"])) {
    return {
      reply: `${SITE_CONFIG.name} is a US-managed software studio based in **${SITE_CONFIG.contact.address}**, and a sister concern of [Scarci Solutions](https://scarcisolutions.com). We work with clients in the US, Canada, the UK, Europe, and Australia.`,
      suggestedChips: [CHIPS.services, CHIPS.work, CHIPS.book],
    };
  }

  for (const [slug, words] of Object.entries(SERVICE_KEYWORDS)) {
    if (includesAny(query, words)) {
      const service = services.find((s) => s.slug === slug);
      if (service) return serviceReply(service);
    }
  }

  if (includesAny(query, ["what do you build", "services", "what do you do", "offer", "help"])) {
    return {
      reply: `We build:

${services.map((s) => `- [${s.title}](${s.href})`).join("\n")}

What are you working on?`,
      suggestedChips: [CHIPS.cost, CHIPS.work, CHIPS.book],
    };
  }

  const context = pageContext ? ` I see you're on **${pageContext}**.` : "";
  return {
    reply: `Thanks for the question!${context} I can help with our services, process, timelines, or past work. For anything specific to your project, the fastest route is a free call with our team.`,
    suggestedChips: DEFAULT_CHIPS,
  };
}

async function askLLM(messages: ChatMessage[], system: string): Promise<string | null> {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (geminiKey) {
    try {
      const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-goog-api-key": geminiKey },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: system }] },
            contents: messages.map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
            generationConfig: { temperature: 0.5, maxOutputTokens: 500 },
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      } else {
        console.warn("Gemini error:", res.status, await res.text());
      }
    } catch (error) {
      console.warn("Gemini request failed:", error);
    }
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${openaiKey}` },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [{ role: "system", content: system }, ...messages],
          temperature: 0.5,
          max_tokens: 500,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) return text;
      } else {
        console.warn("OpenAI error:", res.status, await res.text());
      }
    } catch (error) {
      console.warn("OpenAI request failed:", error);
    }
  }

  return null;
}

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const PHONE_RE = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

export async function POST(request: Request) {
  try {
    const parsed = requestSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    const { messages, pageContext } = parsed.data;
    const userQuery = messages[messages.length - 1].content;

    // A visitor typing their email or phone into the chat is a lead.
    const email = userQuery.match(EMAIL_RE)?.[0];
    const phone = email ? undefined : userQuery.match(PHONE_RE)?.[0];
    const leadCaptured = Boolean(email || phone);
    if (leadCaptured) {
      const transcript = messages
        .filter((m) => m.role === "user")
        .slice(-6)
        .map((m) => `- ${m.content}`)
        .join("\n");
      await saveLead({
        source: "chat",
        email,
        phone,
        message: `Chat transcript (visitor messages):\n${transcript}`,
        pageUrl: pageContext,
      });
    }

    const [projects, faqs] = await Promise.all([getProjects(), getFaqs()]);
    const llmReply = await askLLM(messages, buildSystemPrompt(projects, faqs));

    if (leadCaptured && !llmReply) {
      return NextResponse.json({
        reply: `Thanks! We've saved your details and someone from our team will reach out within **1 business day**.`,
        suggestedChips: [CHIPS.work, CHIPS.process],
        leadCaptured,
      });
    }

    const { reply, suggestedChips } = llmReply
      ? { reply: llmReply, suggestedChips: DEFAULT_CHIPS }
      : ruleBasedReply(userQuery, pageContext);

    return NextResponse.json({ reply, suggestedChips, leadCaptured });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      {
        reply: `Sorry, something went wrong on our side. You can reach us at ${SITE_CONFIG.contact.email} or through the contact page.`,
        suggestedChips: [CHIPS.book],
      },
      { status: 500 }
    );
  }
}
