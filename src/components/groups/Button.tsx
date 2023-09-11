"use client";

export default function Button({
  type,
  width,
  children,
}: {
  type: string;
  width?: string;
  children: string;
}) {
  return (
    <button
      className={`${
        type === "white"
          ? "bg-white text-main-purple border-[#DEE0E4]"
          : "bg-main-purple text-white border-main-purple"
      } py-3 px-[22px] text-sm ${
        width ? width : "w-full lg:w-[221px]"
      } rounded-lg font-medium border`}
    >
      {children}
    </button>
  );
}
