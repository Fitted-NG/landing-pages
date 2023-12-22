"use client";
import { useState } from "react";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import Accordions from "./Accordions";
import fabricImage from "/public/fabric.png";
import fittedDarkLogo from "/public/logo-dark.png";
import { ProductTypeTwo } from "@/utils/magicProductsInfo";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal";

export default function Product({ product }: { product: ProductTypeTwo }) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <main className="bg-[#F9FAFB] max-w-[768px] mb-20 mx-auto min-h-[calc(100vh-60px)]">
        <ProductDetails setShowModal={setShowModal} product={product} />

        <Accordions details={product.description} sizes={product.size} />

        <section className="bg-white">
          <div className="p-4 flex items-center gap-3">
            {product.user?.brand_logo ? (
              <div className="w-[74px] h-[74px] border border-[#D0D5DD] rounded-lg flex justify-center items-center relative">
                <Image
                  src={product.user.brand_logo}
                  alt={product.user.brand_name}
                  fill={true}
                  className="absolute object-cover object-center"
                />
              </div>
            ) : (
              <div className="w-[74px] h-[74px] border border-[#D0D5DD] rounded-lg flex justify-center items-center">
                <Image src={fittedDarkLogo} alt="Fitted logo" />
              </div>
            )}

            {product.user.brand_name && (
              <div>
                <h4 className="text-[#1D2939] text-sm font-medium mb-2">
                  Designed by
                </h4>
                <p className="text-[#667085] text-xs capitalize">
                  {product.user.brand_name}
                </p>
              </div>
            )}
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
