export type NavItem = {
  label: string;
  href?: string;
  subItems?: NavItem[];
};
export const navItems: NavItem[] = [
  {
    label: "What we do",
    subItems: [
      {
        label: "Digital Disability Inclusion",
        href: "/what-we-do/digital-disability-inclusion",
      },
      {
        label: "Women in Governance",
        href: "/what-we-do/women-in-governance",
      },
      {
        label:
          "Sexual and Reproductive Health and Rights (SRHR) for Teenage Girls Living with Disabilities",
        href: "/what-we-do/srhr-teenage-girls-living-with-disabilities",
      },
      {
        label: "Climate Change and Environmental Sustainability",
        href: "/what-we-do/climate-change-environmental-sustainability",
      },
      {
        label: "Elections and Community Peacebuilding",
        href: "/what-we-do/elections-community-peacebuilding",
      },
      {
        label: "Research and Consultancy",
        href: "/what-we-do/research-and-consultancy",
      },
    ],
  },
  {
    label: "Our publications",
    subItems: [
      {
        label: "Blogs",
        href: "/our-publications/blogs",
      },
      {
        label: "Reports",
        href: "/our-publications/reports",
      },
      {
        label: "News papers",
        href: "/our-publications/news-papers",
      },
    ],

  },

  {
    label: "About us",
    href: "/about-us",
    subItems: [
      {
        label: "Our staff",
        href: "/about-us/our-staff",
      },
      {
        label: "Foundation history",
        href: "/about-us/foundation-history",
      },
      {
        label: "Office locations",
        href: "/about-us/office-locations",
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Where we work",
    href: "/where-we-work",
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
    count: 150,
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
    title: "Ideas for inclusive change",
    description:
      "Voices from across our programmes share ideas and expertise to advance inclusive governance and community-led change.",
    imageUrl: "/info/5.jpeg",
  },
  {
    title: "Women shaping civic spaces",
    description:
      "Her Impact equips professional women with the skills, networks, and platforms to influence governance and decision-making.",
    imageUrl: "/info/3.jpeg",
  },
  {
    title: "Digital skills, greater access",
    description:
      "We help learners with disabilities build digital skills and access technology, creating more inclusive opportunities to learn and participate.",
    imageUrl: "/info/1.jpeg",
  },
  {
    title: "Every learner belongs",
    description:
      "Digital inclusion is about ability, not barriers. We support learners with disabilities to develop skills and take part in the digital world.",
    imageUrl: "/info/2.jpeg",
  },

  {
    title: "Dialogue that moves us forward",
    description:
      "Through dialogue and shared learning, we bring community perspectives into conversations about leadership, accountability, and social change.",
    imageUrl: "/info/4.jpeg",
  },

  {
    title: "Stronger through partnership",
    description:
      "We bring women, communities, and institutions together to advance women's leadership and more inclusive participation.",
    imageUrl: "/info/6.jpeg",
  },
  {
    title: "Inspire. Empower. Influence.",
    description:
      "Through Her Impact, women strengthen their leadership, build supportive networks, and grow their influence in civic spaces.",
    imageUrl: "/info/7.jpeg",
  },
  {
    title: "A place for every perspective",
    description:
      "Community dialogue creates space for different perspectives and helps people work together on the issues shaping their lives.",
    imageUrl: "/info/8.jpeg",
  },
  {
    title: "Women leading change",
    description:
      "We support women to contribute to decisions and shape public life, making governance more representative and inclusive.",
    imageUrl: "/info/9.jpeg",
  },
  {
    title: "Leadership with lasting influence",
    description:
      "Learning, connection, and collective action help women turn their leadership into meaningful influence in governance.",
    imageUrl: "/info/10.jpeg",
  },
];
