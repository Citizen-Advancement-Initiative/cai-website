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
    <footer className="h-[60vh] grid grid-cols-2 px-8 pt-22 pb-8">
      <section className="flex flex-col justify-between ">
        <Logo />

        <div className="flex gap-4">
          {socialProfiles.map(({ Icon, link }) => (
            <a
              className="border border-foreground/20 p-3 rounded-full"
              key={link}
              href={link}
              target="_blank"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <p className="text-foreground/80 text-sm">
          &copy; {new Date().getFullYear()} Citizen Advancement Initiative | All
          rights served
        </p>
      </section>

      <section className="flex flex-col ">
        <div className="grid grid-cols-2 grow">
          <div className="flex flex-col gap-8">
            <p className="text-foreground/80">Quick Links</p>

            <a target="_blank" className="uppercase font-medium" href="">
              Home
            </a>
            <a target="_blank" className="uppercase font-medium" href="">
              Support us
            </a>
            <a target="_blank" className="uppercase font-medium" href="">
              Careers
            </a>
            <a target="_blank" className="uppercase font-medium" href="">
              Get involved
            </a>
            <a target="_blank" className="uppercase font-medium" href="">
              Partners
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-foreground/80">Contact Us</p>

            <a
              className="uppercase font-medium flex items-center gap-4"
              href="mailto:meda@cai.or.ke"
            >
              <span className="border-1 border-foreground/20 p-3 rounded-full">
                <EnvelopeIcon className="size-5" />
              </span>{" "}
              Send Email
            </a>

            <a
            href="tel:+254729463996"
              className="uppercase font-medium flex items-center gap-4"
            >
              <span className="border-1 border-foreground/20 p-3 rounded-full">
                <PhoneIcon className="size-5" />
              </span>{" "}
              Make a call
            </a>
          </div>
        </div>

        <p className="text-foreground/80 text-sm">
          Privacy policy | Terms of service
        </p>
      </section>
    </footer>
  );
}
