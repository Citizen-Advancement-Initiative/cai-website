import Logo from "@/components/Logo";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialProfile = {
  link: string;
  Icon:
    | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
    | IconType;
};

const socialProfiles: SocialProfile[] = [
  {
    link: "https://www.linkedin.com/company/citizen-advancement-initiative",
    Icon: LinkedInLogoIcon,
  },
  {
    link: "https://www.instagram.com/cai.kenya__",
    Icon: InstagramLogoIcon,
  },
  {
    link: "",
    Icon: FaYoutube,
  },

  {
    link: "",
    Icon: FaTiktok,
  },
  {
    link: "",
    Icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-end h-screen ">
      <div className="grid grid-cols-2 p-8 gap-y-16 mt-auto">
        <section className="flex flex-col justify-between m ">
          <Logo />
          <div className="flex gap-4">
            {socialProfiles.map(({ Icon, link }) => (
              <a
                className="p-3 border rounded-full border-foreground/20"
                key={link}
                href={link}
                target="_blank"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col ">
          <div className="grid grid-cols-2 grow">
            <div className="flex flex-col gap-8">
              <p className="text-foreground/80">Quick Links</p>
              <a target="_blank" className="font-medium uppercase" href="">
                Home
              </a>
              <a target="_blank" className="font-medium uppercase" href="">
                Support us
              </a>
              <a target="_blank" className="font-medium uppercase" href="">
                Careers
              </a>
              <a target="_blank" className="font-medium uppercase" href="">
                Get involved
              </a>
              <a target="_blank" className="font-medium uppercase" href="">
                Partners
              </a>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-foreground/80">Contact Us</p>
              <a
                className="flex items-center gap-4 font-medium uppercase"
                href="mailto:meda@cai.or.ke"
              >
                <span className="p-3 rounded-full border-1 border-foreground/20">
                  <EnvelopeIcon className="size-5" />
                </span>{" "}
                Send Email
              </a>
              <a
                href="tel:+254729463996"
                className="flex items-center gap-4 font-medium uppercase"
              >
                <span className="p-3 rounded-full border-1 border-foreground/20">
                  <PhoneIcon className="size-5" />
                </span>{" "}
                Make a call
              </a>
            </div>
          </div>
        </section>
        <p className="col-span-2 text-6xl text-center uppercase text-foreground/5 font-bold">
          No one left behind
        </p>
        <p className="text-sm text-foreground/80">
          &copy; {new Date().getFullYear()} Citizen Advancement Initiative | All
          rights served
        </p>
        <p className="text-sm text-right text-foreground/80">
          Privacy policy | Terms of service
        </p>
      </div>
    </footer>
  );
}
