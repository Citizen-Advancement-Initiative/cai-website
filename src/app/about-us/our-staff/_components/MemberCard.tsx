import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Member } from "../our-staff.utils";

type Props = {
  member: Member;
};

export default function MemberCard({ member }: Props) {
  const memberLink = `/about-us/our-staff/${member.name.replace(" ", "-").toLowerCase()}`;

  return (
    <Link href={memberLink}>
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
    </Link>
  );
}
