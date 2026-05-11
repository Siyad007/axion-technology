"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Box, Cpu, Zap, Volume2, Cable, Monitor } from "lucide-react";
import { CATEGORIES } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

const CAT_IMAGES = [
  "/images/categories/led-displays.png",
  "/images/categories/lcd-kiosks.png",
  "/images/categories/lighting.png",
  "/images/categories/audio.png",
  "/images/categories/power-cable.png",
];

export function ProductCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500" ref={ref}>
      
      {/* ── Innovative Technical Video Background ────────────────── */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-[0.05]">
         <video 
           autoPlay 
           muted 
           loop 
           playsInline
           preload="auto"
           className="w-full h-full object-cover grayscale brightness-110 opacity-40 dark:opacity-20"
         >
           {/* Exact Local Technical Footage */}
           <source src="/videos/12748107-hd_1920_1080_30fps.mp4" type="video/mp4" />
         </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] z-[1]" />
      <div className="absolute inset-0 industrial-grid opacity-[0.03] z-[1]" />
      
      <div className="container-axion relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Global Tech Authority</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[var(--text-primary)] text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter"
            >
              Advanced <span className="text-gradient">Technology</span> <br /> Solutions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link href="/products" className="group flex items-center gap-4 text-[var(--text-secondary)] hover:text-blue-600 transition-all text-[11px] font-black uppercase tracking-[0.3em] pb-2 border-b border-[var(--border-color)] hover:border-blue-600">
              View All Systems
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Categories Grid (8K Sharpened) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/products/${cat.slug}`} className="group block relative h-[550px] rounded-[3rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 dark:backdrop-blur-xl shadow-2xl transition-all duration-700 hover:shadow-blue-500/20">
                
                {/* 8K Sharpened Background Image */}
                <Image
                  src={CAT_IMAGES[i]}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 dark:brightness-110 dark:contrast-125 image-8k"
                  quality={100}
                />
                
                {/* Stronger Dark Overlays for visibility */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t",
                  "dark:from-black/100 dark:via-black/70 dark:to-black/20",
                  "from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent"
                )} />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content Deep-Dive */}
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="mb-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                     <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] mb-4 block">
                       {cat.product_count}+ Engineering Systems
                     </span>
                     <h3 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-[0.9] tracking-tight uppercase">
                       <span className="text-blue-600 dark:text-blue-400">AXION</span> {cat.name}
                     </h3>
                     <p className="text-[var(--text-secondary)] dark:text-white/70 text-sm leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 font-bold dark:font-medium translate-y-4 group-hover:translate-y-0">
                       {cat.description}
                     </p>
                  </div>
                  
                  {/* Interactive Footer */}
                  <div className="flex items-center justify-between border-t border-[var(--border-color)] dark:border-white/20 pt-10 opacity-60 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-[10px] font-black text-[var(--text-secondary)] dark:text-white/80 uppercase tracking-[0.4em] group-hover:text-blue-600 dark:group-hover:text-blue-400">
                       ANALYZE SOLUTION
                    </span>
                    <div className="w-14 h-14 rounded-2xl border border-[var(--border-color)] dark:border-white/20 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:border-blue-600 transition-all shadow-xl dark:shadow-2xl">
                       <ArrowRight size={24} className="text-[var(--text-primary)] dark:text-white group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Rim Highlight */}
                <div className="absolute -inset-px rounded-[3rem] border-2 border-blue-600/0 group-hover:border-blue-600/30 transition-all pointer-events-none z-20" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
