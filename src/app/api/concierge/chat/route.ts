import { NextResponse } from "next/server";
import { CONCIERGE_KNOWLEDGE } from "@/lib/concierge-knowledge";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  pageContext?: string;
}

// Rule-based technical response engine
function generateRuleBasedReply(
  userQuery: string,
  pageContext?: string
): { reply: string; suggestedChips: string[] } {
  const query = userQuery.toLowerCase().trim();

  // 1. Pricing, Commercial Models, Rates & Estimates
  if (
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("quote") ||
    query.includes("budget") ||
    query.includes("rate") ||
    query.includes("how much") ||
    query.includes("milestone") ||
    query.includes("model") ||
    query.includes("fee")
  ) {
    return {
      reply: `At **Scarci Digital**, we avoid open-ended hourly billing that rewards slow progress. Every project is delivered on **fixed-price milestones** with 100% source code and IP ownership:

- **Commercial Model 1 (Fixed-Price):** Defined scope, agreed budget, zero surprise invoices.
- **Commercial Model 2 (Milestone-Staged):** Payments tied to tangible delivery gates: **30%** (Discovery & Blueprint) → **30%** (Core Development) → **25%** (Beta Testing Release) → **15%** (Final Handover & IP Assignment).
- **Typical Project Values:** Most custom applications fall between **$15,000 and $35,000**, with minimum engagements starting at **$10,000** and complex enterprise platforms scaling to **$40,000–$75,000+**.
- **Post-Launch Code Support:** Optional monthly software maintenance retainers starting from **$500/mo** for bug fixes, security patches, backups, and SLA uptime.`,
      suggestedChips: [
        "📋 Commercial Models Page",
        "🚀 Startup MVPs ($12.5k+)",
        "⚡ Custom CRMs ($12.5k+)",
        "📅 Discuss Project Scope",
      ],
    };
  }

  // 2. Startup MVP Development
  if (
    query.includes("mvp") ||
    query.includes("startup") ||
    query.includes("prototype") ||
    query.includes("founder") ||
    query.includes("investor")
  ) {
    return {
      reply: `Our **Startup MVP Development** practice helps founders transform ideas into functional, investor-ready products:

- **Typical Investment:** **$12,500 – $45,000** (depending on feature scope and third-party APIs).
- **Delivery Timeline:** **4–8 Weeks** from architecture blueprint to production release.
- **What's Included:** Clickable interactive prototypes, production Next.js/React architecture, user auth, database scaffolding, Stripe payment processing, admin consoles, and 100% intellectual property assignment.`,
      suggestedChips: [
        "🚀 Startup MVP Scope",
        "📅 Request Architecture Call",
        "📂 View Case Studies",
      ],
    };
  }

  // 3. Custom CRM Development
  if (
    query.includes("crm") ||
    query.includes("pipeline") ||
    query.includes("sales software") ||
    query.includes("hubspot") ||
    query.includes("salesforce")
  ) {
    return {
      reply: `Our **Custom CRM Development** practice builds proprietary pipeline systems tailored to your exact workflows—eliminating expensive per-user SaaS license fees:

- **Typical Investment:** **$12,500 – $45,000** (fixed milestone delivery).
- **Core Capabilities:** Custom drag-and-drop pipeline stages, automated lead scoring, 360° unified customer activity logs, encrypted PostgreSQL databases, and bi-directional QuickBooks / Stripe / ERP synchronization.
- **Total IP Ownership:** You own the database, API, and frontend—with zero recurring seat licenses as your sales team scales.`,
      suggestedChips: [
        "⚡ Custom CRM Scope",
        "📅 Request Architecture Call",
        "📋 Commercial Models",
      ],
    };
  }

  // 4. Client & Customer Portals
  if (
    query.includes("portal") ||
    query.includes("document") ||
    query.includes("client dashboard") ||
    query.includes("login") ||
    query.includes("vault")
  ) {
    return {
      reply: `Our **Client & Customer Portal Development** practice creates secure, branded web platforms where your customers interact with your business:

- **Typical Investment:** **$10,000 – $45,000**.
- **Common Features:** Encrypted document upload vaults, e-signature flows, real-time case or project status tracking, integrated invoicing and payment history, and role-based access control (RBAC).
- **Ideal For:** Law firms, accounting practices, property managers, healthcare providers, and consulting companies.`,
      suggestedChips: [
        "🔒 Client Portal Scope",
        "📅 Request Architecture Call",
        "📋 Commercial Models",
      ],
    };
  }

  // 5. Mobile App Development
  if (
    query.includes("mobile") ||
    query.includes("app") ||
    query.includes("ios") ||
    query.includes("android") ||
    query.includes("react native")
  ) {
    return {
      reply: `Our **Mobile Application Development** practice delivers cross-platform iOS and Android apps engineered for performance:

- **Typical Investment:** **$12,500 – $60,000**.
- **Tech Stack:** React Native and Expo for unified cross-platform velocity without maintaining two separate native codebases.
- **Deliverables:** App Store & Google Play approval management, push notification infrastructure, in-app purchases and subscriptions, offline data sync, and biometric authentication.`,
      suggestedChips: [
        "📱 Mobile App Scope",
        "📅 Request Architecture Call",
        "📋 Commercial Models",
      ],
    };
  }

  // 6. SaaS Platform Development
  if (
    query.includes("saas") ||
    query.includes("multi-tenant") ||
    query.includes("software product") ||
    query.includes("subscription platform")
  ) {
    return {
      reply: `Our **SaaS Platform Development** team builds subscription-based cloud software that clients sell to their own customers:

- **Typical Investment:** **$20,000 – $75,000+**.
- **Architecture:** Multi-tenant PostgreSQL database schemas with complete data isolation, automated Stripe subscription billing, team management with granular permissions, and developer APIs.
- **Deliverable:** A revenue-producing software business that you own 100%.`,
      suggestedChips: [
        "☁️ SaaS Platform Scope",
        "📅 Request Architecture Call",
        "📋 Commercial Models",
      ],
    };
  }

  // 7. Post-Launch Software Maintenance Retainers
  if (
    query.includes("maintenance") ||
    query.includes("retainer") ||
    query.includes("sla") ||
    query.includes("support") ||
    query.includes("monthly")
  ) {
    return {
      reply: `Following product launch, Scarci Digital offers optional **monthly software maintenance and code retainers**:

- **Application Care ($500/mo):** Weekly security patches, dependency updates, database backups, uptime monitoring, and 2-business-day response SLA.
- **CRM & Portal Support ($1,000/mo) [Most Selected]:** Everything in App Care + webhook/API maintenance, speed optimization, and up to 8 hrs/mo dedicated developer enhancement time (1-day SLA).
- **SaaS Platform Retainer ($1,500/mo):** Multi-tenant scaling oversight, CI/CD pipeline management, up to 15 hrs/mo engineering backlog development, and same-day priority SLA.`,
      suggestedChips: [
        "📋 View Maintenance Tiers",
        "📅 Discuss Your Scope",
      ],
    };
  }

  // 8. Marketing, SEO, Meta Ads & AI Receptionists -> Refer to Scarci Solutions!
  if (
    query.includes("seo") ||
    query.includes("meta ad") ||
    query.includes("facebook ad") ||
    query.includes("marketing") ||
    query.includes("ai receptionist") ||
    query.includes("phone agent") ||
    query.includes("google review")
  ) {
    return {
      reply: `**Scarci Digital** specializes strictly in **custom software, application engineering, and digital product development**.

For ongoing business marketing, local SEO, Meta ads campaigns, and AI phone receptionists for existing operations, please connect with our sister concern:

👉 **[Scarci Solutions (scarcisolutions.com)](https://scarcisolutions.com)** — dedicated to business automation, marketing growth, and client acquisition retainers.`,
      suggestedChips: [
        "🌐 Visit Scarci Solutions",
        "🚀 Explore Custom Software Instead",
        "📅 Book Architecture Call",
      ],
    };
  }

  // 9. Sister Concern & About
  if (
    query.includes("where") ||
    query.includes("location") ||
    query.includes("sister concern") ||
    query.includes("scarci solutions") ||
    query.includes("about")
  ) {
    return {
      reply: `**Scarci Digital** is headquartered in **Wilmington, DE (United States)** and operates as the custom software development sister concern of **Scarci Solutions**.

- **Scarci Digital:** Builds custom software products, mobile apps, SaaS platforms, and CRMs with 100% IP ownership.
- **Scarci Solutions:** Handles marketing campaigns, Meta ads, SEO, and AI receptionists for existing businesses.`,
      suggestedChips: [
        "🚀 Startup MVPs ($12.5k+)",
        "⚡ Custom CRMs ($12.5k+)",
        "📅 Book Architecture Call",
      ],
    };
  }

  // Default greeting
  const pageGreeting = pageContext
    ? ` (I see you're viewing **${pageContext}**)`
    : "";
  return {
    reply: `Hello! I'm the **Scarci Digital Technical Concierge**${pageGreeting}.

How can we help with your custom software or digital product today?
- **Startup MVP Development** ($12.5k–$45k)
- **Custom CRM & Operations Platforms** ($12.5k–$45k)
- **Client & Customer Portals** ($10k–$45k)
- **Mobile Apps & SaaS Platforms** ($12.5k–$75k+)
- **Commercial Models & Milestone Delivery**`,
    suggestedChips: [
      "🚀 Startup MVPs ($12.5k+)",
      "⚡ Custom CRMs ($12.5k+)",
      "🔒 Client Portals ($10k+)",
      "📱 Mobile Apps ($12.5k+)",
      "☁️ SaaS Platforms ($20k+)",
      "📅 Discuss Project Scope",
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

    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage?.content || "";

    // Extract potential lead contact info (email or phone)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const phoneRegex =
      /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

    const detectedEmail = userQuery.match(emailRegex)?.[0];
    const detectedPhone = userQuery.match(phoneRegex)?.[0];

    // Priority 1: Gemini API
    const geminiApiKey =
      process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (geminiApiKey) {
      try {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

        const geminiContents = [
          {
            role: "user",
            parts: [
              {
                text: `${CONCIERGE_KNOWLEDGE.systemPrompt}\n\nContext: User is viewing page ${
                  pageContext || "General"
                }\n\nCore Software Services:\n${
                  CONCIERGE_KNOWLEDGE.servicesSummary
                }\n\nCommercial Models:\n${
                  CONCIERGE_KNOWLEDGE.commercialModelsSummary
                }\n\nMaintenance Retainers:\n${
                  CONCIERGE_KNOWLEDGE.maintenanceSummary
                }`,
              },
            ],
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
                "🚀 Startup MVPs ($12.5k+)",
                "⚡ Custom CRMs ($12.5k+)",
                "🔒 Client Portals ($10k+)",
                "📅 Discuss Project Scope",
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

    // Priority 2: OpenAI API
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
                  content: `${CONCIERGE_KNOWLEDGE.systemPrompt}\nContext: ${
                    pageContext || "General"
                  }\nServices:\n${
                    CONCIERGE_KNOWLEDGE.servicesSummary
                  }\nCommercial Models:\n${
                    CONCIERGE_KNOWLEDGE.commercialModelsSummary
                  }`,
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
                "🚀 Startup MVPs ($12.5k+)",
                "⚡ Custom CRMs ($12.5k+)",
                "🔒 Client Portals ($10k+)",
                "📅 Discuss Project Scope",
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

    // Priority 3: Fallback Rule-Based Architecture Engine
    const ruleResult = generateRuleBasedReply(userQuery, pageContext);
    return NextResponse.json({
      reply: ruleResult.reply,
      suggestedChips: ruleResult.suggestedChips,
      leadCaptured: Boolean(detectedEmail || detectedPhone),
    });
  } catch (error) {
    console.error("Chat API route handler error:", error);
    return NextResponse.json(
      {
        reply:
          "Our senior technical architecture desk is reviewing inquiries. Please submit your project scope on our Contact page or email hello@scarcidigital.com.",
        suggestedChips: ["📅 Discuss Project Scope", "🚀 Startup MVPs"],
      },
      { status: 500 }
    );
  }
}
