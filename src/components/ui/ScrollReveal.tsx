"use client";

import { m, type Variants } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  variants = fadeUpVariants,
  className,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <m.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}
