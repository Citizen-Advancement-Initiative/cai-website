"use client";

import DialogWrapper from "@/components/DialogWrapper";
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { PublicationFile } from "../publication.types";

type Props = {
  publicationFile: PublicationFile;
};

export default function PublicationCard({ publicationFile }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const fileUrl = encodeURI(publicationFile.fileUrl);

  return (
    <article className="flex min-w-0 flex-col items-start gap-4 rounded-lg border p-4 shadow-lg sm:min-h-[150px] sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-6">
      <DocumentTextIcon className="size-8 shrink-0 text-foreground/80 sm:size-10" />
      <p className="w-full min-w-0 break-words text-base font-semibold text-foreground/80 sm:flex-1 sm:text-lg">
        {publicationFile.fileName}
      </p>
      <div className="flex w-full shrink-0 items-center gap-2 sm:w-auto sm:gap-3">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/50 px-3 py-2 text-sm shadow sm:flex-none sm:px-4"
        >
          <EyeIcon className="size-4" />
          <span>Read</span>
        </button>
        <a
          href={fileUrl}
          download
          className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/50 px-3 py-2 text-sm shadow sm:flex-none sm:px-4"
        >
          <ArrowDownTrayIcon className="size-4" />
          <span>Download</span>
        </a>
      </div>

      <DialogWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <embed
          src={fileUrl}
          title={publicationFile.fileName}
          className="h-[80svh] w-[calc(100vw-2rem)] sm:h-[90vh] sm:w-[80vw]"
        />
      </DialogWrapper>
    </article>
  );
}
