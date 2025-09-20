"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselItems = [
  { caption: "Women in civic space", imageUrl: "/carousel/1.jpg" },
  { caption: "Digital inclusion", imageUrl: "/carousel/2.jpg" },
  { caption: "Equal rights", imageUrl: "/carousel/3.jpg" },
  { caption: "Gender and safe guarding", imageUrl: "/carousel/4.jpg" },
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
    <section className="relative h-screen overflow-hidden">
      {items.map((item, idx) => (
        <article
          key={item.imageUrl + idx}
          className={`absolute inset-0 transition-transform duration-1000 ${
            idx === 0 && isAnimating ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ zIndex: items.length - idx }}
        >
          <Image
            className="w-full h-full object-cover object-bottom"
            src={item.imageUrl}
            alt="Caption Image"
            height={2000}
            width={2000}
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-6 pb-12 bg-black/20">
            {carouselItems.map((carouselItem) => (
              <p
                key={carouselItem.caption}
                className={`text-6xl font-bold uppercase transition-all duration-500 ${
                  carouselItem.caption === item.caption
                    ? "text-background"
                    : "text-transparent [-webkit-text-stroke:1px_white]"
                }`}
              >
                {carouselItem.caption}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
