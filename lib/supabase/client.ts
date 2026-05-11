import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey   = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const anonKey      = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server-only client (use in API routes only)
export const supabaseServer = createClient(supabaseUrl || "https://placeholder.supabase.co", serviceKey || anonKey || "placeholder");

// Public client
export const supabaseClient = createClient(supabaseUrl || "https://placeholder.supabase.co", anonKey || "placeholder");
