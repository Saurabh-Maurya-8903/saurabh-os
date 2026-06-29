import { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h1
      className={clsx(
        "font-bold tracking-tight text-white",
        "text-5xl md:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}