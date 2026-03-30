"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  PaperPlaneTilt,
  CheckCircle,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  staggerContainer,
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  springConfig,
} from "@/lib/animations";
import { COMPANY_INFO, PRODUCT_DETAILS } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's Talk"
          description="매장 규모와 로스팅 목표에 맞는 장비를 제안합니다. 편하게 연락주세요."
        />

        <section className="pb-32 md:pb-44">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20"
            >
              {/* Form */}
              <m.div variants={slideInLeftVariants}>
                {submitted ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springConfig}
                    className="rounded-[2rem] border border-border bg-surface p-10 md:p-14 text-center"
                  >
                    <CheckCircle
                      size={48}
                      weight="fill"
                      className="text-accent mx-auto"
                    />
                    <h3 className="mt-6 font-serif text-2xl md:text-3xl tracking-tighter">
                      Thank You
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed max-w-[35ch] mx-auto">
                      문의가 접수되었습니다. 영업일 기준 1일 이내에 담당자가
                      연락드리겠습니다.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          product: "",
                          message: "",
                        });
                      }}
                      className="mt-8 text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                    >
                      새 문의 작성
                    </button>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-widest text-muted uppercase">
                          이름 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 placeholder:text-muted/50"
                          placeholder="홍길동"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-widest text-muted uppercase">
                          회사/매장명
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 placeholder:text-muted/50"
                          placeholder="카페 이름"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-widest text-muted uppercase">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 placeholder:text-muted/50"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium tracking-widest text-muted uppercase">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 placeholder:text-muted/50"
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium tracking-widest text-muted uppercase">
                        관심 제품
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 text-muted appearance-none"
                      >
                        <option value="">선택해주세요</option>
                        {PRODUCT_DETAILS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.nameKr} ({p.nameEn})
                          </option>
                        ))}
                        <option value="package">패키지 (로스터기 + 제연기)</option>
                        <option value="other">기타 / 잘 모르겠음</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium tracking-widest text-muted uppercase">
                        문의 내용 *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 placeholder:text-muted/50 resize-none"
                        placeholder="매장 규모, 현재 사용 장비, 희망 사항 등을 자유롭게 적어주세요."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 active:scale-[0.98]"
                    >
                      <PaperPlaneTilt size={16} weight="fill" />
                      문의 보내기
                    </button>
                  </form>
                )}
              </m.div>

              {/* Contact Info Sidebar */}
              <m.div variants={slideInRightVariants}>
                <div className="space-y-10 md:sticky md:top-28">
                  {/* Map Placeholder */}
                  <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <div className="relative aspect-[4/3] w-full bg-surface flex items-center justify-center">
                        <div className="text-center">
                          <MapPin size={32} weight="light" className="text-muted mx-auto mb-3" />
                          <p className="text-sm font-medium">{COMPANY_INFO.address}</p>
                          <p className="mt-1 text-xs text-muted">안산 단원구 소재</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    {[
                      {
                        icon: Phone,
                        label: "전화",
                        value: COMPANY_INFO.phone,
                        sub: "평일 09:00 ~ 18:00",
                      },
                      {
                        icon: EnvelopeSimple,
                        label: "이메일",
                        value: COMPANY_INFO.email,
                        sub: "영업일 1일 이내 답변",
                      },
                      {
                        icon: MapPin,
                        label: "주소",
                        value: COMPANY_INFO.address,
                        sub: "방문 상담은 사전 예약 필수",
                      },
                      {
                        icon: Clock,
                        label: "영업시간",
                        value: "월 ~ 금 09:00 ~ 18:00",
                        sub: "주말/공휴일 휴무",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                      >
                        <item.icon
                          size={20}
                          weight="light"
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-xs text-muted tracking-widest uppercase mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium">{item.value}</p>
                          <p className="text-xs text-muted mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Guide */}
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-4">
                      상담 전 준비하시면 좋은 것들
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "매장 면적 (평수 또는 m\u00B2)",
                        "현재 사용 중인 장비 (있다면)",
                        "일일 예상 로스팅량",
                        "매장 전기 용량 (220V / 380V)",
                        "환기 덕트 설치 가능 여부",
                      ].map((text) => (
                        <li key={text} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={14}
                            weight="fill"
                            className="text-accent mt-0.5 shrink-0"
                          />
                          <span className="text-xs text-muted">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
