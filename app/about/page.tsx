"use client";
import { motion } from "framer-motion";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { GlobalMap } from "@/components/sections/GlobalMap";

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)] pt-20 transition-colors duration-500">
      <div className="container-axion pt-24 text-center mb-24">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center justify-center gap-3 mb-8"
         >
           <div className="w-12 h-[1px] bg-blue-500" />
           <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Our Legacy</span>
           <div className="w-12 h-[1px] bg-blue-500" />
         </motion.div>
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-8 tracking-tighter leading-none"
         >
           About <span className="text-gradient">Axion</span> Technologies
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.3 }}
           className="text-[var(--text-secondary)]/60 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
         >
           A global leader in visual technology engineering, Axion Technologies combines 20 years of 
           industry experience with international manufacturing expertise to deliver 
           premium LED, lighting, and audio solutions.
         </motion.p>
      </div>
      
      <AboutPreview />
      
      <div className="container-axion py-32 text-center border-t border-[var(--border-color)]">
         <h2 className="text-4xl font-black text-[var(--text-primary)] mb-12 uppercase tracking-[0.2em]">Global Operations</h2>
         <GlobalMap />
      </div>
    </div>
  );
}
