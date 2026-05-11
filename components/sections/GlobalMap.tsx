"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GLOBAL_OFFICES } from "@/lib/seed-data";
import { MapPin, ArrowRight } from "lucide-react";

const OFFICE_POSITIONS = [
  { id: "hong-kong", x: 79.5, y: 36.5 },
  { id: "shenzhen",  x: 78.8, y: 37.8 },
  { id: "dubai",     x: 58.8, y: 44.5 },
];

const CONNECTIONS = [
  { from: { x: 78.8, y: 37.8 }, to: { x: 79.5, y: 36.5 } },
  { from: { x: 78.8, y: 37.8 }, to: { x: 58.8, y: 44.5 } },
];

const ACCENT = ["#3b82f6", "#06b6d4", "#8b5cf6"];

export function GlobalMap() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:invert-0 invert"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #3b82f6, transparent 70%)" }} />

      <div className="container-axion relative" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">Global Operations</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }} className="text-[var(--text-primary)]">
            International Operations<br />
            <span className="text-gradient">&amp; Supply Network</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }} className="text-[var(--text-secondary)]/60 max-w-lg mx-auto mt-4 text-base leading-relaxed">
            With operational presence in Hong Kong, Shenzhen, and Dubai, Axion supports international clients through manufacturing coordination, quality-focused production, and regional logistics.
          </motion.p>
        </div>

        {/* Map container */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 backdrop-blur-sm shadow-2xl"
          style={{ minHeight: "440px" }}>

          {/* Map background grid */}
          <div className="absolute inset-0 opacity-[0.05] dark:invert-0 invert"
            style={{
              backgroundImage: `
                linear-gradient(currentColor 1px, transparent 1px),
                linear-gradient(90deg, currentColor 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px"
            }} />

          {/* Decorative globe rings */}
          {[1, 2, 3].map(r => (
            <div key={r} className="absolute rounded-full border border-[var(--border-color)] opacity-20 pointer-events-none"
              style={{
                width:  `${r * 30}%`,
                height: `${r * 30}%`,
                top:    "50%",
                left:   "50%",
                transform: "translate(-50%,-50%)",
              }} />
          ))}

          {/* SVG — connection lines + markers */}
          <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connection arcs */}
            {CONNECTIONS.map((c, i) => {
              const mx = (c.from.x + c.to.x) / 2;
              const my = Math.min(c.from.y, c.to.y) - 6;
              return (
                <motion.path key={i}
                  d={`M ${c.from.x} ${c.from.y} Q ${mx} ${my} ${c.to.x} ${c.to.y}`}
                  fill="none" stroke="url(#lg1)" strokeWidth="0.3"
                  strokeDasharray="1 0.6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, delay: 0.8 + i * 0.5, ease: "easeInOut" }}
                />
              );
            })}

            {/* Animated "data packet" dots */}
            {inView && CONNECTIONS.map((c, i) => {
              const mx = (c.from.x + c.to.x) / 2;
              const my = Math.min(c.from.y, c.to.y) - 6;
              return (
                <motion.circle key={`pkt-${i}`} r="0.5" fill="#22d3ee"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, delay: 2 + i * 1.2, repeat: Infinity, repeatDelay: 1.5 }}
                >
                  <animateMotion
                    dur="2.5s"
                    begin={`${2 + i * 1.2}s`}
                    repeatCount="indefinite"
                    path={`M ${c.from.x} ${c.from.y} Q ${mx} ${my} ${c.to.x} ${c.to.y}`}
                  />
                </motion.circle>
              );
            })}
          </svg>

          {/* Office markers */}
          {OFFICE_POSITIONS.map((pos, i) => {
            const office = GLOBAL_OFFICES.find(o => o.id === pos.id)!;
            if (!office) return null;
            return (
              <motion.div key={pos.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.25, type: "spring", stiffness: 300, damping: 20 }}
                className="absolute z-10"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%,-50%)" }}
              >
                {/* Pulse rings */}
                {[1, 2].map(r => (
                  <motion.div key={r} className="absolute inset-0 rounded-full"
                    style={{ background: ACCENT[i] }}
                    animate={{ scale: [1, 2.5 + r, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, delay: i * 0.4 + r * 0.5, repeat: Infinity }}
                  />
                ))}
                {/* Dot */}
                <div className="relative w-3.5 h-3.5 rounded-full border-2 border-white shadow-lg z-10 cursor-pointer"
                  style={{ background: ACCENT[i] }} />
                {/* Label card */}
                <div className="absolute left-5 top-1/2 -translate-y-1/2 min-w-[140px]
                  bg-[var(--bg-secondary)]/90 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl px-3.5 py-2.5 shadow-xl transition-all">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-base">{office.flag}</span>
                    <p className="text-[var(--text-primary)] font-bold text-xs" style={{ fontFamily: "var(--font-satoshi)" }}>{office.city}</p>
                  </div>
                  <p className="text-[var(--text-secondary)]/60 text-[10px] leading-snug font-bold uppercase tracking-tighter">{office.role}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Corner branding */}
          <div className="absolute top-5 left-5 text-[var(--text-secondary)]/20 text-[10px] font-black tracking-[0.4em] select-none">
            AXION GLOBAL NETWORK
          </div>
        </motion.div>

        {/* Office cards below map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {GLOBAL_OFFICES.map((office, i) => (
            <motion.div key={office.id}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + i * 0.1 }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 300 } }}
              className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hover:border-blue-500/50 hover:bg-[var(--bg-primary)] transition-all duration-300 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl"
                style={{ background: `${ACCENT[i]}20`, border: `1px solid ${ACCENT[i]}30` }}>
                {office.flag}
              </div>
              <div>
                <p className="text-[var(--text-primary)] font-bold text-sm mb-1" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {office.city}
                </p>
                <p className="text-[var(--text-secondary)]/50 text-xs leading-relaxed font-medium">{office.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future rental division teaser */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-6 p-6 rounded-2xl border border-[var(--border-color)] bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-1 h-1 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Coming Soon</span>
            </div>
            <p className="text-[var(--text-primary)] font-black text-sm" style={{ fontFamily: "var(--font-satoshi)" }}>
              Future Rental Division
            </p>
            <p className="text-[var(--text-secondary)]/60 text-xs mt-1 max-w-lg leading-relaxed">
              Axion is expanding into professional dry hire rental solutions, supporting the growing demand for flexible and scalable event technology systems within the Middle East market.
            </p>
          </div>
          <a href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-blue-600 transition-colors shrink-0 group uppercase tracking-widest">
            Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
