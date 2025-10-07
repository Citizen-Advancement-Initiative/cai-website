import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type Props = {
  variant?: "heading" | "sub-heading" | "paragraph";
  children?: ReactNode;
  className?: string;
};
export default function Text({
  variant = "paragraph",
  children,
  className,
}: Props) {
  switch (variant) {
    case "heading":
      return (
        <h2
          className={cn(
            "mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary",
            className
          )}
        >
          {children}
        </h2>
      );

    case "sub-heading":
      return (
        <h3
          className={cn(
            "mb-12 text-4xl font-medium capitalize border-t-2  w-fit border-secondary pt-2",
            className
          )}
        >
          {children}
        </h3>
      );

    default:
      return (
        <p className={cn("text-2xl text-foreground/60", className)}>
          {children}
        </p>
      );
  }
}
