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
          ]}
        />
      </CenteredSection>
    </Main>
  );
}
