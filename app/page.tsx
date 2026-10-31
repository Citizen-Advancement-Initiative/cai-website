import herImpactImage from "@/assets/her-impact.jpg";
import InfoModal from "@/components/InfoModal";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import CarouselSection from "./_components/CarouselSection";
import HeroSection from "./_components/HeroSection";
import ImpactCard from "./_components/ImpactCard";
import InfoSection from "./_components/InfoSection";
import JoinUsSection from "./_components/JoinUsSection";
import { achievements } from "./landing.utils";

export default function Home() {
  return (
    <main>
      <Suspense fallback={null}>
        <InfoModal />
      </Suspense>

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

       
      </section>

      <CarouselSection />

      <JoinUsSection />
    </main>
  );
}
