import Main from "@/components/Main";
import Text from "@/components/Text";
import PublicationCard from "../_components/PublicationCard";
import { newsPaperFiles } from "./news-papers.data";

export default function NewsPapers() {
  return (
    <Main className="px-5 pt-28 sm:px-8 sm:pt-36">
      <section className="mx-auto max-w-[1400px]">
        <Text variant="heading">News Papers</Text>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {newsPaperFiles.map((publicationFile) => (
            <PublicationCard
              key={publicationFile.fileUrl}
              publicationFile={publicationFile}
            />
          ))}
        </div>
      </section>
    </Main>
  );
}
