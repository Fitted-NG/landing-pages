"use client";

import Image from "next/image";
import LocationIcon from "/public/icons/footer-location.svg";
import EmailIcon from "/public/icons/footer-mail.svg";
import CallIcon from "/public/icons/footer-call.svg";

export default function FooterLinks() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 lg:gap-14 justify-between lg:justify-center mb-6 lg:mb-7">
        <a href="#">Home</a>
        <a href="#">Support</a>
        <a href="#">Careers</a>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:gap-20">
        <a href="#" className="flex items-center gap-3">
          <Image src={LocationIcon} alt="location icon" loading="lazy" />
          <p>8 Connal Road, Yaba, Lagos, Nigeria</p>
        </a>

        <a href="#" className="flex items-center gap-3">
          <Image src={EmailIcon} alt="location icon" loading="lazy" />
          <p>hello@fitted.ng</p>
        </a>

        <a href="#" className="flex items-center gap-3">
          <Image src={CallIcon} alt="location icon" loading="lazy" />
          <p>+234 908 368 0999</p>
        </a>
      </div>
    </div>
  );
}
