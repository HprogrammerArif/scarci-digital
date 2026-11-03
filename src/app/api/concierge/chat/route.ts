import { NextResponse } from "next/server";
import { CONCIERGE_KNOWLEDGE } from "@/lib/concierge-knowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  pageContext?: string;
}

// Helper: Built-in knowledge response generator (zero latency, zero API dependency fallback)
function generateKnowledgeResponse(
  userQuery: string,
  pageContext?: string
): { reply: string; suggestedChips: string[] } {
  const query = userQuery.toLowerCase();

  // 1. Monthly Plans, Maintenance, Retainers & General Pricing
  if (
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("quote") ||
    query.includes("budget") ||
    query.includes("rate") ||
    query.includes("how much") ||
    query.includes("monthly") ||
    query.includes("plan") ||
    query.includes("retainer") ||
    query.includes("maintenance") ||
    query.includes("care") ||
    query.includes("starter") ||
    query.includes("fractional")
  ) {
    return {
      reply: `We offer **four uniform monthly plans** alongside fixed-milestone custom builds:

- **01 Starter — $249/mo** *(3-business-day SLA)*: Uptime alerts, weekly backups & updates, monthly form testing, **foundational SEO checks**, small edits, and a 1-page health report (best for 0–4 employee businesses).
- **02 Business Essentials — $499/mo** *(2-business-day SLA)*: Everything in Starter + app & broken-link monitoring, bug fixes, mobile checks, and **missed-call text-back setup**.
- **03 Growth & Automation — $999/mo [Recommended]** *(1-business-day SLA)*: Everything in Essentials + intake/booking upgrades, workflow automations (lead follow-up & reviews), CRM/API maintenance, AI chatbot tuning, and a monthly 30-min call.
- **04 Fractional Dev Team — $1,499/mo** *(4-business-hour priority SLA)*: Everything in Growth + **15 dedicated dev hours/mo**, custom portal/web-app work, API engineering, and roadmap calls.

Need a **brand-new build** first? Custom web builds start at **$4,500**, Shopify/e-commerce at **$8,500**, and bespoke CRMs at **$14,500**.`,
      suggestedChips: [
        "📋 Compare Plans Page",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
        "📂 View Case Studies",
      ],
    };
  }

  // 2. SEO Questions
  if (query.includes("seo") || query.includes("search") || query.includes("google")) {
    return {
      reply: `**Foundational SEO is included starting right at our $249/mo Starter plan** (and carried into every higher monthly tier):

- **Included in Starter ($249/mo+):** On-page SEO health checks, metadata & indexing oversight, and local search visibility tracking alongside uptime, form testing, and backups.
- **Technical SEO & New Builds:** Every custom Next.js, Webflow, WordPress, and Shopify build ships with sub-second Core Web Vitals, clean semantic markup, and JSON-LD structured schema.`,
      suggestedChips: [
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
      ],
    };
  }

  // 3. Timeline & Turnaround
  if (
    query.includes("time") ||
    query.includes("timeline") ||
    query.includes("how long") ||
    query.includes("deadline") ||
    query.includes("delivery") ||
    query.includes("weeks") ||
    query.includes("sla")
  ) {
    return {
      reply: `Here is how our onboarding and delivery timelines work:

- **Monthly Plans ($249–$1,499/mo):** Immediate onboarding. Response SLAs scale by tier: **3 business days** (Starter), **2 business days** (Business Essentials), **1 business day** (Growth & Automation), and **4 business hours** for priority issues (Fractional Team).
- **Custom Website Builds:** 4–6 weeks.
- **Custom E-Commerce (Shopify / WooCommerce):** 6–8 weeks.
- **Bespoke CRM & Portal Systems:** 8–12 weeks.`,
      suggestedChips: [
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
      ],
    };
  }

  // 4. CRM & Automation Solutions
  if (
    query.includes("crm") ||
    query.includes("automation") ||
    query.includes("lead tracking") ||
    query.includes("pipeline") ||
    query.includes("database")
  ) {
    return {
      reply: `We support CRM & workflow automation at two levels depending on where you are today:

- **Ongoing Automation ($999/mo Growth & Automation Plan):** Ideal if you already have a website/CRM and want us to improve online intake, build lead follow-up & review automations, maintain APIs, and tune AI receptionists/chatbots.
- **Bespoke Custom CRM Build (from $14,500) or Fractional Team ($1,499/mo):** Custom Node.js, React, and PostgreSQL pipelines with zero per-seat SaaS license fees and bi-directional QuickBooks/Stripe/ERP sync.`,
      suggestedChips: [
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
      ],
    };
  }

  // 5. E-Commerce / Shopify
  if (
    query.includes("shopify") ||
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("woocommerce") ||
    query.includes("store") ||
    query.includes("cart")
  ) {
    return {
      reply: `Our **E-Commerce Practice** builds and maintains high-converting storefronts on Shopify and WooCommerce:

- **New Storefront Builds (from $8,500):** Custom themes, 1-click cart drawers, multi-currency checkout, and automated cart recovery flows.
- **Ongoing Store Care & CRO ($249–$1,499/mo):** Continuous uptime & checkout form monitoring, broken-link detection, plugin/theme security updates, and monthly conversion improvements.`,
      suggestedChips: [
        "🛍️ View Portfolio",
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
      ],
    };
  }

  // 6. CMS (Webflow / WordPress)
  if (
    query.includes("webflow") ||
    query.includes("wordpress") ||
    query.includes("cms") ||
    query.includes("elementor")
  ) {
    return {
      reply: `We build and maintain **WordPress, Elementor Pro, Webflow, and Shopify** websites:

- **Existing Sites ($249–$999/mo Plans):** Weekly backups, plugin & security updates, monthly contact/quote/booking form tests, foundational SEO, and ongoing content/layout improvements.
- **New CMS Builds & Migrations (from $4,500):** Pixel-perfect Figma-to-Webflow or custom WordPress builds with 95+ Lighthouse performance and full ownership.`,
      suggestedChips: [
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
      ],
    };
  }

  // 7. UI/UX Design & Branding
  if (
    query.includes("design") ||
    query.includes("ui") ||
    query.includes("ux") ||
    query.includes("figma") ||
    query.includes("branding")
  ) {
    return {
      reply: `Our **UI/UX Design Studio** crafts conversion-focused interfaces rooted in clarity and speed:

- **Comprehensive Design Systems:** Complete Figma component libraries, responsive mobile layouts, and WCAG accessibility compliance.
- **Interactive Prototyping:** Clickable flows approved before production engineering begins.`,
      suggestedChips: [
        "📁 View Portfolio",
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
      ],
    };
  }

  // 8. Case Studies & Portfolio
  if (
    query.includes("case study") ||
    query.includes("portfolio") ||
    query.includes("work") ||
    query.includes("past client") ||
    query.includes("results")
  ) {
    return {
      reply: `Here are a few highlights from our recent engineering work:

1. **UrbanThread Co.** *(Shopify E-Commerce)*: Sub-1.2s checkout speed, 38% lift in mobile completion rate, and 18 heavy scripts eliminated.
2. **Nexus Consulting Group** *(Corporate Web)*: 98 Lighthouse score, 3x organic inbound leads, and automated CRM lead routing.
3. **Meridian Advisory** *(Custom CRM)*: Replaced $35k+/yr in unused enterprise CRM seat licenses with a fast, 100%-owned PostgreSQL pipeline.`,
      suggestedChips: [
        "📁 View Full Portfolio",
        "💰 Monthly Plans ($249+)",
        "📅 Book 30-min Call",
      ],
    };
  }

  // 9. Contact & Booking
  if (
    query.includes("contact") ||
    query.includes("call") ||
    query.includes("meeting") ||
    query.includes("phone") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("talk")
  ) {
    return {
      reply: `Here is the fastest way to connect with our US account & engineering desk:

- **📅 30-Min Intro & Tech Review:** Submit your plan choice or project notes on our Contact page.
- **✉️ Direct Email:** Reach us anytime at **${CONCIERGE_KNOWLEDGE.contactEmail}**.
- **⏱️ Response Guarantee:** Every inquiry receives a personal reply within **1 business day**.`,
      suggestedChips: [
        "📅 Book 30-min Call",
        "🚀 Request Proposal",
        "💰 Monthly Plans ($249+)",
      ],
    };
  }

  // 10. Location / Sister Concern
  if (
    query.includes("where") ||
    query.includes("location") ||
    query.includes("sister concern") ||
    query.includes("scarci solutions") ||
    query.includes("about")
  ) {
    return {
      reply: `**Scarci Digital** is headquartered in **Wilmington, DE (United States)** and operates as the sister concern of **Scarci Solutions**.

We offer the exact same uniform monthly support, automation, and fractional engineering plans ($249–$1,499/mo) across the Scarci ecosystem, paired with specialized WordPress, Webflow, Shopify, and custom CRM build teams.`,
      suggestedChips: [
        "💰 Monthly Plans ($249+)",
        "🌐 Explore Services",
        "📅 Book 30-min Call",
      ],
    };
  }

  // Default assistant response
  const pageGreeting = pageContext
    ? ` (I see you're viewing **${pageContext}**)`
    : "";
  return {
    reply: `Hello! I'm the **Scarci Digital Concierge**${pageGreeting}.

How can we help your business today?
- **Monthly Care, SEO & Automation Plans** ($249, $499, $999 & $1,499/mo)
- **Custom Website, Shopify, Webflow, WordPress & CRM Builds**
- **Booking a 30-Minute Intro & Tech Review**`,
    suggestedChips: [
      "💰 Monthly Plans ($249+)",
      "🛠️ Custom Build Quotes",
      "⚡ CRM & Automation",
      "🛒 Shopify & CMS",
      "📅 Book 30-min Call",
    ],
  };
}

