"use client";

import { m } from "framer-motion";
import { springConfig } from "@/lib/animations";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleSecondLine?: string;
  description?: string;
  image?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleSecondLine,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <m.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, ...springConfig }}
          className="text-xs font-mono tracking-widest text-muted uppercase mb-6"
        >
          {eyebrow}
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, ...springConfig }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]"
        >
          {title}
          {titleSecondLine && (
            <>
              <br />
              {titleSecondLine}
            </>
          )}
        </m.h1>

        {description && (
          <m.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, ...springConfig }}
            className="mt-6 text-lg md:text-xl text-muted max-w-[55ch] leading-relaxed"
          >
            {description}
          </m.p>
        )}
      </div>
    </section>
  );
}
