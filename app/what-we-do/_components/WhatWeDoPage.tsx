import Image from "next/image";
import Main from "@/components/Main";

type WhatWeDoPageProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
  paragraphs: string[];
};

export default function WhatWeDoPage({
  title,
  imageSrc,
  imageAlt,
  subtitle,
  paragraphs,
}: WhatWeDoPageProps) {
  return (
    <Main>
      <section className="mx-auto mb-6 mt-24 grid min-h-[80svh] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="mb-6 w-fit max-w-full border-b-4 border-primary pb-3 text-3xl font-medium capitalize sm:mb-8 sm:pb-4 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <h2 className="mb-6 text-2xl font-medium sm:text-3xl">{subtitle}</h2>
          )}
          {paragraphs.map((paragraph) => (
            <p
              className="mb-3 text-base text-foreground/60 sm:text-xl"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[16px_16px_0px_0px_var(--color-secondary)]">
          <Image
            alt={imageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={imageSrc}
          />
        </div>
      </section>
    </Main>
  );
}
