import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  fullName: z.string().optional(),
  contactInfo: z.string().min(3, "Please provide an email or phone number"),
  serviceInterest: z.string().optional(),
  budgetRange: z.string().optional(),
  notes: z.string().optional(),
  sourceUrl: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const lead = result.data;

    // Log the lead prominently for agency review
    console.log("🌟 [VIP LEAD CAPTURED VIA CONCIERGE]:", {
      timestamp: new Date().toISOString(),
      ...lead,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been recorded! Our team will reach out within 1 business day.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to record inquiry. Please reach out to hello@scarcidigital.com directly.",
      },
      { status: 500 }
    );
  }
}
