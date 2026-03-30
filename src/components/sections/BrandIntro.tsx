"use client";

import { m } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function BrandIntro() {
  return (
    <section id="about" className="relative">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/brand-intro.png"
          alt="NBP Korea 작업 환경"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <m.div variants={fadeUpVariants}>
              <SectionEyebrow><span className="text-white/50">Since 2013</span></SectionEyebrow>
            </m.div>

            <m.h2
              variants={fadeUpVariants}
              className="mt-8 font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-white"
            >
              Crafted
              <br />
              with Intent
            </m.h2>

            <m.div
              variants={fadeUpVariants}
              className="mt-10 max-w-[600px] space-y-5 text-base text-white/70 leading-relaxed"
            >
              <p>
                NBP_COFFEE는 2013년 서울의 한 카페에서 시작했습니다. 커피를 직접 로스팅
                장비를 직접 사용하며 느낀 불편함에서 출발해, 현장의 요구를 반영한
                장비를 설계하고 제작합니다.
              </p>
              <p>
                로스터기 한 대에 들어가는 부품은 1,200개가 넘습니다. 그 하나하나를
                자체 공장에서 가공하고 조립합니다. 외주 없이 설계부터 납품까지
                전 과정을 직접 관리하기 때문에, 품질에 대한 약속을 지킬 수 있습니다.
              </p>
              <p>
                전국 300곳이 넘는 카페와 로스터리에 장비를 납품했습니다. 설치
                이후에도 정기 점검과 부품 교체를 통해 장비의 수명 전체를
                책임집니다.
              </p>
            </m.div>

            <m.div
              variants={fadeUpVariants}
              className="mt-14 flex items-center gap-12"
            >
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight text-white">
                  300
                  <span className="text-accent">+</span>
                </span>
                <p className="mt-1 text-xs text-white/40">납품 매장</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight text-white">
                  1,200
                  <span className="text-accent">+</span>
                </span>
                <p className="mt-1 text-xs text-white/40">개별 부품</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight text-white">
                  12
                  <span className="text-accent">yr</span>
                </span>
                <p className="mt-1 text-xs text-white/40">업력</p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
