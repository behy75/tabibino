import { notFound } from "next/navigation";
import { AppLocale } from "./config";

export const loadMessages = async (locale: AppLocale) => {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (e) {
    notFound();
  }
};
