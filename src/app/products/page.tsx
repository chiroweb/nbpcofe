"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
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

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return createPortal(
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <m.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors text-lg"
      >
        ✕
      </button>
    </m.div>,
    document.body
  );
}

const specLabelMap: Record<string, string> = {
  code: "코드", size: "크기", weight: "무게",
  power: "전력", burner: "버너", gas_lpg: "LPG",
  gas_ng: "도시가스", control: "제어",
  controller: "컨트롤러", connector: "연료",
};

function ModelLineup({ models }: { models: ProductType["models"] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [viewIdx, setViewIdx] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const openModel = openIdx !== null ? models[openIdx] : null;
  const images: string[] = openModel && "images" in openModel ? (openModel as any).images ?? [] : [];
  const specs = openModel && "specs" in openModel ? (openModel as any).specs : null;

  function handleToggle(idx: number) {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
      setViewIdx(0);
    }
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {openModel && images.length > 0 ? (
          /* ── Expanded: photo left | specs+list right ── */
          <m.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Left: photo gallery */}
            <div>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
                <div className="relative aspect-[4/3] w-full">
                  <AnimatePresence mode="wait">
                    <m.div
                      key={viewIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={images[viewIdx]}
                        alt={`${openModel.name} ${viewIdx + 1}`}
                        className="h-full w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                        loading="lazy"
                        onClick={() => setLightboxSrc(images[viewIdx])}
                      />
                    </m.div>
                  </AnimatePresence>
                </div>
              </div>
              {images.length > 1 && (
                <div className="mt-2 flex gap-1.5 flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setViewIdx(i)}
                      className={`overflow-hidden rounded-lg border transition-all ${
                        viewIdx === i
                          ? "border-accent ring-1 ring-accent/30"
                          : "border-border/50 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <div className="w-14 h-10 overflow-hidden bg-background flex items-center justify-center">
                        <img src={img} alt="" className="h-full w-full object-contain" loading="lazy" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: selected model info + full list */}
            <div>
              {/* Selected model header */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-base font-medium">{openModel.name}</span>
                    <span className="font-mono text-sm text-accent ml-2">{openModel.capacity}</span>
                  </div>
                  <button
                    onClick={() => setOpenIdx(null)}
                    className="text-xs text-muted hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border/50 hover:border-border"
                  >
                    닫기
                  </button>
                </div>
                <p className="text-xs text-muted mt-1">{openModel.target}</p>
              </div>

              {/* Specs */}
              {specs && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex items-baseline justify-between">
                      <span className="text-[11px] text-muted">{specLabelMap[key] || key}</span>
                      <span className="text-[11px] font-mono text-foreground/70">{value as string}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Compact model list */}
              <div className="border-t border-border pt-3">
                <p className="text-[10px] text-muted/60 uppercase tracking-widest mb-2">다른 모델</p>
                <div className="space-y-0.5">
                  {models.map((m, i) => {
                    const mImages: string[] = "images" in m ? (m as any).images ?? [] : [];
                    return (
                      <button
                        key={m.name}
                        onClick={() => handleToggle(i)}
                        className={`w-full flex items-center gap-2 py-2 px-2 rounded-lg text-left text-xs transition-colors ${
                          openIdx === i
                            ? "bg-accent/10 text-foreground"
                            : "text-muted hover:text-foreground hover:bg-surface/50"
                        }`}
                      >
                        <span className="font-mono font-medium">{m.name}</span>
                        <span className="font-mono text-accent/70">{m.capacity}</span>
                        {mImages.length > 0 && <span className="text-[9px] text-muted/50">📷</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </m.div>
        ) : (
          /* ── Collapsed: normal list ── */
          <m.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="divide-y divide-border"
          >
            {models.map((model, i) => {
              const mImages: string[] = "images" in model ? (model as any).images ?? [] : [];
              const mSpecs = "specs" in model ? (model as any).specs : null;
              const isOpen = openIdx === i;
              const hasContent = mSpecs || mImages.length > 0;
              return (
                <div key={model.name}>
                  <button
                    onClick={() => hasContent && handleToggle(i)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-sm font-medium whitespace-nowrap">{model.name}</span>
                      <span className="font-mono text-xs text-accent whitespace-nowrap">{model.capacity}</span>
                      {mImages.length > 0 && <span className="text-[10px] text-muted/60">📷 {mImages.length}</span>}
                      <span className="text-xs text-muted truncate hidden sm:inline">· {model.target}</span>
                    </div>
                    {hasContent && (
                      <m.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 ml-2">
                        <CaretDown size={14} className="text-muted group-hover:text-foreground transition-colors" />
                      </m.div>
                    )}
                  </button>
                  {/* Collapsed model with no images: show specs inline */}
                  <AnimatePresence>
                    {isOpen && mImages.length === 0 && mSpecs && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pl-2 grid grid-cols-2 gap-x-6 gap-y-1.5">
                          {Object.entries(mSpecs).map(([key, value]) => (
                            <div key={key} className="flex items-baseline justify-between">
                              <span className="text-[11px] text-muted">{specLabelMap[key] || key}</span>
                              <span className="text-[11px] font-mono text-foreground/70">{value as string}</span>
                            </div>
                          ))}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} alt="" onClose={() => setLightboxSrc(null)} />}
      </AnimatePresence>
    </div>
  );
}

function SupremeSpecsCard({ product }: { product: ProductType }) {
  const [open, setOpen] = useState(false);
  const [viewIdx, setViewIdx] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const supremeSpecs = "supremeSpecs" in product ? (product as any).supremeSpecs : null;
  const supremeImages: string[] = "supremeImages" in product ? (product as any).supremeImages ?? [] : [];
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
            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-accent/10 space-y-4">
              {/* Supreme inline gallery */}
              {supremeImages.length > 0 && (
                <div className="pt-4">
                  <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
                    <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <m.img
                          key={viewIdx}
                          src={supremeImages[viewIdx]}
                          alt={`Supreme ${viewIdx + 1}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="h-full w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                          onClick={() => setLightboxSrc(supremeImages[viewIdx])}
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                  {supremeImages.length > 1 && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {supremeImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setViewIdx(i)}
                          className={`overflow-hidden rounded-lg border transition-all ${
                            viewIdx === i ? "border-accent ring-1 ring-accent/30" : "border-border/50 opacity-50 hover:opacity-100"
                          }`}
                        >
                          <div className="w-14 h-10 overflow-hidden bg-background flex items-center justify-center">
                            <img src={img} alt="" className="h-full w-full object-contain" loading="lazy" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className={`divide-y divide-accent/10 ${supremeImages.length === 0 ? "pt-4" : ""}`}>
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
      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} alt="Supreme" onClose={() => setLightboxSrc(null)} />}
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
  const displayImages = [product.image, ...product.gallery.filter(Boolean)];

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
                    className="relative aspect-[4/3] w-full overflow-hidden bg-background"
                  >
                    {displayImages[activeImage] ? (
                    <img
                      src={displayImages[activeImage]}
                      alt={product.nameKr}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-xs text-muted">No Image</span>
                      </div>
                    )}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {displayImages.map((img, i) => (
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
                {"supremeSpecs" in product && (
                  <SupremeSpecsCard product={product} />
                )}
                <ModelLineup models={product.models} />
              </>
            )}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const initialTab = tabParam ? PRODUCT_DETAILS.findIndex((p) => p.id === tabParam) : 0;
  const [activeTab, setActiveTab] = useState(Math.max(initialTab, 0));

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

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
