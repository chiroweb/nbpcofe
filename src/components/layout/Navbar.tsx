"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants, snappySpring } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <m.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ...snappySpring }}
        className={`fixed top-6 left-1/2 z-40 -translate-x-1/2 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-border/50"
            : "bg-background/60 backdrop-blur-md border border-transparent"
        }`}
      >
        <div className="flex items-center gap-1">
          <a
            href="/"
            className="px-4 py-1.5 font-serif text-lg tracking-tight"
          >
            NBP
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted transition-colors hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block ml-2">
            <MagneticButton href="/contact" className="text-xs px-5 py-2">
              문의하기
            </MagneticButton>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-surface transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </m.nav>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-start justify-center px-8"
          >
            <m.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {NAV_LINKS.map((link) => (
                <m.a
                  key={link.href}
                  href={link.href}
                  variants={fadeUpVariants}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-4xl tracking-tight text-foreground"
                >
                  {link.label}
                </m.a>
              ))}
              <m.div variants={fadeUpVariants} className="mt-4">
                <MagneticButton
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                >
                  문의하기
                </MagneticButton>
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
