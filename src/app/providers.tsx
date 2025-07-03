"use client";

import { SessionProvider } from "next-auth/react";
import { IProvidersProps } from "@/shared/dto/providers.prop";
import ThemeProvider from "@/features/theme/provider";

export function Providers({ children }: IProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}
