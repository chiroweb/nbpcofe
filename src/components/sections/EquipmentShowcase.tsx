"use client";

import { useRef } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import {
  staggerContainer,
  fadeUpVariants,
  springConfig,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";

function TiltCard({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [6, -6]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-6, 6]),
    springConfig
  );

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const isLarge = product.span === "large";

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      className={`group ${isLarge ? "h-full flex flex-col" : ""}`}
    >
      <div
        className={`overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3 transition-shadow hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] ${
          isLarge ? "flex-1 flex flex-col" : ""
        }`}
      >
        <div
          className={`overflow-hidden rounded-[1.5rem] bg-background ${
            isLarge ? "flex-1 relative" : ""
          }`}
        >
          {isLarge ? (
            <img
              src={product.imageLarge}
              alt={product.nameKr}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="relative w-full overflow-hidden aspect-[4/3]">
              <img
                src={product.image}
                alt={product.nameKr}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium tracking-tight">
              {product.nameEn}
            </h3>
            <p className="text-xs text-muted mt-0.5">{product.nameKr}</p>
          </div>
          <span className="text-xs font-mono text-muted whitespace-nowrap">
            {product.spec}
          </span>
        </div>
        <p className="mt-2 text-xs text-muted leading-relaxed max-w-[50ch]">
          {product.description}
        </p>
      </div>
    </m.div>
  );
}

export default function EquipmentShowcase() {
  return (
    <section id="equipment" className="py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <SectionEyebrow>Equipment</SectionEyebrow>
          <ScrollReveal>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
              Built for
              <br />
              Precision
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base text-muted leading-relaxed max-w-[50ch]">
              로스팅의 모든 변수를 제어하는 장비. 설계부터 제작까지 자체 기술력으로
              완성합니다.
            </p>
          </ScrollReveal>
        </div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-2 gap-6 md:gap-8"
        >
          <m.div key={PRODUCTS[0].id} variants={fadeUpVariants} className="md:row-span-2">
            <TiltCard product={PRODUCTS[0]} />
          </m.div>
          <m.div key={PRODUCTS[1].id} variants={fadeUpVariants}>
            <TiltCard product={PRODUCTS[1]} />
          </m.div>
          <m.div key={PRODUCTS[2].id} variants={fadeUpVariants}>
            <TiltCard product={PRODUCTS[2]} />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
