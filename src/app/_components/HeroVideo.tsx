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
        className="absolute inset-x-0 bottom-0 w-full "
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute right-16 top-[14%] flex flex-col gap-4 z-20">
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
