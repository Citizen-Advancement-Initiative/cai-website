export type NavItem = {
  label: string;
  href?: string;
  subItems?: NavItem[];
};
export const navItems: NavItem[] = [
  {
    label: "What we do",
    href: "/what-we-do",
    subItems: [
      {
        label: "Education on digital skills",
      },
      {
        label: "Digital disability inclusion",
      },
      {
        label: "Sexual reproduction health rights",
      },
      {
        label: "Climate change",
      },
      {
        label: "Women in governance",
      },
    ],
  },
  {
    label: "About us",
    href: "/about-us",
    subItems: [
      {
        label: "Our staff",
      },
      {
        label: "Foundation history",
      },
      {
        label: "Office locations",
      },
    ],
  },
  {
    label: "Where we work",
    subItems: [
      {
        label: "Kenya",
      },
      {
        label: "Uganda",
      },
    ],
  },
  {
    label: "Our publications",
    subItems: [
      {
        label: "Blogs",
      },
      {
        label: "Reports",
      },
      {
        label: "News papers",
      },
    ],
  },
  {
    label: "Our projects",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Get involved",
  },
];
