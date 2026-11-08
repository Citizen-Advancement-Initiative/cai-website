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
            <p>
              Creating equal access to digital skills, technology and
              opportunity for learners with disabilities.
            </p>

            <p>
              Through the No One Left Behind initiative, we are working with
              three special needs schools to bridge the digital divide and
              promote meaningful digital inclusion for learners with
              disabilities.
            </p>

            <p>
              Our programme focuses on equipping learners with practical digital
              skills while addressing the accessibility barriers that may
              prevent them from independently accessing and using technology.
            </p>

            <p>Learners receive training in:</p>

            <p>
              Digital Literacy: Developing essential computer skills, navigating
              digital platforms and using technology for learning, communication
              and everyday activities.
            </p>

            <p>
              Online Safety and Cybersecurity: Understanding digital risks,
              protecting personal information, identifying online threats and
              practising responsible digital citizenship.
            </p>

            <p>
              Online Marketing and Digital Freelancing: Exploring digital
              platforms, content creation, online branding and opportunities to
              generate income through digital skills.
            </p>

            <p>
              Artificial Intelligence: Introducing learners to AI tools and
              their practical applications in education, creativity,
              communication and everyday problem-solving.
            </p>

            <p>
              Beyond digital skills training, we identify the specific
              accessibility barriers experienced by learners in each school and
              introduce appropriate assistive technology solutions. We also
              train teachers in inclusive pedagogy and the integration of
              technology into everyday teaching and learning.
            </p>

            <p>
              Our approach is centred on one principle: Disability should not be
              a barrier to accessing digital opportunities.
            </p>
          </Text>
        </div>
        
        <div className="space-y-16">
          <Image
            className="aspect-video min-h-[500px] w-full rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-secondary)] sm:shadow-[16px_16px_0px_0px_var(--color-secondary)] "
            src="/digital-disability-inclusion/dsi-hero.jpeg"
            width={1000}
            height={1000}
            alt="Learners taking part in digital skills training."
          />
          <Image
            className="aspect-video min-h-[500px] w-full rounded-2xl object-cover shadow-[10px_10px_0px_0px_var(--color-secondary)] sm:shadow-[16px_16px_0px_0px_var(--color-secondary)] "
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
        <Text className="text-base mb-20">
          A vibrant center of learning where students with physical disabilities
          embrace technology, innovation, and creativity through inclusive
          digital skills training.
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Inclusive Learning in Progress",
              description:
                "Students at Joyland Special School actively participate in a computer lesson, embracing digital skills and demonstrating their enthusiasm to learn despite limited resources.",
              imageUrl: "/digital-disability-inclusion/2.jpeg",
            },
            {
              title: "Ability Beyond Limits",
              description:
                "A determined student at Joyland Special School skillfully types using her legs, showcasing resilience and the power of inclusive technology.",
              videoUrl: "/digital-disability-inclusion/dsi-hero.mp4",
            },
            {
              title: "Peer-to-Peer Empowerment",
              description:
                "A student confidently demonstrates computer skills to her classmates, fostering collaboration and inspiring others to explore the digital world.",
              imageUrl: "/digital-disability-inclusion/4.jpeg",
            },
          ]}
        />
      </CenteredSection>

      <CenteredSection className="mt-24 mb-20">
        <Text variant="sub-heading">Kibos Special School for the Blind</Text>
        <Text className="text-base mb-20">
          A nurturing environment where visually impaired learners embrace
          digital literacy through assistive technologies, unlocking new
          opportunities for learning, creativity, and innovation.
        </Text>
        <ShowCaseGrid
          showCases={[
            {
              title: "Learning Through Sound",
              description:
                "A student at Kibos Special School explores digital skills using JAWS screen reader software, demonstrating how assistive technology makes computer learning accessible and empowering.",
              imageUrl: "/digital-disability-inclusion/1.jpeg",
            },
          ]}
        />
      </CenteredSection>
    </Main>
  );
}
