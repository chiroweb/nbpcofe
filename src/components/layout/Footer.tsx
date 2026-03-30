"use client";

import { m } from "framer-motion";
import {
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <m.div variants={fadeUpVariants} className="md:col-span-4">
            <span className="font-serif text-2xl italic tracking-tight">
              NBP
            </span>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted">
              {COMPANY_INFO.tagline}. 커피 장비의 설계부터 설치, 사후 관리까지
              원스톱으로 지원합니다.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-muted">
              <p className="font-mono">{COMPANY_INFO.phone}</p>
              <p>{COMPANY_INFO.email}</p>
              <p>{COMPANY_INFO.address}</p>
            </div>
          </m.div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <m.div
              key={category}
              variants={fadeUpVariants}
              className="md:col-span-2"
            >
              <h4 className="text-xs font-medium tracking-widest text-muted uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        <m.div
          variants={fadeUpVariants}
          className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border pt-8"
        >
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.nameKr}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              이용약관
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a
                href="#"
                className="text-muted transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                className="text-muted transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <YoutubeLogo size={18} />
              </a>
              <a
                href="#"
                className="text-muted transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </m.div>
      </m.div>
    </footer>
  );
}
