"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { INDUSTRIES } from "@/lib/seed-data";
import {
  Star, Layout, Building2, Landmark, ShoppingBag,
  Monitor, Hotel, Church, Radio, GraduationCap,
} from "lucide-react";

const ICONS: Record<string, typeof Star> = {
  Star, Layout, Building2, Landmark, ShoppingBag,
  Monitor, Hotel, Church, Radio, GraduationCap,
};

const ALL = [...INDUSTRIES, ...INDUSTRIES];

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section bg-neutral-900 overflow-hidden relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Header */}
      <div className="container-axion mb-14" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-pill border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Industries We Serve</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }} className="text-white">
              Solutions for<br />
              <span className="text-gradient">Diverse Environments</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed md:text-right">
            From touring productions and exhibitions to command centers and houses of worship — Axion serves every environment that demands visual excellence.
          </motion.p>
        </div>
      </div>

      {/* Marquee row 1 → */}
      <div className="overflow-hidden mb-3">
        <div className="marquee-track" style={{ gap: "12px" }}>
          {ALL.map((ind, i) => {
            const Icon = ICONS[ind.icon] || Star;
            return (
              <div key={`fwd-${i}`}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/8 bg-white/4 shrink-0 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-white/6 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Icon size={15} className="text-white/50 group-hover:text-primary-400 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-white/60 group-hover:text-white/90 whitespace-nowrap transition-colors"
                  style={{ fontFamily: "var(--font-satoshi)" }}>
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee row 2 ← */}
      <div className="overflow-hidden mb-14">
        <div className="marquee-track-reverse" style={{ gap: "12px" }}>
          {[...ALL].reverse().map((ind, i) => {
            const Icon = ICONS[ind.icon] || Star;
            return (
              <div key={`rev-${i}`}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/8 bg-white/4 shrink-0 hover:border-accent-500/30 hover:bg-white/8 transition-all duration-200 cursor-default group">
                <div className="w-8 h-8 rounded-xl bg-white/6 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <Icon size={15} className="text-white/50 group-hover:text-accent-400 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-white/60 group-hover:text-white/90 whitespace-nowrap transition-colors"
                  style={{ fontFamily: "var(--font-satoshi)" }}>
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Industry detail grid */}
      <div className="container-axion">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon] || Star;
            return (
              <motion.div key={ind.slug}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 + 0.4, duration: 0.5 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
                className="p-5 rounded-2xl border border-white/8 bg-white/4 hover:border-white/15 hover:bg-white/7 transition-all duration-300 cursor-default group">
                <div className="w-9 h-9 rounded-xl bg-white/6 flex items-center justify-center mb-3.5 group-hover:bg-primary-500/20 transition-colors">
                  <Icon size={17} className="text-white/50 group-hover:text-primary-400 transition-colors" />
                </div>
                <p className="text-sm font-bold text-white/80 mb-1.5 leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {ind.name}
                </p>
                <p className="text-[11px] text-white/35 leading-relaxed">{ind.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
