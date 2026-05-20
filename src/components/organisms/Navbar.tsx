"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { LanguageSwitcher } from "@/components/atoms/LanguageSwitcher";

interface NavbarProps {
  lang: "id" | "en";
}

const navLinks = {
  id: {
    services: "Layanan",
    process: "Proses",
    contact: "Hubungi Kami",
    cta: "Mulai Proyek",
  },
  en: {
    services: "Services",
    process: "Process",
    contact: "Contact",
    cta: "Start a Project",
  },
};

export function Navbar({ lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const t = navLinks[lang];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-alpine-white/70 backdrop-blur-xl border-b border-carbon/5 shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href={`/${lang}`}
            className="text-xl font-extrabold tracking-[-0.03em] text-carbon"
          >
            deck
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-m-blue ml-0.5 mb-1" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={`/${lang}#process`}
              className="text-sm font-medium text-carbon-light hover:text-carbon transition-colors duration-300"
            >
              {t.process}
            </a>
            <a
              href={`/${lang}#contact`}
              className="text-sm font-medium text-carbon-light hover:text-carbon transition-colors duration-300"
            >
              {t.contact}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher lang={lang} />
            <Button href={`/${lang}#contact`} variant="primary">
              {t.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-carbon origin-center"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-carbon"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-carbon origin-center"
              animate={
                mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-alpine-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={
          mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <a
          href={`/${lang}#process`}
          className="text-2xl font-bold text-carbon"
          onClick={() => setMobileOpen(false)}
        >
          {t.process}
        </a>
        <a
          href={`/${lang}#contact`}
          className="text-2xl font-bold text-carbon"
          onClick={() => setMobileOpen(false)}
        >
          {t.contact}
        </a>
        <div className="flex flex-col items-center gap-4 mt-4">
          <LanguageSwitcher lang={lang} />
          <Button href={`/${lang}#contact`} variant="primary">
            {t.cta}
          </Button>
        </div>
      </motion.div>
    </>
  );
}
