import Button from "@/components/Button";
import Image from "next/image";

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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-x-0 bottom-0 w-full "
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="z-10 flex flex-col items-center justify-center mt-24 capitalize grow bg-black/10">
        <div className="flex flex-col items-center justify-center  text-background">
          <p className="flex items-center text-[150px] font-semibold gap-10">
            <span className="text-primary">Her</span> Voice Is
          </p>
          <p className="text-[150px] font-semibold">Power</p>
        </div>
        <div className="flex gap-4 mb-20">
          <Button className="px-10 py-5 text-sm font-medium uppercase rounded-full  text-background bg-primary">
            Support us
          </Button>
          <Button className="px-10 py-5 text-sm font-medium uppercase border rounded-full  text-background border-background">
            About us
          </Button>
        </div>
      </div>

      <div className="z-10 flex items-center border-t  border-foreground/20 bg-background/50">
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
