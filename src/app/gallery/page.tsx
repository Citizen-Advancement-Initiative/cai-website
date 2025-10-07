"use client";

import Main from "@/components/Main";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./_components/ImageModal";
import { imageUrls } from "./gallery.data";

function GalleryImage({
  url,
  idx,
  onClick,
}: {
  url: string;
  idx: number;
  onClick: () => void;
}) {
  const { isInView, ref } = useInView<HTMLImageElement>({ threshold: 0.3 });

  return (
    <Image
      ref={ref}
      onClick={onClick}
      className={cn(
        "h-[350px] object-cover object-center cursor-pointer hover:scale-[102%] duration-700 transition-all translate-y-[10%] opacity-0 ",
        {
          "col-span-2": idx % 6 === 0 || idx % 6 === 5,
          "col-span-4": idx % 6 === 1 || idx % 6 === 3,
          "col-span-3": idx % 6 === 2 || idx % 6 === 4,
          "opacity-100 translate-y-0": isInView,
        }
      )}
      key={url}
      src={url}
      alt=""
      width={1000}
      height={1000}
    />
  );
}

export default function Gallery() {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  return (
    <Main>
      <section className="mt-[15vh] max-w-[1500px] mx-auto mb-24">
        <h2 className="mb-12 text-5xl font-medium underline capitalize underline-offset-20 decoration-primary">
          Gallery
        </h2>

        <div className="grid grid-cols-9 gap-4">
          {imageUrls.map((url, idx) => (
            <GalleryImage
              url={url}
              idx={idx}
              onClick={() => setSelectedImageUrl(url)}
              key={url}
            />
          ))}
        </div>
      </section>

      <ImageModal
        selectedImageUrl={selectedImageUrl}
        onClose={() => setSelectedImageUrl(null)}
      />
    </Main>
  );
}
