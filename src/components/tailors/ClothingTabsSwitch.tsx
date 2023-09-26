"use client";
import { useState } from "react";
import Image from "next/image";
import AutoMeasurement from "/public/auto-measurement.png";
import ManualMeasurement from "/public/manuel-measurement.png";
import SizeChart from "/public/sizechart.png";
import Button from './Button';

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
                  src={AutoMeasurement}
                  alt="manual measurement"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "50vh",
                  }}
                />

                <div className="banner__overlay rounded-lg"></div>

                <div className="absolute inset-0 top-44 flex flex-col items-center justify-center text-white">
                  <h2 className="w-[250px] font-kotori-rose font-bold text-xl bg-opacity-50 text-center">
                    Auto size Engine
                  </h2>
                  <p className="w-[350px] font-avenir text-sm font-normal bg-opacity-50 text-center">
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

                <div className="banner__overlay rounded-lg"></div>    
               

                <div className="absolute inset-0 top-44 flex flex-col items-center justify-center text-white">
                  <h2 className="w-[250px] font-kotori-rose font-bold text-xl text-center">
                    Manual Measurements
                  </h2>
                  <p className="w-[350px] font-avenir text-sm font-normal text-center">
                    Let customers input their measurements manually, as measured by yourself or a tailor
                  </p>
                </div>
            </div>



            <div className= {`${currentTab === 2 ? "flex" : "hidden"} relative`}>
                <Image
                  src={SizeChart}
                  alt="size chart"
                  sizes="50vw"
                  style={{
                    width: "100%",
                    height: "50vh",
                  }}
                />

                <div className="banner__overlay rounded-lg"></div>

                <div className="absolute inset-0 top-44 flex flex-col items-center justify-center text-white">
                  <h2 className="w-[250px] font-kotori-rose font-bold text-xl text-center">
                    Auto size Engine
                  </h2>
                  <p className="w-[350px] font-avenir text-base font-normal text-center">
                    See all sizes of outfits
                  </p>
                  <div className="mt-4">
                    <button className="bg-[#EAFFF9] border border-[#00C48C] p-2 px-6 rounded-full text-[#00C48C]">Coming Soon</button>
                    {/* <Button type="blue">Coming Soon</Button>  */}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
