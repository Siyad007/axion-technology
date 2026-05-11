import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/seed-data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category  = searchParams.get("category");
  const featured  = searchParams.get("featured");
  const limit     = searchParams.get("limit");

  let products = [...PRODUCTS];

  if (category)   products = products.filter(p => p.categories?.slug === category || p.category_id === category);
  if (featured)   products = products.filter(p => p.is_featured);
  if (limit)      products = products.slice(0, parseInt(limit));

  // In production: replace with Supabase server client query
  // const { data, error } = await supabaseServer.from('products')
  //   .select('*, categories(*)')
  //   .eq('is_active', true);

  return NextResponse.json({ data: products, count: products.length });
}
