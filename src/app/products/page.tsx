"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, CaretDown } from "@phosphor-icons/react";
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
import { PRODUCT_DETAILS } from "@/lib/constants";

type ProductType = (typeof PRODUCT_DETAILS)[number];
type ModelType = ProductType["models"][number];

function ModelAccordion({ model }: { model: ModelType }) {
  const [open, setOpen] = useState(false);
  const specs = "specs" in model ? (model as any).specs : null;

  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface/50 transition-colors"
      >
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-base font-medium">
              {model.name}
            </span>
            <span className="font-mono text-sm text-accent">
              {model.capacity}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-muted">{model.target}</p>
        </div>
        {specs && (
          <m.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <CaretDown size={16} className="text-muted" />
          </m.div>
        )}
      </button>

      <AnimatePresence>
        {open && specs && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50">
              <div className="pt-4 divide-y divide-border/50">
                {Object.entries(specs).map(([key, value]) => {
                  const labelMap: Record<string, string> = {
                    code: "제품 코드",
                    size: "크기 (W×D×H)",
                    weight: "무게",
                    power: "소비 전력",
                    burner: "버너 출력",
                    gas_lpg: "LPG 소비량",
                    gas_ng: "도시가스 소비량",
                    control: "제어 방식",
                    controller: "컨트롤러",
                    connector: "연료 연결",
                  };
                  return (
                    <div
                      key={key}
                      className="flex items-baseline justify-between py-2.5"
                    >
                      <span className="text-xs text-muted">
                        {labelMap[key] || key}
                      </span>
                      <span className="text-xs font-mono text-foreground/80">
                        {value as string}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SupremeSpecsCard({ product }: { product: ProductType }) {
  const [open, setOpen] = useState(false);
  const supremeSpecs = "supremeSpecs" in product ? (product as any).supremeSpecs : null;
  if (!supremeSpecs) return null;

  const labelMap: Record<string, string> = {
    capacities: "가용 용량",
    control: "제어 방식",
    heating: "열원",
    system: "가열 시스템",
    voltage: "전원",
    motors: "모터 수",
    roastTime: "로스팅 시간",
    drum: "드럼 타입",
    cooling: "쿨링 사이클론",
    safety: "안전장치",
    airflow: "에어플로우 제어",
    software: "소프트웨어 호환",
    display: "디스플레이",
    customization: "커스터마이징",
  };

  return (
    <div className="rounded-2xl border border-accent/20 bg-accent-light/30 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-accent-light/50 transition-colors"
      >
        <div>
          <span className="font-mono text-base font-medium">
            Supreme 시리즈
          </span>
          <p className="mt-1.5 text-xs text-muted">프리미엄 라인 · 1.8 / 3 / 6 / 12 / 18 / 24kg</p>
        </div>
        <m.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <CaretDown size={16} className="text-accent" />
        </m.div>
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-accent/10">
              <div className="pt-4 divide-y divide-accent/10">
                {Object.entries(supremeSpecs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between py-2.5"
                  >
                    <span className="text-xs text-muted">
                      {labelMap[key] || key}
                    </span>
                    <span className="text-xs font-mono text-foreground/80">
                      {value as string}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductSection({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const isReversed = index % 2 === 1;
  const compatibleBrands = "compatibleBrands" in product ? (product as any).compatibleBrands as string[] : null;

  return (
    <section
      id={product.id}
      className={`py-32 md:py-44 ${index % 2 === 1 ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header + Main Image */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-20 items-start ${
            isReversed ? "md:direction-rtl" : ""
          }`}
          style={isReversed ? { direction: "rtl" } : undefined}
        >
          <m.div
            variants={isReversed ? slideInRightVariants : slideInLeftVariants}
            style={{ direction: "ltr" }}
          >
            <SectionEyebrow>{product.nameEn}</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tighter leading-[0.95]">
              {product.nameKr}
            </h2>
            <p className="mt-2 text-lg text-muted italic">{product.tagline}</p>

            <p className="mt-8 text-base text-muted leading-relaxed max-w-[55ch]">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-10">
              <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-5">
                주요 특징
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-foreground/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatible Brands */}
            {compatibleBrands && (
              <div className="mt-8">
                <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-4">
                  호환 로스터기 브랜드
                </h3>
                <div className="flex flex-wrap gap-2">
                  {compatibleBrands.map((brand: string) => (
                    <span
                      key={brand}
                      className="rounded-full border border-border px-3 py-1 text-xs font-mono text-muted"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
                견적 문의
              </MagneticButton>
            </div>
          </m.div>

          <m.div
            variants={isReversed ? slideInLeftVariants : slideInRightVariants}
            style={{ direction: "ltr" }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-background flex items-center justify-center"
                  >
                    {(activeImage === 0 ? product.image : product.gallery[activeImage - 1]) ? (
                    <img
                      src={
                        activeImage === 0
                          ? product.image
                          : product.gallery[activeImage - 1]
                      }
                      alt={product.nameKr}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                    ) : (
                      <span className="text-xs text-muted">No Image</span>
                    )}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex gap-2">
              {[product.image, ...product.gallery].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    activeImage === i
                      ? "border-accent ring-1 ring-accent/30"
                      : "border-border/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-16 h-12 md:w-20 md:h-14 overflow-hidden bg-background flex items-center justify-center">
                    {img ? (
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                    ) : (
                      <span className="text-[10px] text-muted/40">—</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </m.div>
        </m.div>

        {/* Specs + Models */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20"
        >
          <m.div variants={fadeUpVariants}>
            <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-6">
              제품 사양
            </h3>
            <div className="divide-y divide-border">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="text-sm text-muted">{spec.label}</span>
                  <span className="text-sm font-medium font-mono text-right max-w-[60%]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </m.div>

          <m.div variants={fadeUpVariants}>
            {product.models.length > 0 && (
              <>
                <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-6">
                  모델 라인업
                </h3>
                <div className="space-y-3">
                  {"supremeSpecs" in product && (
                    <SupremeSpecsCard product={product} />
                  )}
                  {product.models.map((model) => (
                    <ModelAccordion key={model.name} model={model} />
                  ))}
                </div>
              </>
            )}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Products"
          title="Our"
          titleSecondLine="Equipment"
          description="로스팅의 모든 변수를 제어하는 장비. 설계부터 제작까지 자체 기술력으로 완성합니다."
        />

        {/* Product Navigation */}
        <section className="border-b border-border sticky top-0 z-20 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex gap-1 overflow-x-auto py-3 -mx-6 px-6 md:mx-0 md:px-0">
              {PRODUCT_DETAILS.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  className={`rounded-full px-5 py-2 text-sm whitespace-nowrap transition-colors ${
                    activeTab === index
                      ? "bg-foreground text-background font-medium"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {product.nameKr}
                </button>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <ProductSection product={PRODUCT_DETAILS[activeTab]} index={activeTab} />
          </m.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
