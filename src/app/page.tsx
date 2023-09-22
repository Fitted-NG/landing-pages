"use client";

import { FC, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/contexts/ThemeContext";
import GetStartedModal from "@/components/home/modals/GetStartedModal";
import { Navigation } from "@/components/home/navigation";
import RouteCustomerModal from "@/components/home/modals/RouteCustomerModal";
import AiDesignWaitListModal from "@/components/home/modals/AiDesignWaitListModal";
import HeartIcon from "@/components/home/heartIcon";
import Footer from "@/components/reusable/Footer";

const items: {
  id: string;
  link?: string;
  image: string;
  title: string;
  sku: string;
  description: string;
  favorite: boolean;
  gender: "female" | "male";
}[] = [
  {
    id: "8345783254235234",
    link: "https://store.fitted.ng/shop-4/fitted-emperor-kaftan/",
    image: "/emperor-kaftan.png",
    title: "Fitted Emperor Kaftan",
    sku: "(PAN-OXBB-S)",
    description: "Royal Cashmere Fabric with royal embroidery",
    favorite: false,
    gender: "male",
  },
  {
    id: "83457832542353324",
    link: "https://store.fitted.ng/shop-4/cargo-pants/",
    image: "/cargo-pant.png",
    title: "Cargo Pants",
    sku: "(PAN-OXBB-S)",
    description: "Color: Black, Blue, Grey, Purple, Red, Yellow",
    favorite: false,
    gender: "female",
  },
  {
    id: "3423413343411435234",
    link: "https://store.fitted.ng/shop-4/burnt-orange-hoodie",
    image: "/burnt-orange-hoodie.png",
    title: "Burnt Orange Hoodie",
    sku: "(PAN-OXBB-S)",
    description: "Color: Black, Blue, Grey, Purple, Red, Yellow",
    favorite: false,
    gender: "male",
  },
  {
    id: "83457832542354",
    link: "https://store.fitted.ng/shop-4/chief-boss-kaftan-buba-sokoto-shirt-trouser-set",
    image: "/chief-boss-kaftan-buba-sokoto-shirt-trouser-set.png",
    title: "Chief boss kaftan",
    sku: "(PAN-OXBB-S)",
    description: "Color: Black, Blue, Grey, Purple, Red, Yellow",
    favorite: false,
    gender: "female",
  },
  {
    id: "3423413343411435",
    link: "https://store.fitted.ng/shop-4/boujee-sleeve-summer-dress",
    image: "/boujee-sleeve-summer-dress.png",
    title: "Boujee sleeve summer dress",
    sku: "(PAN-OXBB-S)",
    description: "Color: Black, Blue, Grey, Purple, Red, Yellow",
    favorite: false,
    gender: "female",
  },
  {
    id: "342341334341143532234",
    link: "https://store.fitted.ng/shop-4/plain-black-kaftan-for-men/",
    image: "/sleek-kaftan-for-men-2.png",
    title:
      "Smart Plain Fitted Black Kaftan Buba & Sokoto for Men Without Embroidery",
    sku: "(PAN-OXBB-S)",
    description:
      "This Smart Plain Fitted Black Kaftan Buba & Sokoto for Men is a stunning piece of attire that exudes elegance, versatility, and timeless fashion.\n\nEmbrace the allure of a classic black ensemble, meticulously tailored for formal occasions, while also enjoying its comfortable and chic features for casual outings.",
    favorite: false,
    gender: "male",
  },
];

const Home: FC = () => {
  const { toggle, modals } = useContext(ThemeContext);

  return (
    <>
      <div className="relative hero-section py-[100px] md:py-[100px] lg:py-[180px]">
        <Image
          src={"/blackmen__hero__banner.png"}
          alt={"fitted hero image"}
          fill
          className={"object-cover object-top"}
          loading={"lazy"}
        />
        <Navigation />

        <div>
          <div className="container mx-auto px-3 lg:px-6 max-w-3xl w-full">
            <div className="grid grid-cols-1 items-center justify-center text-center">
              <div className="w-full z-10">
                <div className="mx-1 mb-6">
                  <h1 className="font-bold font-kotori-rose text-white text-[48px] lg:text-[68px] leading-[1.1] tracking-[-0.03em]">
                    Step into the digital era of fashion
                  </h1>
                </div>
                <div className="mb-14 mt-5 max-w-lg mx-auto">
                  <p className="text-lg md:text-[20px] leading-[1.4]">
                    Exceptional tailor-made outfits, crafted exclusively for
                    customers with AI and blockchain
                  </p>
                </div>

                <div className="flex items-center h-full w-full justify-center gap-2 flex-col">
                  <button
                    onClick={() => modals.toggle("RouteCustomerModal")}
                    className="rounded-lg font-medium text-base px-12 py-3 btn-primary btn-hover-anim mb-6"
                  >
                    <span className="">Get started as customer</span>
                  </button>

                  <p className={"text-sm"}>
                    Need help?
                    <Link
                      href="https://support.fitted.ng"
                      target="_blank"
                      className="underline underline-offset-2 pl-1"
                    >
                      Contact us here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <section>
        <div className="bg-[#000F15] text-white pt-[131px] pb-5">
          <div className="container mx-auto px-3 lg:px-6 max-w-5xl lg:max-w-6xl w-full ">
            <h2 className="font-kotori-rose font-bold text-center text-[48px] lg:text-[68px] leading-[1.2] py-5">
              Get and share exceptional unique pieces instantly
            </h2>
            <p className="text-lg md:text-[20px] leading-[1.4] max-w-lg mx-auto text-center">
              NFT-backed ethnic and heritage outfits straight from global
              artisans
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative">
            <div className="absolute right-10 top-32 hidden lg:block lg:h-[528px] xl:h-[745px] lg:w-[477px] xl:w-[673px]">
              <Image
                src="/afrocentric_styles_against_sky_backdrop.png"
                fill
                alt=""
                className="object-contain animated_img shadow-default"
                loading={"lazy"}
              />
            </div>

            <div className="padded-section bg-[#000F15] text-white">
              <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
                <div className="py-4 my-4 grid grid-cols-1">
                  <div className="col-span-1 py-4">
                    <div
                      className=""
                      style={{ maxWidth: "500px", width: "100%" }}
                    >
                      <div className="mb-8">
                        <h3 className="text-[36px] leading-[44px] font-bold font-kotori-rose">
                          Discover endless style possibilities with fitted
                        </h3>
                      </div>
                      <div className="text-lg md:text-xl leading-[1.4]">
                        <p>
                          Experience the magic of one-off custom fashion pieces
                          made by exceptional talent. With NFC-enabled clothing
                          labels, you can share details of your fits to earn
                          commissions and discounts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="padded-section bg-[#CDCBCD] text-white">
              <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
                <div className="grid grid-cols-1 py-4 my-4">
                  <div className="col-span-1 py-4 ">
                    <div
                      className="text-[#1E1E1E]"
                      style={{ maxWidth: "500px", width: "100%" }}
                    >
                      <div className="mb-4">
                        <h3 className="text-[36px] leading-[44px] font-bold font-kotori-rose">
                          Empowering all fashion brand
                        </h3>
                      </div>
                      <div className="text-[20px] leading-[30px]">
                        <p>
                          Bringing global spotlight to under-represented tailors
                          and artisans by showcasing their creations. Our
                          platform lets them list and sell their designs to
                          fashion enthusiasts via NFTs, and protects their IP if
                          anyone uses their designs via our platform
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="padded-section bg-[#BBBEBF] text-white">
            <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
              <div className="grid md:grid-cols-2 items-center justify-center py-4 my-4">
                <div className="">
                  <Image
                    src={"/fashion_royalties.svg"}
                    alt={"fashion royalties"}
                    width={553}
                    height={408}
                  />
                </div>
                <div className="col-span-1 py-4">
                  <div
                    className="text-[#1E1E1E]"
                    style={{ maxWidth: "500px", width: "100%" }}
                  >
                    <div className="mb-4">
                      <h3 className="text-[36px] leading-[44px] font-bold font-kotori-rose">
                        Introducing: fashion royalties!
                      </h3>
                    </div>
                    <div className="text-[20px] leading-[30px]">
                      <p>
                        Each NFT has embedded smart contracts on blockchain. For
                        the first time in the history of fashion, a brands work
                        can be a revenue generating assets. We offer 1.5% - 10%
                        commissions each time anyone uses a brand’s design on
                        Fitted
                        <br />
                        <br />
                        P.S. - this only works if the order is placed on fitted!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white h-[750px]">
        <Image
          src={"/custom_clothing_image.png"}
          alt={"custom clothing, man and woman"}
          fill
          className={"object-cover object-top"}
          loading={"lazy"}
        />
        <div className="banner__overlay rounded-lg"></div>

        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full rounded-lg h-full">
          <div className="text-white text-center flex justify-start items-start h-full py-6 max-w-xl lg:max-w-5xl">
            <div className="flex items-center justify-end h-full flex-col py-5 z-10">
              <h3 className="text-[32px] lg:text-[60px] leading-[1.2] text-left font-bold font-kotori-rose">
                Stitching the physical and digital world with fashion
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="padded-section bg-white">
        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 lg:gap-x-40 gap-y-12">
            <div className=" py-4 ">
              <div
                className="text-[#1E1E1E]"
                style={{ maxWidth: "500px", width: "100%" }}
              >
                <div className="mb-4">
                  <h3 className="text-[36px] font-bold font-kotori-rose">
                    Store digital NFTs of your outfits in wallets
                  </h3>
                </div>
                <div className="mb-3 pb-2 text-xl leading-[1.5]">
                  <p className="">
                    Secure and manage your products, ensuring peace of mind and
                    easy access whenever you need them.
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    onClick={toggle}
                    className="btn-primary px-12 py-4 h-14  text-sm rounded-lg"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className=" py-4 ">
              <div
                className="text-[#1E1E1E]"
                style={{ maxWidth: "500px", width: "100%" }}
              >
                <div className="mb-4">
                  <h3 className="text-[36px] font-bold font-kotori-rose">
                    Integrate and order gaming outfits
                  </h3>
                </div>
                <div className="mb-3 pb-2 text-xl leading-[1.5]">
                  <p>
                    Integrate to your favourite gaming platforms to get IRL
                    (In-Real-Life) versions of your favourite outfits
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    type={"button"}
                    className="btn coming-soon px-6 py-3 rounded-full text-sm opacity-60 border border-[#E1FDFF] bg-[#E1FDFF] text-[#057B83]"
                  >
                    {/* <button className="text-[#DD7D37] px-12 py-2 text-sm  border border-[#DD7D37] rounded-full opacity-60 " aria-disabled="true"></button> */}
                    Coming Soon..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="unpadded-section bg-white">
        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full rounded-2xl">
          <div className="h-[550px] w-full rounded-lg relative overflow-hidden">
            <Image
              src="/group_of_tailors.png"
              fill
              alt="several tailors"
              className="object-left-top lg:object-top object-cover"
              loading={"lazy"}
            />
            <div className="banner__overlay2 rounded-lg"></div>

            <div className="text-white text-center flex justify-center items-center h-full py-6 px-3">
              <div className="flex items-center justify-end h-full flex-col py-5 z-10">
                <h3 className="text-[32px] lg:text-[52px] leading-[1.4] font-kotori-rose font-bold">
                  Powered by tailors on fitted app
                </h3>
                <p className={"text-lg lg:text-xl"}>
                  Check out our trendy designs from our vetted tailors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 py-4 my-4  gap-x-6 gap-y-8">
            {items.map((item) => (
              <div className="card rounded-lg" key={item.id}>
                <Link href={item.link ? item.link : `/shop/item/${item.id}`}>
                  <div className="card-img h-72 w-full relative overflow-hidden bg-[#BBBEBF] rounded-lg">
                    <Image
                      src={item.image}
                      fill
                      alt={item.title}
                      className="rounded-lg object-top"
                      loading={"lazy"}
                    />
                  </div>
                </Link>
                <div className="card-body py-4">
                  <div className="flex items-center justify-between gap-1">
                    <Link
                      href={item.link ? item.link : `/shop/item/${item.id}`}
                    >
                      <h3>{item.title}</h3>
                    </Link>

                    <span>
                      <HeartIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-8 pt-3">
            <Link
              className="text-white btn-hover-anim btn-primary px-11 py-3 text-sm rounded-lg"
              href="https://store.fitted.ng/"
            >
              Go to Store
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white relative h-[750px]">
        <Image
          src={"/ready_to_wear_styles.png"}
          alt={"bespoke or ready to wear, 2 black men"}
          fill
          className={"object-cover object-left-top md:object-top"}
          loading={"lazy"}
        />
        <div className="banner__overlay rounded-lg"></div>

        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full rounded-lg h-full">
          <div className="text-white text-center flex justify-center items-center h-full py-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-end h-full flex-col py-5 z-10">
              <h3 className="text-[32px] lg:text-[48px] leading-[1.2] text-center font-kotori-rose font-bold">
                Designed for custom and ready-to-wear styles
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="padded-section bg-white">
        <div className="container mx-auto px-3 md:px-6 max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 lg:gap-x-40 gap-y-12">
            <div className=" py-4 ">
              <div
                className="text-[#1E1E1E]"
                style={{ maxWidth: "500px", width: "100%" }}
              >
                <div className="mb-4">
                  <h3 className="text-[36px] font-bold ">
                    Effortless precise measurements with AI
                  </h3>
                </div>
                <div className="mb-3 pb-2 text-xl leading-[1.5]">
                  <p className="">
                    Capture your unique body dimensions with our AI powered
                    measurement system, ensuring a perfect fit, tailored
                    exclusively to you. Say farewell to tedious measuring tapes
                    and welcome the era of hassle-free, AI guided measurements,
                    that guarantee an impeccable and customized experience.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    target="_blank"
                    href="https://groupsapp.fitted.ng/signup"
                    className="btn-primary px-6 py-3  text-sm rounded-lg"
                  >
                    Start now
                  </Link>
                </div>
              </div>
            </div>
            <div className=" py-4 ">
              <div
                className="text-[#1E1E1E]"
                style={{ maxWidth: "500px", width: "100%" }}
              >
                <div className="mb-4">
                  <h3 className="text-[36px] font-bold ">
                    Standard products vetted for quality
                  </h3>
                </div>
                <div className="mb-3 pb-2 text-xl leading-[1.5]">
                  <ul className="list-disc space-y-4 pl-5">
                    <li>
                      <p>
                        Carefully handpicked fabrics from trusted suppliers.
                      </p>
                    </li>
                    <li>
                      <p>
                        Outfits created by skilled tailors with meticulous
                        attention to detail.
                      </p>
                    </li>
                    <li>
                      <p>
                        Garments designed to provide long-lasting comfort
                        without compromising on style.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padded-section form__block_section px-2 bg-[#000F15]">
        <div className=" px-3">
          <div className="container mx-auto px-2 md:px-6 max-w-5xl w-full pt-12 md:pt-20  pb-28 mb-6 text-white">
            <div className="flex items-center justify-center text-center gap-3 flex-col">
              <h2 className="text-[48px] lg:text-[68px] leading-[82.88px] font-bold font-kotori-rose">
                Order whatever you can imagine (text to design AI)
              </h2>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg lg:text-xl leading-[1.5]">
                  Type your style desire and witness our AI conjure up
                  customized designs in seconds.
                </p>
                <div className="flex items-center justify-center mt-8 pt-3">
                  <button
                    onClick={() => modals.toggle("AiDesignWaitListModal")}
                    className="text-white btn-hover-anim btn-primary px-12 py-4 text-sm rounded-lg"
                    aria-disabled="true"
                  >
                    Get early access
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden container mx-auto px-4 md:px-6 max-w-5xl w-full bg-[#2F2C2E] py-12 text-white rounded-3xl">
            <div className="absolute rounded-full w-[301px] h-[301px] left-[-74px] top-[-115px] linear-pattern"></div>
            <div className="absolute rounded-full w-[301px] h-[301px] left-[909px] top-[81px] linear-pattern"></div>

            <div className="form__block relative ">
              <div className="form__block__subtitle mb-4 px-1 text-center">
                <div className="mb-3 text-center">
                  <h2 className="text-[46px] font-bold font-kotori-rose">
                    Let&apos;s get you fitted
                  </h2>
                </div>
              </div>

              <div className="mx-auto max-w-3xl">
                <p className={"text-lg leading-[1.5] text-center"}>
                  Sign up for our captivating email updates, exploring the
                  dynamic integration of blockchain and AI in the fashion realm.
                  Join us today and be at the forefront of style innovation
                </p>

                <form className="cta-form mt-6">
                  <div className="form-form-wrapper flex flex-row flex-wrap md:flex-nowrap">
                    <div className="input-group flex md:flex-row flex-col w-full lg:w-3/4 gap-2">
                      <input
                        type="text"
                        className="cta-form-input w-input flex-1 w-full lg:w-1/2"
                        name="name"
                        placeholder="Your full name"
                        id="name"
                        required
                      />

                      <input
                        type="email"
                        className="cta-form-input w-input flex-1 w-full lg:w-1/2"
                        name="Email"
                        placeholder="Your email address"
                        id="Email"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn cta-form-button  mt-3 md:mt-0 flex-1 whitespace-nowrap h-14"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />

      <GetStartedModal />
      <RouteCustomerModal />
      <AiDesignWaitListModal />
    </>
  );
};

export default Home;
