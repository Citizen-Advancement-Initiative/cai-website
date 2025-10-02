"use client";

import Main from "@/components/Main";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./_components/ImageModal";
import { imageUrls } from "./gallery.data";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  console.log("SelectedLL: " , selectedImageIndex)

  return (
    <Main>
      <section className="mt-[15vh] max-w-[1500px] mx-auto mb-24">
        <h2 className="mb-12 text-5xl font-medium underline capitalize underline-offset-20 decoration-primary">
          Gallery
        </h2>

        <div className="grid grid-cols-9 gap-4">
          {imageUrls.map((url, idx) => (
            <Image
              onClick={() => setSelectedImageIndex(idx)}
              className={cn(
                "h-[350px] object-cover object-center cursor-pointer  hover:scale-[102%] transition-transform duration-300",
                {
                  "col-span-2": idx % 6 === 0 || idx % 6 === 5,
                  "col-span-4": idx % 6 === 1 || idx % 6 === 3,
                  "col-span-3": idx % 6 === 2 || idx % 6 === 4,
                }
              )}
              key={url}
              src={url}
              alt={""}
              width={1000}
              height={1000}
            />
          ))}
        </div>
      </section>

      <ImageModal
        selectedImageIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
      />
    </Main>
  );
}
