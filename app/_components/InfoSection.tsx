"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cardInfos } from "../landing.utils";

export default function InfoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTimeoutPaused, setIsTimeoutPaused] = useState(false);

  useEffect(() => {
    if (isTimeoutPaused) return;

    const timeOut = setTimeout(() => {
      if (activeIndex !== cardInfos.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setActiveIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [activeIndex, isTimeoutPaused]);

  function handleMouseEnter(index: number) {
    setActiveIndex(index);
    setIsTimeoutPaused(true);
  }

  function handleMouseLeave() {
    setIsTimeoutPaused(false);
  }

  return (
    <section className="min-h-screen px-5 py-12 sm:px-8 lg:px-12">
      <h2 className="mt-20 text-center text-4xl font-bold uppercase sm:mt-32 sm:text-5xl lg:text-6xl">
        Hear our <span className="text-primary">Stories</span>
      </h2>

      <p className="mx-auto mt-6 max-w-[60ch] text-center text-sm text-foreground/70 sm:text-base">
        We respond to the limited collective engagement of special interest
        groups in governance, sustainable development, and social justice in
        Kenya & Uganda.
      </p>

      <div className="mt-10 flex snap-x snap-mandatory justify-start gap-3 overflow-x-auto pb-4 sm:mt-20 sm:justify-between sm:gap-4 sm:overflow-x-hidden">
        {cardInfos.map((info, idx) => (
          <article
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "relative h-[340px] w-[82vw] max-w-[400px] flex-none snap-center overflow-hidden rounded-4xl transition-[width] duration-300 sm:h-[400px] sm:w-[140px]",
              {
                "sm:w-[400px]": activeIndex === idx,
              },
            )}
            key={info.title}
          >
            <Link
              className={cn(
                "absolute right-4 top-4 z-20 rounded-full bg-background/20 p-2 transition-opacity duration-300 sm:right-6 sm:top-6",
                {
                  "opacity-0": activeIndex !== idx,
                },
              )}
              href={""}
            >
              <ArrowUpRightIcon className="size-4 text-background" />
            </Link>
            <Image
              className="absolute inset-0 z-0 object-cover w-full h-full"
              width={500}
              height={500}
              src={info.imageUrl}
              alt=""
            />

            <div
              className={cn(
                "absolute inset-0 bottom-0 z-10 flex flex-col bg-black/30 p-5 transition-opacity duration-300 sm:p-8",
                {
                  "opacity-0": activeIndex !== idx,
                },
              )}
            >
              <p className="mt-auto mb-4 font-bold text-background">
                {info.title}
              </p>
              <p className="text-sm font-semibold text-background ">
                {info.description}
              </p>
            </div>
          </article>
        ))}
      </div>

     
    </section>
  );
}
