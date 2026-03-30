"use client";

import { useRef } from "react";
import {
  m,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { springConfig } from "@/lib/animations";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const springY = useSpring(textY, springConfig);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <m.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/KakaoTalk_20251110_233402530.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </m.div>

      {/* Main content */}
      <m.div
        style={{ y: springY }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full"
      >
        <div className="flex flex-col items-start">
          {/* Sub-headline — bigger, with divider */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...springConfig }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-white/40" />
            <p className="text-sm md:text-base font-mono tracking-[0.15em] text-white/70 uppercase">
              NBP Korea
            </p>
          </m.div>

          {/* Headline */}
          <m.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, ...springConfig }}
            className="mt-6 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-[0.85] text-white"
          >
            로스팅의
            <br />
            모든 환경을
            <br />
            설계합니다
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, ...springConfig }}
            className="mt-8 text-sm md:text-base text-white/50 leading-relaxed max-w-[40ch]"
          >
            로스터기, 제연기, 넛버터 머신까지.
            <br />
            설계부터 설치, 그 이후까지 책임집니다.
          </m.p>

          {/* CTA — 상담 문의 = Primary */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, ...springConfig }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-all hover:bg-accent-dark"
            >
              상담 문의
              <ArrowRight size={14} weight="bold" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              장비 살펴보기
            </a>
          </m.div>
        </div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/40" />
        </m.div>
      </m.div>
    </section>
  );
}
