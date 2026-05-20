"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";

interface HeroSectionProps {
  dictionary: {
    headline: string;
    subtext: string;
    cta: string;
    ctaSecondary: string;
  };
  lang: "id" | "en";
}

const floatingCardVariants = {
  initial: { opacity: 0, y: 40, rotateX: 10 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
} as const;

const headlineVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const subtextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
} as const;

const ctaVariants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
} as const;

export function HeroSection({ dictionary, lang }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-m-blue/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-m-red/5 blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col gap-8">
          {/* Racing stripe accent */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[2px] w-8 bg-m-blue" />
            <span className="text-xs font-semibold tracking-widest uppercase text-carbon-light">
              {lang === "id"
                ? "Studio Digital Kreatif"
                : "Digital Creative Studio"}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.03em] text-carbon"
            variants={headlineVariants}
            initial="initial"
            animate="animate"
          >
            {dictionary.headline}
          </motion.h1>

          <motion.p
            className="text-lg text-carbon-light leading-relaxed max-w-lg"
            variants={subtextVariants}
            initial="initial"
            animate="animate"
          >
            {dictionary.subtext}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={ctaVariants}
            initial="initial"
            animate="animate"
          >
            <Button href={`/${lang}#services`} variant="primary">
              {dictionary.cta}
            </Button>
            <Button href={`/${lang}#contact`} variant="secondary">
              {dictionary.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        {/* Right: Floating Card */}
        <motion.div
          className="relative flex items-center justify-center perspective-distant"
          variants={floatingCardVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glassmorphism Card */}
            <div className="absolute inset-0 bg-alpine-white/60 backdrop-blur-2xl border border-carbon/5 rounded-2xl shadow-2xl" />

            {/* Card content */}
            <div className="relative p-8 flex flex-col gap-6 h-full justify-between">
              {/* Header bar simulation */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-m-red/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                <div className="flex-1 h-6 rounded-md bg-carbon/5 ml-3" />
              </div>

              {/* Content blocks */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="h-8 w-3/4 rounded-md bg-carbon/8" />
                <div className="h-4 w-full rounded-md bg-carbon/5" />
                <div className="h-4 w-5/6 rounded-md bg-carbon/5" />
                <div className="mt-auto flex gap-3">
                  <div className="h-10 w-24 rounded-lg bg-m-blue/15 border border-m-blue/20" />
                  <div className="h-10 w-24 rounded-lg bg-carbon/5" />
                </div>
              </div>

              {/* Racing stripe accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-m-blue via-alpine-white to-m-red" />
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-alpine-white border border-carbon/5 rounded-xl px-4 py-3 shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold tracking-tight text-carbon">
                Lighthouse 100
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
