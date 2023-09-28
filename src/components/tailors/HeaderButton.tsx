"use client";
import Link from "next/link";

export default function HeaderButtons({
  navBarScrollStatus,
}: {
  navBarScrollStatus: boolean;
}) {
  return (
    <div className="justify-center items-center md:gap-3 lg:gap-5 hidden lg:flex">
      <Link
        href="https://tailorsapp.fitted.ng/login"
        className="w-full lg:w-[initial]"
      >
        <button
          className={`py-2 px-3 bg-white text-blue-fitted rounded-lg ${
            navBarScrollStatus && "border border-blue-fitted"
          }`}
        >
          Sign In
        </button>
      </Link>
      <Link
        href="https://tailorsapp.fitted.ng/signup"
        className="w-full lg:w-[initial]"
      >
        <button className="py-2.5 px-4 md:px-[18px] bg-blue-fitted text-white rounded-lg">
          Create account
        </button>
      </Link>
    </div>
  );
}

