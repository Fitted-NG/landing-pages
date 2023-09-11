"use client";

import { useSidebar } from "@/contexts/SidebarContext";

export default function Menu() {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      onClick={toggleSidebar}
      className="md:hidden w-10 h-10 rounded-[6px] border border-white flex justify-center items-center cursor-pointer"
    >
      <span className="w-5 h-[3px] bg-white relative before:absolute before:bg-white before:w-5 before:h-[3px] before:-top-2 before:left-0 after:absolute after:bg-white after:w-5 after:h-[3px] after:-bottom-2 after:left-0"></span>
    </div>
  );
}
