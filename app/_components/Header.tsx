import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed z-50 inset-x-0 top-0 flex items-center justify-between gap-6 p-6 m-4 mx-6 rounded-full backdrop-blur-md bg-background/80 text-foreground">
      <Logo />

      <NavBar />

      <div className="flex items-center gap-4">
        <Button className="px-6 py-3 uppercase border rounded-full text-sm text-foreground/80 border-foreground/50">
          Get Involved
        </Button>
        <Button className="px-6 py-3 uppercase border rounded-full text-sm text-foreground/80 border-foreground/50">
          Support us
        </Button>
      </div>
    </header>
  );
}
