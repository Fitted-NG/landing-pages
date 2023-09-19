"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const RouteCustomerModal = () => {
  const { modals } = useContext(ThemeContext);

  return (
    //
    <div className={`modal__box ${modals.state["RouteCustomerModal"]}`}>
      <div className="modal__box-wrapper shadow-lg rounded-2xl">
        <div className=" mb-2 pt-4">
          <div className="flex items-center justify-center flex-col gap-3 grow">
            <p className="mb-3 font-kotori-rose text-[#1E1E1E] text-2xl">
              What type of customer are you?
            </p>
          </div>

          <button
            className=" flex items-center  absolute top-5 right-5  "
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

        <div className="flex items-center justify-around py-5 my-3 w-full gap-3">
          <Link
            href={"https://store.fitted.ng/"}
            className={`block relative rounded-lg border transition duration-150 ease-in-out w-1/2 h-72 overflow-hidden get_started_modal_btns`}
            //   onClick={() => handleClickGetStarted('customer')}
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
                <p className="text-sm">
                  Find outfits yourself or someone special, for your daily
                  domestic needs or special events.
                </p>
              </div>
            </div>
            <Image
              src="/GetStartedImage2.png"
              fill
              alt=""
              className="object-cover rounded-lg -z-20"
            />
          </Link>
          <Link
            href={"https://groups.fitted.ng/signup"}
            className={`block relative rounded-lg border transition duration-150 ease-in-out w-1/2 h-72 overflow-hidden get_started_modal_btns`}
            //   onClick={() => handleClickGetStarted('customer')}
          >
            <div
              className="absolute w-full h-full top-0 left-0 rounded-lg"
              style={{
                background:
                  " linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.5) 90.62%)",
              }}
            >
              <div className=" text-white px-3 py-4 z-10 text h-full w-full justify-end flex flex-col items-center">
                <h4 className="font-bold text-lg">Group</h4>
                <p className="text-sm">
                  Looking for custom wear for your event&apos;s group? Get
                  personalized apparel for your team or gathering.
                </p>
              </div>
            </div>
            <Image
              src="/GetStartedImage1.png"
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
