import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "…" : str;
}

export function sendWhatsAppMessage(productName?: string, phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+97312345678") {
  const message = productName
    ? `Hi, I'm interested in *${productName}*. Can you please provide more details and pricing?`
    : `Hi, I'd like to inquire about Axion Technology products and solutions.`;
  const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") window.open(url, "_blank");
}
