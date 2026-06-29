import { ReactNode } from "react";
import clsx from "clsx";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export default function Grid({
  children,
  className,
}: GridProps) {
  return (
    <div
      className={clsx(
        "grid gap-8 lg:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}