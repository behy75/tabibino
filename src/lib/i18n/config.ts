export const locales = ["en", "fa"] as const;
export type AppLocale = (typeof locales)[number];
