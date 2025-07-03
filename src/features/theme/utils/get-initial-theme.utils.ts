import { ThemeDto } from "../models/dto/theme.dto";

export const getInitialTheme = (): ThemeDto => {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("app-theme") as ThemeDto | null;

  if (stored) return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};