"use client";
import { useEffect, useRef } from "react";
import { useInView, useCounter } from "@/hooks/useAnimations";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target, suffix = "", prefix = "", duration = 2200, className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.4);
  const count = useCounter(target, duration, inView);

  return (
    <span
      ref={ref as unknown as React.RefCallback<HTMLSpanElement>}
      className={cn("tabular-nums", className)}
    >
      {prefix}{count}{suffix}
    </span>
  );
}
