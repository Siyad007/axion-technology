"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function MagneticButton({
  children, className, strength = 0.35,
  onClick, href, target, type = "button", disabled, style: customStyle,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width  / 2) * strength);
    y.set((e.clientY - rect.top  - rect.height / 2) * strength);
  }, [x, y, strength]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  const props = {
    ref: ref as React.RefObject<HTMLButtonElement>,
    style: { x: sx, y: sy, ...customStyle },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.95 },
    className,
  };

  if (href) {
    return (
      <motion.a
        {...(props as unknown as React.ComponentProps<typeof motion.a>)}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...props} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </motion.button>
  );
}
