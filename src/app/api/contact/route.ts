import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/constants";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // In production, integrate with Resend email or forward to CRM webhook
    const notifyEmail = process.env.LEAD_NOTIFICATION_EMAIL || SITE_CONFIG.contact.notificationEmail || "work.mohammadarif@gmail.com";
    console.log("📬 [NEW CLIENT INQUIRY RECEIVED]:", {
      destination: notifyEmail,
      timestamp: new Date().toISOString(),
      ...result.data,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your discovery inquiry has been received. Our engineering lead will contact you within 24 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