export async function POST(request: Request) {
  try {
    const body: ChatRequestBody = await request.json();
    const { messages, pageContext } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request. Messages array is required." },
        { status: 400 }
      );
    }

    const latestUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content || "";

    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const phoneRegex =
      /(\+?[0-9]{1,3}?[-. ]?\(?[0-9]{2,4}?\)?[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4})/g;
    const detectedEmail = latestUserMessage.match(emailRegex)?.[0];
    const detectedPhone = latestUserMessage.match(phoneRegex)?.[0];

    // Priority 1: Google Gemini API (if GEMINI_API_KEY is configured in env)
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (geminiApiKey) {
      try {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

        const promptContext = `${CONCIERGE_KNOWLEDGE.systemPrompt}
Current User Page Context: ${pageContext || "General Browsing"}
Uniform Monthly Plans:
${CONCIERGE_KNOWLEDGE.plansSummary}
Services Catalog:
${CONCIERGE_KNOWLEDGE.servicesSummary}
FAQs:
${CONCIERGE_KNOWLEDGE.faqsSummary}
Case Studies:
${CONCIERGE_KNOWLEDGE.caseStudiesSummary}`;

        const geminiContents = [
          {
            role: "user",
            parts: [{ text: promptContext }],
          },
          ...messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
        ];

        const geminiResponse = await fetch(geminiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: geminiContents,
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 500,
            },
          }),
        });

        if (geminiResponse.ok) {
          const data = await geminiResponse.json();
          const candidateText =
            data.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText) {
            return NextResponse.json({
              reply: candidateText,
              suggestedChips: [
                "💰 Monthly Plans ($249+)",
                "📅 Book 30-min Call",
                "🚀 Request Proposal",
                "📂 View Case Studies",
              ],
              leadCaptured: Boolean(detectedEmail || detectedPhone),
            });
          }
        }
      } catch (geminiError) {
        console.warn(
          "Gemini API call failed, falling back to Knowledge Engine:",
          geminiError
        );
      }
    }

    // Priority 2: OpenAI API (if OPENAI_API_KEY is configured)
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (openaiApiKey) {
      try {
        const openaiResponse = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content: `${CONCIERGE_KNOWLEDGE.systemPrompt}\nContext: ${pageContext || "General"}\nMonthly Plans:\n${CONCIERGE_KNOWLEDGE.plansSummary}\nServices:\n${CONCIERGE_KNOWLEDGE.servicesSummary}`,
                },
                ...messages,
              ],
              temperature: 0.6,
              max_tokens: 500,
            }),
          }
        );

        if (openaiResponse.ok) {
          const data = await openaiResponse.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply: reply,
              suggestedChips: [
                "💰 Monthly Plans ($249+)",
                "📅 Book 30-min Call",
                "🚀 Request Proposal",
                "📂 View Case Studies",
              ],
              leadCaptured: Boolean(detectedEmail || detectedPhone),
            });
          }
        }
      } catch (openaiErr) {
        console.warn(
          "OpenAI API call failed, falling back to Knowledge Engine:",
          openaiErr
        );
      }
    }

    // Priority 3: Built-in Knowledge Reasoning Engine
    const fallbackResult = generateKnowledgeResponse(
      latestUserMessage,
      pageContext
    );

    return NextResponse.json({
      reply: fallbackResult.reply,
      suggestedChips: fallbackResult.suggestedChips,
      leadCaptured: Boolean(detectedEmail || detectedPhone),
    });
  } catch (error) {
    console.error("Chat Concierge API Error:", error);
    return NextResponse.json(
      {
        error: "Unable to process message at this time.",
        reply:
          "I'm temporarily experiencing connectivity issues, but you can reach our team directly at hello@scarcidigital.com or via our Contact page!",
        suggestedChips: ["📅 Book 30-min Call", "📋 Compare Plans Page"],
      },
      { status: 500 }
    );
  }
}
