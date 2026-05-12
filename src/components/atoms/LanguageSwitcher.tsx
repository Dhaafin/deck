"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  lang: "id" | "en";
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchedLocale = lang === "id" ? "en" : "id";
  const newPath = pathname.replace(`/${lang}`, `/${switchedLocale}`);

  return (
    <motion.a
      href={newPath}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wider uppercase text-carbon-light hover:text-carbon border border-carbon/10 hover:border-carbon/20 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className={lang === "id" ? "text-carbon" : "text-carbon-light"}>
        ID
      </span>
      <span className="text-carbon/20">/</span>
      <span className={lang === "en" ? "text-carbon" : "text-carbon-light"}>
        EN
      </span>
    </motion.a>
  );
}
