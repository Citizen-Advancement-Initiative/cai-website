import Main from "@/components/Main";
import Text from "@/components/Text";
import ReportCard from "./_components/ReportCard";
import { reportFiles } from "./reports.data";

export default function Reports() {
  return (
    <Main className="pt-[10%]">
      <section className="max-w-[1400px] mx-auto">
        <Text variant="heading">Reports</Text>

        <div className="grid grid-cols-2 gap-6">
          {reportFiles.map((reportFile) => (
            <ReportCard key={reportFile.fileUrl} reportFile={reportFile} />
          ))}
        </div>
      </section>
    </Main>
  );
}
