import { cn } from "@/lib/utils";
import Image from "next/image";

type ShowCaseContent = {
  title: string;
  description: string;
};

type ShowCase = ShowCaseContent &
  (
    | { imageUrl: string; videoUrl?: never }
    | { imageUrl?: never; videoUrl: string }
  );

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
          {showCase.imageUrl ? (
            <Image
              className="aspect-square w-full max-w-[700px] object-cover md:w-1/2"
              src={showCase.imageUrl}
              width={700}
              height={700}
              alt=""
            />
          ) : (
            <video
              className="aspect-square w-full max-w-[700px] object-cover md:w-1/2"
              src={showCase.videoUrl}
              controls
              playsInline
              preload="metadata"
              aria-label={showCase.title}
            />
          )}
          <div className="w-full px-2 text-foreground sm:px-6 md:w-1/2 md:px-12 lg:px-20">
            <p className="mb-4 text-2xl font-medium  border-b-2 border-b-primary sm:mb-6 sm:text-3xl sm:underline-offset-16">
              {showCase.title}
            </p>
            <p className="text-lg text-foreground/70">{showCase.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
