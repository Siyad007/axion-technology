"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export function VideoCutout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[var(--bg-primary)] overflow-hidden" ref={ref}>
      <div className="container-axion">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={inView ? { opacity: 1, x: 0 } : {}}
               className="flex items-center gap-3 mb-8"
             >
               <div className="w-12 h-[1px] bg-blue-500" />
               <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Future Rental Division</span>
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               className="text-[var(--text-primary)] text-4xl md:text-6xl font-black mb-10 leading-[0.95] tracking-tighter"
             >
               Expanding into Professional <br />
               <span className="text-gradient">Dry Hire Solutions</span>
             </motion.h2>
             <motion.p
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ delay: 0.3 }}
               className="text-[var(--text-secondary)]/60 text-lg mb-12 leading-relaxed font-medium"
             >
               Axion is expanding into professional dry hire rental solutions for selected visual and event technologies, supporting the growing demand for flexible and scalable event technology systems within the Middle East market.
             </motion.p>
             <motion.button
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ delay: 0.4 }}
               className="group flex items-center gap-6 text-[10px] font-black text-[var(--text-primary)] uppercase tracking-widest"
             >
               Explore Rental Inventory
               <div className="w-14 h-14 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  <ArrowRight size={20} />
               </div>
             </motion.button>
          </div>

          <div className="lg:col-span-7 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={inView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 1 }}
               className="relative aspect-video cutout-mask bg-black overflow-hidden shadow-2xl group cursor-pointer"
             >
                {/* High Quality Local Production Video Source - Zero Lag */}
                <div className="absolute inset-0">
                   <video 
                     autoPlay 
                     muted 
                     loop 
                     playsInline
                     preload="auto"
                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 transform-gpu will-change-transform"
                   >
                     {/* Exact Local Production Footage */}
                     <source src="/videos/10300934-hd_3840_2160_30fps.mp4" type="video/mp4" />
                   </video>
                </div>
                
                {/* Subtle Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent pointer-events-none" />
             </motion.div>

             {/* Technical Data - Positioned OUTSIDE the mask to prevent "overhidden" issue */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ delay: 1 }}
               className="absolute -bottom-10 right-0 text-right pr-12"
             >
                <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.4em] mb-1">Regional Expansion</p>
                <p className="text-sm font-black text-[var(--text-primary)] uppercase tracking-widest">Middle East Market • Dry Hire Infrastructure</p>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
