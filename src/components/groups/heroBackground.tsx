"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const bgImagePaths = [
  "/groups-hero-bg-image1.png",
  "/groups-hero-bg-image2.png",
];


export default function HeroBackground() {
  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (bgImageIndex >= bgImagePaths.length) {
    setBgImageIndex(0);
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bgImageIndex === 0 && (
        <Image
          src={bgImagePaths[0]}
          alt={"Women celebrating fashion"}
          fill={true}
          loading="lazy"
          className="object-cover object-center animate-fade-in"
        />
      )}
      {bgImageIndex === 1 && (
        <Image
          src={bgImagePaths[1]}
          alt={"Men celebrating fashion"}
          fill={true}
          loading="lazy"
          className="object-cover object-center animate-fade-in"
        />
      )}
    </div>
  );
}
