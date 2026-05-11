"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Zap } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 industrial-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-axion relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-12">
             <Zap size={40} className="text-blue-500" fill="currentColor" />
          </div>

          <h1 className="text-[12rem] font-black text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            404
          </h1>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10" style={{ fontFamily: 'var(--font-satoshi)' }}>
            System <span className="text-blue-500">Redirect</span> Required
          </h2>
          
          <p className="text-white/40 text-lg max-w-md mx-auto mb-12 relative z-10">
            The requested technical resource could not be located on our servers. 
            Please return to the main hub or contact our engineering support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <MagneticButton href="/" className="btn-primary px-10 py-5">
              <Home size={18} className="mr-2" />
              Return to Hub
            </MagneticButton>
            
            <Link 
              href="/products" 
              className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              View Products
            </Link>
          </div>
        </motion.div>

      </div>
      
      {/* Footer Meta */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
         <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.5em]">
           Error 404 • Axion Technology Global Infrastructure
         </p>
      </div>
    </div>
  );
}
