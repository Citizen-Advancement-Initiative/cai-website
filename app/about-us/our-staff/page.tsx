import Image from "next/image";
import MemberCard from "./_components/MemberCard";
import { members } from "./our-staff.utils";

export default function OurStaff() {
  return (
    <main>
      <section className="mx-auto grid min-h-[80svh] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-28 sm:px-8 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-4xl font-medium capitalize underline underline-offset-8 decoration-primary sm:mb-12 sm:text-5xl sm:underline-offset-20">Our Staff</h2>
          <p className="text-lg text-foreground/60 sm:text-2xl">
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
          className="h-auto w-full rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-secondary)] sm:shadow-[16px_16px_0px_0px_var(--color-secondary)]"
          height={1000}
          width={1000}
          src={"/our-staff/staff.jpg"}
          alt=""
        />
      </section>

      <section className="mx-auto mb-20 max-w-[1400px] px-5 sm:mb-32 sm:px-8">
        <h2 className="mb-8 text-3xl font-medium capitalize sm:text-4xl">
          Meet Our <span className="text-secondary">Staff</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members
            .filter((member) => member.category === "staff")
            .map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-[1400px] px-5 sm:mb-32 sm:px-8">
        <h2 className="mb-8 text-3xl font-medium capitalize sm:text-4xl">
          Meet Our <span className="text-secondary">Consultants</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
