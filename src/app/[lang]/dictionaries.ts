import "server-only";

const dictionaries = {
  id: () =>
    import("./dictionaries/id.json").then((module) => module.default),
  en: () =>
    import("./dictionaries/en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["id", "en"];

export const defaultLocale: Locale = "id";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
