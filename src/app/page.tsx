import herImpactImage from "@/assets/her-impact.jpg";
import Button from "@/components/Button";
import CarouselSection from "./_components/CarouselSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import ImpactCard from "./_components/ImpactCard";
import InfoSection from "./_components/InfoSection";
import JoinUsSection from "./_components/JoinUsSection";
import { achievements } from "./landing.utils";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* hero */}
        <HeroSection />

        <InfoSection />

        {/* Impact */}
        <section className="flex flex-col items-center justify-center h-screen px-8 pb-8">
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

        {/* Inclusivity */}
        <section
          style={{ backgroundImage: `url(${herImpactImage.src})` }}
          className="flex flex-col items-center justify-center h-screen text-transparent bg-center bg-cover bg-clip-text "
        >
          <p className="flex flex-col text-[240px] leading-50 uppercase text-center font-black mb-12">
            <span>Inclusivity</span>
            <span>Matters</span>
          </p>

          <div className="flex gap-4">
            <Button className="px-10 py-5 text-sm font-medium uppercase rounded-full  text-background bg-primary">
              Support us
            </Button>
            <Button className="px-10 py-5 text-sm font-medium uppercase border rounded-full  text-foreground border-foreground">
              About us
            </Button>
          </div>
        </section>

        <CarouselSection />

        <JoinUsSection />
      </main>

      <Footer />
    </>
  );
}
