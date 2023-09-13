"use client";

import Image from "next/image";
import FacebookIcon from "/public/icons/footer-facebook.svg";
import YoutubeIcon from "/public/icons/footer-youtube.svg";
import InstagramIcon from "/public/icons/footer-instagram.svg";

export default function FooterSocials() {
  return (
    <div className="flex justify-center items-center gap-3">
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 border border-[#535D69] rounded-full flex justify-center item-center"
      >
        <Image
          src={FacebookIcon}
          alt="facebook"
          loading="lazy"
          className="w-1/2 h-auto"
        />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 border border-[#535D69] rounded-full flex justify-center item-center"
      >
        <Image
          src={YoutubeIcon}
          alt="youtube"
          loading="lazy"
          className="w-1/2 h-auto"
        />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 border border-[#535D69] rounded-full flex justify-center item-center"
      >
        <Image
          src={InstagramIcon}
          alt="instagram"
          loading="lazy"
          className="w-1/2 h-auto"
        />
      </a>
    </div>
  );
}
