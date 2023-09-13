"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlayIcon from "/public/icons/play-icon.svg";

export default function Video() {
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      currentVideoRef.addEventListener("play", () => {
        setShowPlayBtn(false);
      });
      currentVideoRef.addEventListener("pause", () => {
        setShowPlayBtn(true);
      });
      currentVideoRef.addEventListener("ended", () => {
        setShowPlayBtn(true);
      });
    }

    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener("play", () => {});
        currentVideoRef.removeEventListener("pause", () => {});
        currentVideoRef.removeEventListener("ended", () => {});
      }
    };
  }, []);

  const playVideo = () => {
    videoRef.current?.play();
  };

  return (
    <div className="relative max-w-[1400px] aspect-video mx-auto cursor-pointer">
      <video
        ref={videoRef}
        controls
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        loop
        className="w-full h-full"
      >
        <source src="/videos/group-occasions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showPlayBtn && (
        <button
          onClick={playVideo}
          className="w-32 h-32 absolute top-[calc(50%-64px)] left-[calc(50%-64px)]"
        >
          <Image src={PlayIcon} alt="play icon" className="w-full h-full" />
        </button>
      )}
    </div>
  );
}
