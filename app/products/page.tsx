"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box, Zap, Volume2, Cable, Monitor, Search, Filter } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/seed-data";

export default function ProductsPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-20 transition-colors duration-500">
      <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container-axion relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Product Catalogue</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-[var(--text-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              Visual <span className="text-gradient">Engineering</span> <br /> Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[var(--text-secondary)]/60 text-lg max-w-sm leading-relaxed"
            >
              Explore our full range of professional LED, lighting, and AV infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap gap-3 mb-16 p-3 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] backdrop-blur-md shadow-sm">
           {CATEGORIES.map(cat => (
             <Link 
               key={cat.slug} 
               href={`#${cat.slug}`}
               className="px-6 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
             >
               {cat.name}
             </Link>
           ))}
        </div>

        {/* Section: By Category */}
        <div className="space-y-32">
          {CATEGORIES.map((cat, idx) => {
            const catProducts = PRODUCTS.filter(p => p.category_id === cat.id);
            return (
              <section key={cat.slug} id={cat.slug} className="scroll-mt-32">
                <div className="flex items-center justify-between mb-12">
                   <div className="max-w-xl">
                      <h2 className="text-4xl font-black text-[var(--text-primary)] mb-3 tracking-tight">{cat.name}</h2>
                      <p className="text-[var(--text-secondary)]/60 text-base leading-relaxed">{cat.description}</p>
                   </div>
                   <div className="hidden md:block h-px flex-1 bg-[var(--border-color)] mx-12 opacity-50" />
                   <span className="text-[10px] font-black text-[var(--text-secondary)]/30 uppercase tracking-[0.2em] whitespace-nowrap">
                     {catProducts.length} Systems Available
                   </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {catProducts.map((product, i) => (
                     <motion.div
                       key={product.slug}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                     >
                       <Link 
                         href={`/products/${cat.slug}/${product.slug}`}
                         className="group block relative rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 backdrop-blur-sm aspect-[4/5] shadow-xl hover:shadow-blue-500/10 transition-all duration-700"
                       >
                         <Image 
                           src={product.featured_image} 
                           alt={product.name} 
                           fill 
                           className="object-cover opacity-70 dark:opacity-60 group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-110" 
                           quality={100}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent" />
                         
                         <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                               <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{cat.name}</p>
                               <h3 className="text-2xl font-black text-[var(--text-primary)] mb-6 leading-tight">{product.name}</h3>
                               
                               <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                  <div className="flex items-center gap-3 text-[var(--text-secondary)] text-[10px] font-black uppercase tracking-[0.2em]">
                                     VIEW SPECIFICATIONS <ArrowRight size={16} className="text-blue-500" />
                                  </div>
                               </div>
                            </div>
                         </div>
                       </Link>
                     </motion.div>
                   ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
