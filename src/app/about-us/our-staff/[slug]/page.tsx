import Image from "next/image";
import { members } from "../our-staff.utils";

export default async function Member({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = members.find(
    (member) => member.name.toLowerCase() === slug.replace("-", " ")
  );

  return (
    <main className="min-h-screen mb-16">
      <section className="flex mt-[20vh] max-w-[1400px] mx-auto items-end justify-center gap-16">
        <div className="mb-16">
          <h2 className="mb-8 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">
            {member?.name}
          </h2>
          <p className="text-2xl mt-4 text-foreground/50">{member?.role}</p>
        </div>

        <Image
          className="shadow-[16px_16px_0px_0px_var(--color-primary)] rounded-2xl w-[400px] h-[500px] object-cover"
          height={1000}
          width={1000}
          src={member?.imageUrl ?? ""}
          alt=""
        />
      </section>

      <section className="max-w-[800px] mx-auto mt-20">
        <p className="text-2xl text-foreground/80 whitespace-pre-line">
        {member?.description || ""}
        </p>
      </section>
    </main>
  );
}
