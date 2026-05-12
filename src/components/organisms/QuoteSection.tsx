"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/atoms/Button";

interface QuoteSectionProps {
  dictionary: {
    label: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      brand: string;
      projectType: string;
      projectTypes: Record<string, string>;
      scope: string;
      scopes: Record<string, string>;
      message: string;
      submit: string;
      sending: string;
      success: string;
    };
  };
}

function InputField({
  label,
  type = "text",
  name,
  required = true,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      animate={focused ? { scale: 1.01 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-wider uppercase text-carbon-light mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 rounded-lg bg-alpine-white border text-sm text-carbon placeholder-carbon-light/50 outline-none transition-all duration-300 ${
          focused
            ? "border-m-blue/40 shadow-[0_0_0_3px_oklch(0.49_0.16_255/0.08)]"
            : "border-carbon/10 hover:border-carbon/20"
        }`}
      />
    </motion.div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: Record<string, string>;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      animate={focused ? { scale: 1.01 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-wider uppercase text-carbon-light mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 rounded-lg bg-alpine-white border text-sm text-carbon outline-none transition-all duration-300 appearance-none cursor-pointer ${
          focused
            ? "border-m-blue/40 shadow-[0_0_0_3px_oklch(0.49_0.16_255/0.08)]"
            : "border-carbon/10 hover:border-carbon/20"
        }`}
      >
        <option value="" disabled>
          —
        </option>
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <svg
        className="absolute right-4 top-[38px] w-4 h-4 text-carbon-light pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </motion.div>
  );
}

export function QuoteSection({ dictionary }: QuoteSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = dictionary.form;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-32 px-6 bg-cool-grey/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
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
              className="text-lg text-carbon-light leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {dictionary.subtitle}
            </motion.p>

            {/* Trust signals */}
            <motion.div
              className="flex flex-col gap-4 mt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: "⚡", text: "24-hour response time" },
                { icon: "🔒", text: "NDA available upon request" },
                { icon: "🎯", text: "No commitment required" },
              ].map((signal) => (
                <div
                  key={signal.text}
                  className="flex items-center gap-3 text-sm text-carbon-light"
                >
                  <span className="text-base">{signal.icon}</span>
                  <span>{signal.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Racing stripe accent */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-m-blue via-alpine-white to-m-red rounded-t-2xl" />

            <div className="bg-alpine-white border border-carbon/5 rounded-2xl p-8 shadow-xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField label={t.name} name="name" />
                      <InputField
                        label={t.email}
                        name="email"
                        type="email"
                      />
                    </div>

                    <InputField label={t.brand} name="brand" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <SelectField
                        label={t.projectType}
                        name="projectType"
                        options={t.projectTypes}
                      />
                      <SelectField
                        label={t.scope}
                        name="scope"
                        options={t.scopes}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold tracking-wider uppercase text-carbon-light mb-2"
                      >
                        {t.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-alpine-white border border-carbon/10 hover:border-carbon/20 text-sm text-carbon placeholder-carbon-light/50 outline-none transition-all duration-300 resize-none focus:border-m-blue/40 focus:shadow-[0_0_0_3px_oklch(0.49_0.16_255/0.08)]"
                      />
                    </div>

                    <Button variant="primary" className="w-full justify-center mt-2">
                      {t.submit}
                      <svg
                        className="w-4 h-4"
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
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2,
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </motion.div>
                    <p className="text-lg font-bold text-carbon">
                      {t.success}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
