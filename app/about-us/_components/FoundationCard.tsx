import { cn } from "@/lib/utils";
import Image from "next/image";
import { Foundation } from "../about-us.constants";

type Props = {
  foundation: Foundation;
  index: number;
};
export default function FoundationCard({ foundation, index }: Props) {
  return (
    <article
      className={cn("flex flex-col items-center gap-6 py-6 md:flex-row", {
        "md:flex-row-reverse": index % 2 === 0,
      })}
    >
      <Image
        className="aspect-square w-full max-w-[700px] object-cover md:w-1/2"
        src={foundation.imageUrl}
        width={700}
        height={700}
        alt={""}
      />
      <div className="w-full px-2 text-foreground sm:px-6 md:w-1/2 md:px-12 lg:px-20">
        <p className="mb-4 text-2xl font-medium sm:mb-6 sm:text-3xl">{foundation.title}</p>
        <p className="text-lg text-foreground/70">{foundation.description}</p>
      </div>
    </article>
  );
}
