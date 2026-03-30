"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  CaretDown,
  Phone,
  EnvelopeSimple,
  Clock,
  Wrench,
  ShieldCheck,
  Truck,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  staggerContainer,
  fadeUpVariants,
  expandVariants,
} from "@/lib/animations";
import { FAQ_DATA, COMPANY_INFO } from "@/lib/constants";

function FaqItem({
  item,
}: {
  item: { question: string; answer: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left group transition-colors hover:bg-surface/50"
      >
        <span className="text-sm font-medium tracking-tight pr-4">
          {item.question}
        </span>
        <m.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <CaretDown size={14} className="text-muted" />
        </m.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-muted leading-relaxed max-w-[65ch]">
              {item.answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SUPPORT_CHANNELS = [
  {
    icon: Phone,
    title: "전화 상담",
    description: "평일 09:00 ~ 18:00, 점심시간 12:00 ~ 13:00",
    action: COMPANY_INFO.phone,
    actionLabel: "전화 걸기",
    href: `tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: EnvelopeSimple,
    title: "이메일 문의",
    description: "영업일 기준 1일 이내 답변을 보장합니다.",
    action: COMPANY_INFO.email,
    actionLabel: "이메일 보내기",
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Clock,
    title: "긴급 수리",
    description: "수도권 24시간 / 지방 48시간 이내 기사 방문",
    action: "031-434-6567",
    actionLabel: "긴급 전화",
    href: "tel:031-434-6567",
  },
];

const SERVICE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "2년 무상 보증",
    description:
      "전 제품 2년 무상 보증. 제조 결함으로 인한 부품 교체 및 수리를 무상으로 진행합니다.",
  },
  {
    icon: Wrench,
    title: "연 2회 정기 점검",
    description:
      "드럼 상태, 온도 센서 교정, 가스 안전 점검, 촉매 필터 점검 등 18개 항목을 체크합니다.",
  },
  {
    icon: Truck,
    title: "소모품 배송",
    description:
      "필터, 센서, 베어링 등 주요 소모품을 온라인으로 주문할 수 있으며, 영업일 2일 이내 배송됩니다.",
  },
];

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState<string>(FAQ_DATA[0].category);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Customer Support"
          title="We're Here"
          titleSecondLine="to Help"
          description="장비의 수명 전체를 함께합니다. 설치부터 유지보수까지, 필요한 순간에 연결됩니다."
        />

        {/* Support Channels */}
        <section className="py-32 md:py-44 bg-surface">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <ScrollReveal>
              <SectionEyebrow>Contact Channels</SectionEyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Reach Out
              </h2>
            </ScrollReveal>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden"
            >
              {SUPPORT_CHANNELS.map((channel) => (
                <m.div
                  key={channel.title}
                  variants={fadeUpVariants}
                  className="bg-background p-8 md:p-10 flex flex-col"
                >
                  <channel.icon size={28} weight="light" className="text-accent" />
                  <h3 className="mt-5 text-lg font-medium tracking-tight">
                    {channel.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="font-mono text-sm mb-3">{channel.action}</p>
                    <a
                      href={channel.href}
                      className="inline-flex items-center gap-1.5 text-sm text-accent font-medium transition-colors hover:text-accent-dark"
                    >
                      {channel.actionLabel}
                      <span className="text-xs">&rarr;</span>
                    </a>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-32 md:py-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <ScrollReveal>
              <SectionEyebrow>After-Sales Service</SectionEyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Lifetime
                <br />
                Support
              </h2>
            </ScrollReveal>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
            >
              {SERVICE_ITEMS.map((item) => (
                <m.div key={item.title} variants={fadeUpVariants}>
                  <item.icon size={28} weight="light" className="text-accent" />
                  <h3 className="mt-5 text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-[40ch]">
                    {item.description}
                  </p>
                </m.div>
              ))}
            </m.div>

            {/* Maintenance Flow */}
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-24 md:mt-32"
            >
              <m.h3
                variants={fadeUpVariants}
                className="text-xs font-medium tracking-widest text-muted uppercase mb-10"
              >
                Maintenance Process
              </m.h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
                {[
                  { step: "01", title: "접수", desc: "전화 또는 온라인으로 점검/수리 접수" },
                  { step: "02", title: "진단", desc: "원격 진단 또는 현장 방문을 통한 상태 확인" },
                  { step: "03", title: "조치", desc: "부품 교체, 교정, 세정 등 필요 조치 수행" },
                  { step: "04", title: "확인", desc: "시운전 및 성능 확인 후 점검 보고서 발행" },
                ].map((item) => (
                  <m.div
                    key={item.step}
                    variants={fadeUpVariants}
                    className="bg-background p-6 md:p-8"
                  >
                    <span className="font-mono text-2xl text-accent/60">{item.step}</span>
                    <h4 className="mt-3 text-base font-medium">{item.title}</h4>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{item.desc}</p>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 md:py-44 bg-surface">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <ScrollReveal>
              <SectionEyebrow>FAQ</SectionEyebrow>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Frequently
                <br />
                Asked
              </h2>
            </ScrollReveal>

            {/* Category Tabs */}
            <div className="mt-12 flex gap-2 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-1">
              {FAQ_DATA.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`rounded-full px-5 py-2 text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat.category
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground hover:bg-background border border-border"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="mt-8 md:mt-12 max-w-[800px]">
              <AnimatePresence mode="wait">
                {FAQ_DATA.filter((cat) => cat.category === activeCategory).map(
                  (cat) => (
                    <m.div
                      key={cat.category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cat.items.map((item) => (
                        <FaqItem key={item.question} item={item} />
                      ))}
                    </m.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
            <ScrollReveal>
              <p className="text-base text-muted">
                원하시는 답변을 찾지 못하셨나요?
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-6">
                <MagneticButton href="/contact">직접 문의하기</MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
