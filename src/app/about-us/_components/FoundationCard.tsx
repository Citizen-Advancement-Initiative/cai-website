import { cn } from "@/utils/cn";
import Image from "next/image";
import { Foundation } from "../about-us.constants";

type Props = {
  foundation: Foundation;
  index: number;
};
export default function FoundationCard({ foundation, index }: Props) {
  return (
    <article
      className={cn("flex items-center", {
        "flex-row-reverse": index % 2 === 0,
      })}
    >
      <Image src={foundation.imageUrl} width={700} height={700} alt={""} />
      <div className=" px-24 text-foreground">
        <p className="text-3xl mb-6 font-medium">{foundation.title}</p>
        <p className="text-lg text-foreground/70">{foundation.description}</p>
      </div>
    </article>
  );
}
