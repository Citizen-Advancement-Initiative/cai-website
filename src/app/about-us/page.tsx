import Main from "@/components/Main";
import Image from "next/image";
import FoundationCard from "./_components/FoundationCard";
import ValueCard from "./_components/ValueCard";
import { foundations, values } from "./about-us.constants";

export default function AboutUs() {
  return (
    <Main className="mb-32">
      <section className="max-w-[1400px] mx-auto  grid grid-cols-2 h-screen items-center gap-10 mt-24">
        <div className="flex flex-col justify-center">
          <h2 className="mb-12 text-5xl font-medium underline capitalize underline-offset-20 decoration-primary">
            About Us
          </h2>
          <p className="mb-2 text-2xl text-foreground/60">
            We Support Women Entrepreneurs, Young Female Leaders, Professional
            Women and Teen Age girls living with disability
          </p>
        </div>

        <Image
          className="shadow-[16px_16px_0px_0px_var(--color-secondary)] rounded-2xl"
          height={1000}
          width={1000}
          src={"/about-us/foundation-history.jpeg"}
          alt=""
        />
      </section>

      <section className="max-w-[1400px] mx-auto mb-32 ">
        <h3 className="mb-12 text-4xl font-medium capitalize border-t-2  w-fit border-secondary pt-2">
          Our values
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto">
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
