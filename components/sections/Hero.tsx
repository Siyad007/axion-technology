"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, ChevronDown, Activity, Box } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { useMouseParallax } from "@/hooks/useAnimations";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Hero() {
  const { x, y } = useMouseParallax(15);
  const { scrollY } = useScroll();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure theme detection works on client
  useEffect(() => setMounted(true), []);

  // Parallax effects
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Theme-specific imagery
  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black transition-colors duration-500 pt-20">
      
      {/* ── 8K Visual Authority Layer (Theme-Aware) ─────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key="hero-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: isDark ? 0.4 : 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              className={cn(
                "w-full h-full object-cover transition-all duration-1000",
                isDark ? "grayscale-[0.2]" : ""
              )}
            >
              <source src="/videos/12748107-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
        
        {/* Architectural Overlays - Dark Theme Only, Zero Blur in Light Theme */}
        {isDark && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[var(--bg-primary)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/60 via-transparent to-[var(--bg-primary)]/60" />
          </>
        )}
        <div className="absolute inset-0 industrial-grid opacity-[0.03] dark:opacity-[0.02]" />
      </motion.div>

      {/* ── Innovative Engineering Overlays ─────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden 2xl:block">
        <motion.div 
          animate={{ x: x * 0.4, y: y * 0.4 }}
          className="absolute top-[15%] right-[5%] p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-2xl shadow-2xl w-64 border-l-4 border-l-blue-600"
        >
           <div className="flex items-center gap-3 mb-4">
              <Activity size={16} className="text-blue-500" />
              <p className="text-[9px] font-black text-[var(--text-primary)] uppercase tracking-widest">System Telemetry</p>
           </div>
           <div className="space-y-3">
              <div className="flex justify-between items-center">
                 <span className="text-[8px] text-[var(--text-secondary)]/60 uppercase font-black">Pixel Pitch</span>
                 <span className="text-xs font-black text-[var(--text-primary)] tracking-tighter">0.93 mm</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-[8px] text-[var(--text-secondary)]/60 uppercase font-black">Luminance</span>
                 <span className="text-xs font-black text-[var(--text-primary)] tracking-tighter">1,200 nits</span>
              </div>
           </div>
        </motion.div>

        <motion.div 
          animate={{ x: -x * 0.5, y: -y * 0.5 }}
          className="absolute bottom-[10%] left-[5%] p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-2xl shadow-2xl w-72 border-r-4 border-r-blue-600"
        >
           <div className="flex items-center gap-3 mb-4">
              <Box size={16} className="text-blue-500" />
              <p className="text-[9px] font-black text-[var(--text-primary)] uppercase tracking-widest">Configuration</p>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                 <p className="text-[7px] text-[var(--text-secondary)]/40 uppercase font-black">Width</p>
                 <p className="text-xs font-black text-[var(--text-primary)] tracking-tighter">12,500 mm</p>
              </div>
              <div className="text-center p-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                 <p className="text-[7px] text-[var(--text-secondary)]/40 uppercase font-black">Height</p>
                 <p className="text-xs font-black text-[var(--text-primary)] tracking-tighter">7,200 mm</p>
              </div>
           </div>
        </motion.div>
      </div>

      {/* ── Main Content ─────────────────────────────────── */}
      <div className="container-axion relative z-20 text-center">
        <motion.div style={{ opacity }} className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-10 px-6 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-xl shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[9px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em]">
              Global Engineering Authority • 20 Years
            </span>
          </motion.div>

          <h1 className="mb-10 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.8] text-white tracking-wide text-center"
            >
              ENGINEERING ADVANCED
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.8] tracking-wide text-center mt-2"
            >
              <span className="text-white">VISUAL</span>
              <span className="text-stripe drop-shadow-sm">TECHNOLOGY</span>
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-3xl mx-auto mb-16 text-center space-y-6"
          >
            <p className="text-white/90 dark:text-white/70 text-lg md:text-xl leading-relaxed font-medium">
              Axion Technology Co Ltd is a global visual technology engineering company specializing in professional LED display systems, interactive technologies, stage systems, lighting, audio, and integrated AV infrastructure for modern environments.
            </p>
            <p className="text-white/90 dark:text-white/70 text-lg md:text-xl leading-relaxed font-medium">
              With over 20 years of industry experience across the Middle East and Europe, Axion combines engineering expertise, OEM manufacturing partnerships, and international supply capabilities to deliver reliable and scalable visual technology solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <MagneticButton href="/products" strength={0.2} className="btn-primary px-12 py-5 text-[10px] uppercase tracking-[0.2em] shadow-2xl">
              Explore 8K Catalogue
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton href="/contact" strength={0.15} className="btn-secondary px-10 py-5 text-[10px] uppercase tracking-[0.2em]">
              Engineering Inquiry
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[var(--text-secondary)]/20"
      >
        <div className="w-px h-10 bg-gradient-to-b from-blue-600/50 to-transparent" />
        <span className="text-[9px] font-black uppercase tracking-[0.6em]">SCROLL</span>
      </motion.div>

    </section>
  );
}
