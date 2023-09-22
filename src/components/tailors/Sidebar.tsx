"use client";

import Image from "next/image";
import Button from "./Button";
import { useSidebar } from "@/contexts/SidebarContext";
import Logo from "/public/header-logo2.svg";




export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();


  return (
    <nav
      className={`bg-white w-full h-[610px] px-6 pt-[18px] shadow-md transition-all duration-300 fixed top-0 z-10 md:hidden ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Image src={Logo} alt="logo" loading="lazy" />
        </div>

        <div onClick={toggleSidebar} className="cursor-pointer">
          <div className="w-5 h-[3px] bg-black relative bg-transparent before:absolute before:bg-black before:w-5 before:h-[3px] before:left-0 before:-rotate-45 after:absolute after:bg-black after:w-5 after:h-[3px] after:left-0 after:rotate-45"></div>
        </div>
      </div>

      <div className="flex flex-col gap-7 text-[#1E1E1E] text-sm mb-28">
        <a href="#">Shop</a>
        <a href="#">Tailors</a>
        <a href="#">Groups</a>
        <a href="#">Support</a>
        <a href="#">Blog</a>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <a href="https://tailorsapp.fitted.ng/signup">
          <Button type="purple">Create account</Button>
        </a>
        <a href="https://tailorsapp.fitted.ng/signin">
           <Button type="white">Sign In</Button>
        </a>
      </div>
    </nav>
  )
}
