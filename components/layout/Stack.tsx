import { ReactNode } from "react";
import clsx from "clsx";

interface StackProps {
  children: ReactNode;
  className?: string;
}

export default function Stack({
  children,
  className,
}: StackProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}