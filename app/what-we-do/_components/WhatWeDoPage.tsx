import Main from "@/components/Main";

type WhatWeDoPageProps = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
};

export default function WhatWeDoPage({
  title,
  subtitle,
  paragraphs,
}: WhatWeDoPageProps) {
  return (
    <Main>
      <section className="mx-auto mt-[10%] mb-6 grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="mb-8 w-fit max-w-full border-b-4 border-primary pb-4 text-5xl font-medium capitalize">
            {title}
          </h1>
          {subtitle && (
            <h2 className="mb-6 text-3xl font-medium">{subtitle}</h2>
          )}
          {paragraphs.map((paragraph) => (
            <p
              className="mb-2 text-2xl text-foreground/60"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          aria-label="Image placeholder"
          className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-foreground/30 bg-foreground/5 text-xl text-foreground/50 shadow-[16px_16px_0px_0px_var(--color-secondary)]"
          role="img"
        >
          Image coming soon
        </div>
      </section>
    </Main>
  );
}
