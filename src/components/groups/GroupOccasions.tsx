import Image from "next/image";
import Button from "./Button";
import OccasionImage from "/public/groups-occasions.png";
import PlayIcon from "/public/icons/play-icon.svg";

export default function GroupOccasions() {
  return (
    <section className="mt-16 lg:mt-28 lg:pt-24">
      <div className="px-6 md:px-12 container mx-auto">
        <div className="mb-10 lg:mb-[60px]">
          <h1 className="max-w-[345px] md:max-w-[1055px] mx-auto text-center text-2xl lg:text-5xl mb-7 lg:mb-10 font-bold">
            Over <span className="text-new-purple">152+</span> groups have
            gotten outfits for various occasions with fitted
          </h1>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-3 lg:gap-4 w-full md:w-2/3 lg:w-full mx-auto">
            <Button type="purple">Create a group</Button>
            <Button type="white">Explore aso-ebi options</Button>
          </div>
        </div>

        <div>
          <div className="w-full relative">
            <Image
              src={OccasionImage}
              alt="Group occasions"
              className="aspect-video mx-auto"
              loading="lazy"
            />
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] absolute top-[50%] left-[50%] object-cover object-center -translate-x-1/2 -translate-y-1/2">
              <Image src={PlayIcon} alt="play icon" loading="lazy" />
            </div>
            <p className="text-white w-[184px] lg:w-[461px] text-[8px] lg:text-xl absolute bottom-2 right-2 md:bottom-5 md:right-5 lg:bottom-12 lg:right-12">
              See how fitted styled and produced outfits for 60+ groomsmen in
              under 2 weeks (Jan- 2023)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
