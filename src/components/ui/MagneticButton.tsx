"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { snappySpring } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  icon,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, snappySpring);
  const springY = useSpring(mouseY, snappySpring);

  const iconX = useTransform(springX, (v) => v * 1.5);
  const iconY = useTransform(springY, (v) => v * 1.5);

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.15);
    mouseY.set((e.clientY - centerY) * 0.15);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const baseStyles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-border text-foreground hover:bg-surface";

  const Tag = href ? "a" : "button";

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors ${baseStyles} ${className}`}
      >
        <span>{children}</span>
        {icon && (
          <m.span
            style={{ x: iconX, y: iconY }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/20"
          >
            {icon}
          </m.span>
        )}
      </Tag>
    </m.div>
  );
}
