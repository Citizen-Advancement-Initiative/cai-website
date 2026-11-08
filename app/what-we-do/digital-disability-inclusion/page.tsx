import CenteredSection from "@/components/CenteredSection";
import Main from "@/components/Main";
import ShowCaseGrid from "@/components/ShowCaseGrid";
import Text from "@/components/Text";
import Image from "next/image";

export default function DigitalDisabilityInclusion() {
  return (
    <Main className="">
      <CenteredSection className="mt-24 grid min-h-[70svh] grid-cols-1 items-center justify-center gap-8 py-10 md:grid-cols-2">
        <div>
          <Text variant="heading">Digital Disability Inclusion </Text>
          <Text className="space-y-3">
            Through the No One Left Behind initiative, we partner with three
            special needs schools to promote digital inclusion by equipping
            learners with essential digital skills, including digital literacy,
            online safety, digital freelancing and artificial intelligence. We
            address accessibility barriers through assistive technologies and
            teacher training in inclusive education, ensuring learners with
            disabilities can independently access technology and digital
            opportunities.
          </Text>
        </div>

        <div className="space-y-16">
          <Image
            className="aspect-video min-h-125 w-full rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-secondary)] sm:shadow-[16px_16px_0px_0px_var(--color-secondary)] "
            src="/digital-disability-inclusion/dsi-hero-2.jpeg"
            width={1000}
            height={1000}
            alt="Learners taking part in digital skills training."
          />
        </div>
      </CenteredSection>

      <CenteredSection className="mt-24">
        <Text variant="sub-heading">
          Joyland Special School for the Physically Challenged – Kisumu
        </Text>
        <Text className="text-base">
          At Joyland Special School, we empower learners with physical
          disabilities through digital literacy training and assistive
          technologies such as voice typing, enabling independent access to
          computers and digital tools. We also train teachers in inclusive
          teaching practices and accessible technology integration, equipping
          learners with practical skills for education, communication and future
          employment.
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Assistive Technology in Action",
              description:
                "Students at Joyland Special School actively participate in the Digital Club, where they learn to use voice-typing assistive technology to overcome digital accessibility barriers, develop independent computer skills, create digital content and build confidence in using technology for learning, communication and future digital opportunities.",
              imageUrl: "/digital-disability-inclusion/assistive-tech.jpeg",
            },
            {
              title: "From Typing with Legs to Voice-Enabled Independence",
              description:
                "Meet Rukia Harun, a student at Joyland Special School. Before the introduction of assistive technology, Rukia relied on her legs to operate the computer keyboard because she was born without upper limbs. Through our digital inclusion programme, Rukia was introduced to voice-typing assistive software, enabling her to dictate text and interact with her computer using speech. This has transformed her digital learning experience, allowing her to work more efficiently, express herself digitally and use computers with greater independence.",
              videoUrl: "/digital-disability-inclusion/dsi-hero.mp4",
            },
            {
              title: "Peer-to-Peer Empowerment",
              description:
                "A student confidently demonstrates computer skills to her classmates, fostering collaboration and inspiring others to explore the digital world.",
              imageUrl: "/digital-disability-inclusion/peer-to-peer.jpeg",
            },
          ]}
        />
      </CenteredSection>

      <CenteredSection className="mt-24">
        <Text variant="sub-heading">Kibos Special School for the Blind</Text>
        <Text className="text-base space-y-2">
          <p>
            At Kibos School for the Blind, our intervention focuses on removing
            visual barriers that limit learners&apos; access to computers,
            smartphones and digital learning resources. Learners have received
            practical training in digital literacy, online safety and
            cybersecurity, online marketing, digital freelancing and artificial
            intelligence, equipping them with skills for independent learning,
            communication, creativity and future digital opportunities.
          </p>

          <p>
            To promote independent access to technology, we introduced assistive
            solutions including <b>JAWS and NVDA</b> screen readers for
            computers,
            <b>TalkBack</b> for Android devices, <b>Seeing AI</b> for
            recognizing and reading visual information, and <b>Be My Eyes</b>{" "}
            for AI-powered and human visual assistance. These technologies
            enable learners to access digital content through speech, audio
            feedback and accessible interfaces, helping them interact with
            computers and smartphones more independently.
          </p>
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Learning Through Sound",
              description:
                "A student at Kibos Special School explores digital skills using JAWS screen reader software, demonstrating how assistive technology makes computer learning accessible and empowering.",
              imageUrl: "/digital-disability-inclusion/lts.jpeg",
            },
            {
              title: "Technology Learning, Side by Side",
              description:
                "Students gather around computers and assistive devices as their instructor leads a digital skills lesson. Hands-on training helps make technology more accessible while building learners' confidence and independence.",
              imageUrl:
                "/digital-disability-inclusion/kibos-digital-skills-workshop.jpeg",
              imageAlt:
                "An instructor leads a digital skills lesson as Kibos students work with computers and assistive devices.",
            },
            {
              title: "Discovering Digital Tools Together",
              description:
                "Students and their instructor work together at a computer during a practical lesson. By learning collaboratively, students can explore accessible technology and develop skills for more independent digital learning.",
              imageUrl:
                "/digital-disability-inclusion/kibos-collaborative-learning.jpeg",
              imageAlt:
                "Students and an instructor gather around a computer to learn digital skills together.",
            },
            {
              title:
                "Accessible Learning Materials: Bringing Digital Skills to Learners Through Braille",
              description:
                "To promote inclusive access to digital skills training at Kibos School for the Blind, we transcribed key learning modules into Braille, ensuring that learners could independently access and engage with the training content. The adapted materials include modules on Cybersecurity and Online Safety and Online Marketing, enabling visually impaired learners to study essential digital concepts through an accessible format. This initiative reinforces our commitment to ensuring that disability does not become a barrier to accessing digital knowledge, building skills and participating in the digital economy.",
              imageUrl:
                "/digital-disability-inclusion/kibos-braille-training-materials.jpeg",
              imageAlt:
                "Braille copies of CAI's online marketing and digital freelancing training materials.",
            },
          ]}
        />
      </CenteredSection>

      <CenteredSection className="mt-24">
        <Text variant="sub-heading">
          Maseno School for the Deaf: Advancing Inclusive Communication Through
          AI
        </Text>
        <Text className="text-base space-y-2">
          <p>
            At Maseno School for the Deaf, our programme focuses on removing
            communication and digital accessibility barriers while equipping
            deaf learners with skills to participate in an increasingly digital
            world. Learners have received practical training in digital
            literacy, online safety and cybersecurity, online marketing, digital
            freelancing and artificial intelligence. We also introduced{" "}
            <b>Google Live Caption</b>, which converts spoken audio into
            real-time text, making digital content and communication more
            accessible.
          </p>

          <p>
            In partnership with{" "}
            <b>
              Maseno University, we developed a multilingual AI-powered sign
              language avatar
            </b>{" "}
            that translates text into sign language in real time. The solution
            supports communication across multiple languages, including English,
            Kiswahili and Luo, creating new opportunities for deaf learners to
            access digital information and engage with technology. This
            innovation demonstrates our commitment to using AI and assistive
            technology to build a more inclusive digital environment.
          </p>
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Exploring AI and Accessible Communication",
              description:
                "Maseno students and their teacher explore digital tools together. Introducing AI and accessible technology in the classroom can help deaf learners engage with information and build confidence using digital resources.",
              imageUrl:
                "/digital-disability-inclusion/maseno-ai-communication.jpeg",
              imageAlt:
                "Maseno students and their teacher gather around computers during a digital learning session.",
            },
            {
              title: "Learning Digital Skills Together",
              description:
                "Students work in small groups at laptops during a hands-on lesson. Collaborative practice helps learners strengthen their digital skills and explore technology in an inclusive classroom.",
              imageUrl:
                "/digital-disability-inclusion/maseno-digital-learning.jpeg",
              imageAlt:
                "Maseno students collaborate at laptops during a digital skills lesson.",
            },
            {
              title: "Building Inclusive Digital Futures",
              description:
                "Learners and educators come together to explore technology in the classroom. Through practical digital learning and AI, deaf students can access new ways to communicate, learn and participate in the digital world.",
              imageUrl: "/digital-disability-inclusion/maseno-ai-workshop.jpeg",
              imageAlt:
                "Students and educators gather around computers during a classroom technology workshop.",
            },
            {
              title:
                "AI-Powered Multilingual Sign Language Avatar: Making Digital Communication Accessible",
              description:
                "Watch our AI-powered multilingual sign language avatar, developed in partnership with Maseno University, translate text into sign language in real time. This innovation demonstrates how artificial intelligence can bridge communication barriers, improve access to digital information and create more inclusive learning experiences for deaf learners. By supporting multiple languages, the solution is helping make technology more accessible and opening new possibilities for communication and digital inclusion.",
                videoUrl:"/digital-disability-inclusion/ai-pmsla.mp4"
            },
          ]}
        />
      </CenteredSection>

      <CenteredSection className="mt-24">
        <Text variant="sub-heading">
          Building Teachers&apos; Capacity in Inclusive Pedagogy and Assistive
          Technology
        </Text>
        <Text className="text-base">
          <p>
            We brought together teachers from <b>Kibos School for the Blind</b>,{" "}
            <b>Maseno School for the Deaf</b> and{" "}
            <b>Joyland Special School</b> for a capacity-building workshop
            focused on strengthening inclusive teaching practices. The training
            equipped teachers with practical approaches to inclusive pedagogy,
            helping them understand and respond to the diverse learning needs
            and abilities of learners with disabilities.
          </p>

          <p>
            Teachers also received hands-on training in the use of{" "}
            <b>assistive software and accessible technologies</b>, exploring
            how these tools can remove learning barriers and support greater
            learner participation and independence. The workshop emphasised
            integrating assistive technology into everyday classroom
            instruction to create more accessible, engaging and inclusive
            learning environments across the three schools.
          </p>
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Teachers Sharing Inclusive Teaching Practices",
              description:
                "A facilitator leads a discussion with teachers from the three schools, sharing practical approaches to inclusive pedagogy and responding to learners' diverse needs.",
              imageUrl:
                "/digital-disability-inclusion/inclusive-teacher-workshop.jpeg",
              imageAlt:
                "A facilitator addresses teachers during an inclusive education workshop.",
            },
            {
              title: "Exploring Inclusive Pedagogy Together",
              description:
                "Workshop facilitators present teaching strategies to participating teachers. The session focuses on practical ways to make classroom learning more accessible and engaging for learners with disabilities.",
              imageUrl:
                "/digital-disability-inclusion/inclusive-pedagogy-training.jpeg",
              imageAlt:
                "Two facilitators present inclusive teaching methods to teachers at a workshop.",
            },
            {
              title: "Assistive Technology for Removing Learning Barriers",
              description:
                "A trainer introduces assistive technology options for learners with physical disabilities, demonstrating tools and approaches teachers can incorporate into everyday instruction.",
              imageUrl:
                "/digital-disability-inclusion/assistive-technology-teacher-training.jpeg",
              imageAlt:
                "A trainer points to a presentation about assistive technology for physical impairments.",
            },
            {
              title: "Inclusive Communication in the Classroom",
              description:
                "A sign language interpreter supports communication during the workshop as a presenter speaks and a participant follows along on a laptop, illustrating the value of accessible communication in learning environments.",
              imageUrl:
                "/digital-disability-inclusion/inclusive-teaching-practice.jpeg",
              imageAlt:
                "A sign language interpreter supports communication between a presenter and workshop participants.",
            },
          ]}
        />
      </CenteredSection>
    </Main>
  );
}
