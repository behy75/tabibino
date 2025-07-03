import { ButtonHTMLAttributes } from "react";

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}