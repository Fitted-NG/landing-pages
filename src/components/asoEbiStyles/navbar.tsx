import Image from "next/image";

export default function AsoEbiStylesNavbar() {
  return (
    <div className="bg-white h-24 flex items-center">
      <div className="px-4 mx-9 w-full">
        <div className="flex items-center justify-between">
          <span className="inline-block h-16 w-44 relative">
            <Image
              src={"/logo-dark.png"}
              alt={"fitted logo dark"}
              fill
              className="object-center"
            />
          </span>

          <div className="">
            <button className="bg-pink-fitted hover:bg-opacity-80 text-white py-[10px] px-[18px] text-sm rounded-[8px]">
              Get Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
