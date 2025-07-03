import { ThemeDto } from "../models/dto/theme.dto";

export const applyThemeToDOM = (theme: ThemeDto) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};
