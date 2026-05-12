import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ValuePropsSection } from "@/components/organisms/ValuePropsSection";
import { DeckSection } from "@/components/organisms/DeckSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection dictionary={dict.hero} lang={lang as "id" | "en"} />
      <ValuePropsSection dictionary={dict.values} />
      <DeckSection dictionary={dict.deck} lang={lang as "id" | "en"} />
    </>
  );
}
