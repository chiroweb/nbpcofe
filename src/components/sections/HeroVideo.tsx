"use client";

import { useRef } from "react";
import {
  m,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";
import { springConfig } from "@/lib/animations";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const springY = useSpring(textY, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      <m.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/hero-main.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </m.div>

      {/* 왼쪽 위 */}
      <m.div
        style={{ y: springY }}
        className="absolute top-32 left-6 md:left-10 z-10 max-w-[320px]"
      >
        <m.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, ...springConfig }}
          className="text-xs font-mono tracking-widest text-muted uppercase"
        >
          Since 2019
        </m.p>
        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, ...springConfig }}
          className="mt-3 text-lg md:text-xl font-serif tracking-tight leading-snug"
        >
          당신이 로스팅에만 집중할 수 있도록,
          <br />
          우리는 당신의 환경을 구축합니다.
        </m.p>
      </m.div>

      {/* 왼쪽 아래 */}
      <m.div
        style={{ y: springY }}
        className="absolute bottom-28 md:bottom-32 left-6 md:left-10 z-10 max-w-[360px]"
      >
        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, ...springConfig }}
          className="text-sm md:text-base text-muted leading-relaxed"
        >
          로스팅부터 제연까지, 커피 모든 과정을 함께합니다.
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, ...springConfig }}
          className="mt-6 flex items-center gap-4"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            장비 살펴보기
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            상담 문의
          </a>
        </m.div>
      </m.div>

      {/* 오른쪽 아래 */}
      <m.div
        style={{ y: springY }}
        className="absolute bottom-28 md:bottom-32 right-6 md:right-10 z-10 max-w-[280px] text-right"
      >
        <m.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, ...springConfig }}
          className="text-xs font-mono tracking-widest text-muted uppercase"
        >
          Coffee Equipment Manufacturer
        </m.p>
        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.9, ...springConfig }}
          className="mt-3 text-sm md:text-base text-muted leading-relaxed"
        >
          좋은 장비는 로스터를
          <br />
          한계이상으로 끌어올립니다.
        </m.p>
      </m.div>

      {/* 스크롤 화살표 */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} className="text-muted" />
        </m.div>
      </m.div>
    </section>
  );
}
