"use client";

import { m } from "framer-motion";
import {
  Factory,
  Wrench,
  Handshake,
  Medal,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import {
  staggerContainer,
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import { COMPANY_INFO } from "@/lib/constants";

const TIMELINE = [
  {
    year: "2006",
    title: "창업",
    description:
      "경기도 안산에서 엔비피코리아 설립. 조선·자동차·철강 등 산업 현장에 연소 설비와 환경 솔루션을 제공하며 기술력을 축적.",
  },
  {
    year: "2020",
    title: "제연기 개발",
    description:
      "도심 로스터리 카페의 연기 문제를 해결하기 위해 촉매 산화 방식의 제연기 NBP-SE200 개발 착수.",
  },
  {
    year: "2021",
    title: "30kg 라인 확장",
    description:
      "대형 로스터리 수요에 대응하여 NBP-30R 모델 출시. 자체 공장 가동 시작.",
  },
  {
    year: "2022",
    title: "100호 납품 달성",
    description:
      "전국 80개 이상의 매장에 장비 납품 달성. 정기 점검 서비스 체계를 도입하여 사후 관리 강화.",
  },
  {
    year: "2018",
    title: "서울카페쇼 첫 참가",
    description:
      "서울카페쇼에 첫 참가하여 업계에 NBP 브랜드를 알림. 견과류 머신 NBP-NB5 프로토타입 공개.",
  },
  {
    year: "2024",
    title: "100호 납품 돌파",
    description:
      "납품 매장 100곳 돌파. 부산·대전·제주 등 지방 설치 네트워크를 구축.",
  },
  {
    year: "2025",
    title: "120호 돌파 + 신제품",
    description:
      "납품 120곳 돌파. 대용량 제연기 NBP-SE400 출시, 땅콩버터 머신 정식 판매 개시.",
  },
];

const VALUES = [
  {
    icon: Factory,
    title: "자체 제조",
    description:
      "1,200개가 넘는 부품을 자체 공장에서 가공하고 조립합니다. 외주 없이 품질을 직접 관리합니다.",
  },
  {
    icon: Wrench,
    title: "현장 중심",
    description:
      "장비를 직접 사용하며 느낀 불편함에서 출발합니다. 현장의 목소리가 다음 제품의 설계도가 됩니다.",
  },
  {
    icon: Handshake,
    title: "끝까지 책임",
    description:
      "설치 이후에도 정기 점검과 부품 교체를 통해 장비의 수명 전체를 함께합니다.",
  },
  {
    icon: Medal,
    title: "검증된 결과",
    description:
      "전국 120곳이 넘는 카페와 로스터리가 NBP 장비로 운영 중입니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About NBP_COFFEE"
          title="We Build"
          titleSecondLine="What We Use"
          description="현장에서 시작된 장비. 직접 사용하며 느낀 불편함을 해결하는 것이 NBP_COFFEE의 시작이었습니다."
          image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/stock-about-1.jpg"
        />

        {/* Brand Story — Editorial Split */}
        <section className="py-32 md:py-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-center"
            >
              <m.div variants={slideInLeftVariants}>
                <SectionEyebrow>Our Story</SectionEyebrow>
                <h2 className="mt-8 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                  From the
                  <br />
                  Roasting Floor
                </h2>
                <div className="mt-8 space-y-5 text-base text-muted leading-relaxed max-w-[55ch]">
                  <p>
                    {COMPANY_INFO.established}년, 안산의 작은 공장에서 시작했습니다.
                    산업 현장에서 축적한 연소 기술을 바탕으로, 커피 로스팅 현장의
                    연기와 냄새 문제를 해결할 장비를 직접 만들기로 했습니다.
                  </p>
                  <p>
                    좁은 매장, 엄격한 환기 규제, 다품종 소량 로스팅에 대한 수요.
                    이 세 가지 현실적인 문제를 해결하기 위해 직접 장비를 설계하고
                    제작하기 시작했습니다.
                  </p>
                  <p>
                    지금은 로스터기, 제연기, 견과류 머신까지 라인업을 확장하며 전국
                    120곳 이상의 매장에 장비를 납품하고 있습니다. 하지만 변하지 않는
                    것이 있습니다 — 우리가 만드는 장비는 우리가 직접 사용하는
                    장비라는 원칙입니다.
                  </p>
                </div>
              </m.div>

              <m.div variants={slideInRightVariants}>
                <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <img
                        src="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/stock-about-2.jpg"
                        alt="NBP_COFFEE 공방"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* Values — 4 Cards */}
        <section className="py-32 md:py-44 bg-surface">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <ScrollReveal>
              <SectionEyebrow>Values</SectionEyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                What We
                <br />
                Stand For
              </h2>
            </ScrollReveal>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
            >
              {VALUES.map((value) => (
                <m.div
                  key={value.title}
                  variants={fadeUpVariants}
                  className="bg-surface p-8 md:p-12"
                >
                  <value.icon size={28} weight="light" className="text-accent" />
                  <h3 className="mt-5 text-lg font-medium tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-[40ch]">
                    {value.description}
                  </p>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 md:py-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <ScrollReveal>
              <SectionEyebrow>History</SectionEyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Our Journey
              </h2>
            </ScrollReveal>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-16 md:mt-24"
            >
              {TIMELINE.map((item, index) => (
                <m.div
                  key={item.year}
                  variants={fadeUpVariants}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 border-b border-border py-8 md:py-10"
                >
                  <span className="font-mono text-2xl md:text-3xl font-medium tracking-tight text-accent">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-w-[55ch]">
                      {item.description}
                    </p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-32 md:py-44 bg-surface">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              {[
                { number: "120+", label: "납품 매장" },
                { number: "1,200+", label: "개별 부품" },
                { number: "20", label: "년 업력" },
                { number: "98.7%", label: "고객 유지율" },
              ].map((stat) => (
                <m.div key={stat.label} variants={fadeUpVariants} className="text-center md:text-left">
                  <span className="font-mono text-4xl md:text-5xl font-medium tracking-tight">
                    {stat.number}
                  </span>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
