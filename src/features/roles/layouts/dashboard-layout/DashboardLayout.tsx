"use client";

import { useTranslations } from "next-intl";
import { IDashboardLayoutProps } from "../../shared/models/props/dashboard-layout.prop";

const DashboardLayout = ({ children, namespace }: IDashboardLayoutProps) => {
  const t = useTranslations(namespace);

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <header className="mb-4">
        <h1 className="text-xl font-bold">{t("panelTitle")}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
