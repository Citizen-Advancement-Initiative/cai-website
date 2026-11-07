import { cn } from "@/lib/utils";
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
          className={cn("flex flex-col items-center gap-6 py-6 md:flex-row", {
            "md:flex-row-reverse": index % 2 === 0,
          })}
        >
          <Image
            className="aspect-square w-full max-w-[700px] object-cover md:w-1/2"
            src={showCase.imageUrl}
            width={700}
            height={700}
            alt={""}
          />
          <div className="w-full px-2 text-foreground sm:px-6 md:w-1/2 md:px-12 lg:px-20">
            <p className="mb-4 text-2xl font-medium underline decoration-primary underline-offset-8 sm:mb-6 sm:text-3xl sm:underline-offset-16">
              {showCase.title}
            </p>
            <p className="text-lg text-foreground/70">{showCase.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
