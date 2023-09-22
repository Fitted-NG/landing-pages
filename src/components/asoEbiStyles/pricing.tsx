import Image from "next/image";

export default function AsoEbiStylesPricing() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:gap-10 items-stretch">
          <div className="">
            <div className="bg-pink-fitted text-white p-3">
              <h2 className="text-3xl font-semibold text-center text-white">
                Agbada Gang
              </h2>
            </div>
            <div className="p-4 md:p-6 border border-t-0 border-[#5773FF] h-full flex flex-col justify-between">
              <div className="">
                <p className="text-2xl font-semibold text-center">
                  N50,000/Outfit
                </p>
                <p className="font-bold text-lg py-2">Includes;</p>
                <ul className={"list-disc list-inside mb-2"}>
                  <li>Custom Outfit Styles</li>
                  <li>Free Lookbook</li>
                  <li>Outfit from 48hr</li>
                  <li>Free Platform Fees</li>
                  <li>Upto 10 outfits</li>
                </ul>
              </div>

              <a
                href="https://groupsapp.fitted.ng/signup?group=aso-ebi&price=50000"
                className="w-full text-center bg-pink-fitted hover:bg-opacity-80 text-white py-[10px] px-[18px] text-sm rounded-[8px] mt-5"
              >
                Create Order
              </a>
            </div>
          </div>
          <div className="">
            <div className="bg-pink-fitted text-white p-3">
              <h2 className="text-3xl font-semibold text-center text-white">
                Brides Maids
              </h2>
            </div>
            <div className="p-4 md:p-6 border border-t-0 border-[#5773FF] h-full flex flex-col justify-between">
              <div className="">
                <p className="text-2xl font-semibold text-center">
                  N40,000/Outfit
                </p>
                <p className="font-bold text-lg py-2">Includes;</p>
                <ul className={"list-disc list-inside mb-2"}>
                  <li>Custom Outfit Styles</li>
                  <li>Free Lookbook</li>
                  <li>Outfit from 48hr</li>
                  <li>Free Platform Fees</li>
                  <li>Upto 10 outfits</li>
                </ul>
              </div>
              <a
                href="https://groupsapp.fitted.ng/signup?group=brides-maids&price=40000"
                className="w-full text-center bg-pink-fitted hover:bg-opacity-80 text-white py-[10px] px-[18px] text-sm rounded-[8px] mt-5"
              >
                Create Order
              </a>
            </div>
          </div>
          <div className="">
            <div className="bg-pink-fitted text-white p-3">
              <h2 className="text-3xl font-semibold text-center text-white">
                Family
              </h2>
            </div>
            <div className="p-4 md:p-6 border border-t-0 border-[#5773FF] h-full flex flex-col justify-between">
              <div className="">
                <p className="text-2xl font-semibold text-center">
                  N60,000/Outfit
                </p>
                <p className="font-bold text-lg py-2">Includes;</p>
                <ul className={"list-disc list-inside mb-2"}>
                  <li>Custom Outfit Styles</li>
                  <li>Free Lookbook</li>
                  <li>Outfit from 48hr</li>
                  <li>Free Platform Fees</li>
                  <li>Unlimited outfits</li>
                  <li>Dedicated Support</li>
                </ul>
              </div>
              <a
                href="https://groupsapp.fitted.ng/signup?group=familys&price=60000"
                className="w-full text-center bg-pink-fitted hover:bg-opacity-80 text-white py-[10px] px-[18px] text-sm rounded-[8px] mt-5"
              >
                Create Order
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-26 mt-36 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold font-kotori-rose text-4xl mb-4">
            Plus Even More
          </h1>
          <p className="">You can do more with groups you setup on FittedNG.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 md:gap-10 lg:gap-14 items-stretch">
          <div className="relative">
            <Image
              src={"/nigerian-men-and-women.png"}
              alt={"nigerian men and women"}
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="">
            <div className="flex gap-6 items-center mb-6">
              <div className="">
                <span className="p-4 inline-flex items-center justify-center text-white bg-[#d9bc00] rounded-full">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    className="fill-current w-4 h-4"
                  >
                    <g id="check1_layer">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="">
                <h2 className="mb-2 text-2xl font-bold">Organize Better</h2>
                <p className="text-lg">
                  Using groups, you get to collate and plan your occasions
                  better by ensuring all invitees will be uniformed correctly.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center mb-6">
              <div className="">
                <span className="p-4 inline-flex items-center justify-center text-white bg-[#d9bc00] rounded-full">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    className="fill-current w-4 h-4"
                  >
                    <g id="check1_layer">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="">
                <h2 className="mb-2 text-2xl font-bold">
                  Seamless Measurements
                </h2>
                <p className="text-lg">
                  We do not just offer you a platform to make your groups more
                  organized we help collate the measurements of all invitees to
                  reduce fitting visits
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="">
                <span className="p-4 inline-flex items-center justify-center text-white bg-[#d9bc00] rounded-full">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    className="fill-current w-4 h-4"
                  >
                    <g id="check1_layer">
                      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="">
                <h2 className="mb-2 text-2xl font-bold">
                  Payment Co-ordination
                </h2>
                <p className="text-lg">
                  The only thing more stressful than finding the perfect tailor
                  is getting prompt payments from invitees. Get a personalized
                  dashboard to manage payments status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
