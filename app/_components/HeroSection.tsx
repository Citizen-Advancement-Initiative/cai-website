import {
  INFO_MODAL_TYPE_KEY,
  InfoModalType,
} from "@/components/info-modal.utils";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import Link from "next/link";
import HeroVideo from "./HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[560px] h-[100svh] w-full flex-col overflow-hidden">
      <HeroVideo />

      <div className="z-10 flex flex-col items-center justify-center capitalize grow bg-black/10">
        <p className="max-w-[11ch] px-4 text-center text-[clamp(3.5rem,14vw,11.25rem)] leading-[0.95] font-semibold text-background">
          <span className="text-primary">Her</span> Voice Is Power
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-4">
          <Link
            href={`/?${INFO_MODAL_TYPE_KEY}=${InfoModalType.SupportUs}`}
            className={cn(buttonVariants(), "rounded-full px-7 py-5 sm:px-10")}
          >
            Support us
          </Link>
          <Link
            href={"/about-us"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-7 py-5 sm:px-10",
            )}
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}
