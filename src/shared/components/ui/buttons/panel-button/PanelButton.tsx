"use client";

import { roleMap } from "@/shared/constants/roles.constant";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import BaseButton from "../base-button";

export const PanelButton = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const { data: session } = useSession();
  const locale = useLocale();

  const handlePanel = () => {
    const role = session?.user?.role as keyof typeof roleMap | undefined;
    if (!role || !(role in roleMap)) return;
    const path = `/${locale}/${roleMap[role]}`;
    router.push(path);
  };

  return (
    <BaseButton onClick={handlePanel} className="mx-1">
      {t("panel")}
    </BaseButton>
  );
};
