"use client";
import { useState } from "react";
import { ProductTypeTwo } from "@/utils/magicProductsInfo";

export default function Modal({
  product,
  setShowModal,
  setShowSuccessModal,
}: {
  product: ProductTypeTwo;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    nameOfBrand: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { image_url_0, image_url_1, image_url_2, image_url_3, ...rest } =
      product;

    const data = {
      ...inputValues,
      product: rest,
    };

    fetch("/api/magic-tag", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setInputValues({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          interest: "",
          nameOfBrand: "",
        });
        setShowModal(false);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/30 backdrop-blur">
      <div
        className="absolute inset-0"
        onClick={() => setShowModal(false)}
      ></div>
      <form
        className="bg-white max-w-[600px] rounded-lg p-4 relative"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="mb-2">
                First Name
              </label>
              <input
                type="text"
                value={inputValues.firstName}
                required
                autoComplete="true"
                onChange={handleChange}
                name="firstName"
                className="block w-full rounded border-0 bg-gray-200 px-4 py-1 md:py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="w-full">
              <label htmlFor="lastName" className="mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                autoComplete="true"
                value={inputValues.lastName}
                onChange={handleChange}
                className="block w-full rounded border-0 bg-gray-200 px-4 py-1 md:py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="true"
              value={inputValues.email}
              onChange={handleChange}
              className="block w-full rounded border-0 bg-gray-200 px-4 py-1 md:py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phoneNumber" className="mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              required
              autoComplete="true"
              value={inputValues.phoneNumber}
              onChange={handleChange}
              className="block w-full rounded border-0 bg-gray-200 px-4 py-1 md:py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-6">
            <p className="font-medium">Interest:</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="customer"
                  name="interest"
                  required
                  className="accent-pink-fitted"
                  value="customer"
                  onChange={handleChange}
                />
                <label htmlFor="customer">Customer</label>
              </div>

              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="fashionBrand"
                  name="interest"
                  required
                  className="accent-pink-fitted"
                  value="fashion brand"
                  onChange={handleChange}
                />
                <label htmlFor="fashionBrand">Fashion brand</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="nameOfBrand" className="mb-2">
              Name of fashion brand (Optional)
            </label>
            <input
              type="text"
              id="nameOfBrand"
              name="nameOfBrand"
              autoComplete="true"
              value={inputValues.nameOfBrand}
              onChange={handleChange}
              className="block w-full rounded border-0 bg-gray-200 px-4 py-1 md:py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="my-4">
            <button
              disabled={isSubmitting}
              className="block w-full rounded-md bg-pink-fitted py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
