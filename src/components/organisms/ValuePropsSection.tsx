"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  stat: string;
  label: string;
  desc: string;
  accentColor: "blue" | "red" | "neutral";
  index: number;
}

const accentStyles = {
  blue: "border-t-m-blue",
  red: "border-t-m-red",
  neutral: "border-t-carbon/20",
};

const accentDot = {
  blue: "bg-m-blue",
  red: "bg-m-red",
  neutral: "bg-carbon/30",
};

function StatCard({ stat, label, desc, accentColor, index }: StatCardProps) {
  return (
    <motion.div
      className={`relative flex flex-col gap-4 p-8 rounded-2xl bg-cool-grey/50 border border-carbon/5 border-t-2 ${accentStyles[accentColor]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${accentDot[accentColor]}`} />
        <span className="text-xs font-semibold tracking-widest uppercase text-carbon-light">
          {label}
        </span>
      </div>

      <p className="text-4xl font-extrabold tracking-[-0.03em] text-carbon">
        {stat}
      </p>

      <p className="text-sm text-carbon-light leading-relaxed">{desc}</p>
    </motion.div>
  );
}

interface ValuePropsSectionProps {
  dictionary: {
    title: string;
    speed: { stat: string; label: string; desc: string };
    motion: { stat: string; label: string; desc: string };
    social: { stat: string; label: string; desc: string };
  };
}

export function ValuePropsSection({ dictionary }: ValuePropsSectionProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-[2px] w-8 bg-m-red" />
          <span className="text-xs font-semibold tracking-widest uppercase text-carbon-light">
            {dictionary.title}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <StatCard
            stat={dictionary.speed.stat}
            label={dictionary.speed.label}
            desc={dictionary.speed.desc}
            accentColor="blue"
            index={0}
          />
          <StatCard
            stat={dictionary.motion.stat}
            label={dictionary.motion.label}
            desc={dictionary.motion.desc}
            accentColor="red"
            index={1}
          />
          <StatCard
            stat={dictionary.social.stat}
            label={dictionary.social.label}
            desc={dictionary.social.desc}
            accentColor="neutral"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}
