"use client"

import { useEffect, useState } from "react";
import { Achievement } from "../landing.utils";

type Props = {
  achievement: Achievement;
};
export default function ImpactCard({ achievement }: Props) {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
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

    return () => clearInterval(intervalId);
  }, [achievement.count]);

  return (
    <article className="bg-white text-foreground rounded-4xl p-8 h-[480px] flex flex-col">
      <p className="uppercase font-medium">{achievement.title}</p>

      <p className="text-7xl font-bold text-black mt-auto mb-8">
        {displayCount}
        <span className="text-primary">+</span>
      </p>
      <p className="text-sm text-gray-700">{achievement.description}</p>
    </article>
  );
}
