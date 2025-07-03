import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { resolve } from "path";
import { AppLocale } from "./config";

export const loadMessages = async (locale: AppLocale) => {
  try {
    const filePath = resolve(process.cwd(), `./messages/${locale}.json`);
    const content = readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    console.error("loadMessages error:", e);
    notFound();
  }
};
