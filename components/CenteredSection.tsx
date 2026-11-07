import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function CenteredSection({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8", className)}>
      {children}
    </section>
  );
}
