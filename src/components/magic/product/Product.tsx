"use client";
import { useState } from "react";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import Accordions from "./Accordions";
import fabricImage from "/public/fabric.png";
import okeLagosBrand from "/public/Oke-Lagos.png";
import fittedDarkLogo from "/public/logo-dark.png";
import { ProductType } from "@/utils/magicProductsInfo";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal";

export default function Product({ product }: { product: ProductType }) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <main className="bg-[#F9FAFB] max-w-[768px] mb-20 mx-auto min-h-[calc(100vh-60px)]">
        <ProductDetails setShowModal={setShowModal} product={product} />

        <Accordions />

        <section className="bg-white mb-4">
          <div className="py-6 px-4">
            <div>
              <Image src={fabricImage} alt="fabric" className="mx-auto mb-3" />
            </div>

            <p className="text-[#667085] text-xs max-w-[273px]">
              This material is a {product.fabricName} from the finest fabric
              producers, crafted into this magical style
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="p-4 flex items-center gap-3">
            <div className="w-[74px] h-[74px] border border-[#D0D5DD] rounded-lg flex justify-center items-center">
              {product.brand.toLocaleLowerCase().includes("fitted") ? (
                <Image src={fittedDarkLogo} alt="Fittd logo" />
              ) : (
                <Image src={okeLagosBrand} alt="Oke Lagos" />
              )}
            </div>

            <div>
              <h4 className="text-[#1D2939] text-sm font-medium mb-2">
                Designed by
              </h4>
              <p className="text-[#667085] text-xs capitalize">
                {product.brand}
              </p>
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <Modal
          product={product}
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {showSuccessModal && (
        <SuccessModal setShowSuccessModal={setShowSuccessModal} />
      )}
    </>
  );
}