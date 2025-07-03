import { AppLocale, locales } from "@/lib/i18n/config";
import { loadMessages } from "@/lib/i18n/messages-loader";
import LocaleLayout from "@/providers/locale-layout/components";
import { ILayoutProps } from "@/providers/locale-layout/models/props/layout.prop";
import { notFound } from "next/navigation";

export default async function LocaleLayoutWrapper({
  children,
  params,
}: ILayoutProps) {
  const { locale: locale1 } = await params;

  const locale = (locale1 ?? "fa") as AppLocale;
  if (!locales.includes(locale)) notFound();
  const messages = await loadMessages(locale);

  return (
    <LocaleLayout params={params} messages={messages}>
      {children}
    </LocaleLayout>
  );
}
