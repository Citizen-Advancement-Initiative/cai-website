import Main from "@/components/Main";
import Text from "@/components/Text";
import PublicationCard from "../_components/PublicationCard";
import { newsPaperFiles } from "./news-papers.data";

export default function NewsPapers() {
  return (
    <Main className="pt-[10%]">
      <section className="max-w-[1400px] mx-auto">
        <Text variant="heading">News Papers</Text>

        <div className="grid grid-cols-2 gap-6">
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
