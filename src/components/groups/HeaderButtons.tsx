"use client";
export default function HeaderButtons() {
  return (
    <div className="justify-center items-center md:gap-3 lg:gap-5 hidden md:flex">
      <a
        href="https://groups.fitted.ng/login"
        className="w-full lg:w-[initial]"
      >
        <button className="py-2 px-3 bg-white text-pink-fitted rounded-lg">
          Sign In
        </button>
      </a>
      <a
        href="https://groups.fitted.ng/signup"
        className="w-full lg:w-[initial]"
      >
        <button className="py-2.5 px-4 md:px-[18px] bg-pink-fitted text-white rounded-lg">
          Create account
        </button>
      </a>
    </div>
  );
}
