"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES_COL_1 = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
];

const IMAGES_COL_2 = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
];

const IMAGES_COL_3 = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
];

function ScrollingColumn({ images, duration, reverse = false }: { images: string[]; duration: number; reverse?: boolean }) {
  // Use exactly 2 sets for perfect seamless marquee loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex flex-col gap-4 h-full">
      <motion.div
        animate={{ 
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] 
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((img, i) => (
          <div key={i} className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl group">
            <Image 
              src={img} 
              alt="Axion Industry" 
              fill 
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
              unoptimized // Faster loading for marquee
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AutoScrollingGallery() {
  return (
    <section className="bg-[#050505] text-white py-32 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(37,99,235,0.08),_transparent_50%)]" />
      
      <div className="container-axion relative z-10 max-w-[1700px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ── Left: Cinematic Staggered Image Wall (7 cols) ── */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[950px] overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5 shadow-2xl">
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent z-20" />
             <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-20" />
             
             <div className="grid grid-cols-3 gap-4 h-full p-4">
                <ScrollingColumn images={IMAGES_COL_1} duration={45} />
                <ScrollingColumn images={IMAGES_COL_2} duration={35} reverse={true} />
                <ScrollingColumn images={IMAGES_COL_3} duration={55} />
             </div>
          </div>

          {/* ── Right: Sticky Narrative (5 cols) ─────────────── */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
               <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] block"
               >
                 Global Tech Authority
               </motion.span>
               <motion.h2 
                 initial={{ opacity: 0, x: 40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="text-6xl md:text-[7.5rem] font-black text-white leading-[0.8] tracking-tighter"
               >
                 Axion <br/> <span className="text-stripe">Visuals</span>
               </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-white/70 text-lg md:text-xl leading-relaxed font-medium"
            >
              <p>
                Our journey began with a single vision: that light and display technology should redefine how we experience the world. Today, Axion delivers that future.
              </p>
              <p>
                From massive arena displays to precision control room systems, our engineering team provides intelligent, consistent, and scalable visual solutions for any environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-12 border-t border-white/10 flex gap-16"
            >
               <div>
                  <p className="text-4xl font-black text-white">20+</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold">Years Experience</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-white">500+</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold">Global Projects</p>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
