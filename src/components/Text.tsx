import { ReactNode } from "react";

type Props = {
  variant?: "heading" | "sub-heading" | "paragraph";
  children: ReactNode;
  className?: string;
};

export default function Text({ variant = "paragraph", children }: Props) {
  switch (variant) {
    case "heading":
      return (
        <h2 className="mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">
          {children}
        </h2>
      );

    case "sub-heading":
      return (
        <h3 className="mb-12 text-4xl font-medium capitalize border-t-2  w-fit border-secondary pt-2">
          {children}
        </h3>
      );

    default:
      return <p className="text-2xl text-foreground/60 ">{children}</p>;
  }
}
