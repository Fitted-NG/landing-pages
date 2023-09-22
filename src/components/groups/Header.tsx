"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderButtons from "./HeaderButtons";
import Menu from "./Menu";
import LogoLight from "/public/header-logo-light.png";
import LogoDark from "/public/header-logo-dark.svg";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(LogoLight);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      setNavbar(window.scrollY >= 86);
    }
  };

  useEffect(() => {
    changeBackground();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);

  const changeLogo = () => {
    if (typeof window !== "undefined") {
      setNavbarLogo(window.scrollY >= 86 ? LogoDark : LogoLight);
    }
  };

  useEffect(() => {
    changeLogo();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeLogo);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeLogo);
      }
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 top-0 left-0 right-0 ${
        navbar ? "bg-white py-4 lg:py-5" : "py-[18px] lg:py-8"
      }`}
    >
      <div className="flex justify-between items-center container mx-auto px-6 md:px-12">
        <div
          className={`hidden lg:flex items-center lg:gap-5 xl:gap-8 font-medium ${
            navbar ? "text-[#1E1E1E]" : "text-white"
          }`}
        >
          <Link
            href="https://store.fitted.ng"
            target="_blank"
            className="hover:text-pink-fitted"
          >
            Shop
          </Link>

          <Link className="hover:text-pink-fitted" href="/tailors">
            Tailors
          </Link>

          <Link
            className="hover:text-pink-fitted"
            href="https://support.fitted.ng"
            target="_blank"
          >
            Support
          </Link>

          <Link
            className="hover:text-pink-fitted"
            href="https://blog.fitted.ng"
            target="_blank"
          >
            Blog
          </Link>
        </div>

        <div className="w-[110px] h-10 md:w-[160px] xl:relative xl:-left-10 flex justify-center items-center">
          <Link href="/">
            <Image src={navbarLogo} alt="logo" loading="lazy" />
          </Link>
        </div>

        <Menu navBarScrollStatus={navbar} />

        <HeaderButtons navBarScrollStatus={navbar} />
      </div>
    </header>
  );
}
