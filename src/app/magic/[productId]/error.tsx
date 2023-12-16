"use client";

import Link from "next/link";
import Header from "@/components/magic/Header";
import Footer from "@/components/reusable/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-[768px] mb-20 mx-auto min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-lg font-semibold mb-3">Sorry, product not found</h1>
        <Link
          href="/magic"
          className="bg-pink-fitted text-white py-2 px-7 rounded"
        >
          Go back
        </Link>
      </main>
      <Footer />
    </>
  );
}
