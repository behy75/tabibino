"use client";

import { useState, useEffect, type ReactNode } from "react";
import { ThemeDto } from "../models/dto/theme.dto";
import { getInitialTheme } from "../utils/get-initial-theme.utils";
import { applyThemeToDOM } from "../utils/apply-theme-to-dom.utils";
import { ThemeContext } from "../context/ThemeContext";
import { IThemeProviderProps } from "../models/props/theme-provider.prop";

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeDto>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    applyThemeToDOM(initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("app-theme", next);
    applyThemeToDOM(next);
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
