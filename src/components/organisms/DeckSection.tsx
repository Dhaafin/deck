"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { TagBadge } from "@/components/atoms/TagBadge";
import { Button } from "@/components/atoms/Button";

interface DeckCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: "blue" | "red" | "neutral";
}

interface DeckCardProps {
  card: DeckCardData;
  index: number;
  ctaLabel: string;
  lang: "id" | "en";
}

const accentBorder = {
  blue: "from-m-blue to-m-blue/40",
  red: "from-m-red to-m-red/40",
  neutral: "from-carbon/30 to-carbon/10",
};

const accentIcon = {
  blue: "bg-m-blue/10 text-m-blue",
  red: "bg-m-red/10 text-m-red",
  neutral: "bg-carbon/5 text-carbon-light",
};

const serviceIcons: Record<string, React.ReactNode> = {
  microsite: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
      />
    </svg>
  ),
  engine: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  ),
  audit: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
      />
    </svg>
  ),
};

function DeckCard({ card, index, ctaLabel, lang }: DeckCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="perspective-[1200px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
    >
      <motion.div
        className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-alpine-white border border-carbon/5 shadow-lg hover:shadow-2xl group cursor-pointer"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      >
        {/* Racing stripe top accent */}
        <div
          className={`h-[3px] w-full bg-gradient-to-r ${accentBorder[card.accent]}`}
        />

        <div className="flex flex-col flex-1 p-8 gap-6">
          {/* Icon + Title */}
          <div className="flex items-start gap-4">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${accentIcon[card.accent]}`}
            >
              {serviceIcons[card.id]}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-carbon">
                {card.title}
              </h3>
              <p className="text-sm font-medium text-carbon-light italic">
                &ldquo;{card.tagline}&rdquo;
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-carbon-light leading-relaxed flex-1">
            {card.description}
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2">
            {card.features.map((feature) => (
              <TagBadge
                key={feature}
                label={feature}
                variant={card.accent}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button
              href={`/${lang}#contact`}
              variant="secondary"
              className="w-full justify-center"
            >
              {ctaLabel}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface DeckSectionProps {
  dictionary: {
    label: string;
    title: string;
    subtitle: string;
    cards: DeckCardData[];
    cta: string;
  };
  lang: "id" | "en";
}

export function DeckSection({ dictionary, lang }: DeckSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-32 px-6 bg-cool-grey/50 overflow-hidden"
    >
      {/* Parallax background accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-m-blue/3 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-m-red/3 blur-3xl" />
      </motion.div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[2px] w-8 bg-m-blue" />
            <span className="text-xs font-semibold tracking-widest uppercase text-carbon-light">
              {dictionary.label}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-carbon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {dictionary.title}
          </motion.h2>

          <motion.p
            className="text-lg text-carbon-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {dictionary.subtitle}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dictionary.cards.map((card, index) => (
            <DeckCard
              key={card.id}
              card={card}
              index={index}
              ctaLabel={dictionary.cta}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
