import Image from "next/image";
import Button from "./Button";
import FashionBrandImage from "/public/fashion-brand-lady.png";

export default function FashionBrand() {
  return (
    <section className="bg-[#FBFBFF] sm:px-16 px-8 pt-12">
      <div className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col lg:items-start sm:items-center">
          <h2 className="font-kotori-rose font-bold lg:text-3xl text-xl lg:max-w-md">Are you a fashion brand getting your products out?</h2>
          <p className="font-avenir font-light mt-4 mb-4 sm:max-w-[370px] text-sm">
            Get Jobs from our fashion network to boost your revenues for a fee
            monthly and post new jobs to fill your demand for fashion services.
          </p>
          <Button type="blue">Join as fashion brand</Button>
        </div>

        <div className="flex flex-col">
          <Image
            src={FashionBrandImage}
            alt="fashion brand image"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
}
