import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full",
        "border border-zinc-700",
        "bg-zinc-900/60",
        "px-4 py-2",
        "text-sm text-zinc-300",
        "backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}