import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { roleMap } from "@/shared/constants/roles.constant";

export const useLoginRedirect = (trigger: boolean) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role) {
      const role = session.user.role as keyof typeof roleMap;
      if (!role || !(role in roleMap)) return;
      router.replace(`/${locale}/${roleMap[role]}`);
    }
  }, [trigger, status, session, locale, router]);
};
