"use client";

import { motion } from "framer-motion";

interface StepData {
  number: string;
  title: string;
  description: string;
  duration: string;
}

interface ProcessSectionProps {
  dictionary: {
    label: string;
    title: string;
    subtitle: string;
    steps: StepData[];
  };
}

const accentColors = [
  { dot: "bg-m-blue", line: "from-m-blue/40 to-m-blue/10", badge: "text-m-blue bg-m-blue/8 border-m-blue/15" },
  { dot: "bg-m-red", line: "from-m-red/40 to-m-red/10", badge: "text-m-red bg-m-red/8 border-m-red/15" },
  { dot: "bg-m-blue", line: "from-m-blue/40 to-m-blue/10", badge: "text-m-blue bg-m-blue/8 border-m-blue/15" },
  { dot: "bg-carbon/40", line: "from-carbon/20 to-carbon/5", badge: "text-carbon-light bg-carbon/5 border-carbon/10" },
];

function StepItem({
  step,
  index,
  isLast,
}: {
  step: StepData;
  index: number;
  isLast: boolean;
}) {
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      className="relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0">
        {/* Number circle */}
        <motion.div
          className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 border-carbon/10 bg-alpine-white z-10`}
          whileInView={{ scale: [0.8, 1.05, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          <span className="text-sm font-extrabold tracking-tight text-carbon">
            {step.number}
          </span>
          {/* Active dot */}
          <div
            className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full ${accent.dot} border-2 border-alpine-white`}
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <div
            className={`w-[2px] flex-1 min-h-[60px] bg-gradient-to-b ${accent.line}`}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-3 ${isLast ? "pb-0" : "pb-12"}`}>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-xl font-bold tracking-[-0.02em] text-carbon">
            {step.title}
          </h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border ${accent.badge}`}
          >
            {step.duration}
          </span>
        </div>

        <p className="text-sm text-carbon-light leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessSection({ dictionary }: ProcessSectionProps) {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[2px] w-8 bg-m-red" />
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

        {/* Timeline */}
        <div className="max-w-2xl ml-0 md:ml-16">
          {dictionary.steps.map((step, index) => (
            <StepItem
              key={step.number}
              step={step}
              index={index}
              isLast={index === dictionary.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
