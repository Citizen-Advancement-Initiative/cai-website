import Image from "next/image";
import { members } from "../our-staff.utils";

export function generateStaticParams() {
  return members.map((member) => ({
    slug: member.name.replaceAll(" ", "-").toLowerCase(),
  }));
}

export default async function Member({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = members.find(
    (member) => member.name.toLowerCase() === slug.replaceAll("-", " "),
  );

  return (
    <main className="min-h-screen mb-16">
      <section className="mx-auto mt-28 flex max-w-[1400px] flex-col items-center gap-8 px-5 sm:mt-36 sm:px-8 md:flex-row md:items-end md:justify-center md:gap-16">
        <div className="md:mb-16">
          <h2 className="mb-6 text-4xl font-medium capitalize underline underline-offset-8 decoration-primary sm:mb-8 sm:text-5xl sm:underline-offset-20">
            {member?.name}
          </h2>
          <p className="mt-4 text-lg text-foreground/50 sm:text-2xl">{member?.role}</p>
        </div>

        <Image
          className="h-auto max-h-[500px] w-full max-w-[400px] rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-primary)] sm:shadow-[16px_16px_0px_0px_var(--color-primary)]"
          height={1000}
          width={1000}
          src={member?.imageUrl ?? ""}
          alt=""
        />
      </section>

      <section className="mx-auto mt-12 max-w-[800px] px-5 sm:mt-20 sm:px-8">
        <p className="whitespace-pre-line text-lg text-foreground/80 sm:text-2xl">
          {member?.description || ""}
        </p>
      </section>
    </main>
  );
}
