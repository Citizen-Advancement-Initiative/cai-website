"use client";

import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlay() {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    setIsPlaying(!isPlaying);
  }

  function toggleIsMuted() {
    setIsMuted(!isMuted);
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full absolute object-cover object-[center_25%]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute right-4 top-[18%] z-20 flex flex-col gap-2 sm:right-8 sm:top-[14%] sm:gap-4 lg:right-16">
        <button
          className="px-3 py-2.5 rounded-lg bg-background/80 flex items-center gap-1.5 text-foreground cursor-pointer justify-center"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <>
              <PauseIcon strokeWidth={2} className="size-6" /> <span>Pause</span>
            </>
          ) : (
            <>
              <PlayIcon className="size-6" /> <span>Play</span>
            </>
          )}
        </button>

        <button
          className="px-3 py-2.5 rounded-lg bg-background/80 flex items-center gap-1.5 text-foreground cursor-pointer justify-center"
          onClick={toggleIsMuted}
        >
          {isMuted ? (
            <>
              <SpeakerWaveIcon className="size-6" /> <span>Unmute</span>
            </>
          ) : (
            <>
              <SpeakerXMarkIcon className="size-6" /> <span>Mute</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
