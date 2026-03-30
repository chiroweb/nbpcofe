"use client";

import { m } from "framer-motion";
import {
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainer,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function BrandIntro() {
  return (
    <section id="about" className="py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-center"
        >
          <m.div variants={slideInLeftVariants}>
            <SectionEyebrow>Since 2019</SectionEyebrow>

            <h2 className="mt-8 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
              Crafted
              <br />
              with Intent
            </h2>

            <div className="mt-8 space-y-5 text-base text-muted leading-relaxed max-w-[55ch]">
              <p>
                NBP_COFFEE는 2019년 서울 성수동에서 시작했습니다. 커피 로스팅
                장비를 직접 사용하며 느낀 불편함에서 출발해, 현장의 요구를 반영한
                장비를 설계하고 제작합니다.
              </p>
              <p>
                로스터기 한 대에 들어가는 부품은 1,200개가 넘습니다. 그 하나하나를
                자체 공장에서 가공하고 조립합니다. 외주 없이 설계부터 납품까지
                전 과정을 직접 관리하기 때문에, 품질에 대한 약속을 지킬 수 있습니다.
              </p>
              <p>
                전국 120곳이 넘는 카페와 로스터리에 장비를 납품했습니다. 설치
                이후에도 정기 점검과 부품 교체를 통해 장비의 수명 전체를
                책임집니다.
              </p>
            </div>

            <m.div
              variants={fadeUpVariants}
              className="mt-12 flex items-center gap-12"
            >
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight">
                  120
                  <span className="text-accent">+</span>
                </span>
                <p className="mt-1 text-xs text-muted">납품 매장</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight">
                  1,200
                  <span className="text-accent">+</span>
                </span>
                <p className="mt-1 text-xs text-muted">개별 부품</p>
              </div>
              <div>
                <span className="font-mono text-3xl md:text-4xl font-medium tracking-tight">
                  6
                  <span className="text-accent">yr</span>
                </span>
                <p className="mt-1 text-xs text-muted">업력</p>
              </div>
            </m.div>
          </m.div>

          <m.div variants={slideInRightVariants} className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/nbp-brand/800/1067"
                    alt="NBP_COFFEE 공장"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
