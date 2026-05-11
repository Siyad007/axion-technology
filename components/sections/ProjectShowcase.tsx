"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Global Expo 2024",
    location: "Dubai, UAE",
    category: "LED Installations",
    image: "/images/hero-bg.png",
    span: "lg:col-span-8 lg:row-span-2",
    date: "March 2024",
  },
  {
    title: "World Arena Tour",
    location: "London, UK",
    category: "Stage Lighting",
    image: "/images/categories/lighting.png",
    span: "lg:col-span-4 lg:row-span-1",
    date: "Jan 2024",
  },
  {
    title: "Tech Hub HQ",
    location: "Shenzhen, China",
    category: "Fine-Pitch LED",
    image: "/images/categories/led-displays.png",
    span: "lg:col-span-4 lg:row-span-1",
    date: "Dec 2023",
  },
];

export function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500" ref={ref}>
      
      {/* Structural Decor */}
      <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />

      <div className="container-axion relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Global Excellence</span>
            <div className="w-12 h-[1px] bg-blue-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[var(--text-primary)] text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Real World <span className="text-gradient">Installations</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             animate={inView ? { opacity: 1 } : {}}
             className="text-[var(--text-secondary)]/60 text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            From global exhibitions to world-class touring productions, Axion Technology
            powers visual experiences that define modern environments.
          </motion.p>
        </div>

        {/* Masonry Grid - High-Fidelity Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[350px]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                project.span,
                "relative rounded-[2.5rem] overflow-hidden group border border-[var(--border-color)] bg-[#050505] cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-blue-500/10"
              )}
            >
              {/* Background with Sharpened Rendering */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 dark:opacity-60 dark:brightness-110 dark:contrast-110 dark:saturate-[0.8]"
                quality={100}
              />
              
              {/* Intelligent Theme Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent dark:block hidden" />
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content Information */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-5 shadow-xl">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-5 group-hover:text-blue-500 transition-colors leading-none tracking-tighter">
                    {project.title}
                  </h3>
                  
                  {/* Metadata Row */}
                  <div className="flex flex-wrap gap-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                     <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                        <MapPin size={16} className="text-blue-500" />
                        {project.location}
                     </div>
                     <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Calendar size={16} className="text-blue-500" />
                        {project.date}
                     </div>
                  </div>
                </div>
              </div>

              {/* Interactive Play/Action Indicator */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-[var(--bg-secondary)]/80 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                 <Play size={28} className="ml-1 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Action Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <button className="group flex items-center gap-8 text-[var(--text-secondary)]/40 hover:text-[var(--text-primary)] transition-all text-[11px] font-black uppercase tracking-[0.5em]">
            EXPLORE FULL CASE STUDIES
            <div className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-xl bg-[var(--bg-secondary)]/50 backdrop-blur-sm">
               <ExternalLink size={20} />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
