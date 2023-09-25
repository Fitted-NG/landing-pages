"use client";

export default function Button({
  type,
  width,
  children,
}: {
  type: string;
  width?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`${
        type === "white"
          ? "bg-white text-pink-fitted border-[#DEE0E4]"
          : "bg-pink-fitted text-white border-pink-fitted"
      } py-3 px-[22px] text-sm ${
        width ? width : "w-full lg:w-[221px]"
      } rounded-lg font-medium border`}
    >
      {children}
    </button>
  );
}
