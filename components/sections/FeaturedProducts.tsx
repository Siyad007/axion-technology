"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Zap, Cpu, Settings, Download, Grid, Wrench, Shield, Sun, Palette, ZoomIn, Waves } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/seed-data";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "features", label: "Key Features", icon: Settings },
  { id: "specs",    label: "Technical Specs", icon: Cpu },
];

const ICON_MAP: Record<string, any> = {
  Grid, Zap, Wrench, Shield, Sun, Palette, ZoomIn, Waves
};

export function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("features");

  const product = PRODUCTS.find(p => p.is_featured) || PRODUCTS[0];
  const displaySpecs = product.specifications[0]?.items.slice(0, 4) || [];

  return (
    <section className="section bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500" ref={ref}>
      <div className="absolute inset-0 industrial-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />

      <div className="container-axion relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Flagship Systems</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[var(--text-primary)] text-5xl md:text-7xl font-black leading-none tracking-tighter"
            >
              The New Standard in <br />
              <span className="text-gradient">Visual Performance</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-2xl group"
            >
              <Image
                src={product.featured_image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 dark:brightness-110 dark:contrast-110 dark:saturate-[0.9] image-8k"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent" />
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                 <div className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">New Release</div>
                 <div className="px-4 py-1.5 bg-[var(--bg-secondary)]/80 backdrop-blur-md text-[var(--text-primary)] text-[10px] font-black uppercase tracking-widest rounded-full border border-[var(--border-color)] shadow-lg">Ultra-Fine Pitch</div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4 mt-8">
               {[1,2,3,4].map(i => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="aspect-square rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 overflow-hidden opacity-40 hover:opacity-100 hover:border-blue-500/50 transition-all cursor-pointer shadow-sm group/thumb"
                  >
                    <Image src={product.featured_image} alt="Product angle" width={200} height={200} className="object-cover h-full w-full group-hover/thumb:scale-110 transition-transform duration-500 image-8k" />
                 </motion.div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 leading-none tracking-tight">{product.name}</h3>
              <p className="text-[var(--text-secondary)]/60 text-lg mb-10 leading-relaxed font-medium">{product.short_description}</p>

              <div className="flex gap-1 p-1.5 bg-[var(--bg-secondary)]/50 rounded-2xl mb-10 border border-[var(--border-color)] backdrop-blur-md">
                {TABS.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all",
                        activeTab === tab.id ? "bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-xl border border-[var(--border-color)]" : "text-[var(--text-secondary)]/40 hover:text-[var(--text-secondary)]"
                      )}
                    >
                      <Icon size={16} className={activeTab === tab.id ? "text-blue-500" : ""} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[280px] mb-12">
                <AnimatePresence mode="wait">
                  {activeTab === "features" ? (
                    <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                      {product.features.map((feat, i) => {
                        const Icon = ICON_MAP[feat.icon || "Zap"] || Zap;
                        return (
                          <div key={i} className="flex gap-5 p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hover:border-blue-500/30 transition-all group/feat">
                             <div className="w-12 h-12 rounded-[1rem] bg-blue-500/10 flex items-center justify-center shrink-0 group-hover/feat:bg-blue-600 transition-colors duration-500 shadow-inner">
                                <Icon size={20} className="text-blue-500 group-hover/feat:text-white transition-colors" />
                             </div>
                             <div>
                                <p className="text-[var(--text-primary)] font-black text-sm mb-1 uppercase tracking-tight">{feat.title}</p>
                                <p className="text-[var(--text-secondary)]/60 text-xs leading-relaxed font-medium">{feat.description}</p>
                             </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div key="specs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-4">
                      {displaySpecs.map((spec, idx) => (
                        <div key={idx} className="flex flex-col p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] group/spec hover:border-blue-500/50 transition-all shadow-sm">
                           <span className="text-[10px] text-[var(--text-secondary)]/40 font-black uppercase tracking-[0.2em] mb-3 group-hover/spec:text-blue-500 transition-colors">{spec.label}</span>
                           <span className="text-base font-black text-[var(--text-primary)] tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-color)]">
                 <MagneticButton href={`/products/${CATEGORIES.find(c => c.id === product.category_id)?.slug || 'uncategorized'}/${product.slug}`} className="btn-primary px-12 py-5 text-[10px] uppercase tracking-[0.2em] shadow-2xl">
                   Full Specifications <ArrowRight size={18} className="ml-3" />
                 </MagneticButton>
                 <button className="flex items-center gap-3 px-8 py-5 rounded-full border border-[var(--border-color)] text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-blue-600 transition-all group">
                    <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" /> Datasheet
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
