"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../shared/Logo";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage immediately on mount
    const hasSeenPreloader = sessionStorage.getItem("axion-preloader-seen");
    if (hasSeenPreloader) {
      setLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          sessionStorage.setItem("axion-preloader-seen", "true");
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        // Power curve: Starts fast, slows down at the end for tension
        const remaining = 100 - oldProgress;
        const diff = Math.max(1, Math.random() * (remaining / 5));
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 1. Industrial Grid (Very Subtle) */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* 2. Expanding Energy Wave */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: [0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] border border-blue-500/30 rounded-full"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* 3. Logo with Flicker Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1], 
                scale: 1 
              }}
              transition={{ 
                duration: 0.5, 
                times: [0, 0.7, 0.8, 1],
                ease: "easeOut" 
              }}
              className="relative"
            >
              <Logo className="scale-110 md:scale-125" />
              
              {/* Core Glow */}
              <motion.div 
                className="absolute -inset-10 bg-blue-600/10 blur-[50px] rounded-full -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* 4. Minimalist Progress Indicator */}
            <div className="mt-24 flex flex-col items-center gap-4">
               {/* Progress Bar (Thin, High-Tech) */}
               <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "circOut" }}
                  />
               </div>

               {/* Status Text (Scramble Reveal Effect) */}
               <div className="flex items-center gap-6">
                  <motion.span 
                    className="text-[9px] font-black text-white/30 uppercase tracking-[0.8em] ml-[0.8em]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Axion.OS_Loading
                  </motion.span>
                  <span className="text-[14px] font-mono font-bold text-blue-500 w-12 text-right">
                    {Math.round(progress)}%
                  </span>
               </div>
            </div>
          </div>

          {/* 5. Top/Bottom Horizontal Scanners */}
          <motion.div 
            className="absolute top-0 inset-x-0 h-[1px] bg-blue-500/20"
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-0 inset-x-0 h-[1px] bg-blue-500/20"
            animate={{ right: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Vignette for Focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_90%)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
