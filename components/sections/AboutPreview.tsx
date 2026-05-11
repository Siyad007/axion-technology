"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Cpu, Globe2, Truck, MapPin, ShieldCheck } from "lucide-react";
import { WHY_AXION } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, typeof Clock> = { Clock, Cpu, Globe2, Truck, MapPin, ShieldCheck };

const CARD_ACCENTS = [
  "from-blue-500 to-blue-700",
  "from-cyan-500 to-cyan-700",
  "from-indigo-500 to-indigo-700",
  "from-blue-600 to-cyan-600",
  "from-cyan-600 to-blue-600",
  "from-blue-400 to-blue-600",
];

export function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500">
      
      {/* Structural Decor */}
      <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />

      <div className="container-axion relative z-10" ref={ref}>

        {/* ── Corporate Identity Overview ──────────────────── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em]">Corporate Legacy</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }} 
              className="text-[var(--text-primary)] text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.95]"
            >
              Engineering Technology<br />
              <span className="text-gradient">for Modern Visual Environments</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }} 
              className="space-y-6 text-[var(--text-secondary)]/70 text-base md:text-lg leading-relaxed font-medium"
            >
              <p>
                Axion Technology Co Ltd is a global visual technology engineering company delivering professional LED display systems, integrated AV solutions, interactive technologies, lighting, audio systems, and technical infrastructure for events, exhibitions, corporate environments, command centers, museums, retail spaces, entertainment venues, and modern visual experiences.
              </p>
              <p>
                Backed by over 20 years of industry experience across the Middle East and Europe, Axion combines engineering expertise, OEM manufacturing partnerships, and global supply capabilities to support clients with high-performance visual technologies tailored for real-world applications.
              </p>
              <p>
                With operational presence in Hong Kong, Shenzhen, and Dubai, Axion supports international clients through manufacturing coordination, quality-focused production, regional inventory support, and international logistics.
              </p>
              <p>
                From rental-grade LED systems and touring technologies to premium COB, MIP, and enterprise collaboration displays, Axion delivers scalable visual solutions engineered for reliability, performance, and long-term value.
              </p>
            </motion.div>
          </div>

          {/* High-Fidelity 8K Video with Wow Factor Cutout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/3] shadow-2xl group bg-[var(--bg-secondary)]"
            style={{ clipPath: 'polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)' }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 image-8k"
            >
              <source src="/videos/13077635-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Global Scale Metrics Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              {[
                { v: "20+", l: "Years Exp" }, 
                { v: "30+", l: "Countries" }, 
                { v: "500+", l: "Projects" }
              ].map(s => (
                <div key={s.l} className="flex-1 rounded-2xl bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--border-color)] p-5 text-center shadow-2xl">
                  <p className="text-[var(--text-primary)] font-black text-2xl leading-none tracking-tighter" style={{ fontFamily: "var(--font-satoshi)" }}>{s.v}</p>
                  <p className="text-[var(--text-secondary)]/40 text-[9px] mt-2 font-black uppercase tracking-widest">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Professional Expertise Grid ────────────────────── */}
        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={inView ? { opacity: 1 } : {}}
            className="text-[10px] font-black text-blue-500/40 uppercase tracking-[0.4em] text-center mb-12"
          >
            Technology Expertise Built on Industry Experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AXION.map((item, i) => {
            const Icon = ICONS[item.icon] || Clock;
            return (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }} 
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 backdrop-blur-md hover:border-blue-500/50 hover:bg-[var(--bg-primary)] transition-all duration-700 shadow-sm flex flex-col"
              >
                <div className="flex items-start gap-5">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500",
                    CARD_ACCENTS[i]
                  )}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] font-black text-lg mb-2 leading-none tracking-tight">
                      {item.title}
                    </p>
                    <p className="text-[var(--text-secondary)]/60 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
