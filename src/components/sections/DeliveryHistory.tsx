"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { DELIVERY_HISTORY } from "@/lib/constants";
import {
  staggerFast,
  fadeUpVariants,
  expandVariants,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";

function HistoryRow({
  item,
  index,
}: {
  item: (typeof DELIVERY_HISTORY)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <m.div
      variants={fadeUpVariants}
      className="border-b border-border"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left transition-colors hover:bg-surface/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr] gap-2 md:gap-6 flex-1 items-center">
          <span className="text-sm font-medium tracking-tight">
            {item.client}
          </span>
          <span className="text-sm text-muted">{item.product}</span>
          <span className="font-mono text-xs text-muted hidden md:block">
            {item.date}
          </span>
          <span className="text-xs text-muted hidden md:block">
            {item.location}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-muted md:hidden">
            {item.date}
          </span>
          <m.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <CaretDown size={14} className="text-muted" />
          </m.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <m.div
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div className="pb-6 pl-0 md:pl-0">
              <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                <span className="text-xs text-muted md:hidden">
                  {item.location}
                </span>
                <p className="text-sm text-muted leading-relaxed max-w-[65ch]">
                  {item.detail}
                </p>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function DeliveryHistory() {
  return (
    <section id="clients" className="py-32 md:py-44 bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <SectionEyebrow>Clients</SectionEyebrow>
          <ScrollReveal>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl tracking-tighter leading-[0.95]">
              납품 실적
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base text-muted leading-relaxed max-w-[50ch]">
              전국 카페와 로스터리에 장비를 납품하고, 설치 이후에도 함께합니다.
            </p>
          </ScrollReveal>
        </div>

        <div className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr] gap-6 px-0 pb-3 border-b border-border">
          <span className="text-xs font-medium tracking-widest text-muted uppercase">
            Client
          </span>
          <span className="text-xs font-medium tracking-widest text-muted uppercase">
            Product
          </span>
          <span className="text-xs font-medium tracking-widest text-muted uppercase">
            Date
          </span>
          <span className="text-xs font-medium tracking-widest text-muted uppercase">
            Location
          </span>
        </div>

        <m.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {DELIVERY_HISTORY.map((item, i) => (
            <HistoryRow key={item.client} item={item} index={i} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
