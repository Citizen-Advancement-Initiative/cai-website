"use client";

import carouselImage1 from "@/assets/carousel/1.jpg";
import carouselImage2 from "@/assets/carousel/2.jpg";
import carouselImage3 from "@/assets/carousel/3.jpg";
import carouselImage4 from "@/assets/carousel/4.jpg";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  { caption: "Women in civic space", image: carouselImage1 },
  { caption: "Digital inclusion", image: carouselImage2 },
  { caption: "Equal rights", image: carouselImage3 },
  { caption: "Gender and safe guarding", image: carouselImage4 },
];

export default function CarouselSection() {
  const [items, setItems] = useState(carouselItems);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setItems(([first, ...rest]) => [...rest, first]);
        setIsAnimating(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[95vh] relative overflow-hidden">
      <div className="relative overflow-hidden h-full">
        {items.map(({ image }, idx) => (
          <Image
            className={cn(
              "w-full object-cover absolute inset-0 transition-transform duration-1000 object-bottom",
              {
                "-translate-y-full": idx === 0 && isAnimating,
              }
            )}
            key={image.src + idx}
            src={image}
            alt="Caption Image"
            style={{ zIndex: carouselItems.length - idx }}
          />
        ))}
      </div>

      <div className="flex flex-col pb-12 gap-4 absolute bottom-0 items-center inset-0 justify-end bg-black/20  z-10 ">
        {carouselItems.map(({ caption }) => (
          <p
            className={cn(
              "text-2xl font-bold text-transparent [-webkit-text-stroke:1px_background] uppercase transition-all duration-500",
              {
                "text-background text-5xl": Boolean(items.find(
                  (item, index) => item.caption === caption && index === 0
                )),
              }
            )}
            key={caption}
          >
            {caption}
          </p>
        ))}
      </div>
    </section>
  );
}
