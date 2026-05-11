import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const InquirySchema = z.object({
  name:       z.string().min(2),
  email:      z.string().email(),
  phone:      z.string().optional(),
  company:    z.string().optional(),
  country:    z.string().optional(),
  message:    z.string().min(10),
  product_id: z.string().optional(),
  source:     z.enum(["contact_form", "product_page", "whatsapp"]).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = InquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
    }

    // In production: insert into Supabase
    // const { data, error } = await supabaseServer.from('inquiries').insert(parsed.data).select().single();
    
    // Log for development
    console.log("[Inquiry]", parsed.data);

    return NextResponse.json({ success: true, message: "Inquiry received. We'll be in touch shortly!" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
