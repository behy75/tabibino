import LocaleLayout from "@/providers/locale-layout/components";

export default function LocaleLayoutWrapper({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <LocaleLayout params={params}>{children}</LocaleLayout>;
}
