import Image from "next/image";
import TailorDashboard from "/public/tailor-dashborad.png";
import AcessMeasurement from "/public/access-measurement.png";
import CentralizeMeasurement from "/public/centralize-records.png";

export default function TailorsMeasurement() {
  return (
    <section className="bg-white sm:px-16 px-8 py-12">
      <div className="container mx-auto flex flex-col items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[#152C5B] font-kotori-rose font-bold text-center lg:max-w-[700px]  max-w-[345px] text-2xl lg:text-4xl">
            Save time focusing what matters; measurements, seams & creativity
          </h2>
          <p className="text-[#4F4F4F] font-avenir font-light max-w-[640px] lg:text-lg text-sm text-center mt-3">
            Save time by collecting new customer’s measurements with the Fitted
            platform. Improve storage of existing customer’s measurements by
            recording them with Fitted
          </p>
        </div>

        <div className="flex flex-1 justify-center items-center mt-3">
          <Image
            src={TailorDashboard}
            alt="tailor taking measurement"
            width={0}
            height={0}
            loading="lazy"
            sizes="(min-width: 808px) 100vw, 100vw"
            className="object-contain cursor-pointer w-[2000px] h-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:-mt-40 mb-14">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={AcessMeasurement}
              alt="tailor taking measurement"
              width={40}
              height={40}
              loading="lazy"
              className="object-contain cursor-pointer flex items-center"
            />
            <h3 className="mt-3 text-[#101828] font-normal font-kotori-rose">Access measurements anywhere, anytime</h3>
            <p className="mt-3 text-[#667085] font-avenir text-sm">
              Fitted's technology empowers your business with offline
              capabilities, ensuring that connectivity challenges do not hinder
              your use of apps for improvement. Experience the full power of
              Fitted even in environments with limited or no internet access.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={CentralizeMeasurement}
              alt="tailor taking measurement"
              width={40}
              height={40}
              loading="lazy"
              className="object-contain cursor-pointer"
            />
            <h3 className="mt-3 text-[#101828] font-normal font-kotori-rose">
              Centralize Records
            </h3>
            <p className="mt-3 text-[#667085] font-avenir text-sm">
              Whether you prefer capturing measurements on-site or remotely,
              Fitted provides versatile options to suit your business needs. You
              can conveniently send customers a simple form to fill in, ensuring
              accurate and comprehensive data collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
