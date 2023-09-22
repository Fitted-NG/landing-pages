import Image from "next/image";
import FirstPricingIcon from "/public/pricing-icon-one.png"
import SecondPricingIcon from "/public/pricing-icon-two.png"
import ListItem from "./ListItem";
import Button from "./Button";
import Link from "next/link";


export default function TailorsPricing() {
  return (
    <section className="bg-[#FBFBFF] sm:px-16 px-8 sm:py-24 py-12">
      <div className="container max-auto flex flex-col lg:flex-row items-start gap-20 lg:gap-10">
        <div className="w-[345px] lg:w-[448px]">
          <p className="text-sm text-[#5773FF] font-avenir">
            Lets talk business
          </p>
          <h2 className="text-2xl text-[#152C5B] font-kotori-rose mt-2">
            Pricing plans that scale
          </h2>
          <p className="text-md text-[#667085] font-avenir font-normal mt-4">
            The tailor app will always have a free version for tailors, artisans
            and brands at their earliest stages. For those looking to scale up,
            we offer very competitive pricing!
          </p>
        </div>

        <div className="flex max-lg:flex-col gap-20 lg:gap-10">
          <div className="bg-white rounded-lg shadow-lg w-[320px] lg:w-[320px] p-4 pt-10 pb-10">
            <div className="flex flex-col items-center text-center gap-3">
              <Image src={FirstPricingIcon} alt="first pricing icon" />
              <p className="text-[#5773FF] text-lg font-normal font-avenir">TAILOR APP</p>
              <h2 className="text-[#101828] text-3xl font-normal font-kotori-rose">Free Forever</h2>
              <p className="text-[#667085] font-avenir font-normal text-base mb-10">You’ll never pay!</p>
            </div>
            <ListItem>Access to all basic features</ListItem>
            <ListItem>Store customer measurements</ListItem>
            <ListItem>
              Download customer measurement (offline mode to save data)
            </ListItem>
            <ListItem>Store customer contact information</ListItem>
            <ListItem>Send & receive measurements</ListItem>

            <div className="flex flex-col items-center mt-10">
            <Link href="https://tailors.fitted.ng/signup">
              <Button type="purple">Get Started</Button>
              </Link>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg w-[320px] lg:w-[320px] p-4 pt-10 pb-10">
            <div className="flex flex-col items-center text-center gap-3">
              <Image src={SecondPricingIcon} alt="first pricing icon" />
              <p className="text-[#5773FF] text-lg font-normal font-avenir">TAILOR APP + JOBS</p>
              <h2 className="text-[#101828] text-3xl font-normal font-kotori-rose">₦1,000/<span className="text-lg font-avenir text-[#667085]">month</span></h2>
              <p className="text-[#667085] font-avenir font-normal text-base mb-10">Billed annually.</p>
            </div>
            <ListItem>Get unlimited jobs ranging from N1 to over N1 million</ListItem>
            <ListItem>Negotiate and accept jobs</ListItem>
            <ListItem>
              Fulfill jobs and get rated out of 5 stars
            </ListItem>
            <ListItem>Outsource production jobs to others</ListItem>
            <ListItem>Send & receive measurements</ListItem>
            <div className="flex flex-col items-center mt-10">
              <Button type="purple">Comming Soon</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
