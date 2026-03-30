"use client";

import { m } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { COMPANY_INFO } from "@/lib/constants";
import {
  staggerContainer,
  fadeUpVariants,
} from "@/lib/animations";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 overflow-hidden bg-foreground"
    >
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10"
      >
        <div className="max-w-[700px]">
          <m.p
            variants={fadeUpVariants}
            className="text-xs font-mono tracking-[0.15em] text-white/40 uppercase"
          >
            Contact
          </m.p>

          <m.h2
            variants={fadeUpVariants}
            className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] text-white"
          >
            함께 만들어
            <br />
            갑니다
          </m.h2>

          <m.p
            variants={fadeUpVariants}
            className="mt-6 text-base md:text-lg text-white/50 leading-relaxed max-w-[50ch]"
          >
            매장 규모와 로스팅 목표에 맞는 장비를 제안합니다. 공간 설계부터 설치,
            시운전, 교육까지 전 과정을 직접 지원합니다.
          </m.p>

          <m.div variants={fadeUpVariants} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-5 text-base font-medium text-white transition-all hover:bg-accent-dark"
            >
              상담 신청하기
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-5 text-base font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              이메일 문의
            </a>
          </m.div>

          <m.div
            variants={fadeUpVariants}
            className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16"
          >
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-2">
                Call
              </p>
              <p className="font-mono text-sm text-white/70">{COMPANY_INFO.phone}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-2">
                Email
              </p>
              <p className="font-mono text-sm text-white/70">{COMPANY_INFO.email}</p>
            </div>
            <div>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-2">
                Location
              </p>
              <p className="text-sm text-white/50">{COMPANY_INFO.address}</p>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
}
