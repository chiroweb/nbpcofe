"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CalendarBlank } from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  staggerContainer,
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import { NEWS_ARTICLES } from "@/lib/constants";

type Category = "전체" | string;

export default function NewsPage() {
  const categories: Category[] = [
    "전체",
    ...Array.from(new Set(NEWS_ARTICLES.map((a) => a.category))),
  ];
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filtered =
    activeCategory === "전체"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory);

  const featured = NEWS_ARTICLES.find((a) => a.featured);
  const showFeatured = activeCategory === "전체" && featured;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="News & Insights"
          title="From the"
          titleSecondLine="Workshop"
          description="로스팅 기술, 장비 운용, 업계 소식까지. 현장의 지식을 기록합니다."
        />

        {/* Featured Article */}
        {showFeatured && featured && (
          <section className="pb-20 md:pb-32">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <m.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-8 md:gap-16 items-center"
              >
                <m.div variants={slideInLeftVariants} className="group">
                  <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-surface p-2 md:p-3">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </m.div>

                <m.div variants={slideInRightVariants}>
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                    Featured
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xs font-medium tracking-widest text-accent uppercase">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-muted">
                      <CalendarBlank size={12} />
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl md:text-4xl tracking-tighter leading-[1.05]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm text-muted leading-relaxed max-w-[45ch]">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-sm text-muted leading-relaxed max-w-[45ch]">
                    {featured.content.slice(0, 200)}...
                  </p>
                </m.div>
              </m.div>
            </div>
          </section>
        )}

        {/* Category Filter + Grid */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-1 mb-12 md:mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground hover:bg-background border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <m.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <m.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-10 md:gap-16"
                >
                  {/* Main Column */}
                  <div className="space-y-0 divide-y divide-border">
                    {filtered.map((article) => (
                      <m.article
                        key={article.id}
                        variants={fadeUpVariants}
                        className="group py-8 first:pt-0"
                      >
                        <a href="#" className="block">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-48 shrink-0">
                              <div className="overflow-hidden rounded-xl border border-border/50">
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                  <img
                                    src={article.image}
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-medium tracking-widest text-accent uppercase">
                                  {article.category}
                                </span>
                                <span className="font-mono text-xs text-muted">
                                  {article.date}
                                </span>
                              </div>
                              <h3 className="text-base font-medium tracking-tight leading-snug group-hover:text-accent transition-colors flex items-start gap-1.5">
                                {article.title}
                                <ArrowUpRight
                                  size={14}
                                  className="shrink-0 mt-1 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                                />
                              </h3>
                              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                                {article.excerpt}
                              </p>
                            </div>
                          </div>
                        </a>
                      </m.article>
                    ))}
                  </div>

                  {/* Sidebar */}
                  <div className="hidden md:block">
                    <div className="sticky top-28 space-y-8">
                      <div>
                        <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-5">
                          Categories
                        </h3>
                        <div className="space-y-2">
                          {categories.slice(1).map((cat) => {
                            const count = NEWS_ARTICLES.filter(
                              (a) => a.category === cat
                            ).length;
                            return (
                              <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="flex w-full items-center justify-between py-2 text-sm text-muted hover:text-foreground transition-colors"
                              >
                                <span>{cat}</span>
                                <span className="font-mono text-xs">{count}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h3 className="text-xs font-medium tracking-widest text-muted uppercase mb-4">
                          Newsletter
                        </h3>
                        <p className="text-xs text-muted leading-relaxed mb-4">
                          새 글이 발행되면 이메일로 알려드립니다.
                        </p>
                        <form
                          onSubmit={(e) => e.preventDefault()}
                          className="flex gap-2"
                        >
                          <input
                            type="email"
                            placeholder="이메일 주소"
                            className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-accent/50 transition-colors"
                          />
                          <button
                            type="submit"
                            className="rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-foreground/90 transition-colors"
                          >
                            구독
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </m.div>
              </m.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
