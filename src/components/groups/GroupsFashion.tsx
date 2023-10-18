"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import FirstImage from "/public/group-fashion-1.png";
import SecondImage from "/public/group-fashion-2.png";
import ThirdImage from "/public/group-fashion-3.png";
import FourthImage from "/public/group-fashion-4.png";
import Link from "next/link";

const images = [FirstImage, SecondImage, ThirdImage, FourthImage];

export default function GroupFashion() {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTab((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentTab]);

  if (currentTab >= images.length) {
    setCurrentTab(0);
  }

  const changeTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <section
      className="mt-16 lg:mt-32 bg-cream-fitted w-full"
      id="group-fashion"
    >
      <div className="pt-24 pb-16 container mx-auto px-6 md:px-12">
        <div className="hidden lg:block mb-16">
          <h1 className="text-center text-5xl font-bold mb-[22px]">
            Take the headache out of group fashion
          </h1>
          <h3 className="text-sm font-normal text-center font-avenir">
            Explore how to get the most out of fitted
          </h3>
        </div>

        <div className="lg:hidden mb-[55px] max-w-[392px] md:max-w-none mx-auto">
          <h1 className="text-center text-2xl font-bold">
            What fitted helps you get for groups outfits
          </h1>
        </div>

        <div>
          <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between gap-16 lg:gap-20 mb-14">
            <div className="flex justify-center items-center lg:items-start w-full lg:w-1/2 lg:h-[504px]">
              <Image
                src={images[currentTab]}
                alt="group fashion"
                priority
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-5 lg:gap-8 w-full lg:w-[60%] border-l-2">
              <div
                onClick={() => changeTab(0)}
                className={`px-3 lg:px-8 cursor-pointer hover:opacity-100 relative before:bg-pink-fitted before:transition-all before:ease-in before:absolute before:w-1 before:h-full before:top-0 before:-left-[1px] ${
                  currentTab === 0
                    ? "before:opacity-100 opacity-100"
                    : "before:opacity-0 opacity-75"
                }`}
              >
                <h3 className="text-[#2A313D] text-sm md:text-xl lg:text-2xl font-bold mb-1">
                  Invite guests
                </h3>
                <p className="text-dark text-sm lg:text-base">
                  Invite all of your guests to the groups platform that way all
                  of your guests are in one place.
                </p>
              </div>

              <div
                onClick={() => changeTab(1)}
                className={`px-3 lg:px-8 cursor-pointer hover:opacity-100 relative before:bg-blue-500 before:transition-all before:ease-in before:absolute before:w-1 before:h-full before:top-0 before:-left-[1px] ${
                  currentTab === 1
                    ? "before:opacity-100 opacity-100"
                    : "before:opacity-0 opacity-75"
                }`}
              >
                <h3 className="text-[#2A313D] text-sm md:text-xl lg:text-2xl font-bold mb-1">
                  Get measurement
                </h3>
                <p className="text-dark text-sm lg:text-base">
                  Receive notifications upon interested tailors and make a pick
                  based on your preference.
                </p>
              </div>

              <div
                onClick={() => changeTab(2)}
                className={`px-3 lg:px-8 cursor-pointer hover:opacity-100 relative before:bg-yellow-500 before:transition-all before:ease-in before:absolute before:w-1 before:h-full before:top-0 before:-left-[1px] ${
                  currentTab === 2
                    ? "before:opacity-100 opacity-100"
                    : "before:opacity-0 opacity-75"
                }`}
              >
                <h3 className="text-[#2A313D] text-sm md:text-xl lg:text-2xl font-bold mb-1">
                  Sort your fabric, get your style
                </h3>
                <p className="text-dark text-sm lg:text-base">
                  Engage in negotiations and finalize style details for the
                  group. Make payment only when you're satisfied with the
                  offered price. Our platform provides a seamless and convenient
                  payment process
                </p>
              </div>

              <div
                onClick={() => changeTab(3)}
                className={`px-3 lg:px-8 cursor-pointer hover:opacity-100 relative before:bg-dark before:transition-all before:ease-in before:absolute before:w-1 before:h-full before:top-0 before:-left-[1px] ${
                  currentTab === 3
                    ? "before:opacity-100 opacity-100"
                    : "before:opacity-0 opacity-75"
                }`}
              >
                <h3 className="text-[#2A313D] text-sm md:text-xl lg:text-2xl font-bold mb-1">
                  Speedy delivery
                </h3>
                <p className="text-dark text-sm lg:text-base">
                  Rate your experience and help others find awesome tailors
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-full mx-auto">
            <Link
              href="https://groupsapp.fitted.ng/login"
              className="w-full lg:w-[initial]"
            >
              <Button type="purple">Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
