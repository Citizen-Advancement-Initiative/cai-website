import Modal from "@/components/Modal";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { imageUrls } from "../gallery.data";

type Props = {
  selectedImageIndex: number | null;
  onClose(): void;
};

export default function ImageModal({ selectedImageIndex, onClose }: Props) {
  const isImageSelected = selectedImageIndex !== null;

  const selectedImageLink = selectedImageIndex
    ? imageUrls[selectedImageIndex]
    : "";

  return (
    <Modal isOpen={isImageSelected} onClose={onClose}>
      {isImageSelected ? (
        <section className="fixed inset-0 flex items-center justify-center">
          <div className=" flex items-center gap-16 absolute top-8 right-16 ">
            <a className="bg-white/50 px-6 py-4 rounded-lg" href={selectedImageLink} download>
              <ArrowDownTrayIcon className="size-6 text-black " />
            </a>

            <button className="bg-white/50 px-6 py-4 rounded-lg" onClick={onClose}>
              <XMarkIcon className="size-6 text-black " />
            </button>
          </div>

          <Image
            className="max-w-[80vw] max-h-[80vh] w-fit"
            width={10000}
            height={10000}
            src={selectedImageLink}
            alt={""}
          />
        </section>
      ) : (
        <p>No image selected</p>
      )}
    </Modal>
  );
}
