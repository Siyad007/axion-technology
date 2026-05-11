"use client";
import { motion } from "framer-motion";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";

export default function IndustriesPage() {
  return (
    <div className="bg-[var(--bg-primary)] pt-20 transition-colors duration-500">
      <div className="container-axion pt-24 text-center mb-10">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter"
         >
           Enterprise <span className="text-gradient">Market</span> Verticals
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="text-[var(--text-secondary)]/60 max-w-3xl mx-auto mb-10 text-xl font-medium leading-relaxed"
         >
           Axion Technology provides specialized visual infrastructure across global sectors, 
           from high-stakes command centers to immersive live entertainment environments.
         </motion.p>
      </div>
      <IndustrySolutions />
    </div>
  );
}
