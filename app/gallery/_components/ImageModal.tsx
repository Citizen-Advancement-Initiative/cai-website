import DialogWrapper from "@/components/DialogWrapper";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  selectedImageUrl: string | null;
  onClose(): void;
};

export default function ImageModal({ selectedImageUrl, onClose }: Props) {
  return (
    <DialogWrapper isOpen={Boolean(selectedImageUrl)} onClose={onClose}>
      {selectedImageUrl ? (
        <>
          <div className=" flex items-center gap-16 fixed top-8 right-16 ">
            {selectedImageUrl && (
              <a
                className="bg-white/50 px-6 py-4 rounded-lg"
                href={selectedImageUrl}
                download
              >
                <ArrowDownTrayIcon className="size-6 text-black " />
              </a>
            )}
            <button
              className="bg-white/50 px-6 py-4 rounded-lg cursor-pointer"
              onClick={onClose}
            >
              <XMarkIcon className="size-6 text-black " />
            </button>
          </div>

          <Image
            className="max-w-[80vw] max-h-[80vh] w-fit"
            width={10000}
            height={10000}
            src={selectedImageUrl}
            alt={""}
          />
        </>
      ) : (
        <p>No image selected</p>
      )}
    </DialogWrapper>
  );
}
