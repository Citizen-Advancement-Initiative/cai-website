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
    <footer className="h-[70vh] bg-black text-background pt-20  flex flex-col">
      <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-16 grow">
        <section className="">
          <p className="text-2xl uppercase underline underline-offset-8 decoration-primary">
            What we do
          </p>
          <p className="mt-8 text-background/70 text-lg">
            We Help female professionals & entrepreneurs in governance,
            development and social justice in Kenya and Uganda.
          </p>
        </section>

        <section className="">
          <p className="text-2xl uppercase underline underline-offset-8 decoration-primary">
            Contact us
          </p>
          <p className="mt-8 text-background/70 text-lg">
            <span className="font-medium">Phone: </span>{" "}
            <span>+254 729 473 996</span>
          </p>
          <p className="mt-4 text-background/70 text-lg">
            <span className="font-medium">Email: </span>{" "}
            <span>+info@cai.or.ke</span>
          </p>
          <p className="mt-4 text-background/70 text-lg">
            <span className="font-medium">Office: </span>{" "}
            <span>Hurlingham Argwings Khodek Nairobi Kenya</span>
          </p>
        </section>

        <section className="">
          <p className="text-2xl uppercase underline underline-offset-8 decoration-primary">
            Get involved
          </p>

          <p className="mt-8 text-background/70 text-lg">Donate </p>
          <p className="mt-4 text-background/70 text-lg">Partner </p>
          <p className="mt-4 text-background/70 text-lg">Resources </p>
          <p className="mt-4 text-background/70 text-lg">Attend an event </p>
          <p className="mt-4 text-background/70 text-lg">Empower</p>
        </section>

        <section className="">
          <p className="text-2xl uppercase underline underline-offset-8 decoration-primary">
            Blogs
          </p>
        </section>
      </div>

      <section className="py-8 border-t border-background/40 w-full">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between ">
          <p>
            &copy; 2025 Citizens Advancement Initiative | All rights Reserved
          </p>
          <div className="flex gap-4">
            {socialProfiles.map(({ Icon, link }, idx) => (
              <a
                className="p-3 border rounded-full border-foreground/20"
                key={idx}
                href={link}
                target="_blank"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
