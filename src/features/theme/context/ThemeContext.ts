import { createContext } from "react";
import { ThemeDto } from "../models/dto/theme.dto";

export const ThemeContext = createContext<{
  theme: ThemeDto;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => { },
});
