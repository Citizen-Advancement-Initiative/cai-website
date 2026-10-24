export const values = [
  {
    title: "Diversity",
    description:
      "We are a diverse group of businesswomen and entrepreneurs determined to build a strongly inclusive culture which respects staff and partners for who they are – regardless of gender, age, race, religion, disability or sexual orientation. We believe that our contributions are richer because of our diversity and seek to accelerate progress in equality of opportunity and women’s empowerment, because as two of our most material issues, they are central to our growth and our social impact.",
  },
  {
    title: "Integrity",
    description:
      "We are honest, and transparent; and are committed to engaging, evaluating and communicating the outcomes of our work with integrity. We are committed to the integrity of systems and programs and hold ourselves to higher ethical standards. We are committed to train our staff and people we serve regularly on our ethics and on ethical behavior.",
  },
  {
    title: "Transparency and Accountability",
    description:
      "We acknowledge and apply honesty, transparency and accountability in all our interactions at all levels of our work. We strive for responsible use of resources, fairness, openness and accountability; and therefore, maintain necessary systems and processes in our operations and interactions. We believe in the power of and are open to constructive criticisms. We proactively provide full information needed for collaboration, cooperation and decision making. We are accountable to ourselves, our field, eco-system and the communities that we serve.",
  },
  {
    title: "Communication",
    description:
      "We place a high premium on clear and purposeful communication internally and externally, fostering self-awareness and transparency on needs, plans, and values.",
  },
  {
    title: "Responsibility",
    description:
      "We understand we have a duty of care in relation to staff, women, and the people we serve. We ensure that we safeguard staff, women, children, and partners from any form of harassment including sexual harassment, abuse, or any other form of abuse of power.",
  },
] as const;

export type Value = (typeof values)[number];

export const foundations = [
  {
    title: "Our Mission",
    description:
      "Our mission is to promote emancipatory social entrepreneurship that empowers business and professional women; and upscales their collective action by strengthening their agency, role and leadership in the pursuit of accountable governance, sustainable development and social justice.",
    imageUrl: "/about-us/our-mission.jpeg",
  },
  {
    title: "Our Vision",
    description:
      "We envision a just and sustainable society where women professionals and entrepreneurs harness their collective power and voice to access and influence government; and impact social change.",
    imageUrl: "/about-us/our-vision.jpeg",
  },
] as const;

export type Foundation = (typeof foundations)[number];
