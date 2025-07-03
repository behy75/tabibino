"use client";

import { useTranslations } from "next-intl";

const HomeContent = () => {
  const t = useTranslations("home");

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <h2>{t("title")}</h2>
    </main>
  );
};

export default HomeContent;
