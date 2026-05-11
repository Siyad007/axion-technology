"use client";
import { motion } from "framer-motion";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function ContactPage() {
  return (
    <div className="bg-[var(--bg-primary)] pt-20 transition-colors duration-500">
      <div className="container-axion pt-24 text-center mb-10">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter"
         >
           Contact Our <span className="text-gradient">Engineering</span> Team
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="text-[var(--text-secondary)]/60 max-w-3xl mx-auto mb-10 text-xl font-medium leading-relaxed"
         >
           Connect with our global offices in Hong Kong, Shenzhen, and Dubai for 
           technical inquiries, project support, and product distribution.
         </motion.p>
      </div>
      <ContactCTA />
    </div>
  );
}
