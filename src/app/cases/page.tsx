"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { MapPin, Quotes, ArrowRight } from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  staggerContainer,
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  springConfig,
} from "@/lib/animations";
import { INSTALLATION_CASES } from "@/lib/constants";

function CaseStudy({
  caseData,
  index,
}: {
  caseData: (typeof INSTALLATION_CASES)[number];
  index: number;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const isReversed = index % 2 === 1;

  return (
    <section className={`py-32 md:py-44 ${index % 2 === 1 ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <m.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-widest text-muted uppercase">
              Case {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-muted">{caseData.date}</span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <MapPin size={12} weight="fill" />
              {caseData.location}
            </span>
          </m.div>

          <m.h2
            variants={fadeUpVariants}
            className="font-serif text-3xl md:text-5xl tracking-tighter leading-[0.95]"
          >
            {caseData.client}
          </m.h2>
          <m.p variants={fadeUpVariants} className="mt-3 text-base text-muted">
            {caseData.product}
          </m.p>
        </m.div>

        {/* Image Gallery + Content */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-start ${
            isReversed ? "" : ""
          }`}
          style={isReversed ? { direction: "rtl" } : undefined}
        >
          {/* Gallery */}
          <m.div variants={isReversed ? slideInRightVariants : slideInLeftVariants} style={{ direction: "ltr" }}>
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] w-full overflow-hidden"
                  >
                    <img
                      src={caseData.images[activeImage]}
                      alt={`${caseData.client} 설치 현장`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {caseData.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    activeImage === i
                      ? "border-accent ring-1 ring-accent/30"
                      : "border-border/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-20 h-14 overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </button>
              ))}
            </div>
          </m.div>

          {/* Content */}
          <m.div variants={isReversed ? slideInLeftVariants : slideInRightVariants} style={{ direction: "ltr" }}>
            <p className="text-base text-foreground leading-relaxed max-w-[55ch]">
              {caseData.summary}
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-3">
                  Challenge
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-[50ch]">
                  {caseData.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-3">
                  Solution
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-[50ch]">
                  {caseData.solution}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-3">
                  Result
                </h3>
                <p className="text-sm text-foreground leading-relaxed max-w-[50ch] font-medium">
                  {caseData.result}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 border-l-2 border-accent/30 pl-6">
              <Quotes size={24} weight="fill" className="text-accent/40 mb-3" />
              <blockquote className="text-sm text-foreground leading-relaxed italic max-w-[45ch]">
                &ldquo;{caseData.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="text-sm font-medium">{caseData.testimonial.name}</p>
                <p className="text-xs text-muted">{caseData.testimonial.role}</p>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Installation Cases"
          title="Stories from"
          titleSecondLine="the Field"
          description="전국 각지의 카페와 로스터리에서 NBP 장비가 어떻게 자리잡았는지, 현장의 이야기를 전합니다."
          image="https://picsum.photos/seed/cases-hero/1920/1080"
        />

        {/* Stats Bar */}
        <section className="border-y border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border"
            >
              {[
                { number: "120+", label: "총 설치 건수" },
                { number: "14", label: "광역시/도 커버리지" },
                { number: "0", label: "6개월 내 민원 발생" },
                { number: "98.7%", label: "고객 재계약률" },
              ].map((stat) => (
                <m.div
                  key={stat.label}
                  variants={fadeUpVariants}
                  className="py-8 md:py-10 px-4 md:px-8 text-center"
                >
                  <span className="font-mono text-2xl md:text-3xl font-medium tracking-tight">
                    {stat.number}
                  </span>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {INSTALLATION_CASES.map((caseData, index) => (
          <CaseStudy key={caseData.id} caseData={caseData} index={index} />
        ))}

        {/* CTA */}
        <section className="py-32 md:py-44 bg-accent-light/30">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Your Story,
                <br />
                Next
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base text-muted max-w-[45ch] mx-auto leading-relaxed">
                다음 설치 사례의 주인공이 되어주세요. 매장 환경에 맞는 최적의 장비
                구성을 제안합니다.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10">
                <MagneticButton
                  href="/contact"
                  icon={
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="text-background"
                    />
                  }
                >
                  상담 신청하기
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
