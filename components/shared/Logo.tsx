"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Intelligence: The logo must be white if the theme is dark, 
  // OR if it's the light theme but we are on the homepage and haven't scrolled yet (sitting on the dark hero video).
  const currentTheme = resolvedTheme || theme;
  const isHomePage = pathname === "/";
  const isLightText = mounted && (currentTheme === 'dark' || (currentTheme === 'light' && isHomePage && !isScrolled));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative flex flex-col items-start group ${className}`}
    >
      {/* The Main "AXION" Logo Image */}
      <div className={cn(
        "relative h-10 w-44 md:h-12 md:w-52 transition-all duration-700",
        !isLightText ? 'mix-blend-multiply' : ''
      )}>
        <Image
          src="/images/axion-logo.png"
          alt="Axion Technologies"
          fill
          sizes="(max-width: 768px) 176px, 208px"
          className={cn(
            "object-contain transition-all duration-700",
            isLightText 
              ? 'invert hue-rotate-180 brightness-110 contrast-125' 
              : 'brightness-100 contrast-110'
          )}
          priority
        />
      </div>

      {/* The "TECHNOLOGIES" Subtext */}
      <div className="flex items-center w-full mt-1.5 px-0.5">
        <div className={cn("h-[1px] flex-1 transition-colors duration-500", isLightText ? "bg-white/30" : "bg-[var(--text-primary)]/40")} />
        <span className={cn(
          "px-3 text-[8px] md:text-[9px] font-black uppercase tracking-[0.6em] whitespace-nowrap leading-none transition-colors duration-500",
          isLightText ? 'text-white/90 group-hover:text-blue-400' : 'text-[var(--text-primary)] group-hover:text-blue-600'
        )}>
          Technologies
        </span>
        <div className={cn("h-[1px] flex-1 transition-colors duration-500", isLightText ? "bg-white/30" : "bg-[var(--text-primary)]/40")} />
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute -inset-8 bg-blue-600/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
