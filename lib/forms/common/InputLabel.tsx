import { cn } from "@/lib/utils/actions";
import React from "react";

interface InputLabelProps {
  title: string;
  htmlFor: string;
  className?: string;
}
const TailwindInputLabel = ({ title, htmlFor, className }: InputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(`"block text-sm/6 font-medium text-gray-900"`, className)}
    >
      {title}
    </label>
  );
};

export default TailwindInputLabel;
