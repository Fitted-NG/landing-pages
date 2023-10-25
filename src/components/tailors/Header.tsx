"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderButtons from "./HeaderButton";
import Menu from "./Menu";
import LogoLight from "/public/header-logo-light.png";
import LogoDark from "/public/header-logo-dark.svg";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(LogoLight);

  const scrollEventHandler = () => {
    if (window.scrollY >= 86) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);

    return () => {
      window.removeEventListener("scroll", scrollEventHandler);
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
            className="hover:text-blue-fitted"
          >
            Shop
          </Link>

          <Link className="hover:text-blue-fitted" href="/groups">
            Groups
          </Link>

          <Link
            className="hover:text-blue-fitted"
            href="https://support.fitted.ng"
            target="_blank"
          >
            Support
          </Link>

          <Link
            className="hover:text-blue-fitted"
            href="https://blog.fitted.ng"
            target="_blank"
          >
            Blog
          </Link>
        </div>

        <div className="w-[110px] h-10 md:w-[160px] xl:relative xl:-left-10 flex justify-center items-center">
          <Link href="/">
            <Image
              src={navbar ? LogoDark : LogoLight}
              alt="logo"
              loading="lazy"
            />
          </Link>
        </div>

        <Menu navBarScrollStatus={navbar} />

        <HeaderButtons navBarScrollStatus={navbar} />
      </div>
    </header>
  );
}
