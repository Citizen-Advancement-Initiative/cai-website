import caiWebsiteLogo from "@/assets/cai-website-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image width={200} height={20} src={caiWebsiteLogo} alt="Website logo" />
    </Link>
  );
}
