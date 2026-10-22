import { NextResponse } from "next/server";
import { CONCIERGE_KNOWLEDGE } from "@/lib/concierge-knowledge";
import { services } from "@/data/services";
import { faqs } from "@/data/faq";
import { projects } from "@/data/projects";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  pageContext?: string;
}

// Helper: Intelligent built-in knowledge response generator (zero latency, zero API dependency fallback)
function generateKnowledgeResponse(
  userQuery: string,
  pageContext?: string
): { reply: string; suggestedChips: string[] } {
  const query = userQuery.toLowerCase();

  // 1. Pricing & Quotes
  if (
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("quote") ||
    query.includes("budget") ||
    query.includes("rate") ||
    query.includes("how much")
  ) {
    return {
      reply: `At **Scarci Digital**, we structure our pricing transparently based on project scale:

- **Fixed-Price Engagements:** Ideal for defined website builds, Shopify Plus storefronts, and brand launches (typically ranges from starter milestones to custom full-stack solutions).
- **Dedicated Agile Retainers:** Perfect for evolving CRM platforms, ongoing e-commerce optimization, and product engineering.
- **Complimentary Discovery:** Every project includes an architectural consultation and a detailed scope delivered within **48 hours**.

Would you like a tailored quote? Share your target budget or work email below, and our lead architect will assemble a scope breakdown for you!`,
      suggestedChips: [
        "📅 Book Discovery Call",
        "💬 WhatsApp Direct",
        "🚀 Request Proposal",
        "📂 View Case Studies",
      ],
    };
  }

  // 2. Timeline & Turnaround
  if (
    query.includes("time") ||
    query.includes("timeline") ||
    query.includes("how long") ||
    query.includes("deadline") ||
    query.includes("delivery") ||
    query.includes("weeks")
  ) {
    return {
      reply: `Our delivery timelines are milestone-driven so you have full visibility:

- **High-Performance Marketing / Corporate Websites:** 4–6 weeks from design sign-off.
- **Custom E-Commerce (Shopify Plus / Headless):** 6–10 weeks including multi-currency and payment workflows.
- **Custom CRM Systems & Enterprise Platforms:** 8–16 weeks with staged beta releases.

We can also accommodate expedited sprints if you have a tight market launch date. What timeline are you targeting?`,
      suggestedChips: [
        "⚡ Expedited Launch",
        "📅 Book 30-min Call",
        "💬 Chat on WhatsApp",
      ],
    };
  }

  // 3. CRM Solutions
  if (
    query.includes("crm") ||
    query.includes("lead tracking") ||
    query.includes("pipeline") ||
    query.includes("database")
  ) {
    return {
      reply: `We engineer bespoke **Enterprise CRM Solutions** tailored specifically to your sales workflows—not rigid off-the-shelf software:

- **Custom Pipeline & Lead Scoring:** Automated routing, custom lifecycle stages, and deal forecasting.
- **Multi-Channel Integrations:** Bi-directional sync with Stripe, email providers, WhatsApp, and internal ERPs.
- **Enterprise Security & Scale:** Built with Node.js, React, PostgreSQL, and strict role-based access control.

Would you like to see a demo or discuss your data migration requirements?`,
      suggestedChips: [
        "📊 Request CRM Demo",
        "📅 Schedule Architecture Call",
        "💬 Ask on WhatsApp",
      ],
    };
  }

  // 4. E-Commerce / Shopify
  if (
    query.includes("shopify") ||
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("woocommerce") ||
    query.includes("store") ||
    query.includes("cart")
  ) {
    return {
      reply: `Our **E-Commerce Development** practice turns casual visitors into repeat buyers:

- **Shopify Plus & Liquid Architecture:** Ultra-fast custom themes without third-party app bloat.
- **Conversion-Optimized Features:** Predictive search, 1-click cart drawers, and automated cross-sells.
- **Case Study Proof:** For **UrbanThread Co.**, our custom Shopify Plus redesign delivered a **340% revenue increase** and a sub-2.1s load speed.

Are you building a new storefront or migrating an existing brand?`,
      suggestedChips: [
        "🛍️ UrbanThread Case Study",
        "🚀 Migration Consultation",
        "📅 Book Strategy Call",
      ],
    };
  }

  // 5. CMS (Webflow / WordPress)
  if (
    query.includes("webflow") ||
    query.includes("wordpress") ||
    query.includes("cms") ||
    query.includes("elementor")
  ) {
    return {
      reply: `We build flexible, marketing-friendly **CMS Websites** that empower your marketing team without breaking code:

- **Webflow:** Pixel-perfect translation from Figma with fluid micro-interactions and high Lighthouse performance.
- **WordPress & Elementor Pro:** Tailored custom post types, hardened enterprise security, and speed optimization.
- **Zero Lock-In:** You get full ownership and an intuitive visual editor to publish blogs and landing pages effortlessly.`,
      suggestedChips: [
        "🎨 Figma to Webflow",
        "💼 WordPress Migration",
        "📅 Book a Call",
      ],
    };
  }

  // 6. UI/UX Design & Branding
  if (
    query.includes("design") ||
    query.includes("ui") ||
    query.includes("ux") ||
    query.includes("figma") ||
    query.includes("branding")
  ) {
    return {
      reply: `Our **UI/UX Design Studio** builds high-converting digital products rooted in user research:

- **Comprehensive Design Systems:** Complete Figma component libraries, typography hierarchy, and dark/light tokens.
- **Interactive Prototyping:** Realistic clickable flows before writing a single line of production code.
- **Conversion Rate Focus:** Reducing friction at every touchpoint from landing page hero to final checkout.`,
      suggestedChips: [
        "🎨 View Design Work",
        "📅 Schedule Design Review",
        "💬 Message on WhatsApp",
      ],
    };
  }

  // 7. Case Studies & Portfolio
  if (
    query.includes("case study") ||
    query.includes("portfolio") ||
    query.includes("work") ||
    query.includes("past client") ||
    query.includes("results")
  ) {
    return {
      reply: `Here are some of our flagship client successes:

1. **UrbanThread Co.** *(E-Commerce / Shopify Plus)*: **+340% revenue increase**, 45% lift in conversion rate, and 2.1s average load time.
2. **Nexus Consulting Group** *(Enterprise Corporate)*: **98 Lighthouse score**, 3x organic inbound leads, and multi-language CRM integration.
3. **Aura SaaS Platform** *(Custom CRM & Web App)*: Streamlined 15,000+ daily customer workflows with zero downtime.

Which industry or tech stack matches your upcoming project?`,
      suggestedChips: [
        "📁 View Full Portfolio",
        "📅 Discuss My Project",
        "💬 Quick Chat on WhatsApp",
      ],
    };
  }

  // 8. Contact & Booking
  if (
    query.includes("contact") ||
    query.includes("call") ||
    query.includes("meeting") ||
    query.includes("phone") ||
    query.includes("email") ||
    query.includes("whatsapp") ||
    query.includes("reach") ||
    query.includes("talk")
  ) {
    return {
      reply: `We'd love to connect with you! Here is how you can reach our engineering team directly:

- **📅 30-Min Discovery Call:** Book directly on our calendar for a live technical discussion.
- **💬 Direct WhatsApp:** Instant message our solutions team.
- **✉️ Direct Email:** Reach us at **${CONCIERGE_KNOWLEDGE.contactEmail}**.
- **📞 Phone:** ${CONCIERGE_KNOWLEDGE.contactPhone}

Or leave your email and brief below, and an engineer will reply within 2 hours!`,
      suggestedChips: [
        "📅 Schedule Discovery Call",
        "💬 Open WhatsApp Chat",
        "✉️ Send Quick Inquiry",
      ],
    };
  }

  // 9. Location / Sister Concern
  if (
    query.includes("where") ||
    query.includes("location") ||
    query.includes("sister concern") ||
    query.includes("scarci solutions") ||
    query.includes("about")
  ) {
    return {
      reply: `**Scarci Digital** is a US-headquartered digital engineering agency and the sister concern of **Scarci Solutions**. 

We operate globally, collaborating with high-growth startups and established enterprises across North America, Europe, Australia, and the Middle East. Being backed by Scarci Solutions gives our clients enterprise-grade stability, elite engineering standards, and unmatched execution speed.`,
      suggestedChips: [
        "🌐 Explore Services",
        "📅 Book Consultation",
        "💬 Message WhatsApp",
      ],
    };
  }

  // Default intelligent assistant response
  const pageGreeting = pageContext ? ` (I noticed you're browsing our **${pageContext}**)` : "";
  return {
    reply: `Hello! I'm the **Scarci Digital Solutions Concierge**${pageGreeting}. 

How can we accelerate your digital roadmap today? I can help you with:
- **Instant Project Estimates & Timelines**
- **Architecture Guidance** (Next.js, Shopify Plus, Custom CRM, Webflow)
- **Reviewing Relevant Case Studies & ROI**
- **Booking a 30-minute Discovery Session with our Tech Lead**

Feel free to ask any technical question or select an option below!`,
    suggestedChips: [
      "💰 Pricing & Scope",
      "⏱️ Project Timelines",
      "🛒 E-Commerce & Shopify",
      "📊 Custom CRM Solutions",
      "📅 Book Discovery Call",
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

    const latestUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user")?.content || "";

    // Check for email or phone inside user message for automatic lead detection
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const phoneRegex = /(\+?[0-9]{1,3}?[-. ]?\(?[0-9]{2,4}?\)?[-. ]?[0-9]{3,4}[-. ]?[0-9]{3,4})/g;
    const detectedEmail = latestUserMessage.match(emailRegex)?.[0];
    const detectedPhone = latestUserMessage.match(phoneRegex)?.[0];

    // Priority 1: Google Gemini API (if GEMINI_API_KEY is configured in env)
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (geminiApiKey) {
      try {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

        const promptContext = `${CONCIERGE_KNOWLEDGE.systemPrompt}
Current User Page Context: ${pageContext || "General Browsing"}
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
              temperature: 0.7,
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
                "📅 Book Discovery Call",
                "💬 WhatsApp Direct",
                "💰 Request Custom Quote",
                "📂 View Case Studies",
              ],
              leadCaptured: Boolean(detectedEmail || detectedPhone),
            });
          }
        }
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to Knowledge Engine:", geminiError);
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
                  content: `${CONCIERGE_KNOWLEDGE.systemPrompt}\nContext: ${pageContext || "General"}\nServices: ${CONCIERGE_KNOWLEDGE.servicesSummary}`,
                },
                ...messages,
              ],
              temperature: 0.7,
              max_tokens: 500,
            }),
          }
        );

        if (openaiResponse.ok) {
          const data = await openaiResponse.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply,
              suggestedChips: [
                "📅 Book Discovery Call",
                "💬 WhatsApp Direct",
                "💰 Request Custom Quote",
                "📂 View Case Studies",
              ],
              leadCaptured: Boolean(detectedEmail || detectedPhone),
            });
          }
        }
      } catch (openaiErr) {
        console.warn("OpenAI API call failed, falling back to Knowledge Engine:", openaiErr);
      }
    }

    // Priority 3: Built-in Knowledge Reasoning Engine
    // Fast, zero downtime, zero API cost, hyper-relevant answers with zero hallucination
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
          "I'm temporarily experiencing connectivity issues, but you can reach our lead architect directly at hello@scarcidigital.com or via WhatsApp!",
        suggestedChips: ["💬 WhatsApp Direct", "📅 Book Discovery Call"],
      },
      { status: 500 }
    );
  }
}
