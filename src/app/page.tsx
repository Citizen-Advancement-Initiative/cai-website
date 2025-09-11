import herImpactImage from "@/assets/her-impact.jpg";
import heroImage from "@/assets/hero-image.jpeg";
import Button from "@/components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Header from "./_components/Header";
import ImpactCard from "./_components/ImpactCard";
import { achievements } from "./landing.utils";
import CarouselSection from "./_components/CarouselSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          style={{ backgroundImage: `url(${heroImage.src})` }}
          className="w-full h-screen bg-bottom bg-cover flex flex-col"
        >
          <div className="mt-auto h-1/3 bg-black/50 flex items-center justify-center">
            <p className="text-5xl text-white text-center max-w-[80%] leading-16">
              We respond to the limited collective engagement of special
              interest groups in governance, sustainable development, and social
              justice in Kenya & Uganda.
              <a
                href=""
                className=" border-primary font-medium border-2 rounded-lg px-4 py-2 ml-8 inline-flex items-center gap-2 text-lg"
              >
                <ArrowRightIcon className="size-6 inline" />
                <span>What we do</span>
              </a>
            </p>
          </div>
        </section>

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

    <CarouselSection/>
      </main>
    </>
  );
}
