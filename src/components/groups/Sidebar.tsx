"use client";

import Image from "next/image";
import Button from "./Button";
import { useSidebar } from "@/contexts/SidebarContext";
import Logo from "/public/header-logo2.svg";
import Close from "/public/x-close.png";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <nav
      className={`bg-white w-full h-[610px] px-6 pt-[18px] transition-all duration-300 absolute top-0 z-10 md:hidden ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Image src={Logo} alt="logo" loading="lazy" />
        </div>

        <div onClick={toggleSidebar} className="cursor-pointer">
          <Image src={Close} alt="close icon" loading="lazy" />
        </div>
      </div>

      <div className="flex flex-col gap-7 text-[#1E1E1E] text-sm mb-28">
        <a href="#">Home</a>
        <a href="#">Support</a>
        <a href="#">Careers</a>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Button type="purple">Create account</Button>
        <Button type="white">Sign In</Button>
      </div>
    </nav>
  );
}
