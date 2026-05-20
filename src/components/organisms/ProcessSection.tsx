"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Target, 
  Layers, 
  Eye, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

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

const stepIcons = [Target, Layers, Eye, Cpu, CheckCircle2, Rocket, ShieldCheck];

export function ProcessSection({ dictionary }: ProcessSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress within the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamically return a CSS calc() string to avoid Framer Motion mixed-unit interpolation bugs.
  // When pos = 0: calc(0% + 0vw)
  // When pos = 1: calc(-100% + 100vw)
  const xTranslate = useTransform(scrollYProgress, (pos) => `calc(${pos * -100}% + ${pos * 100}vw)`);

  return (
    <section ref={containerRef} id="process" className="relative h-[400vh] bg-carbon">
      {/* Sticky container that stays fixed while scrolling the 400vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-carbon text-white">
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>

        {/* Laser Scanner Line (Center screen visual) */}
        <div className="absolute left-1/2 top-[15%] bottom-[15%] w-[1px] bg-linear-to-b from-transparent via-m-red to-transparent opacity-50 shadow-[0_0_20px_rgba(227,6,19,1)] -translate-x-1/2 pointer-events-none z-0 hidden md:block" />

        {/* Section Header */}
        <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20 max-w-xl pointer-events-none">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-m-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
              {dictionary.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4">
            {dictionary.title}
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
            {dictionary.subtitle}
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative w-full h-full flex items-center pt-24 md:pt-32">
          <motion.div 
            style={{ x: xTranslate }}
            className="flex items-center gap-6 md:gap-16 px-6 md:pl-[50vw] md:pr-[50vw] h-auto"
          >
            {dictionary.steps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div 
                  key={step.number} 
                  className="relative w-[85vw] md:w-[450px] shrink-0 h-[400px] flex flex-col justify-between bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:border-m-red/50 hover:bg-white/10 group cursor-default"
                >
                  {/* Number & Icon Badge */}
                  <div className="flex justify-between items-start">
                    <span className="text-7xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors tracking-tighter">
                      {step.number}
                    </span>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white/70 group-hover:border-m-red/30 group-hover:text-m-red group-hover:bg-m-red/10 transition-colors">
                      <Icon strokeWidth={1.5} size={22} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-m-red transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Subtle racing stripe on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-m-red transition-all duration-700 ease-out group-hover:w-full rounded-b-3xl" />
                </div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Unique Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-70">
          <div className="flex gap-2 items-center bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">SYS.SCROLL</span>
            <motion.div 
              animate={{ x: [0, 4, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-m-red"
            >
              <ChevronRight size={14} strokeWidth={3} />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
