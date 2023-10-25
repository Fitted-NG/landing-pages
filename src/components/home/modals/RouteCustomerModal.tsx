"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const RouteCustomerModal = ({ link }: { link: string }) => {
  const { modals } = useContext(ThemeContext);

  return (
    <div className={`modal__box ${modals.state["RouteCustomerModal"]}`}>
      <div className="modal__box-wrapper shadow-lg rounded-2xl">
        <div className=" mb-2 pt-4">
          <div className="flex items-center justify-center flex-col gap-3 grow">
            <p className="mb-3 font-kotori-rose text-[#1E1E1E] text-2xl font-bold text-center">
              What type of customer are you?
            </p>
          </div>

          <button
            className="flex items-center  absolute top-3 right-3"
            onClick={() => modals.toggle("RouteCustomerModal")}
          >
            <span className="pointer-events-none flex items-center p-2">
              <svg
                className="h-4 w-4 "
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-5 my-3 w-full gap-3">
          <Link
            href="https://store.fitted.ng/"
            className={`block relative rounded-lg border transition duration-150 ease-in-out w-full h-72 overflow-hidden get_started_modal_btns`}
          >
            <div
              className="absolute w-full h-full top-0 left-0 rounded-lg"
              style={{
                background:
                  " linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.5) 90.62%)",
              }}
            >
              <div className=" text-white px-3 py-4 z-10 text h-full w-full justify-end flex flex-col items-center">
                <h4 className="font-bold text-lg">Individual</h4>
                <p className="text-sm text-center">
                  Browse our collection of styles for every occasion curated
                  just for you!
                </p>
              </div>
            </div>
            <Image
              src="/individual_type.png"
              fill
              alt=""
              className="object-cover rounded-lg -z-20"
            />
          </Link>

          <Link
            href={
              link === "signup"
                ? "https://groups.fitted.fashion/signup"
                : "https://groups.fitted.fashion/login"
            }
            target="_blank"
            className={`block relative rounded-lg border transition duration-150 ease-in-out w-full h-72 overflow-hidden get_started_modal_btns`}
          >
            <div
              className="absolute w-full h-full top-0 left-0 rounded-lg"
              style={{
                background:
                  " linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.5) 90.62%)",
              }}
            >
              <div className=" text-white px-3 py-4 z-10 text h-full w-full justify-end flex flex-col items-center">
                <h4 className="font-bold text-lg">Groups</h4>
                <p className="text-sm text-center">
                  Seamlessly organize your Aso Ebi or Groups outfits for your
                  occasion
                </p>
              </div>
            </div>
            <Image
              src="/groups_type.png"
              fill
              alt=""
              className="object-cover rounded-lg -z-20"
            />
          </Link>

          <Link
            href={
              link === "signup"
                ? "https://tailorsapp.fitted.ng/signup"
                : "https://tailorsapp.fitted.ng/signin"
            }
            target="_blank"
            className={`block relative rounded-lg border transition duration-150 ease-in-out w-full h-72 overflow-hidden get_started_modal_btns`}
          >
            <div
              className="absolute w-full h-full top-0 left-0 rounded-lg"
              style={{
                background:
                  " linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.5) 90.62%)",
              }}
            >
              <div className=" text-white px-3 py-4 z-10 text h-full w-full justify-end flex flex-col items-center">
                <h4 className="font-bold text-lg">Tailor</h4>
                <p className="text-sm text-center">
                  Simplify your tailoring business and focus more on what
                  matters
                </p>
              </div>
            </div>
            <Image
              src="/tailor_type.png"
              fill
              alt=""
              className="object-cover rounded-lg -z-20"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RouteCustomerModal;
