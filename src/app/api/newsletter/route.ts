import { NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/leads";

const schema = z.object({
  email: z.string().trim().email().max(200),
  pageUrl: z.string().trim().max(500).optional(),
});

export async function POST(request: Request) {
  try {
    const result = schema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    await saveLead({
      source: "newsletter",
      email: result.data.email,
      pageUrl: result.data.pageUrl,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
