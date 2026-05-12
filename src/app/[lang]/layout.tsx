import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "./dictionaries";
import { Navbar } from "@/components/organisms/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Deck — High-Fidelity Digital Transitions",
  description:
    "We build seamless digital transitions for social-first brands. High-performance websites that capture your brand's energy.",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-alpine-white text-carbon font-sans">
        <Navbar lang={lang as "id" | "en"} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
