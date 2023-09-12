"use client";
export default function HeaderButtons() {
  return (
    <div className="justify-center items-center md:gap-3 lg:gap-5 hidden md:flex">
      <button className="py-2 px-3 bg-white text-main-purple rounded-lg">
        Sign In
      </button>
      <button className="py-2.5 px-4 md:px-[18px] bg-main-purple text-white rounded-lg">
        Create account
      </button>
    </div>
  );
}
