import herImpactImage from "@/assets/her-impact.jpg";
import InfoModal from "@/components/InfoModal";
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
      <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 py-16 sm:px-8">
        <p className="mb-6 mt-8 text-center text-4xl font-bold uppercase text-foreground sm:text-5xl lg:text-6xl">
          Our <span className="text-primary">Impact</span> Since 2018
        </p>

        <p className="mb-12 max-w-[70ch] text-center text-sm text-gray-600 sm:mb-20 sm:text-base">
          We promote social entrepreneurship that empowers women in business,
          young women in leadership and professional women.
        </p>

        <div className="grid w-full max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <ImpactCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* Inclusivity */}
      <section
        style={{ backgroundImage: `url(${herImpactImage.src})` }}
        className="flex min-h-[70svh] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-transparent bg-clip-text sm:min-h-screen"
      >
        <p className="mb-12 flex flex-col text-center text-[clamp(3rem,15vw,15rem)] leading-[0.9] font-black uppercase">
          <span>Inclusivity</span>
          <span>Matters</span>
        </p>

       
      </section>

      <CarouselSection />

      <JoinUsSection />
    </main>
  );
}
