import Main from "@/components/Main";
import Image from "next/image";
import FoundationCard from "./_components/FoundationCard";
import ValueCard from "./_components/ValueCard";
import { foundations, values } from "./about-us.constants";

export default function AboutUs() {
  return (
    <Main className="mb-32">
      <section className="mx-auto grid min-h-[80svh] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-28 sm:px-8 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-4xl font-medium underline capitalize underline-offset-8 decoration-primary sm:mb-12 sm:text-5xl sm:underline-offset-20">
            About Us
          </h2>
          <p className="mb-2 text-lg text-foreground/60 sm:text-2xl">
            We Support Women Entrepreneurs, Young Female Leaders, Professional
            Women and Teen Age girls living with disability
          </p>
        </div>

        <Image
          className="h-auto w-full rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-secondary)] sm:shadow-[16px_16px_0px_0px_var(--color-secondary)]"
          height={1000}
          width={1000}
          src={"/about-us/foundation-history.jpeg"}
          alt=""
        />
      </section>

      <section className="mx-auto mb-20 max-w-[1400px] px-5 sm:mb-32 sm:px-8">
        <h3 className="mb-8 w-fit border-t-2 border-secondary pt-2 text-3xl font-medium capitalize sm:mb-12 sm:text-4xl">
          Our values
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {foundations.map((foundation, idx) => (
          <FoundationCard
            key={foundation.title}
            index={idx}
            foundation={foundation}
          />
        ))}
      </section>
    </Main>
  );
}
