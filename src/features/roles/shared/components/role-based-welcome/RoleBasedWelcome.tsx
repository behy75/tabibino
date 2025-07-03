"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { IRoleBasedWelcomeProps } from "../../models/props/role-based-welcome.prop";

const RoleBasedWelcome = ({ namespace }: IRoleBasedWelcomeProps) => {
  const { data: session } = useSession();
  const t = useTranslations(namespace);

  return (
    <>
      {t("welcome", {
        name: session?.user?.name ?? "",
        role: session?.user?.role ?? "",
      })}
    </>
  );
};

export default RoleBasedWelcome;
