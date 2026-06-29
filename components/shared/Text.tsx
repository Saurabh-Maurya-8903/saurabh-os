import { ReactNode } from "react";
import clsx from "clsx";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={clsx(
        "text-zinc-400 leading-8 text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}