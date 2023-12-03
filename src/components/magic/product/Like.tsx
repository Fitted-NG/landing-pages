"use client";
import { useState } from "react";
import Image from "next/image";
import heartIcon from "/public/icons/heart_icon.svg";
import redHeartIcon from "/public/icons/red-heart_icon.svg";

export default function Like() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Image
      src={isLiked ? redHeartIcon : heartIcon}
      alt="heart icon"
      className="cursor-pointer fill-red-500"
      onClick={() => setIsLiked(!isLiked)}
    />
  );
}
