const countries = [
  {
    name: "Kenya",
    code: "01",
    description: "From the capital to communities across western Kenya.",
    cities: ["Nairobi", "Kisumu", "Kakamega"],
  },
  {
    name: "Uganda",
    code: "02",
    description: "Working across Kampala and the Masindi community.",
    cities: ["Kampala", "Masindi"],
  },
];

export default function WhereWeWork() {
  return (
    <main>
      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-secondary sm:text-base">
            Our regional footprint
          </p>
          <h1 className="mb-8 text-4xl font-medium underline decoration-primary underline-offset-8 sm:text-6xl sm:underline-offset-16">
            Where we work
          </h1>
          <p className="text-lg leading-relaxed text-foreground/65 sm:text-2xl">
            CAI works in Kenya and Uganda to support women, young leaders, and
            girls with disabilities. We work alongside communities to advance
            inclusive governance, sustainable development, and social justice.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-8">
          {countries.map((country) => (
            <article
              key={country.name}
              className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-white/70 p-6 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-2 text-7xl font-semibold text-foreground/[0.04] sm:right-8 sm:text-8xl"
              >
                {country.code}
              </span>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Country
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {country.name}
              </h2>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-foreground/60 sm:text-lg">
                {country.description}
              </p>

              <div className="mt-8 border-t border-foreground/10 pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/55">
                  Where we work
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {country.cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-foreground/10 bg-background px-4 py-2 text-sm font-medium sm:text-base"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-base leading-relaxed text-foreground/60 sm:mt-14 sm:text-lg">
          Across these locations, we bring people together and create
          opportunities for women and communities to shape the decisions and
          changes that affect their lives.
        </p>
      </section>
    </main>
  );
}
