"use client";

import { m } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { COMPANY_INFO } from "@/lib/constants";
import {
  staggerContainer,
  fadeUpVariants,
} from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 bg-accent-light/30" />

      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10"
      >
        <div className="max-w-[700px]">
          <m.h2
            variants={fadeUpVariants}
            className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95]"
          >
            Let&apos;s Build
            <br />
            Together
          </m.h2>

          <m.p
            variants={fadeUpVariants}
            className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-[50ch]"
          >
            매장 규모와 로스팅 목표에 맞는 장비를 제안합니다. 공간 설계부터 설치,
            시운전, 교육까지 전 과정을 직접 지원합니다.
          </m.p>

          <m.div variants={fadeUpVariants} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <MagneticButton
              href="/contact"
              icon={<ArrowRight size={16} weight="bold" className="text-background" />}
            >
              상담 신청하기
            </MagneticButton>
            <MagneticButton href={`mailto:${COMPANY_INFO.email}`} variant="outline">
              이메일 문의
            </MagneticButton>
          </m.div>

          <m.div
            variants={fadeUpVariants}
            className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-16"
          >
            <div>
              <p className="text-xs text-muted tracking-widest uppercase mb-2">
                Call
              </p>
              <p className="font-mono text-sm">{COMPANY_INFO.phone}</p>
            </div>
            <div>
              <p className="text-xs text-muted tracking-widest uppercase mb-2">
                Email
              </p>
              <p className="font-mono text-sm">{COMPANY_INFO.email}</p>
            </div>
            <div>
              <p className="text-xs text-muted tracking-widest uppercase mb-2">
                Location
              </p>
              <p className="text-sm text-muted">{COMPANY_INFO.address}</p>
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
}
