import CenteredSection from "@/components/CenteredSection";
import Main from "@/components/Main";
import ShowCaseGrid from "@/components/ShowCaseGrid";
import Text from "@/components/Text";

export default function DigitalDisabilityInclusion() {
  return (
    <Main>
      <CenteredSection className="gap-8 items-center h-[70vh] justify-center grid grid-cols-2">
        <div>
          <Text variant="heading">Digital Disability Inclusion </Text>
          <Text>
            We champion digital inclusion by empowering learners with
            disabilities through assistive technology and skills training. Our
            programs ensure every learner can participate, innovate, and thrive
            in the digital world.
          </Text>
        </div>
        <video
          className="shadow-[16px_16px_0px_0px_var(--color-secondary)] rounded-2xl h-[600px] w-[500px] object-cover"
          loop
          autoPlay
          src={"/digital-disability-inclusion/dsi-hero.mp4"}
          muted
          playsInline
        />
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
              imageUrl: "/digital-disability-inclusion/3.jpeg",
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
