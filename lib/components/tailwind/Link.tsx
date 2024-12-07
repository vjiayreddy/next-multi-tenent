import React from "react";
import NextLink, { LinkProps } from "next/link";
import { cn } from "@/lib/utils/actions";

interface TailwindLinkProps extends LinkProps {
  className?: string;
  title: string;
}

const TailwindLink = ({ title, className, ...props }: TailwindLinkProps) => {
  return (
    <NextLink {...props} className={cn("", className)}>
      {title}
    </NextLink>
  );
};

export default TailwindLink;
