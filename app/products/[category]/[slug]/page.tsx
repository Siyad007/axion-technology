"use client";
import { use, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, Download, CheckCircle, Package, 
  Settings, Image as ImageIcon, Send, MessageCircle, ChevronRight
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/seed-data";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { notFound } from "next/navigation";
import { cn, sendWhatsAppMessage } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { slug } = use(params);
  const [activeImage, setActiveImage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isLight = mounted && (resolvedTheme === "light" || theme === "light");
  
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return notFound();

  const category = CATEGORIES.find(c => c.id === product.category_id);

  if (!mounted) return null; // Prevent hydration mismatch on complex layouts

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen transition-colors duration-500 pt-32 pb-20">
      
      <div className="container-axion">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10">
          <a href="/products" className="hover:text-blue-500 transition-colors">Products</a>
          <span className="opacity-50">/</span>
          <a href={`/products/${category?.slug}`} className="hover:text-blue-500 transition-colors">{category?.name}</a>
          <span className="opacity-50">/</span>
          <span className="text-[var(--text-primary)]">{product.name}</span>
        </div>

        {/* ── 1. PRODUCT HERO SECTION ────────────────────────── */}
        <section className="grid lg:grid-cols-12 gap-16 items-start mb-40">
          
          {/* Left: Image Slider (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-2xl group"
            >
              <Image 
                src={product.gallery?.[activeImage] || product.featured_image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />
            </motion.div>
            
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "relative w-32 aspect-video rounded-xl overflow-hidden border transition-all shrink-0",
                      activeImage === idx ? "border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] ring-1 ring-blue-500/50" : "border-white/10 opacity-50 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt={`${product.name} view ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details (5 cols) */}
          <div className="lg:col-span-5 pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-6"
            >
              {category?.name}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter"
            >
              {product.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed font-medium"
            >
              {product.full_description || product.short_description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-color)]"
            >
               <MagneticButton href="#inquiry" strength={0.1} className="btn-primary px-10 py-5 text-xs font-black uppercase tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                 Request Quote
               </MagneticButton>
               <button 
                 onClick={() => sendWhatsAppMessage(`Hi, I would like to inquire about the ${product.name}.`)}
                 className="flex items-center gap-3 px-8 py-5 rounded-full border border-[var(--border-color)] hover:border-[#25D366] hover:text-[#25D366] bg-transparent font-black text-xs uppercase tracking-widest transition-colors"
               >
                 <MessageCircle size={18} />
                 WhatsApp
               </button>
            </motion.div>
          </div>
        </section>

        {/* ── 2. ENGINEERING HIGHLIGHTS ── */}
        <section className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              {product.category_id === "cat-1" ? "Precision Engineering" : 
               product.category_id === "cat-2" ? "Interactive Architecture" :
               product.category_id === "cat-3" ? "Optical Excellence" :
               product.category_id === "cat-4" ? "Acoustic Perfection" :
               "Industrial Reliability"}
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {product.category_id === "cat-1" ? "Advanced structural design and thermal management ensuring ultimate reliability." :
               product.category_id === "cat-2" ? "Sleek, tamper-proof chassis with commercial-grade components for 24/7 operation." :
               product.category_id === "cat-3" ? "High-precision optics, flawless color mixing, and whisper-quiet cooling." :
               product.category_id === "cat-4" ? "Tour-grade enclosures, phase-aligned transducers, and immense SPL output." :
               "Rugged construction, digital metering, and fail-safe protection systems."}
            </p>
          </div>

          <div className="bg-[var(--bg-secondary)]/50 rounded-[3rem] border border-[var(--border-color)] p-8 md:p-16 relative overflow-hidden">
             <div className="absolute inset-0 industrial-grid opacity-[0.03]" />
             
             <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
                {/* Image 1: Rear View Cutout */}
                <div className="relative aspect-[4/5] bg-black/50 rounded-3xl border border-white/10 overflow-hidden group">
                   <Image src={product.featured_image} alt={product.features[0]?.title || "Feature 1"} fill className="object-cover opacity-50 contrast-125 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" />
                   {/* Callout Ring */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm z-10 relative">1</div>
                      <div className="absolute inset-0 rounded-full border border-blue-500/50 animate-ping" />
                      <div className="absolute top-1/2 left-12 w-32 h-[1px] bg-blue-500/50" />
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                      <p className="text-sm font-bold text-white"><span className="text-blue-500 mr-2">①</span> {product.features[0]?.title}</p>
                      <p className="text-xs text-white/50 mt-1">{product.features[0]?.description}</p>
                   </div>
                </div>

                {/* Image 2: Side Profile (CSS Only - NO IMAGE) */}
                <div className="relative aspect-[4/5] bg-black/50 rounded-3xl border border-white/10 overflow-hidden group">
                   {/* The sleek aerodynamic pipe / side profile representation */}
                   <div className="absolute inset-y-10 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-full border border-white/20 z-0 group-hover:scale-y-105 transition-transform duration-1000" />
                   {/* Callout Ring */}
                   <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm z-10 relative">2</div>
                      <div className="absolute top-1/2 right-12 w-20 h-[1px] bg-blue-500/50" />
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 z-10">
                      <p className="text-sm font-bold text-white"><span className="text-blue-500 mr-2">②</span> {product.features[1]?.title}</p>
                      <p className="text-xs text-white/50 mt-1">{product.features[1]?.description}</p>
                   </div>
                </div>

                {/* Image 3: Frame Structure (Inverted & Zoomed) */}
                <div className="relative aspect-[4/5] bg-black/50 rounded-3xl border border-white/10 overflow-hidden group">
                   <Image src={product.featured_image} alt={product.features[2]?.title || "Feature 3"} fill className="object-cover scale-[1.3] opacity-30 invert mix-blend-screen group-hover:scale-[1.4] transition-transform duration-1000" />
                   {/* Callout Ring */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 rounded-full border border-blue-500 bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm z-10 relative">3</div>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                      <p className="text-sm font-bold text-white"><span className="text-blue-500 mr-2">③</span> {product.features[2]?.title}</p>
                      <p className="text-xs text-white/50 mt-1">{product.features[2]?.description}</p>
                   </div>
                </div>
             </div>

             {/* Thermal Imaging Block - Only for LED Displays */}
             {product.category_id === "cat-1" && (
               <div className="mt-12 bg-blue-900/20 border border-blue-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                  <div>
                     <p className="text-blue-400 font-black uppercase tracking-widest text-xs mb-2">Thermal Analytics</p>
                     <p className="text-xl font-black">Tested under 100% brightness</p>
                  </div>
                  <div className="flex gap-8">
                     <div className="text-center">
                       <div className="w-24 h-16 bg-gradient-to-br from-blue-600 via-green-500 to-yellow-500 rounded-lg mb-3 opacity-80" />
                       <p className="text-[10px] text-white/60 uppercase tracking-widest">Video Play</p>
                       <p className="text-lg font-black font-mono mt-1">Max: 38.6°C</p>
                     </div>
                     <div className="text-center">
                       <div className="w-24 h-16 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-lg mb-3 opacity-80" />
                       <p className="text-[10px] text-white/60 uppercase tracking-widest">Full White</p>
                       <p className="text-lg font-black font-mono mt-1">Max: 56.4°C</p>
                     </div>
                  </div>
               </div>
             )}
          </div>
        </section>

        {/* ── 3. PRODUCT PARAMETER TABLE ─────────────────────── */}
        <section className="mb-40">
           <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Technical Specifications</h2>
           
           <div className="bg-[var(--bg-secondary)]/30 rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-xl">
              <table className="w-full text-left border-collapse text-sm">
                 <tbody>
                    <tr className="border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
                       <td className="py-6 px-8 font-black uppercase tracking-widest text-[var(--text-secondary)] text-xs w-1/3 border-r border-[var(--border-color)]">Product Series</td>
                       <td className="py-6 px-8 font-black text-white text-lg border-l border-[var(--border-color)]">{product.name}</td>
                    </tr>
                    {product.specifications?.map((group, groupIdx) => (
                      group.items.map((item, itemIdx) => (
                        <tr key={`${groupIdx}-${itemIdx}`} className="border-b border-[var(--border-color)] hover:bg-blue-500/5 transition-colors">
                           <td className="py-6 px-8 font-bold text-[var(--text-secondary)] border-r border-[var(--border-color)]">{item.label}</td>
                           <td className="py-6 px-8 font-mono font-medium text-white border-l border-[var(--border-color)]">{item.value}</td>
                        </tr>
                      ))
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* ── 4. RESOURCES & APPLICATIONS ────────────────────── */}
        <section className="grid lg:grid-cols-2 gap-16 mb-40">
           {/* Downloads */}
           <div>
             <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
               <Download className="text-blue-500" /> Technical Resources
             </h3>
             <div className="space-y-4">
               {product.downloads?.map((doc, i) => (
                  <a key={i} href={doc.url} className="flex items-center justify-between p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] hover:border-blue-500/50 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Download size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-base">{doc.label}</p>
                        <p className="text-[10px] text-[var(--text-secondary)] font-black uppercase tracking-widest mt-1">{doc.type.toUpperCase()} • {doc.size}</p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-[var(--text-secondary)]/50 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
               {!product.downloads?.length && (
                 <p className="text-[var(--text-secondary)] p-6 border border-[var(--border-color)] border-dashed rounded-2xl text-center">No downloads available.</p>
               )}
             </div>
           </div>

           {/* Applications */}
           <div>
             <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
               <ImageIcon className="text-blue-500" /> Field Applications
             </h3>
             <div className="grid grid-cols-2 gap-4">
                {(product.applications?.length ? product.applications : [
                  { url: "/images/categories/led-displays.png", caption: "LED Display" },
                  { url: "/images/categories/lighting.png", caption: "Lighting" }
                ]).map((img: any, i: number) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)] group cursor-pointer">
                    <Image src={img.url || img} alt={img.caption || "Application"} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                ))}
             </div>
           </div>
        </section>

      </div>

      <section id="inquiry" className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 pt-24">
        <div className="container-axion max-w-4xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Request Product Details</h2>
             <p className="text-[var(--text-secondary)] text-lg">Contact our engineering team for pricing, availability, and technical integration support.</p>
          </div>

          <form className="space-y-6 bg-[var(--bg-primary)] p-8 md:p-16 rounded-[3rem] border border-[var(--border-color)] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />
             
             <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-3">Full Name</label>
                   <input type="text" className="w-full px-6 py-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] focus:border-blue-500 outline-none transition-colors text-sm" placeholder="Your name" />
                </div>
                <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-3">Email Address</label>
                   <input type="email" className="w-full px-6 py-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] focus:border-blue-500 outline-none transition-colors text-sm" placeholder="company@email.com" />
                </div>
             </div>
             <div className="relative z-10">
                <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-3">Inquiring About</label>
                <input type="text" readOnly value={product.name} className="w-full px-6 py-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-blue-400 font-bold text-sm cursor-not-allowed" />
             </div>
             <div className="relative z-10">
                <label className="block text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-3">Message / Requirements</label>
                <textarea rows={5} className="w-full px-6 py-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] focus:border-blue-500 outline-none transition-colors text-sm resize-none" placeholder="Please specify quantity, application, or custom requirements..."></textarea>
             </div>
             <MagneticButton className="w-full btn-primary justify-center py-6 shadow-[0_0_40px_rgba(37,99,235,0.2)] font-black uppercase tracking-[0.2em] text-xs relative z-10">
                <Send size={18} className="mr-3" /> Submit Technical Inquiry
             </MagneticButton>
          </form>
        </div>
      </section>

    </div>
  );
}
