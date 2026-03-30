"use client";

import { m } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <m.span
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-widest text-muted uppercase ${className}`}
    >
      {children}
    </m.span>
  );
}
