import Button from "@/components/Button";
import Image from "next/image";
import HeroVideo from "./HeroVideo";

const partnerLogos = [
  "/partners/safaricom.png",
  "/partners/ford.png",
  "/partners/sme.png",
  "/partners/safaricom.png",
  "/partners/ford.png",
  "/partners/sme.png",
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col w-full h-screen overflow-hidden ">
    <HeroVideo/>

      <div className="z-10 flex flex-col items-center justify-center capitalize grow bg-black/10">
        <p className="text-background text-center text-[180px] max-w-[11ch] leading-50 font-semibold">
          <span className="text-primary">Her</span> Voice Is Power
        </p>

        <div className="flex gap-4 mt-8">
          <Button className="px-10 py-5 text-sm font-medium uppercase rounded-full text-background bg-primary">
            Support us
          </Button>
          <Button className="px-10 py-5 text-sm font-medium uppercase border rounded-full text-background border-background">
            About us
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center border-t border-foreground/20 bg-background/50">
        {partnerLogos.map((logo, idx) => (
          <Image
            key={idx}
            className="h-[120px] object-contain"
            alt=""
            width={500}
            height={500}
            src={logo}
          />
        ))}
      </div>
    </section>
  );
}
