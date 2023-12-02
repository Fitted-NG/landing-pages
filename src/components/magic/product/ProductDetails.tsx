import Image from "next/image";
import productImage1 from "/public/hands_in_pocket.png";
import bagIcon from "/public/icons/bag-2.svg";
import heartIcon from "/public/icons/heart_icon.svg";
import starIcon from "/public/icons/star.svg";
import arrowDownIcon from "/public/icons/arrow-down.svg";

const colors = [
  { color: "#4B7B89" },
  { color: "#FEC84B" },
  { color: "#F9A495" },
  { color: "#D6C9E5" },
  { color: "#BBECC3" },
];

const sizes = ["S (4)", "M (6)", "L (8/10)", "XL (12)", "XXL (14)"];

export default function ProductDetails({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="bg-white">
      <div className="w-full h-[500px] flex gap-4 overflow-x-scroll no-scrollbar">
        <div className="w-full min-w-[400px] h-full relative">
          <Image
            src={productImage1}
            alt="Hand in a pocket"
            loading="lazy"
            fill={true}
            className="object-cover object-center"
          />
          <div className="absolute left-4 bottom-[18px] flex items-center gap-1 py-2 px-3 bg-[#ffffffe5]/90 rounded-[40px] backdrop-blur-md">
            <Image src={bagIcon} alt="bag icon" />
            <span className="text-[#1D2939] text-sm">Shop Look</span>
          </div>
        </div>
        <div className="w-full min-w-[400px] h-full relative">
          <Image
            src={productImage1}
            alt="Hand in a pocket"
            loading="lazy"
            fill={true}
            className="object-cover object-center"
          />
          <div className="absolute left-4 bottom-[18px] flex items-center gap-1 py-2 px-3 bg-[#ffffffe5]/90 rounded-[40px] backdrop-blur-md">
            <Image src={bagIcon} alt="bag icon" />
            <span className="text-[#1D2939] text-sm">Shop Look</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-[#1D2939] text-sm">The Mani Trouser </h3>
              <p className="text-[#667085] text-[10px] font-[350]">
                Soft woolen fabric by Monte
              </p>
            </div>

            <Image src={heartIcon} alt="heart icon" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <p className="text-[#101828] text-lg">₦25,000</p>
              <p className="text-[#98A2B3] text-[10px] font-[350]">
                500 pcs sold
              </p>
            </div>

            <div className="flex items-center gap-0.5">
              <Image src={starIcon} alt="star icon" />
              <p className="text-[#101828] text-xs font-[350]">
                4.5 <span className="text-[#344054]">(266)</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#1D2939] text-sm mb-1">Colour: Powder Blue</h3>
          <div className="flex gap-[14px]">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-sm bg-[${color.color}]`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-[3px] items-center">
              <p className="text-[#333232]">Size</p>{" "}
              <p className="bg-[#F2F4F7] text-[#344054] p-1.5 rounded-[40px] flex items-center gap-[5px]">
                US <Image src={arrowDownIcon} alt="arrow down icon" />
              </p>
            </div>

            <p className=" text-[#1D2939] text-xs font-medium leading-[1] border-b border-[#1D2939]">
              Check size guide
            </p>
          </div>

          <div className="flex items-center gap-[14px] overflow-x-scroll no-scrollbar">
            {sizes.map((size, index) => (
              <p
                key={index}
                className="py-1 px-4 rounded-[40px] border border-[#E4E7EC] min-w-fit"
              >
                {size}
              </p>
            ))}
          </div>

          <div>
            <p className="text-[#898A8D] text-xs font-medium">
              Can&apos;t find size?{" "}
              <span className="text-[#333232] font-medium ml-1.5 underline">
                Add measurement
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-12 px-4">
        <button
          className="bg-[#B7076B] w-full text-[#F9FAFB] py-3 px-[18px] rounded-[5px]"
          onClick={() => setShowModal(true)}
        >
          Buy now
        </button>
      </div>
    </section>
  );
}
