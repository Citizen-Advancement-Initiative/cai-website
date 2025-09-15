import herImpactImage from "@/assets/her-impact.jpg";
import heroImage from "@/assets/hero-image.jpeg";
import Button from "@/components/Button";
import Image from "next/image";
import CarouselSection from "./_components/CarouselSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import ImpactCard from "./_components/ImpactCard";
import { achievements } from "./landing.utils";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* heroo */}
        <section className="w-full h-screen  flex flex-col px-8">
          <div className="grow capitalize flex flex-col items-center justify-center mt-24">
            <div className=" flex flex-col items-center justify-center ">
              <p className="flex items-center text-[150px] font-semibold gap-10">
                <span className="">Her</span>{" "}
                <span className="w-[300px] h-[180px] overflow-hidden rounded-full ">
                  <Image
                    src={heroImage}
                    alt=""
                    className="w-full h-full scale-150 object-cover object-bottom "
                  />
                </span>{" "}
                <span>Voice</span>
              </p>
              <p className="text-[150px] font-semibold">Is Power</p>
            </div>
            <div className="flex gap-4 mb-20">
              <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background bg-primary">
                Support us
              </Button>
              <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-foreground border border-foreground ">
                About us
              </Button>
            </div>
          </div>

          <div className=" border-t border-foreground/20 flex items-center ">
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/safaricom.png"}
            />
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/ford.png"}
            />
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/sme.png"}
            />
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/safaricom.png"}
            />
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/ford.png"}
            />
            <Image
              className="h-[150px] object-contain"
              alt=""
              width={500}
              height={500}
              src={"/partners/sme.png"}
            />
          </div>
        </section>

        {/* Inclusivity */}
        <section
          style={{ backgroundImage: `url(${herImpactImage.src})` }}
          className="h-screen flex flex-col justify-center items-center bg-center bg-cover bg-clip-text text-transparent "
        >
          <p className="flex flex-col text-[240px] leading-50 uppercase text-center font-black mb-10">
            <span>Inclusivity</span>
            <span>Matters</span>
          </p>

          <div className="flex gap-4">
            <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background bg-primary">
              Support us
            </Button>
            <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-foreground border border-foreground ">
              About us
            </Button>
          </div>
        </section>

        <section className="h-screen flex flex-col items-center justify-center px-8 pb-8">
          <p className="text-6xl font-bold text-foreground mb-6 uppercase mt-[4%]">
            Our <span className="text-primary">Impact</span> Since 2018
          </p>

          <p className="max-w-[70ch] text-center text-gray-600 mb-20">
            We promote social entrepreneurship that empowers women in business,
            young women in leadership and professional women.
          </p>

          <div className="grid grid-cols-4 gap-4 ">
            {achievements.map((achievement) => (
              <ImpactCard key={achievement.title} achievement={achievement} />
            ))}
          </div>
        </section>

        <CarouselSection />
      </main>

      <Footer />
    </>
  );
}
