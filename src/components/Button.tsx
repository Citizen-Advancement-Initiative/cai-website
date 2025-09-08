import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function Button({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button className={cn(" rounded-2xl px-4 py-2.5", className)}>
      {children}
    </button>
  );
}
