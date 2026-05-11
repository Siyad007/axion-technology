"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, Phone, Mail, MessageCircle, ExternalLink, ArrowUpRight } from "lucide-react";
import { CATEGORIES, GLOBAL_OFFICES } from "@/lib/seed-data";
import { sendWhatsAppMessage } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";

const COMPANY_LINKS = [
  { label: "About Us",      href: "/about"     },
  { label: "Industries",    href: "/industries" },
  { label: "Contact Us",    href: "/contact"    },
  { label: "Get a Quote",   href: "/contact"    },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-500 border-t border-[var(--border-color)]">

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-primary-glow) 30%, var(--color-accent-glow) 70%, transparent)" }} />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] dark:invert-0 invert"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", transform: "translate(30%,-30%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)", transform: "translate(-30%,30%)" }} />

      <div className="container-axion relative">

        {/* ── Top CTA band ─────────────────────────────── */}
        <div className="py-14 border-b border-[var(--border-color)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-2">
              Partner with Axion Technologies
            </p>
            <h3 className="text-3xl font-black text-[var(--text-primary)] leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
              Ready to start your next<br />
              <span className="text-gradient">visual technology project?</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact"
              className="btn-primary flex items-center gap-2 text-sm py-3.5 px-7">
              Request a Consultation <ArrowUpRight size={15} />
            </Link>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => sendWhatsAppMessage()}
              className="flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full text-white transition-all shadow-lg"
              style={{ background: "linear-gradient(135deg,#2563eb,#128C7E)" }}>
              <MessageCircle size={16} />
              WhatsApp Us
            </motion.button>
          </div>
        </div>

        {/* ── Main grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-[var(--border-color)]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-10 block -ml-2 footer-logo-override">
              <Logo className="w-52" isScrolled={true} />
            </Link>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
              Axion Technology Co Ltd is a global visual technology engineering company delivering professional LED display systems, interactive technologies, lighting, audio, and integrated AV solutions.
            </p>

            <div className="flex gap-2.5">
              {["LI", "IG", "YT", "TW"].map(s => (
                <motion.a key={s} href="#"
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-blue-500 transition-colors text-[10px] font-black">
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]/50 mb-5">Products</p>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 5).map(c => (
                <li key={c.slug}>
                  <Link href={`/products/${c.slug}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-2 group transition-colors">
                    <span className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors shrink-0" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]/50 mb-5">Company</p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(l => (
                <li key={l.href + l.label}>
                  <Link href={l.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-2 group transition-colors">
                    <span className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]/50 mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sales@axiontechnology.com"
                  className="flex gap-3 items-start group transition-colors text-[var(--text-secondary)]">
                  <div className="w-8 h-8 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={13} className="group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-50 mb-0.5 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-sm group-hover:text-[var(--text-primary)] transition-colors break-all">
                      sales@axiontechnology.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex gap-3 items-start text-[var(--text-secondary)]">
                  <div className="w-8 h-8 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center mt-0.5 shrink-0">
                    <MapPin size={13} />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-50 mb-0.5 uppercase tracking-wider font-medium">Offices</p>
                    <p className="text-sm">Hong Kong | Shenzhen | Dubai</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4 text-[var(--text-secondary)] text-xs">
          <p>© {new Date().getFullYear()} Axion Technology Co Ltd. All rights reserved. Visual Systems for Modern Experiences.</p>
          <div className="flex gap-5">
            {["Privacy Policy","Terms of Use","Sitemap"].map(l => (
              <Link key={l} href="#" className="hover:text-[var(--text-primary)] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
