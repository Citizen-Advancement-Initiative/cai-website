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
        label: "Research and consultancy",
      },
    ],
  },
  {
    label: "About us",
    href: "/about-us",
    subItems: [
      {
        label: "Our staff",
        href:"/our-staff"
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
    description: `Trained and supported 30 teenage girls living with disabilities to access digital skills, tools and opportunities.`,
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
export const cardInfos = [
  {
    title: "Ut enim ad",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    imageUrl: "/info/5.jpeg",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    imageUrl: "/info/3.jpeg",
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque vel justo accumsan gravida.",
    imageUrl: "/info/1.jpeg",
  },
  {
    title: "Consectetur adipiscing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageUrl: "/info/2.jpeg",
  },

  {
    title: "At vero eos",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    imageUrl: "/info/4.jpeg",
  },

  {
    title: "Nemo enim ipsam",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    imageUrl: "/info/6.jpeg",
  },
  {
    title: "Neque porro quisquam",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    imageUrl: "/info/7.jpeg",
  },
  {
    title: "Quis autem vel",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/info/8.jpeg",
  },
  {
    title: "Excepteur sint occaecat",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/info/9.jpeg",
  },
  {
    title: "Duis aute irure",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    imageUrl: "/info/10.jpeg",
  },
];
