import Main from "@/components/Main";
import Text from "@/components/Text";
import PublicationCard from "../_components/PublicationCard";
import { reportFiles } from "./reports.data";

export default function Reports() {
  return (
    <Main className="pt-[10%]">
      <section className="max-w-[1400px] mx-auto">
        <Text variant="heading">Reports</Text>

        <div className="grid grid-cols-2 gap-6">
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
