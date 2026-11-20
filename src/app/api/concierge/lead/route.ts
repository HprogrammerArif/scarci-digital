import { NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/leads";
import { SITE_CONFIG } from "@/lib/constants";

const leadSchema = z.object({
  fullName: z.string().trim().max(120).optional(),
  contactInfo: z
    .string()
    .trim()
    .min(3, "Please provide an email or phone number")
    .max(200),
  serviceInterest: z.string().trim().max(160).optional(),
  timeline: z.string().trim().max(120).optional(),
  notes: z.string().trim().max(2000).optional(),
  sourceUrl: z.string().trim().max(500).optional(),
});

export async function POST(request: Request) {
  try {
    const result = leadSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0]?.message },
        { status: 400 }
      );
    }

    const lead = result.data;
    const isEmail = lead.contactInfo.includes("@");

    await saveLead({
      source: "chat-form",
      name: lead.fullName,
      email: isEmail ? lead.contactInfo : undefined,
      phone: isEmail ? undefined : lead.contactInfo,
      service: lead.serviceInterest,
      timeline: lead.timeline,
      message: lead.notes,
      pageUrl: lead.sourceUrl,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll reach out within 1 business day.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Something went wrong. Please email ${SITE_CONFIG.contact.email}.`,
      },
      { status: 500 }
    );
  }
}
