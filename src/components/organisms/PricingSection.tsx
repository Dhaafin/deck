"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Tier {
  id: string;
  name: string;
  price: string;
  features: string[];
}

interface PricingSectionProps {
  dictionary: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    tiers: Tier[];
  };
}

export function PricingSection({ dictionary }: PricingSectionProps) {
  const [activeGear, setActiveGear] = useState(0);

  const activeTier = dictionary.tiers[activeGear];
  // Calculate angle for gauge needle: -60, -20, 20, 60
  const needleAngle = -60 + activeGear * 40;

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-white">
      {/* Decorative background grid/lines for technical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, #111 1px, transparent 1px), linear-gradient(180deg, #111 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-4"
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

        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-carbon mb-6">
            {dictionary.title}
          </h2>
          <p className="text-lg text-carbon-light leading-relaxed">
            {dictionary.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Gear Shifter Controls (Left) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <div className="bg-cool-grey/30 border border-carbon/5 p-6 rounded-3xl relative h-full flex flex-col justify-center">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-carbon-light mb-8">
                Select Gear
              </h3>
              
              <div className="relative flex flex-col gap-8 pl-4">
                {/* Vertical Track */}
                <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-carbon/10 rounded-full" />
                
                {dictionary.tiers.map((tier, idx) => {
                  const isActive = activeGear === idx;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setActiveGear(idx)}
                      className={`relative flex items-center gap-6 group text-left w-full focus:outline-none cursor-pointer`}
                    >
                      {/* Notch / Knob */}
                      <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors shadow-sm group-hover:border-m-red ${isActive ? 'border-white bg-cool-grey' : 'border-m-blue bg-m-blue/20'}`}>
                        {isActive && (
                          <motion.div
                            layoutId="activeGearKnob"
                            className="absolute inset-0 rounded-full bg-m-red shadow-[0_0_15px_rgba(227,6,19,0.5)] border-2 border-white"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          />
                        )}
                      </div>
                      
                      {/* Label */}
                      <div className="flex-1">
                        <span className={`block text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${isActive ? "text-m-red" : "text-carbon-light group-hover:text-carbon"}`}>
                          Gear {idx + 1}
                        </span>
                        <span className={`block text-lg font-semibold tracking-tight transition-colors duration-300 ${isActive ? "text-carbon" : "text-carbon/60"}`}>
                          {tier.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Performance Dashboard (Right) */}
          <div className="lg:col-span-8 h-full">
            <motion.div 
              className="bg-carbon text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 h-full flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Subtle Red/Blue Gradient overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-m-red/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-m-blue/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
                
                {/* Speedometer Gauge */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* SVG Arc for Gauge */}
                    <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0 -rotate-90">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                      <motion.circle 
                        cx="100" cy="100" r="80" 
                        fill="none" 
                        stroke="currentColor" 
                        className="text-m-red"
                        strokeWidth="12" 
                        strokeDasharray="502"
                        initial={{ strokeDashoffset: 502 }}
                        animate={{ strokeDashoffset: 502 - ((activeGear + 1) * 125) }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                    </svg>
                    
                    {/* Gauge Needle */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: needleAngle }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <div className="w-[4px] h-[70px] bg-white rounded-full absolute top-[15px] shadow-[0_0_10px_rgba(255,255,255,0.8)] origin-bottom" style={{ transformOrigin: "bottom center" }} />
                    </motion.div>

                    {/* Center Hub */}
                    <div className="w-12 h-12 rounded-full bg-carbon border-[4px] border-m-red absolute z-20 flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    {/* Price Text overlay */}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTier.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-3xl font-extrabold tracking-tighter text-white">
                            {activeTier.price}
                          </span>
                          <span className="text-xs font-semibold tracking-widest uppercase text-white/50 block mt-1">
                            RPM / Value
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Features & CTA */}
                <div className="flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTier.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <h4 className="text-2xl font-bold tracking-tight text-white border-b border-white/10 pb-4">
                        {activeTier.name}
                      </h4>
                      
                      <ul className="flex flex-col gap-3">
                        {activeTier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/80">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-m-blue shrink-0" />
                            <span className="text-sm font-medium leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href="#quote"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById("quote");
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                            // Optionally trigger an event to update select state in Quote form
                            window.dispatchEvent(new CustomEvent('setQuoteScope', { detail: activeGear }));
                          }
                        }}
                        className="mt-4 flex items-center justify-between bg-white text-carbon hover:bg-cool-grey px-6 py-4 rounded-xl font-bold tracking-wide transition-all group w-full sm:w-auto"
                      >
                        {dictionary.cta}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
