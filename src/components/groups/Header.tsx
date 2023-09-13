"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import HeaderButtons from "./HeaderButtons";
import Menu from "./Menu";
import Logo from "/public/header-logo.png";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 98) {
        if (headerRef.current) {
          headerRef.current.classList.remove("py-[18px]", "lg:py-[38px]");
          headerRef.current.classList.add("scroll-header", "py-3");
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("scroll-header", "py-3");
          headerRef.current.classList.add("py-[18px]", "lg:py-[38px]");
        }
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed w-full z-10 top-0 left-0 py-[18px] lg:py-[38px]"
    >
      <div className="px-6 md:px-12 flex justify-between items-center">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Image src={Logo} alt="logo" loading="lazy" />
        </div>

        <Menu />

        <HeaderButtons />
      </div>
    </header>
  );
}
