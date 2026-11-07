import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes, Suspense } from "react";
import { IconType } from "react-icons";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CurrentYear from "./CurrentYear";

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
  // {
  //   link: "",
  //   Icon: FaYoutube,
  // },
  {
    link: "https://www.tiktok.com/@caikenya?_r=1&_t=ZS-9AgBZJKXJZs",
    Icon: FaTiktok,
  },
  {
    link: "https://x.com/caikenya",
    Icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black px-5 pt-14 text-background sm:px-8 sm:pt-20">
      <div className="mx-auto grid w-full max-w-[1400px] grow grid-cols-1 gap-10 pb-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-16">
        <section className="">
          <p className="text-xl uppercase underline underline-offset-8 decoration-primary sm:text-2xl">
            What we do
          </p>
          <p className="mt-5 text-base text-background/70 sm:mt-8 sm:text-lg">
            We Help female professionals & entrepreneurs in governance,
            development and social justice in Kenya and Uganda.
          </p>
        </section>

        <section className="">
          <p className="text-xl uppercase underline underline-offset-8 decoration-primary sm:text-2xl">
            Contact us
          </p>
          <p className="mt-5 text-base text-background/70 sm:mt-8 sm:text-lg">
            <span className="font-medium">Phone: </span>{" "}
            <span>+254 729 473 996</span>
          </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">
            <span className="font-medium">Email: </span>{" "}
            <span>+info@cai.or.ke</span>
          </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">
            <span className="font-medium">Office: </span>{" "}
            <span>Hurlingham Argwings Khodek Nairobi Kenya</span>
          </p>
        </section>

        <section className="">
          <p className="text-xl uppercase underline underline-offset-8 decoration-primary sm:text-2xl">
            Get involved
          </p>

          <p className="mt-5 text-base text-background/70 sm:mt-8 sm:text-lg">Donate </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">Partner </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">Resources </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">Attend an event </p>
          <p className="mt-4 text-base text-background/70 sm:text-lg">Empower</p>
        </section>

        <section className="">
          <p className="text-xl uppercase underline underline-offset-8 decoration-primary sm:text-2xl">
            Blogs
          </p>
        </section>
      </div>

      <section className="w-full border-t border-background/40 py-6 sm:py-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm sm:text-base">
            &copy;{" "}
            <Suspense>
              <CurrentYear />
            </Suspense>{" "}
            Citizens Advancement Initiative | All rights Reserved
          </p>
          <div className="flex gap-3">
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
