import Button from "@/components/Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-10 relative">
      <p className="uppercase font-medium bg-primary/10 px-3 py-2.5 text-xs rounded-lg">
        Take action
      </p>

      <h2 className="text-6xl font-bold capitalize max-w-[16ch] text-center leading-20">
        Join us in making a difference
      </h2>

      <div className="flex gap-6 mx-auto items-center justify-center">
        <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background bg-primary">
          Get involved
        </Button>

        <div className="flex gap-2 items-center">
          <p className="text-sm font-medium uppercase text-foreground ">
            Learn More
          </p>

          <a className="border rounded-full p-4 border-foreground/30" href="">
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>

      <Image
        className="rounded-full absolute object-cover size-[120px] top-[15%] left-[20%]"
        alt=""
        src={"/join-us/1.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="rounded-full absolute object-cover size-[220px] top-[40%] left-[10%]"
        alt=""
        src={"/join-us/2.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="rounded-full absolute object-cover size-[280px] bottom-[5%] left-[20%]"
        alt=""
        src={"/join-us/3.jpeg"}
        width={500}
        height={500}
      />
        <Image
          className="rounded-full absolute object-cover size-[280px] top-[15%] right-[20%]"
          alt=""
          src={"/join-us/6.jpeg"}
          width={500}
          height={500}
        />
      <Image
        className="rounded-full absolute object-cover size-[220px] top-[45%] right-[10%]"
        alt=""
        src={"/join-us/5.jpeg"}
        width={500}
        height={500}
      />
      <Image
        className="rounded-full absolute object-cover size-[120px] bottom-[10%] right-[20%]"
        alt=""
        src={"/join-us/4.jpeg"}
        width={500}
        height={500}
      />
    </section>
  );
}
