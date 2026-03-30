"use client";

import { useState, useMemo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { MapPin, Quotes, ArrowRight, List, GridFour } from "@phosphor-icons/react";
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
} from "@/lib/animations";
import { INSTALLATION_CASES } from "@/lib/constants";

type CaseType = (typeof INSTALLATION_CASES)[number];

/* ── Filter helpers ── */
function getRegion(location: string) {
  if (location.includes("서울")) return "서울";
  if (location.includes("부산")) return "부산";
  if (location.includes("대전")) return "대전";
  if (location.includes("제주")) return "제주";
  if (location.includes("광주")) return "광주";
  if (location.includes("대구")) return "대구";
  if (location.includes("인천")) return "인천";
  return location.split(" ")[0];
}

function getProductCategory(product: string) {
  if (product.includes("로스터") && product.includes("제연")) return "패키지";
  if (product.includes("로스터")) return "로스터기";
  if (product.includes("제연")) return "제연기";
  if (product.includes("넛버터") || product.includes("땅콩")) return "넛버터 머신";
  return "기타";
}

/* ── List View Card ── */
function CaseCard({ caseData, onClick }: { caseData: CaseType; onClick: () => void }) {
  return (
    <m.button
      variants={fadeUpVariants}
      onClick={onClick}
      className="text-left group w-full"
    >
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-surface p-2 transition-shadow hover:shadow-[0_12px_32px_-10px_rgba(0,0,0,0.06)]">
        <div className="overflow-hidden rounded-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <img
              src={caseData.images[0]}
              alt={caseData.client}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono text-accent uppercase tracking-wider">{caseData.date}</span>
            <span className="flex items-center gap-0.5 text-[10px] text-muted">
              <MapPin size={10} weight="fill" />
              {caseData.location}
            </span>
          </div>
          <h3 className="text-base font-medium tracking-tight">{caseData.client}</h3>
          <p className="mt-1 text-xs text-muted line-clamp-2">{caseData.product}</p>
          <p className="mt-2 text-xs text-muted/70 line-clamp-2">{caseData.summary}</p>
        </div>
      </div>
    </m.button>
  );
}

/* ── Detail View (existing style) ── */
function CaseStudy({
  caseData,
  index,
}: {
  caseData: CaseType;
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
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-start"
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

/* ── Main Page ── */
export default function CasesPage() {
  const [viewMode, setViewMode] = useState<"detail" | "list">("detail");
  const [filterType, setFilterType] = useState<"all" | "region" | "product">("all");
  const [activeFilter, setActiveFilter] = useState<string>("전체");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const regions = useMemo(() => {
    const set = new Set(INSTALLATION_CASES.map((c) => getRegion(c.location)));
    return ["전체", ...Array.from(set)];
  }, []);

  const products = useMemo(() => {
    const set = new Set(INSTALLATION_CASES.map((c) => getProductCategory(c.product)));
    return ["전체", ...Array.from(set)];
  }, []);

  const filterOptions = filterType === "region" ? regions : filterType === "product" ? products : ["전체"];

  const filtered = useMemo(() => {
    if (activeFilter === "전체") return INSTALLATION_CASES;
    return INSTALLATION_CASES.filter((c) => {
      if (filterType === "region") return getRegion(c.location) === activeFilter;
      if (filterType === "product") return getProductCategory(c.product) === activeFilter;
      return true;
    });
  }, [activeFilter, filterType]);

  function handleFilterTypeChange(type: "all" | "region" | "product") {
    setFilterType(type);
    setActiveFilter("전체");
    setSelectedCase(null);
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Installation Cases"
          title="Stories from"
          titleSecondLine="the Field"
          description="전국 각지의 카페와 로스터리에서 NBP 장비가 어떻게 자리잡았는지, 현장의 이야기를 전합니다."
          image="https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/stock-install-1.jpg"
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

        {/* Toolbar: View Toggle + Filters */}
        <section className="border-b border-border sticky top-0 z-20 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex items-center justify-between py-3 gap-4">
              {/* Left: Filter type buttons */}
              <div className="flex items-center gap-1 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                {([
                  { key: "all", label: "전체" },
                  { key: "region", label: "지역별" },
                  { key: "product", label: "제품별" },
                ] as const).map((f) => (
                  <button
                    key={f.key}
                    onClick={() => handleFilterTypeChange(f.key)}
                    className={`rounded-full px-4 py-1.5 text-sm whitespace-nowrap transition-colors ${
                      filterType === f.key
                        ? "bg-foreground text-background font-medium"
                        : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}

                {/* Sub-filters */}
                {filterType !== "all" && (
                  <>
                    <div className="w-px h-5 bg-border mx-2 shrink-0" />
                    {filterOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setActiveFilter(opt); setSelectedCase(null); }}
                        className={`rounded-full px-3 py-1.5 text-xs whitespace-nowrap transition-colors ${
                          activeFilter === opt
                            ? "bg-accent/10 text-accent font-medium border border-accent/20"
                            : "text-muted hover:text-foreground hover:bg-surface border border-transparent"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </>
                )}
              </div>

              {/* Right: View mode toggle */}
              <div className="flex items-center gap-1 shrink-0 border border-border rounded-full p-0.5">
                <button
                  onClick={() => { setViewMode("detail"); setSelectedCase(null); }}
                  className={`p-1.5 rounded-full transition-colors ${
                    viewMode === "detail" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                  title="상세 보기"
                >
                  <GridFour size={16} weight={viewMode === "detail" ? "fill" : "regular"} />
                </button>
                <button
                  onClick={() => { setViewMode("list"); setSelectedCase(null); }}
                  className={`p-1.5 rounded-full transition-colors ${
                    viewMode === "list" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                  title="목록 보기"
                >
                  <List size={16} weight={viewMode === "list" ? "bold" : "regular"} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <m.div
              key="list"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {selectedCase !== null ? (
                /* Selected case detail view from list */
                <div>
                  <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8">
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <ArrowRight size={12} className="rotate-180" />
                      목록으로 돌아가기
                    </button>
                  </div>
                  <CaseStudy caseData={filtered[selectedCase]} index={0} />
                </div>
              ) : (
                /* Card grid */
                <section className="py-16 md:py-24">
                  <div className="mx-auto max-w-[1400px] px-6 md:px-10">
                    {filtered.length === 0 ? (
                      <p className="text-center text-muted py-20">해당 조건의 설치 사례가 없습니다.</p>
                    ) : (
                      <m.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {filtered.map((c, i) => (
                          <CaseCard key={c.id} caseData={c} onClick={() => setSelectedCase(i)} />
                        ))}
                      </m.div>
                    )}
                  </div>
                </section>
              )}
            </m.div>
          ) : (
            <m.div
              key="detail"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <p className="text-center text-muted py-20">해당 조건의 설치 사례가 없습니다.</p>
              ) : (
                filtered.map((caseData, index) => (
                  <CaseStudy key={caseData.id} caseData={caseData} index={index} />
                ))
              )}
            </m.div>
          )}
        </AnimatePresence>

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
