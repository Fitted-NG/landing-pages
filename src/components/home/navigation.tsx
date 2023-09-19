"use client";
import { useEffect, useState } from "react";
import logoWhite from "@/components/home/images/Logo-white.svg";
import logoDark from "@/components/home/images/Logo-black.svg";
import Link from "next/link";
import Image from "next/image";
import { Bag2 } from "iconsax-react";

export function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoWhite);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      setNavbar(window.scrollY >= 66);
    }
  };

  useEffect(() => {
    changeBackground();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);

  const changeLogo = () => {
    if (typeof window !== "undefined") {
      setNavbarLogo(window.scrollY >= 60 ? logoDark : logoWhite);
    }
  };

  useEffect(() => {
    changeLogo();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeLogo);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeLogo);
      }
    };
  }, []);

  return (
    <header
      className={`shadow-header w-full bg-transparent fixed top-0 z-50  ${
        navbar ? "scrolled" : ""
      } `}
    >
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-3 lg:px-6 py-4 whitespace-nowrap text-sm">
          <div className="hidden lg:order-1 lg:block lg:w-auto lg:text-center">
            <div className="navbar-menu flex items-center justify-end md:gap-8 lg:gap-9">
              <Link
                href="http://store.fitted.ng"
                className="block lg:inline-block  hover:text-[#b7076b]"
              >
                Shop
              </Link>

              <Link
                className="block lg:inline-block  hover:text-[#b7076b] "
                href="https://fitted.ng"
              >
                Company
              </Link>
              {/*<Link
                className="block lg:inline-block  hover:text-[#b7076b] "
                href="https://fitted.fashion/blog"
              >
                Blog
              </Link>*/}
            </div>
          </div>

          <div className="lg:order-2 w-auto lg:w-1/4 lg:text-center">
            <Link
              href="/"
              className="text-xl text-gray-800 font-semibold font-heading flex items-center justify-center"
            >
              <Image
                src={navbarLogo}
                alt={"logo"}
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-[#b7076b] rounded ">
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:order-3 lg:block w-full lg:w-auto lg:text-center">
            <div className="navbar-menu flex items-center gap-7">
              <div className="flex items-center justify-end gap-3">
                {/*<Link*/}
                {/*  className="block lg:inline-block mt-4 lg:mt-0  hover:text-indigo-600"*/}
                {/*  href="/"*/}
                {/*>*/}
                {/*  <span*/}
                {/*    className={*/}
                {/*      "rounded-full border-[#F3DBE9] border h-[51px] w-[51px] flex items-center justify-center"*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <SearchNormal*/}
                {/*      className={`w-6 h-6 ${*/}
                {/*        !navbar ? "text-white" : "text-[#1E1E1E]"*/}
                {/*      }`}*/}
                {/*    />*/}
                {/*  </span>*/}
                {/*</Link>*/}
                <Link
                  className="block lg:inline-block mt-4 lg:mt-0 hover:text-indigo-600"
                  href="https://store.fitted.ng"
                >
                  <span
                    className={
                      "rounded-full border-[#F3DBE9] border h-[51px] w-[51px] flex items-center justify-center"
                    }
                  >
                    <Bag2
                      className={`w-6 h-6 ${
                        !navbar ? "text-white" : "text-[#1E1E1E]"
                      }`}
                    />
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="https://tailors.fitted.ng"
                  className="block lg:inline-block btn-primary btn-hover-anim rounded-lg py-2 px-4 transition duration-300 ease"
                >
                  For Tailors
                </Link>

                {/*<Link*/}
                {/*  href="/auth/login?type=customer"*/}
                {/*  className="block lg:inline-block btn-secondary btn-hover-anim before:bg-[#FFD0EB] after:bg-white border border-white hover:border-transparent rounded-lg py-2.5 px-4 transition duration-300 ease"*/}
                {/*>*/}
                {/*  Log In*/}
                {/*</Link>*/}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
