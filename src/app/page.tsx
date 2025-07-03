import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale } from "../../next-intl.config";

export default async function RootPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || defaultLocale;
  redirect(`/${locale}`);
}
