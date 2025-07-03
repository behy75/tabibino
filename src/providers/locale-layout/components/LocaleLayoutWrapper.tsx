import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { AppLocale, locales } from "@/lib/i18n/config";
import { loadMessages } from "@/lib/i18n/messages-loader";
import { ILocaleLayoutWrapperProps } from "../models/props/locale-layout-wrapper.prop";
import Header from "@/shared/components/header";

export default async function LocaleLayoutWrapper(
  props: ILocaleLayoutWrapperProps
) {
  const { children } = props;
  const locale = (props?.params?.locale ?? "fa") as AppLocale;

  if (!locales.includes(locale)) notFound();

  const messages = await loadMessages(locale);
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
