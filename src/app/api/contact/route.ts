import { NextResponse } from "next/server";
import { z } from "zod";

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
    console.log("New Lead Received at Scarci Digital:", result.data);

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
