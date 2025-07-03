"use client";

import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import BaseButton from "../base-button";

export const LogoutButton = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    const lang = pathname.split("/")[1];
    router.push(`/${lang}/login`);
  };

  if (pathname.includes("/login")) {
    return null;
  }

  return (
    <BaseButton onClick={handleLogout} className="mx-1">
      {t("logout")}
    </BaseButton>
  );
};
