import Button from "@/components/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-screen  flex flex-col overflow-hidden relative ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" absolute inset-x-0 bottom-0 w-full"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="grow capitalize flex flex-col items-center justify-center mt-24 z-10 bg-black/10">
        <div className=" flex flex-col items-center justify-center text-background">
          <p className="flex items-center text-[150px] font-semibold gap-10">
            <span className="text-primary">Her</span> Voice Is
          </p>
          <p className="text-[150px] font-semibold">Power</p>
        </div>
        <div className="flex gap-4 mb-20">
          <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background bg-primary">
            Support us
          </Button>
          <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background border border-background ">
            About us
          </Button>
        </div>
      </div>

      <div className=" border-t border-foreground/20 flex items-center z-10 bg-background/50 ">
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/safaricom.png"}
        />
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/ford.png"}
        />
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/sme.png"}
        />
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/safaricom.png"}
        />
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/ford.png"}
        />
        <Image
          className="h-[120px] object-contain"
          alt=""
          width={500}
          height={500}
          src={"/partners/sme.png"}
        />
      </div>
    </section>
  );
}
