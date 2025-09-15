import caiWebsiteLogo from "@/assets/cai-website-logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Image width={200} height={20} src={caiWebsiteLogo} alt="Website logo" />
  );
}
