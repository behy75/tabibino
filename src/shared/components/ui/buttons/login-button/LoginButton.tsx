"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import BaseButton from "../base-button";

export const LoginButton = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  const handleLogin = () => {
    const lang = pathname.split("/")[1];
    router.push(`/${lang}/login`);
  };

  return (
    <BaseButton onClick={handleLogin} className="mx-1">
      {t("login")}
    </BaseButton>
  );
};
