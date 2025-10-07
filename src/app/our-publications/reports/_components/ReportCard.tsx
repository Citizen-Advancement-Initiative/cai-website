"use client";

import DialogWrapper from "@/components/DialogWrapper";
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { ReportFile } from "../reports.types";

type Props = {
  reportFile: ReportFile;
};

export default function ReportCard({ reportFile }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border p-6 flex justify-between items-center gap-2 h-[150px] shadow-lg rounded-lg">
      <DocumentTextIcon className="size-10 text-foreground/80" />
      <p className="text-lg font-semibold text-foreground/80">
        {reportFile.fileName}
      </p>
      <div className="flex items-center justify-between gap-6" onClick={()=>setIsOpen(true)}>
        <button className="cursor-pointer flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg shadow text-sm">
          <EyeIcon className="size-4" />
          <span>Read</span>
        </button>
        <a
          href={encodeURI(reportFile.fileUrl)}
          download
          className="cursor-pointer flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg shadow text-sm"
        >
          <ArrowDownTrayIcon className="size-4" />
          <span>Download</span>
        </a>
      </div>

      <DialogWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <embed src={reportFile.fileUrl} className="w-[80vw] h-[90vh]" />
      </DialogWrapper>
    </article>
  );
}
