import caiWebsiteLogo from "@/assets/cai-website-logo.png";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex items-center justify-between gap-6 px-8 py-8 m-4 rounded-full backdrop-blur-md bg-black/30 text-white">
      <Image width={262} height={49} src={caiWebsiteLogo} alt="Website logo" />

      <NavBar />

      <div className="">
        <Link
          href={"/support-us"}
          className="px-5 py-2 uppercase border text-lg rounded-full border-white/80 text-white/80"
        >
          Support us
        </Link>
      </div>
    </header>
  );
}
