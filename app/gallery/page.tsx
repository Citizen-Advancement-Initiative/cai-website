"use client";

import Main from "@/components/Main";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
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
        "h-52 w-full cursor-pointer translate-y-[10%] object-cover object-center opacity-0 transition-all duration-700 hover:scale-[102%] sm:h-[350px]",
        {
          "sm:col-span-2": idx % 6 === 0 || idx % 6 === 5,
          "sm:col-span-4": idx % 6 === 1 || idx % 6 === 3,
          "sm:col-span-3": idx % 6 === 2 || idx % 6 === 4,
          "opacity-100 translate-y-0": isInView,
        },
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
      <section className="mx-auto mb-16 mt-28 max-w-[1500px] px-5 sm:mb-24 sm:px-8">
        <h2 className="mb-8 text-4xl font-medium capitalize underline underline-offset-8 decoration-primary sm:mb-12 sm:text-5xl sm:underline-offset-20">
          Gallery
        </h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-9 sm:gap-4">
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
