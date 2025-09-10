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
      {
        label: "Our Research",
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

export type Achievement = {
  title: string;
  count: number;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "Digital disability inclusion",
    count: 30,
    description:
      `Trained and supported 30 teenage girls living with disabilities to access digital skills, tools and opportunities.`,
  },
  {
    title: "Women in civic space",
    count: 100,
    description:
      "Empowered 100 women to actively participate in leadership, governance, and community decision-making.",
  },
  {
    title: "Sexual reproduction health rights",
    count: 50,
    description:
      "Reached 50 youth and women with education and advocacy on reproductive health and rights.",
  },
  {
    title: "Women in entrepreneurship",
    count: 100,
    description:
      "Supported 100 women with skills, mentorship, and resources to grow sustainable businesses.",
  },
];
