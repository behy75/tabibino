import { NextIntlClientProvider } from "next-intl";
import { ILocaleLayoutWrapperProps } from "../models/props/locale-layout-wrapper.prop";
import Header from "@/shared/components/header";

export default async function LocaleLayout({
  children,
  params,
  messages,
}: ILocaleLayoutWrapperProps) {
  const { locale } = await params;

  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
