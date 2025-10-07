import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type MainProps = ComponentProps<"main">;

export default function Main({ className, ...rest }: MainProps) {
  return <main {...rest} className={cn("min-h-screen pt-[12vh]", className)} />;
}
