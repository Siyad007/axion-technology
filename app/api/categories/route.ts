import { NextRequest, NextResponse } from "next/server";
import { CATEGORIES } from "@/lib/seed-data";

export async function GET(_request: NextRequest) {
  const categories = CATEGORIES.filter(c => c.is_active);
  return NextResponse.json({ data: categories, count: categories.length });
}
