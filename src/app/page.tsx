import heroImage from "@/assets/hero-image.jpeg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Header from "./_components/Header";

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
      </main>
    </>
  );
}
