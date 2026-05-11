"use client";

import { Variants } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/* ─── Variant presets ─────────────────────────────────── */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 60px rgba(0,0,0,0.09)",
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

/* ─── Spring config presets ───────────────────────────── */
export const springBouncy = { type: "spring" as const, stiffness: 400, damping: 20 };
export const springGentle = { type: "spring" as const, stiffness: 150, damping: 20 };
export const springSlick  = { type: "spring" as const, stiffness: 200, damping: 30 };

/* ─── MagneticButton wrapper ─────────────────────────── */
export function useMagneticEffect(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) * strength;
    const y = (e.clientY - rect.top  - rect.height / 2) * strength;
    setPos({ x, y });
  }, [strength]);

  const handleMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  return { ref, pos, handleMouseMove, handleMouseLeave };
}
