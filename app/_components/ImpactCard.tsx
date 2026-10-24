"use client";

import { useEffect, useRef, useState } from "react";
import { Achievement } from "../landing.utils";

type Props = {
  achievement: Achievement;
};
export default function ImpactCard({ achievement }: Props) {
  const [displayCount, setDisplayCount] = useState(0);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setDisplayCount((prev) => {
              if (prev < achievement.count) {
                return prev + 1;
              } else {
                clearInterval(intervalId);
                return prev;
              }
            });
          }, 50);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [achievement.count]);

  return (
    <article
      ref={ref}
      className="bg-white text-foreground rounded-4xl p-8 h-[480px] flex flex-col"
    >
      <p className="uppercase font-medium">{achievement.title}</p>

      <p className="text-7xl font-bold text-black mt-auto mb-8">
        {displayCount}
        <span className="text-primary">+</span>
      </p>
      <p className="text-sm text-gray-700">{achievement.description}</p>
    </article>
  );
}
