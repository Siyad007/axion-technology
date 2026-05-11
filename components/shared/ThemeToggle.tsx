"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-white/5 border border-white/10 dark:bg-black/20 dark:border-white/5 p-1 transition-colors overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <motion.div
        animate={{ 
          x: theme === "dark" ? 28 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full bg-white dark:bg-blue-600 flex items-center justify-center shadow-lg relative z-10"
      >
        {theme === "dark" ? (
          <Moon size={10} className="text-white" fill="white" />
        ) : (
          <Sun size={10} className="text-orange-500" fill="currentColor" />
        )}
      </motion.div>
    </motion.button>
  );
}
