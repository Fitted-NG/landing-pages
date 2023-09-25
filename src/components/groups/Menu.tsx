"use client";

import { useSidebar } from "@/contexts/SidebarContext";

export default function Menu({
  navBarScrollStatus,
}: {
  navBarScrollStatus: boolean;
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      onClick={toggleSidebar}
      className={`lg:hidden w-10 h-10 rounded-[6px] border flex justify-center items-center cursor-pointer ${
        navBarScrollStatus ? "border-black" : "border-white"
      }`}
    >
      <span
        className={`w-5 h-[3px] relative before:absolute before:w-5 before:h-[3px] before:-top-2 before:left-0 after:absolute after:w-5 after:h-[3px] after:-bottom-2 after:left-0 ${
          navBarScrollStatus
            ? "bg-black before:bg-black after:bg-black"
            : "bg-white before:bg-white after:bg-white"
        }`}
      ></span>
    </div>
  );
}
