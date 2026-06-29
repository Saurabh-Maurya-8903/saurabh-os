import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MaxWidth({
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-5xl">
      {children}
    </div>
  );
}