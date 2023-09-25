import Image from "next/image";
import Button from "./Button";
import Image1 from "/public/manage-details-1.png";
import Image2 from "/public/manage-details-2.png";
import Image3 from "/public/manage-details-3.png";
import Image4 from "/public/manage-details-4.png";
import Link from "next/link";

export default function ManageDetails() {
  return (
    <section className="bg-cream-fitted mt-16 md:mt-20">
      <div className="container mx-auto px-6 pb-16 md:px-12 md:pt-16">
        <div className="sm:max-w-[345px] md:max-w-none mx-auto mb-5 md:mb-14">
          <h1 className="text-2xl md:text-5xl text-center font-bold mb-8">
            Eliminate the Stress of Managing the Details
          </h1>

          <h3 className="text-center text-sm md:text-base font-normal text-dark font-avenir">
            With the fitted platform, we seamlessly organize every aspect of
            your order
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12 lg:mb-16">
          <div className="flex flex-col gap-3">
            <div>
              <Image
                src={Image1}
                alt="men measuring a cloth"
                loading="lazy"
                className="rounded-lg "
              />
            </div>

            <p className="text-2xl font-medium text-dark">Measurements</p>

            <ul className="pl-4 list-disc text-dark">
              <li>Store measurements</li>
              <li>Works for individuals and groups</li>
              <li>Male and female measurements covered</li>
              <li>Predict your measurements with our AI</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Image
                src={Image2}
                alt="set of fabrics"
                loading="lazy"
                className="rounded-lg"
              />
            </div>

            <p className="text-2xl font-medium text-dark">Fabric</p>

            <ul className="pl-4 list-disc text-dark">
              <li>Source exceptional quality curated fabric</li>
              <li>Make the perfect style with it</li>
              <li>Secure</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Image
                src={Image3}
                alt="lady taking a man's measurement"
                loading="lazy"
                className="rounded-lg"
              />
            </div>

            <p className="text-2xl font-medium text-dark">Styling</p>

            <ul className="pl-4 list-disc">
              <li>Choose the exact outfit and look you like</li>
              <li>Customise it to your taste</li>
              <li>Pair it with choice accessories</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Image
                src={Image4}
                alt="hand holding a mobile phone"
                loading="lazy"
                className="rounded-lg"
              />
            </div>

            <p className="text-2xl font-medium text-dark">Payments</p>

            <ul className="pl-4 list-disc text-dark">
              <li>Pay easily</li>
              <li>Use card or transfer</li>
              <li>Organize and track payments for the whole group</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3 mx-auto flex md:justify-center items-center">
          <Link
            href="https://groupsapp.fitted.ng/login"
            className="w-full md:w-[initial]"
          >
            <Button type="purple">Create invite to group</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
