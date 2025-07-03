"use client";

import { useTranslations } from "next-intl";
import BaseButton from "../base-button";
import { useTheme } from "@/features/theme/hooks/theme.hook";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("common.theme");

  return (
    <BaseButton onClick={toggleTheme} className="mt-4 mx-1">
      {theme === "dark" ? `☀️ ${t("light")}` : `🌙 ${t("dark")}`}
    </BaseButton>
  );
};
