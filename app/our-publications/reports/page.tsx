import Main from "@/components/Main";
import Text from "@/components/Text";
import PublicationCard from "../_components/PublicationCard";
import { reportFiles } from "./reports.data";

export default function Reports() {
  return (
    <Main className="px-5 pt-28 sm:px-8 sm:pt-36">
      <section className="mx-auto max-w-[1400px]">
        <Text variant="heading">Reports</Text>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {reportFiles.map((reportFile) => (
            <PublicationCard
              key={reportFile.fileUrl}
              publicationFile={reportFile}
            />
          ))}
        </div>
      </section>
    </Main>
  );
}
