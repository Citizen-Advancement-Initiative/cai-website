import Image from "next/image";
import MemberCard from "./_components/MemberCard";
import { members } from "./our-staff.utils";

export default function OurStaff() {
  return (
    <main>
      <section className="max-w-[1400px] mx-auto  grid grid-cols-2 h-screen items-center gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="mb-12 text-5xl font-medium capitalize underline underline-offset-20 decoration-primary">Our Staff</h2>
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
          {members
            .filter((member) => member.category === "staff")
            .map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto mb-32 ">
        <h2 className="mb-8 text-4xl font-medium capitalize">
          Meet Our <span className="text-secondary">Consultants</span>
        </h2>

        <div className="flex gap-8">
          {members
            .filter((member) => member.category === "consultant")
            .map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
        </div>
      </section>
    </main>
  );
}
