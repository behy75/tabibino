import HomePage from "@/features/home/pages/home-page";
import { locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return <HomePage />;
}
