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

      {/* Center: Main headline */}
      <m.div
        style={{ y: springY }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 w-full"
      >
        <div className="flex flex-col items-start">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...springConfig }}
            className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase"
          >
            NBP Korea · Coffee Equipment
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, ...springConfig }}
            className="mt-6 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-[0.85] text-white"
          >
            로스팅의
            <br />
            <span className="italic font-light">모든 환경</span>을
            <br />
            설계합니다
          </m.h1>

          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            className="mt-8 h-px w-32 md:w-48 bg-white/30 origin-left"
          />

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, ...springConfig }}
            className="mt-6 text-sm md:text-base text-white/60 leading-relaxed max-w-[40ch]"
          >
            로스터기, 제연기, 넛버터 머신까지.
            <br />
            설계부터 설치, 그 이후까지 책임집니다.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, ...springConfig }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              장비 살펴보기
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              상담 문의
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
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} className="text-white/40" />
        </m.div>
      </m.div>
    </section>
  );
}
