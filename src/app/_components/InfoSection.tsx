"use client";

import Button from "@/components/Button";
import { cn } from "@/utils/cn";
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
    <section className="min-h-screen px-12 py-8">
      <h2 className="mt-32 text-5xl font-bold text-center uppercase">
        Hear our <span className="text-primary">Stories</span>
      </h2>

      <p className="text-center text-foreground/70 text-sm mt-8 max-w-[60ch] mx-auto">
        We respond to the limited collective engagement of special interest
        groups in governance, sustainable development, and social justice in
        Kenya & Uganda.
      </p>

      <div className="flex justify-between gap-4 mt-20 overflow-x-hidden ">
        {cardInfos.map((info, idx) => (
          <article
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "relative flex-none overflow-hidden rounded-4xl h-[400px] w-[140px] transition-[width] duration-300",
              {
                "w-[400px]": activeIndex === idx,
              }
            )}
            key={info.title}
          >
            <Link
              className={cn(
                "absolute p-2 bg-background/20 right-6 top-6 z-20 rounded-full transition-opacity duration-300",
                {
                  "opacity-0": activeIndex !== idx,
                }
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
                "absolute inset-0 bottom-0 z-10 flex flex-col p-8 bg-black/30 transition-opacity duration-300",
                {
                  "opacity-0": activeIndex !== idx,
                }
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

      <div className="flex gap-4 mx-auto mt-16 items-center justify-center">
        <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-background bg-primary">
          Get involved
        </Button>
        <Button className=" rounded-full text-sm font-medium px-10 py-5 uppercase text-foreground border border-foreground ">
          About us
        </Button>
      </div>
    </section>
  );
}
