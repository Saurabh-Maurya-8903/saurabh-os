import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3",
        "font-medium",
        "transition-all duration-300",

        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-500",

        variant === "secondary" &&
          "border border-zinc-700 bg-zinc-900/60 text-white hover:bg-zinc-800",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}