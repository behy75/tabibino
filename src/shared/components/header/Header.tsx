"use client";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import ToggleThemeButton from "../ui/buttons/toggle-theme-button";
import LanguageButton from "../ui/buttons/language-button";
import LogoutButton from "../ui/buttons/logout-button";
import LoginButton from "../ui/buttons/login-button";
import PanelButton from "../ui/buttons/panel-button";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("common");
  const { data: session, status } = useSession();
  const isLogOut = useMemo(() => {
    return status !== "authenticated" || !session?.user;
  }, [status, session]);

  return (
    <header className="p-4 border-b flex justify-between items-center">
      <Link href={`/${locale}`}>
        <h1 className="text-lg font-semibold">{t("title")}</h1>
      </Link>
      <div>
        <PanelButton />
        <ToggleThemeButton />
        <LanguageButton />
        {isLogOut ? <LoginButton /> : <LogoutButton />}
      </div>
    </header>
  );
}
