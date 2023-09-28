"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HappyClientOne from "/public/happy-client-one.png";
import HappyClientTwo from "/public/happy-client-two.png";
import HappyClientThree from "/public/happy-client-three.png";



const images = [HappyClientOne, HappyClientTwo, HappyClientThree];

export default function ClientProfile() {
  const [profileTab, setProfileTab] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setProfileTab((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [profileTab]);

  if (profileTab >= images.length) {
    setProfileTab(0);
  }

  return (
    <section className="bg-white-500 max-w-[1440px] mx-auto">
      {/* <div className="bg-lime-500 sm:px-16 px-8">
            <p>jfdjdfjdf</p>
            <h2>hvchcvhcvhcvhcv</h2>
        </div> */}

      <div
        className={`bg-white max-w-[1440px] mx-auto flex lg:flex-row flex-col-reverse ${
          profileTab === 0 ? "flex" : "hidden"
        }`}
      >
        <div className="w-1/2 sm:px-16 px-8 mb-20 mt-12 lg:mt-52">
          <div className="text-center w-[300px] lg:w-[400px]">
            <h2 className="text-base lg:text-2xl font-avenir font-normal">
              “Very helpful when I want to vacation and there are lots of
              promotions, I really like it, thank you very much”
            </h2>
            <div className="mt-8">
              <p className="text-[#344054] font-avenir text-base font-medium">Sikiru Abaja</p>
              <p className="text-[#888F9B] font-avenir text-sm font-normal">Founder Hello World</p>
            </div>
          </div>
        </div>

        <div className="lg:block items-stretch lg:w-1/2 h-[500px] py-2 relative overflow-hidden">
          <Image
            src={HappyClientOne}
            alt="tailor taking measurement"
            fill={true}
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        className={`bg-white max-w-[1440px] mx-auto flex lg:flex-row flex-col-reverse ${
          profileTab === 1 ? "flex" : "hidden"
        }`}
      >
        <div className="w-1/2 sm:px-16 px-8 mb-20 mt-12 lg:mt-52">
          <div className="text-center w-[300px] lg:w-[400px]">
            <h2 className="w-[500px] text-base lg:text-2xl font-avenir font-normal">
              “Unbelievable that someone would go this far to help organize my business. This app was a game changer! I've never been more efficient”
            </h2>
            <div className="mt-8 ml-[120px]">
              <p className="text-[#344054] font-avenir text-base font-medium">Sikiru Abaja</p>
              <p className="text-[#888F9B] font-avenir text-sm font-normal">Founder Hello World</p>
            </div>
          </div>
        </div>

        <div className="lg:block items-stretch lg:w-1/2 h-[500px] py-2 relative overflow-hidden">
          <Image
            src={HappyClientTwo}
            alt="tailor taking measurement"
            fill={true}
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        className={`bg-white max-w-[1440px] mx-auto flex lg:flex-row flex-col-reverse ${
          profileTab === 2 ? "flex" : "hidden"
        }`}
      >
        <div className="w-1/2 sm:px-16 px-8 mb-20 mt-12 lg:mt-52">
          <div className="text-center w-[300px] lg:w-[400px]">
            <h2 className="text-base lg:text-2xl font-avenir font-normal">
              “Very helpful when I want to vacation and there are lots of
              promotions, I really like it, thank you very much”
            </h2>
            <div className="mt-8">
              <p className="text-[#344054] font-avenir text-base font-medium">Sikiru Abaja</p>
              <p className="text-[#888F9B] font-avenir text-sm font-normal">Founder Hello World</p>
            </div>
          </div>
        </div>

        <div className="lg:block items-stretch lg:w-1/2 h-[500px] py-2 relative overflow-hidden">
          <Image
            src={HappyClientThree}
            alt="tailor taking measurement"
            fill={true}
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
