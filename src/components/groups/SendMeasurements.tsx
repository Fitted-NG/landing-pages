import Image from "next/image";
import Button from "./Button";
import Measurement1 from "/public/measurement-1.png";

export default function SendMeasurements() {
  return (
    <section>
      <div className="bg-[#2B2327] lg:bg-black max-w-[1440px] mx-auto lg:flex">
        <div className="pt-16 pb-[100px] container mx-auto px-6 md:px-12 lg:w-1/2">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-7 lg:gap-12">
              <div className="md:text-center lg:text-left">
                <h1 className="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-6">
                  Do you have everyone’s measurement?
                </h1>

                <p className="text-white text-sm lg:max-w-[423px]">
                  Not to worry, we’ve got you. You don’t have to break your
                  schedule to give out your measurements. Instead you could send
                  down your measurements or use our measurement AI tool.
                </p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center lg:items-start w-full md:w-2/3 lg:w-full mx-auto">
                <Button type="purple">Send Measurement</Button>
                <Button type="white">Try Measurements AI</Button>
              </div>
            </div>

            <div className="flex justify-center items-center lg:hidden w-full md:w-2/3 mx-auto">
              <Image
                src={Measurement1}
                alt="tailor taking measurement"
                loading="lazy"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block items-stretch w-1/2 relative overflow-hidden">
          <Image
            src="/measurement-2.png"
            alt="tailor taking measurement"
            fill={true}
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="bg-main-purple relative lg:mt-20 lg:max-w-[1238px] mx-auto py-12 lg:py-14 overflow-hidden">
        <div className="absolute w-[300px] h-[250px] -bottom-10 left-[calc(50%-250px)] lg:left-[135px] overflow-hidden">
          <Image
            src="/spiral-1.png"
            alt="spiral background image"
            loading="lazy"
            fill={true}
            className="object-contain object-center"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[275px] md:max-w-[728px] mx-auto mb-6">
            <h2 className="text-white text-2xl lg:text-[32px] text-center">
              Seamlessly organize your aso ebi or groups outfit for your
              occasion
            </h2>
          </div>

          <div className="text-center w-3/4 md:w-2/3 lg:w-full mx-auto">
            <Button type="white">Get started</Button>
          </div>
        </div>
        <div className="absolute w-[300px] h-[250px] -top-10 right-[calc(50%-250px)] lg:right-[135px] overflow-hidden">
          <Image
            src="/spiral-2.png"
            alt="spiral background image"
            loading="lazy"
            fill={true}
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
