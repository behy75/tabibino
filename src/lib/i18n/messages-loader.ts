import { readFileSync } from "fs";
import { join } from "path";

export const loadMessages = (locale: string) => {
  try {
    const path = join(process.cwd(), "messages", `${locale}.json`);
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch (e) {
    console.error("loadMessages error:", e);
    throw e;
  }
};
