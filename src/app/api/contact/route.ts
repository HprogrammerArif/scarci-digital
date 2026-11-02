import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/constants";

const contactSchema = z.object({
  fullName: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid work email address"),
  company: z.string().optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstError =
        Object.values(fieldErrors).flat()[0] ||
        "Please check your form details and try again.";

      return NextResponse.json(
        {
          success: false,
          message: firstError,
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const notifyEmail =
      process.env.LEAD_NOTIFICATION_EMAIL ||
      SITE_CONFIG.contact.notificationEmail ||
      "work.mohammadarif@gmail.com";

    // Prominently log the inquiry for server monitoring / Vercel telemetry
    console.log("📬 [NEW CLIENT INQUIRY RECEIVED]:", {
      destination: notifyEmail,
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Generate direct WhatsApp shortcut with client details pre-filled
    const cleanPhone =
      (process.env.WHATSAPP_PHONE || SITE_CONFIG.contact.whatsappPhone || "+8801608414032").replace(
        /[^0-9]/g,
        ""
      );
    const prefilledText = encodeURIComponent(
      `Hello Scarci Digital! I submitted an inquiry for ${data.service || "a new project"} (Budget: ${data.budget || "Flexible"}). Name: ${data.fullName}, Email: ${data.email}.`
    );
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${prefilledText}`;

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your discovery inquiry has been received. Our engineering lead will contact you within 24 hours.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please contact us directly at hello@scarcidigital.com or via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
