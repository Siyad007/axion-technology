"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Star, Layout, Building2, Landmark, ShoppingBag, 
  Monitor, Hotel, Church, Radio, GraduationCap, ArrowRight
} from "lucide-react";
import { INDUSTRIES } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, any> = {
  Star, Layout, Building2, Landmark, ShoppingBag, 
  Monitor, Hotel, Church, Radio, GraduationCap,
};

export function IndustrySolutions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500" ref={ref}>
      
      {/* Structural Decor */}
      <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container-axion relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Enterprise Markets</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[var(--text-primary)] text-5xl md:text-7xl font-black leading-none tracking-tighter"
            >
              Tailored for <br />
              <span className="text-gradient">Every Environment</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[var(--text-secondary)]/60 text-xl max-w-sm md:text-right leading-relaxed font-medium"
          >
            Engineering visual technology infrastructure across diverse global sectors.
          </motion.p>
        </div>

        {/* Industries Vertical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.icon] || Star;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 rounded-[2.5rem] bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] hover:border-blue-500/50 hover:bg-[var(--bg-primary)] transition-all duration-700 overflow-hidden shadow-sm flex flex-col items-start"
              >
                {/* Subtle Brand Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] group-hover:bg-blue-600/10 transition-colors duration-700" />
                
                {/* Sector Icon */}
                <div className="w-16 h-16 rounded-[1.5rem] bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-700 shadow-xl shadow-blue-500/5">
                  <Icon size={28} className="text-blue-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-5 tracking-tight group-hover:text-blue-500 transition-colors leading-none">
                  {ind.name}
                </h3>
                <p className="text-[var(--text-secondary)]/60 text-sm leading-relaxed mb-10 font-medium group-hover:text-[var(--text-secondary)] transition-colors">
                  {ind.description}
                </p>

                {/* Technical Call-to-Action */}
                <div className="mt-auto flex items-center gap-3 text-[10px] font-black text-blue-500/40 uppercase tracking-[0.2em] group-hover:text-blue-500 transition-colors">
                   LEARN MORE <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legacy & Scale Ribbon */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={inView ? { opacity: 1, scale: 1 } : {}}
           transition={{ delay: 0.5, duration: 1 }}
           className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 py-16 px-8 rounded-[3rem] border border-[var(--border-color)] bg-[var(--bg-secondary)]/10 backdrop-blur-md relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 opacity-50" />
            {[
              { val: "20+", label: "Years Experience" },
              { val: "500+", label: "Projects Completed" },
              { val: "30+", label: "Countries Served" },
              { val: "24/7", label: "Global Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center relative z-10">
                 <p className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-satoshi)' }}>{stat.val}</p>
                 <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-[0.4em] leading-none">{stat.label}</p>
              </div>
            ))}
        </motion.div>

      </div>
    </section>
  );
}
