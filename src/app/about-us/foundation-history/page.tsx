import Main from "@/components/Main";
import Image from "next/image";

export default function FoundationHistory() {
  return (
    <Main>
      <section className="max-w-[1400px] mx-auto  grid grid-cols-2 h-screen items-center gap-10 mt-24">
        <div className="flex flex-col justify-center">
          <h2 className="mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">
            A Brief History
          </h2>
          <p className="text-2xl text-foreground/60 mb-2">
            Citizens Advancement Initiative (CAI) is a non-profit organization
            established in 2018 to respond to the limited collective engagement
            of special interest groups (Youth, Women, & PWDs), female
            professionals, and entrepreneurs in governance, development, climate
            change, and social justice in Kenya and Uganda.
          </p>
          <p className="text-2xl text-foreground/60 mb-2">
            We do this through strategic and innovative approaches that skill,
            connect, and give voice to generations of women professionals and
            special interest groups, connecting, facilitating, and empowering
            them to leverage business resources and technology to shape public
            opinion and influence policy and practice in both the public and
            private sectors.{" "}
          </p>
          <p className="text-2xl text-foreground/60 mb-2">
            These include research that informs policy making and action;
            advocacy, capacity building, and networking. We believe this enables
            this category of beneficiaries to have a substantive voice in
            decision making as well as increase their collective power and
            influence in championing government and private sector
            accountability, sustainable development, and social justice.
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
    </Main>
  );
}
