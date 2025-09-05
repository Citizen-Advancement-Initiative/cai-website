import caiWebsiteLogo from "@/assets/cai-website-logo.png";
import heroImage from "@/assets/hero-image.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 flex items-center justify-between gap-6 px-6 py-6 mx-2 my-2 rounded-full backdrop-blur-md bg-black/50">
        <Image
          width={262}
          height={49}
          src={caiWebsiteLogo}
          alt="Website logo"
        />

        <nav className="text-white">
          <ul className="flex gap-6 text-lg ">
            <li>
              <p>What we do</p>
            </li>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Where we work</p>
            </li>
            <li>
              <p>Our publications</p>
            </li>
            <li>
              <p>Our projects</p>
            </li>
            <li>
              <p>Gallery</p>
            </li>
            <li>
              <p>Get involved</p>
            </li>
           
          </ul>
        </nav>

        <div>
          <button className="px-6 py-3 text-lg border rounded-full border-white/80 text-white/80">
            Support us
          </button>
        </div>
      </header>

      <main
        style={{ backgroundImage: `url(${heroImage.src})` }}
        className="w-full h-screen bg-bottom bg-cover"
      ></main>
    </>
  );
}
