export const members = [
  {
    name: "Benard Meda",
    role: "Executive Director",
    imageUrl: "/our-staff/benard.jpeg",
    category: "staff",
    description: `Mr. Meda Benard Othero is the founder and Executive Director of Citizen Advancement Initiative (CAI). His enthusiasm and expertise are on good governance to which he draws his experience from continental organizations such as the African Peer Review Mechanism, an agency of the African Union. He is currently pursuing a Doctor of Philosophy in International Studies at the Institute of Diplomacy and International Studies, University of Nairobi. He is a former adjunct lecturer at The Catholic University of Eastern Africa (CUEA), conversely, he took students through political science and international relations disciplines.`,
  },
  {
    name: "Joy Adallah",
    role: "Program and Legal Manager",
    imageUrl: "/our-staff/adallah.jpeg",
    category: "staff",
    description: `Joy is the Legal Manager at Citizen Advancement Initiative (CAI), where she leads legal strategy, compliance, and policy engagement. She has worked across East Africa, bringing expertise in environmental governance, human rights, and sustainable development. At CAI, she also drives mentorship and capacity-building initiatives, helping to shape the next generation of leaders. Currently pursuing a Master of Laws in Environmental Law, Joy combines academic insight with practical experience to advance inclusive legal and policy solutions at both national and regional levels.`,
  },
  {
    name: "Rebecca Atieno",
    role: "Program Coordinator",
    imageUrl: "/our-staff/rebecca.jpeg",
    category: "staff",
    description: `Rebecca Atieno serves as the Program Coordinator at (CAI)an organisation dedicated to empowering women and teenage girls through education, mentorship, and capacity-building initiatives. With a background in Sociology and a minor in Political Science, she brings a deep understanding of social systems, gender dynamics, and community development to her work.

 Her approach combines strategic planning with empathy, ensuring that programs not only address immediate needs but also create long-term opportunities for growth and self-reliance.

Driven by a passion for inclusion and transformation, She is committed to amplifying the voices of women and girls and creating safe spaces where they can thrive. She believes in the power of education, advocacy, and mentorship to break cycles of inequality and build stronger communities.`,
  },
  {
    name: "Chripine Obat",
    role: "Chief Accountant",
    imageUrl: "/our-staff/placeholder.jpg",
    category: "staff",
    description: `N/A`,
  },
  {
    name: "Rose Oketch",
    role: "Digital Consultant",
    imageUrl: "/our-staff/rose.png",
    category: "consultant",
    description: `Rose Oketch is a dedicated Software Engineer, Digital Consultant, and Educator with a passion for empowering learners and organizations through technology. With a strong foundation in computer science and hands-on industry experience, Rose combines technical expertise with a love for teaching, helping individuals and institutions harness the power of digital innovation.

Currently serving as an IGCSE Computer Science Teacher and Coding Tutor at Caplora International School, Rose also teaches at Algorithmics Global as a Python, AI, and Frontend Web Development Instructor. In these roles, they specialize in Python programming, artificial intelligence, web development, Scratch, and Visual Programming, inspiring young learners to explore coding while nurturing creativity, problem-solving, and curiosity.

As a Software Engineer, Rose brings real-world development experience into the classroom. Their work spans full-stack web development, frontend technologies, version control (Git/GitHub), and responsive design, with a focus on creating practical, project-based learning experiences. At Elimu 4 Tech, they mentor students in software development, guiding them through real-world projects, and at CodeCrafters Bootcamp, they provide training in frontend frameworks and testing methodologies to prepare learners for industry standards.

In addition, Rose is currently a Digital Consultant and Trainer at Citizen Advancement Initiative, where they lead the No One Left Behind project. This initiative is dedicated to training teenage girls living with disabilities in vital digital skills, ensuring inclusivity and equal opportunities in technology. As the trainer and facilitator, Rose plays a key role in equipping these young learners with the confidence and knowledge to thrive in the digital era.

With a unique blend of teaching, mentorship, and software engineering practice, Rose fosters engaging and interactive learning environments. Their mission is to make programming accessible, enjoyable, and impactful, equipping students with the technical and creative skills needed to succeed in today’s fast-evolving digital landscape.`,
  },
  {
    name: "Gabriel Okumu",
    role: "Digital Consultant",
    imageUrl: "/our-staff/placeholder.jpg",
    category: "consultant",
    description: `N/A`,
  },
  {
    name: "Maxine Mwendia",
    role: "Monitoring and Evaluation Officer",
    imageUrl: "/our-staff/maxine.jpeg",
    category: "consultant",
    description: `Ms.Maxine Mwendia serves as the Monitoring and Evaluation Consultant. She brings in expertise in designing and implementing Monitoring and Evaluation tools and systems, interpreting data into actionable decisions and conducting program evaluation. She possess a rich background in banking, customer service, higher learning lecturer, research and strategic planning. In return, these build capacity to drive measurable impact in the society and institutions. Her passion is giving back to the society and serving the community. 
Maxine holds a Master’s degree in International Studies and a Bachelor of Commerce degree from The University of Nairobi.`,
  },
  {
    name: "Joseph Masembe",
    role: "Regional Climate change consultant",
    imageUrl: "/our-staff/placeholder.jpg",
    category: "consultant",
    description: `Joseph Masembe, is the Founder of Uganda’s Little Hands Go Green, as our Regional Director for Climate Change Advocacy in East Africa at the Citizen Advancement Initiative.

Joseph brings with him a wealth of experience in championing children and youth-led climate action, environmental education, advocacy and sustainable development across the Global South and beyond . His experience in Climate Change Advocacy in the Civil Society Space & hi  leadership strengthens our efforts to advance inclusive, community-driven climate advocacy solutions and empower the next generation to be at the forefront of resilience, sustainability  and climate  advocacy.`,
  },
] as const;

export type Member = (typeof members)[number];
