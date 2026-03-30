"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { BLOG_POSTS } from "@/lib/constants";
import {
  staggerContainer,
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BlogNews() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const others = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section id="news" className="py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <SectionEyebrow>News</SectionEyebrow>
          <ScrollReveal>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl tracking-tighter leading-[0.95]">
              소식과 이야기
            </h2>
          </ScrollReveal>
        </div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 md:gap-12"
        >
          {featured && (
            <m.article variants={slideInLeftVariants} className="group">
              <a href="#" className="block">
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

                <div className="mt-5 px-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium tracking-widest text-accent uppercase">
                      {featured.category}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {featured.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-medium tracking-tight leading-snug group-hover:text-accent transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-[65ch]">
                    {featured.excerpt}
                  </p>
                </div>
              </a>
            </m.article>
          )}

          <m.div
            variants={slideInRightVariants}
            className="flex flex-col gap-8"
          >
            {others.map((post) => (
              <article key={post.id} className="group">
                <a href="#" className="block">
                  <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-surface p-1.5 md:p-2">
                    <div className="overflow-hidden rounded-[1.2rem]">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium tracking-widest text-accent uppercase">
                        {post.category}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-medium tracking-tight leading-snug group-hover:text-accent transition-colors flex items-start gap-1.5">
                      {post.title}
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 mt-0.5 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                      />
                    </h3>
                  </div>
                </a>
              </article>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
