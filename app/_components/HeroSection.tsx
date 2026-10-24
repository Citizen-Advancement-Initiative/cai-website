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
    <section className="relative flex flex-col w-full h-screen overflow-hidden ">
      <HeroVideo />

      <div className="z-10 flex flex-col items-center justify-center capitalize grow bg-black/10">
        <p className="text-background text-center text-[180px] max-w-[11ch] leading-50 font-semibold">
          <span className="text-primary">Her</span> Voice Is Power
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link
            href={`/?${INFO_MODAL_TYPE_KEY}=${InfoModalType.SupportUs}`}
            className={cn(buttonVariants(), "px-10 py-5 rounded-full")}
          >
            Support us
          </Link>
          <Link
            href={"/about-us"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-10 py-5 rounded-full",
            )}
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
}
