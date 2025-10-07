import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function CenteredSection({ children,className }: { children?: ReactNode, className?:string }) {
  return <section className={cn("max-w-[1400px] mx-auto", className)}>{children}</section>;
}
