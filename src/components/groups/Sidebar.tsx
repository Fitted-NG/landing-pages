"use client";

import Image from "next/image";
import Button from "./Button";
import { useSidebar } from "@/contexts/SidebarContext";
import Logo from "/public/header-logo2.svg";
import Link from "next/link";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <nav
      className={`bg-white w-full h-[610px] px-6 pt-[18px] shadow-md transition-all duration-300 fixed top-0 z-10 lg:hidden ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Link href="/">
            <Image src={Logo} alt="logo" loading="lazy" />
          </Link>
        </div>

        <div onClick={toggleSidebar} className="cursor-pointer">
          <div className="w-5 h-[3px] bg-black relative bg-transparent before:absolute before:bg-black before:w-5 before:h-[3px] before:left-0 before:-rotate-45 after:absolute after:bg-black after:w-5 after:h-[3px] after:left-0 after:rotate-45"></div>
        </div>
      </div>

      <div className="flex flex-col gap-7 text-[#1E1E1E] text-sm mb-28">
        <Link href="https://store.fitted.ng" target="_blank">
          Shop
        </Link>
        <Link href="/tailors">Tailors</Link>
        <Link href="https://support.fitted.ng" target="_blank">
          Support
        </Link>
        <Link href="https://blog.fitted.ng" target="_blank">
          Blog
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Link
          href="https://groups.fitted.fashion/signup"
          className="w-full lg:w-[initial]"
        >
          <Button type="purple">Create account</Button>
        </Link>
        <Link
          href="https://groups.fitted.fashion/login"
          className="w-full lg:w-[initial]"
        >
          <Button type="white">Sign In</Button>
        </Link>
      </div>
    </nav>
  );
}
