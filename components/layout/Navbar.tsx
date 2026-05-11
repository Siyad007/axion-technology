"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Globe, ArrowRight, Zap, ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/seed-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isLight = mounted && (resolvedTheme === "light" || theme === "light");
  const isHomePage = pathname === "/";
  
  // The Navbar should use white text if we are in dark mode, 
  // OR if we are on the homepage in light mode but haven't scrolled past the dark hero video.
  const useWhiteText = mounted && (resolvedTheme === "dark" || (isLight && isHomePage && !isScrolled));

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled 
            ? "bg-[var(--bg-primary)]/80 backdrop-blur-2xl border-b border-[var(--border-color)] py-3 shadow-sm" 
            : "bg-transparent py-8"
        )}
      >
        <div className="container-axion flex items-center justify-between">
          
          {/* Logo Section - Hard Refresh */}
          <a href="/" className="group flex items-center h-full">
            <Logo className="w-44 md:w-56" isScrolled={isScrolled} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group",
                  useWhiteText 
                    ? "text-white/80 hover:text-white" 
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {item.label}
                <motion.div 
                  className="absolute bottom-0 left-5 right-5 h-[2px] bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </Link>
            ))}
            
            {/* Divider */}
            <div className="w-px h-6 bg-[var(--border-color)] mx-4 opacity-20" />
            
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <button className={cn("flex items-center gap-2 text-[10px] font-black transition-colors tracking-[0.2em] px-4", useWhiteText ? "text-white/80 hover:text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]")}>
                 <Globe size={14} className="text-blue-500" />
                 GLOBAL / EN
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
             <MagneticButton href="/contact" className="btn-primary text-[10px] uppercase tracking-widest px-8 py-3.5 shadow-xl">
                Request Quote
             </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          >
            <div className={cn("w-6 h-[2px] transition-colors", useWhiteText ? "bg-white" : "bg-[var(--text-primary)]")} />
            <div className={cn("w-6 h-[2px] self-end transition-colors", useWhiteText ? "bg-white/80" : "bg-[var(--text-secondary)]")} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
               <Logo className="w-44" isScrolled={true} />
               <button onClick={() => setMobileOpen(false)} className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] shadow-sm hover:bg-blue-600 hover:text-white transition-all">
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex flex-col gap-8">
               {NAV_ITEMS.map((item, i) => (
                 <motion.div
                   key={item.href}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                 >
                   <Link 
                     href={item.href} 
                     onClick={() => setMobileOpen(false)}
                     className="text-5xl font-black text-[var(--text-secondary)]/30 hover:text-blue-600 transition-colors uppercase tracking-tighter"
                   >
                     {item.label}
                   </Link>
                 </motion.div>
               ))}
            </div>

            <div className="mt-auto space-y-6">
               <div className="flex items-center gap-4 border-t border-[var(--border-color)] pt-8">
                  <ThemeToggle />
                  <span className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-widest">Switch Appearance</span>
               </div>
               <MagneticButton href="/contact" className="btn-primary w-full py-6 text-xs uppercase tracking-[0.2em] shadow-2xl">
                 GET A QUOTE
               </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
