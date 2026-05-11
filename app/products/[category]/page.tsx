"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/seed-data";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = use(params);
  
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  if (!category) return notFound();

  const categoryProducts = PRODUCTS.filter(p => p.category_id === category.id);

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen pt-32 pb-20 transition-colors duration-500">
      <div className="absolute inset-0 industrial-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container-axion relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]/50 mb-10">
          <Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{category.name}</span>
        </div>

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Category Overview</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-[var(--text-primary)] leading-tight tracking-tighter"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[var(--text-secondary)]/80 text-lg max-w-xl leading-relaxed font-medium"
            >
              {category.description}
            </motion.p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {categoryProducts.length === 0 ? (
             <div className="col-span-full py-20 text-center border border-[var(--border-color)] rounded-3xl border-dashed">
               <p className="text-[var(--text-secondary)]/60 font-bold uppercase tracking-widest">No products currently listed in this category.</p>
             </div>
           ) : (
             categoryProducts.map((product, i) => (
               <motion.div
                 key={product.slug}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
               >
                 <Link 
                   href={`/products/${category.slug}/${product.slug}`}
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
                         <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{category.name}</p>
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
             ))
           )}
        </div>

      </div>
    </div>
  );
}
