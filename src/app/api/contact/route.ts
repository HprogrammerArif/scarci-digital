import { NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/leads";
import { SITE_CONFIG } from "@/lib/constants";

const text = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  company: text(160),
  service: text(160),
  stage: text(120),
  timeline: text(120),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your project")
    .max(5000),
  pageUrl: text(500),
  website: text(200), // honeypot
});

export async function POST(request: Request) {
  try {
    const result = contactSchema.safeParse(await request.json());
    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message ||
        "Please check your details and try again.";
      return NextResponse.json({ success: false, message: firstError }, { status: 400 });
    }

    const { website, fullName, ...data } = result.data;

    // Bots fill hidden fields. Pretend success so they don't retry.
    if (website) {
      return NextResponse.json({ success: true });
    }

    await saveLead({
      source: "contact-form",
      name: fullName,
      email: data.email,
      company: data.company || undefined,
      service: data.service || undefined,
      stage: data.stage || undefined,
      timeline: data.timeline || undefined,
      message: data.message,
      pageUrl: data.pageUrl || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll reply within 1 business day.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Something went wrong. Please email us at ${SITE_CONFIG.contact.email}.`,
      },
      { status: 500 }
    );
  }
}
