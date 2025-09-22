import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const staff = [
  {
    name: "Benard Meda",
    role: "Executive Director",
    imageUrl: "/our-staff/benard.jpeg",
  },
  {
    name: "Joy Adallah",
    role: "Program and Legal Manager",
    imageUrl: "/our-staff/benard.jpeg",
  },
  {
    name: "Rebecca Atieno",
    role: "Program Coordinator",
    imageUrl: "/our-staff/rebecca.jpeg",
  },
  {
    name: "Chripine Obat",
    role: "Chief Accountant",
    imageUrl: "/our-staff/rose.png",
  },
];

const consultants = [
  {
    name: "Rose Oketch",
    role: "Digital Consultant",
    imageUrl: "/our-staff/rose.png",
  },
  {
    name: "Gabriel Okumu",
    role: "Digital Consultant",
    imageUrl: "/our-staff/rose.png",
  },
  {
    name: "Maxine Mwendia",
    role: "Monitoring and Evaluation Officer",
    imageUrl: "/our-staff/rose.png",
  },
  {
    name: "Joseph Masembe",
    role: "Regional Climate change consultant",
    imageUrl: "/our-staff/rose.png",
  },
];

export default function OurStaff() {
  return (
    <main>
      <section className="max-w-[1400px] mx-auto  grid grid-cols-2 h-screen items-center gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-5xl font-medium capitalize">Our Staff</h2>
          <p className="text-2xl text-foreground/60 ">
            Our policy direction, and ultimate accountability is drawn from a
            five-member board of Directors. Our management is vested in the
            Executive Director - an officer of the Board, who provides program
            leadership, implements Board policies and oversees the functioning
            of the Secretariat. With an office in Nairobi and Kampala, we work
            in Kenya and Uganda, and aspire to expand to cities of Dar-es-salaam
            in Tanzania.
          </p>
        </div>

        <Image
          className="shadow-[16px_16px_0px_0px_var(--color-secondary)] rounded-2xl"
          height={1000}
          width={1000}
          src={"/our-staff/staff.jpg"}
          alt=""
        />
      </section>

      <section className="max-w-[1400px] mx-auto mb-32">
        <h2 className="mb-8 text-4xl font-medium capitalize">
          Meet Our <span className="text-secondary">Staff</span>
        </h2>

        <div className="flex gap-8">
          {staff.map((member) => (
            <article key={member.name}>
              <Image
                className="size-[300px] rounded-4xl object-cover"
                height={300}
                width={300}
                src={member.imageUrl}
                alt=""
              />

              <ArrowRightIcon
                strokeWidth={2}
                className="size-6 mt-4  text-secondary"
              />
              <p className="text-sm font-medium mt-4 text-foreground/50">
                {member.role}
              </p>
              <p className="font-semibold mt-3 text-lg text-foreground">
                {member.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto mb-32 ">
        <h2 className="mb-8 text-4xl font-medium capitalize">
          Meet Our <span className="text-secondary">Consultants</span>
        </h2>

        <div className="flex gap-8">
          {consultants.map((member) => (
            <article key={member.name}>
              <Image
                className="size-[300px] rounded-4xl object-cover"
                height={300}
                width={300}
                src={member.imageUrl}
                alt=""
              />

              <ArrowRightIcon
                strokeWidth={2}
                className="size-6 mt-4  text-secondary"
              />
              <p className="text-sm font-medium mt-4 text-foreground/50">
                {member.role}
              </p>
              <p className="font-semibold mt-3 text-lg text-foreground">
                {member.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
