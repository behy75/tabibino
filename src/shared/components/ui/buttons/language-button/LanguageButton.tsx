"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BaseButton from "../base-button";

export const LanguageButton = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const currentLang = segments[1] as "fa" | "en";
  const nextLang = currentLang === "fa" ? "en" : "fa";

  const toggleLang = () => {
    if (currentLang === "fa" || currentLang === "en") {
      segments[1] = nextLang;
    } else {
      segments.splice(1, 0, nextLang);
    }

    router.push(segments.join("/"));
  };

  return (
    <BaseButton onClick={toggleLang}>
      {currentLang === "fa" ? t("language.en") : t("language.fa")}
    </BaseButton>
  );
};
