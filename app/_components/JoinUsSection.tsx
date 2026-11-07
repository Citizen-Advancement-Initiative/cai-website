import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function JoinUsSection() {
  return (
    <section className="relative flex min-h-[680px] items-center justify-center gap-8 overflow-hidden px-5 py-20 sm:min-h-screen sm:gap-10">
      <p className="uppercase font-medium bg-primary/10 px-3 py-2.5 text-xs rounded-lg">
        Take action
      </p>

      <h2 className="z-10 max-w-[16ch] text-center text-4xl font-bold capitalize leading-tight sm:text-5xl lg:text-6xl">
        Join us in making a difference
      </h2>

      <div className="z-10 mx-auto flex items-center justify-center gap-6">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-medium uppercase text-foreground ">
            Learn More
          </p>

          <Link className="border rounded-full p-4 border-foreground/30" href="/about-us">
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </div>

      <Image
        className="absolute left-[5%] top-[10%] size-16 rounded-full object-cover sm:left-[20%] sm:top-[15%] sm:size-[120px]"
        alt=""
        src={"/join-us/1.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[2%] top-[38%] size-24 rounded-full object-cover sm:left-[10%] sm:size-[220px]"
        alt=""
        src={"/join-us/2.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-[5%] left-[8%] size-28 rounded-full object-cover sm:left-[20%] sm:size-[280px]"
        alt=""
        src={"/join-us/3.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="absolute right-[5%] top-[12%] size-24 rounded-full object-cover sm:right-[20%] sm:size-[280px]"
        alt=""
        src={"/join-us/6.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="absolute right-[2%] top-[42%] size-20 rounded-full object-cover sm:right-[10%] sm:size-[220px]"
        alt=""
        src={"/join-us/5.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-[8%] right-[8%] size-16 rounded-full object-cover sm:right-[20%] sm:size-[120px]"
        alt=""
        src={"/join-us/1.jpeg"}
        width={500}
        height={500}
      />
    </section>
  );
}
