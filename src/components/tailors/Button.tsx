"use client";

interface Ibutton {
  type: string;
  width?: string;
  children: string;
}

export default function Button({ type, width, children }: Ibutton) {
  return (
    <button
      className={`${type === "white" ? "" : "bg-main-blue text-white"} ${
        width ? width : "max-sm:w-[160px] lg:w-[175px]"
      } py-2 text-sm rounded-lg font-medium`}
    >
      {children}
    </button>
  );
}
