import Logo from "@/components/Logo";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed z-50 inset-x-0 top-0 flex items-center justify-between gap-6 p-6 m-4 mx-6 rounded-full backdrop-blur-md bg-background/80 text-foreground">
      <Logo />

      <NavBar />

      <div className="">
        <Link
          href={"/support-us"}
          className="px-6 py-3 uppercase border rounded-full text-sm text-foreground/80 border-foreground/50"
        >
          Support us
        </Link>
      </div>
    </header>
  );
}
