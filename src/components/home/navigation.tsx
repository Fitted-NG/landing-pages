"use client";
import { useEffect, useState } from "react";
import logoWhite from "@/components/home/images/Logo-white.svg";
import logoDark from "@/components/home/images/Logo-black.svg";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoWhite);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      <header
        className={`shadow-header w-full bg-transparent fixed top-0 z-50  ${
          navbar ? "scrolled" : ""
        } `}
      >
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center justify-between px-3 lg:px-6 py-4 whitespace-nowrap text-sm">
            <div className="hidden lg:block lg:w-auto lg:text-center">
              <div
                className={`hidden lg:flex items-center lg:gap-8 font-medium ${
                  navbar ? "text-[#1E1E1E]" : "text-white"
                }`}
              >
                <Link
                  href="https://store.fitted.ng"
                  target="_blank"
                  className="hover:text-pink-fitted"
                >
                  Shop
                </Link>

                <Link className="hover:text-pink-fitted" href="/tailors">
                  Tailors
                </Link>

                <Link
                  className="hover:text-pink-fitted"
                  href="https://store.fitted.ng/shop/"
                  target="_blank"
                >
                  Customers
                </Link>

                <Link
                  className="hover:text-pink-fitted"
                  href="https://support.fitted.ng"
                  target="_blank"
                >
                  Support
                </Link>

                <Link
                  className="hover:text-pink-fitted"
                  href="https://blog.fitted.ng"
                  target="_blank"
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="lg:relative lg:-left-16 w-auto lg:w-1/4 lg:text-center">
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

            <div className="block lg:hidden" onClick={toggleSidebar}>
              <button className="navbar-burger flex items-center py-2 px-3 text-[#b7076b] rounded">
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

            <div className="hidden lg:block w-full lg:w-auto lg:text-center">
              <div className="navbar-menu flex items-center">
                <div className="flex items-center">
                  <Link
                    href="https://tailors.fitted.ng"
                    className="block lg:inline-block btn-primary btn-hover-anim rounded-lg py-2 px-4 transition duration-300 ease"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <nav
      className={`bg-white w-full h-[600px] px-6 pt-[18px] shadow-md transition-all duration-300 fixed top-0 z-50 lg:hidden ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Link href="/">
            <Image src={logoDark} alt="logo" loading="lazy" />
          </Link>
        </div>

        <div onClick={toggleSidebar} className="cursor-pointer">
          <div className="w-5 h-[3px] bg-black relative bg-transparent before:absolute before:bg-black before:w-5 before:h-[3px] before:left-0 before:-rotate-45 after:absolute after:bg-black after:w-5 after:h-[3px] after:left-0 after:rotate-45"></div>
        </div>
      </div>

      <div className="flex flex-col gap-7 text-[#1E1E1E] text-sm mb-28">
        <Link href="https://store.fitted.ng" target="_blank">
          Shop
        </Link>
        <Link href="/tailors">Tailors</Link>
        <Link href="https://store.fitted.ng/shop" target="_blank">
          Customers
        </Link>
        <Link href="https://support.fitted.ng" target="_blank">
          Support
        </Link>
        <Link href="https://blog.fitted.ng" target="_blank">
          Blog
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Link
          href="https://tailors.fitted.ng"
          className="w-full text-center btn-primary btn-hover-anim rounded-lg py-3 px-[22px] transition duration-300 ease"
        >
          Create account
        </Link>
      </div>
    </nav>
  );
}
