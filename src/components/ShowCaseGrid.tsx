import { cn } from "@/utils/cn";
import Image from "next/image";

type ShowCase = {
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  showCases: ShowCase[];
};

export default function ShowCaseGrid({ showCases }: Props) {
  return (
    <div>
      {showCases.map((showCase, index) => (
        <article
          key={showCase.title}
          className={cn("flex items-center", {
            "flex-row-reverse": index % 2 === 0,
          })}
        >
          <Image className="aspect-square object-cover" src={showCase.imageUrl} width={700} height={700} alt={""} />
          <div className=" px-24 text-foreground">
            <p className="text-3xl mb-6 font-medium underline underline-offset-16 decoration-primary">
              {showCase.title}
            </p>
            <p className="text-lg text-foreground/70">{showCase.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
