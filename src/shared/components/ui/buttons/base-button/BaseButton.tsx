import React from "react";
import { cn } from "@/lib/utils/cn.utils";
import { IBaseButtonProps } from "@/shared/props/base-button.prop";

export const BaseButton = ({
  children,
  className,
  ...props
}: IBaseButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition",
        className
      )}
    >
      {children}
    </button>
  );
};
