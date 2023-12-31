import Image from "next/image";
import MobilePhone from "/public/mobile-phone-download.png";
import AppStoreLogo from "/public/app-store.png";
import PlayStoreLogo from "/public/play-store.png";
import Link from "next/link";

export default function TailorsAppDownload() {
  return (
    <section className="bg-[#040C31] sm:px-16 px-8 sm:py-24 py-16">
      <div className="container mx-auto flex justify-between items-center sm:flex-row flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h2 className="font-korori-rose text-white capitalize text-2xl lg:text-3xl font-bold lg:max-w-lg">
            Get Jobs, Make Money...
          </h2>
          <p className="font-avenir font-normal text-white text-[12px] mt-4 max-w-[300px]">
            Download the Fitted Tailor’s App and Join thousands of tailors turbo
            charging their businesses world wide
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <Link href="https://apps.apple.com/ng/app/fitted-tailors-app/id1609859045">
              <Image
                src={AppStoreLogo}
                alt="apple-store"
                loading="lazy"
                className="lg:w-[140px] lg:h-[42px] w-[120px] mr-5 object-contain cursor-pointer"
              />
            </Link>
            

            <Link href="https://play.google.com/store/apps/details?id=tailors.fitted.ng">
              <Image
                src={PlayStoreLogo}
                alt="play-store"
                loading="lazy"
                className="lg:w-[140px] lg:h-[42px] w-[120px] object-contain cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center max-sm:mt-20">
          <div className="relative ">
            <Image
              src={MobilePhone}
              alt="tailor taking measurement"
              width={500}
              height={400}
              loading="lazy"
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
