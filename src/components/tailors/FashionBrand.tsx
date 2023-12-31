import Image from "next/image";
import Button from "./Button";
import FashionBrandImage from "/public/fashion-brand-lady.png";
import Link from "next/link";

export default function FashionBrand() {
  return (
    <section className="bg-[#FBFBFF] sm:px-16 px-8 pt-12">
      <div className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col lg:items-start sm:items-center">
          <h2 className="font-kotori-rose text-[#152C5B] font-bold lg:text-4xl text-xl lg:w-[500px]">
            Are you a fashion brand getting your products out?
          </h2>
          <p className="font-avenir text-[#4F4F4F] text-center md:text-left font-light mt-4 mb-4 sm:max-w-[370px] lg:w-[514px] text-lg">
            Take your fashion business to the next level by focusing on what
            matters. Scale the production of your fashion pieces and designs
            without the headache of Tailor recruitment.
          </p>
          <Link href="https://tailors.fitted.fashion/signup">
            <button className="bg-blue-fitted text-white p-2 px-12 rounded-lg">
              Join as fashion brand
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <Image
            src={FashionBrandImage}
            alt="fashion brand image"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 200vw, 100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
