import { cn } from "@/lib/utils/actions";
import React from "react";

export interface TailWindButtonProps {
  icon?: React.ReactNode;
  btmClassName?: string;
  label: string;
  spanClassName?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | "reset" | "button";
}

const TailWindButton = ({
  icon,
  btmClassName,
  label,
  spanClassName,
  disabled,
  type = "button",
  onClick,
}: TailWindButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent",
        btmClassName
      )}
    >
      {icon && icon}
      <span className={cn("text-sm/6 font-semibold", spanClassName)}>
        {label}
      </span>
    </button>
  );
};

export default TailWindButton;
