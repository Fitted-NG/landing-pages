"use client";
export default function HeaderButtons() {
  return (
    <div className="justify-end md:gap-3 lg:gap-5 hidden md:flex px-20 -mt-[45px]">
      <button className="py-2 px-3 bg-white text-[#5773FF] rounded-lg cursor-pointer">
        Sign In
      </button>
      <button className="py-2.5 px-4 md:px-[18px] bg-[#5773FF] text-white rounded-lg cursor-pointer">
        Create account
      </button>
    </div>
  );
}