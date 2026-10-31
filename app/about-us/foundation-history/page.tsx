import Main from "@/components/Main";
import Image from "next/image";

export default function FoundationHistory() {
  return (
    <Main>
      <section className="max-w-[1400px] mt-[10%] mx-auto  grid grid-cols-2 min-h-screen mb-6 items-center gap-10 mt-24">
        <div className="flex flex-col justify-center">
          <h2 className="mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">
            A Brief History
          </h2>
          <p className="text-2xl text-foreground/60 mb-2">
            CAI works through strategic and innovative approaches that build
            skills, foster connections, and amplify the voices of marginalized
            and underrepresented groups. Through research, advocacy, capacity
            building, and networking, the organization empowers beneficiaries to
            access opportunities, influence policies, and participate
            meaningfully in social and economic development.
          </p>
          <p className="text-2xl text-foreground/60 mb-2">
            As part of its commitment to disability inclusion and economic
            empowerment, CAI has been working directly with persons with
            disabilities (PWDs), particularly young people, to equip them with
            practical digital skills that enhance their employability and
            readiness for the job market. The training covers digital literacy,
            cybersecurity, artificial intelligence (AI), online marketing, and
            digital freelancing. These skills enable participants to use digital
            technologies safely and effectively, explore online work
            opportunities, market their talents and services, and participate in
            the digital economy.
          </p>
          <p className="text-2xl text-foreground/60 mb-2">
            Through this initiative, CAI aims to bridge the digital skills gap
            experienced by persons with disabilities by promoting accessible,
            inclusive, and practical learning opportunities. The organization
            focuses not only on imparting digital knowledge but also on
            preparing beneficiaries to pursue employment, freelance assignments,
            entrepreneurship, and other income-generating opportunities. By
            connecting digital skills development to real-world opportunities,
            CAI contributes to building a more inclusive digital workforce where
            persons with disabilities can participate, compete, and thrive.
          </p>
          <p className="text-2xl text-foreground/60 mb-2">
            CAI continues to advance its mission of empowering special interest
            groups through technology, capacity building, and inclusive
            development, ensuring that persons with disabilities are not left
            behind in the rapidly evolving digital economy.
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
