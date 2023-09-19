"use client";
import { useState } from "react";
import Image from "next/image";
import AutoMeasurement from "/public/auto-measurement.png";
import ManualMeasurement from "/public/manuel-measurement.png";

export default function ClothingTabsSwitch() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabOne = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setCurrentTab(1);
  };

  const handleTabTwo = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setCurrentTab(2);
  };

  return (
    <section className="bg-white sm:px-16 sm:py-24 py-12">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#F2F4F5] p-1 px-3 rounded-full">
          <button
            className={`rounded-full p-1 px-3 ${
              currentTab === 1 ? "bg-blue-fitted text-white" : "text-dark-tab"
            }`}
            onClick={handleTabOne}
          >
            Custom clothing
          </button>
          <button
            className={`rounded-full p-1 px-4 ${
              currentTab === 2 ? "bg-blue-fitted text-white" : "text-dark-tab"
            }`}
            onClick={handleTabTwo}
          >
            Ready to wear
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 gap-10">
          <div className={`${currentTab === 1 ? "flex" : "hidden"} relative`}>
            <Image
              src={ManualMeasurement}
              alt="auto measurement"
              sizes="100vw"
              style={{
                width: "100%",
                height: "50vh",
              }}
            />

            <div className="absolute lg:w-[365px] top-40 lg:right-5 text-white">
              <h2 className="font-kotori-rose font-bold text-xl text-center">
                Auto size Engine
              </h2>
              <p className="font-avenir text-base font-normal text-center">
                Use body data like (height and weight) to predict your
                customers’ measurements. Highly accurate and tested with over
                15k people
              </p>
            </div>
          </div>

          <div className={`${currentTab === 1 ? "flex" : "hidden"} relative`}>
            <Image
              src={ManualMeasurement}
              alt="manual measurement"
              sizes="100vw"
              style={{
                width: "100%",
                height: "50vh",
              }}
            />
            <div className="absolute lg:w-[365px] top-40 lg:right-5 text-white">
              <h2 className="font-kotori-rose font-bold text-xl text-center">
                Auto size Engine
              </h2>
              <p className="font-avenir text-base font-normal text-center">
                Use body data like (height and weight) to predict your
                customers’ measurements. Highly accurate and tested with over
                15k people
              </p>
            </div>
          </div>

          <div className={`${currentTab === 2 ? "block" : "hidden"} relative`}>
            <Image
              src={ManualMeasurement}
              alt="manual measurement"
              sizes="50vw"
              style={{
                width: "100%",
                height: "50vh",
              }}
            />
            <div className="absolute lg:w-[365px] top-40 lg:right-14 text-white">
              <h2 className="font-kotori-rose font-bold text-xl text-center">
                Auto size Engine
              </h2>
              <p className="font-avenir text-base font-normal text-center">
                Use body data like (height and weight) to predict your
                customers’ measurements. Highly accurate and tested with over
                15k people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
