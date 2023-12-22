import Link from "next/link";
import Image from "next/image";
import Like from "./Like";
import bagIcon from "/public/icons/bag-2.svg";
import arrowDownIcon from "/public/icons/arrow-down.svg";
import { ProductTypeTwo } from "@/utils/magicProductsInfo";

export default function ProductDetails({
  setShowModal,
  product,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductTypeTwo;
}) {
  return (
    <section className="bg-white">
      <div className="w-full h-[400px] flex gap-4">
        {product.image_url_0 ? (
          <>
            <div className="w-full h-full relative">
              <Image
                src={product.image_url_0}
                alt={product.name}
                fill={true}
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute left-4 bottom-[18px] flex items-center gap-1 py-2 px-3 bg-[#ffffffe5]/90 rounded-[40px] backdrop-blur-md">
                <Image src={bagIcon} alt="bag icon" />
                <span className="text-[#1D2939] text-sm">Shop Look</span>
              </div>
            </div>
            {/* <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div>
            <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div>
            <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div> */}
          </>
        ) : (
          <>
            <div className="w-full h-full bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div>
            {/* <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div>
            <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div>
            <div className="min-w-[350px] h-full relative bg-pink-fitted/50 flex justify-center items-center">
              <p className="text-white text-center">Image yet to be uploaded</p>
            </div> */}
          </>
        )}
      </div>

      <div className="p-4 flex flex-col gap-5">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-[#1D2939] text-sm">{product.name}</h3>
              <p className="text-[#667085] text-[10px] font-[350]">
                {product.description}
              </p>
            </div>

            <Like />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <p className="text-[#101828] text-lg">₦{product.price}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#1D2939] text-sm mb-1">
            Colour:{" "}
            <span className="inline-flex gap-1">
              {product.color &&
                product.color.map((item, index) => (
                  <span key={index}>
                    <span>{item}</span>
                  </span>
                ))}
            </span>
          </h3>
          <div className="flex gap-[14px]">
            <div className="w-12 h-12 rounded-sm bg-[#4B7B89]"></div>
            <div className="w-12 h-12 rounded-sm bg-[#FEC84B] "></div>
            <div className="w-12 h-12 rounded-sm bg-[#F9A495]"></div>
            <div className="w-12 h-12 rounded-sm bg-[#D6C9E5]"></div>
            <div className="w-12 h-12 rounded-sm bg-[#BBECC3]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className="flex justify-between items-center">
            <div className="flex gap-[3px] items-center">
              <p className="text-[#333232]">Size</p>{" "}
              <p className="bg-[#F2F4F7] text-[#344054] text-sm p-1.5 rounded-[40px] flex items-center gap-[5px]">
                US <Image src={arrowDownIcon} alt="arrow down icon" />
              </p>
            </div>

            <a
              href={product.chart_link || ""}
              target="_blank"
              className=" text-[#1D2939] text-xs font-medium leading-[1] border-b border-[#1D2939]"
            >
              Check size guide
            </a>
          </div>

          <div className="flex items-center gap-[14px] overflow-x-scroll no-scrollbar">
            {product.size.map((item, index) => (
              <p
                key={index}
                className="py-1 px-4 rounded-[40px] border border-[#E4E7EC] text-sm min-w-fit"
              >
                {item}
              </p>
            ))}
          </div>

          <div>
            <p className="text-[#898A8D] text-xs font-medium">
              Can&apos;t find size?{" "}
              <Link
                href="https://groups.fitted.fashion/login"
                target="_blank"
                className="text-[#333232] font-medium ml-1.5 underline"
              >
                Add measurement
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-12 px-4">
        <button
          className="bg-[#B7076B] w-full text-[#F9FAFB] py-3 px-[18px] rounded-[5px]"
          onClick={() => setShowModal(true)}
        >
          Make Order
        </button>
      </div>
    </section>
  );
}
