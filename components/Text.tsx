import { cn } from "@/lib/utils";
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
            "mb-8 w-fit max-w-full border-b-4 border-primary pb-3 text-3xl font-medium capitalize sm:mb-12 sm:pb-4 sm:text-5xl",
            className,
          )}
        >
          {children}
        </h2>
      );

    case "sub-heading":
      return (
        <h3
          className={cn(
            "mb-8 w-fit border-t-2 border-secondary pt-2 text-2xl font-medium capitalize sm:mb-12 sm:text-4xl",
            className,
          )}
        >
          {children}
        </h3>
      );

    default:
      return (
        <p className={cn("text-base text-foreground/60 sm:text-2xl", className)}>
          {children}
        </p>
      );
  }
}
