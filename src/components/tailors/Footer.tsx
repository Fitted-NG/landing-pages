import Image from "next/image";
import FooterLinks from "./FooterLinks";
import FooterLogo from "/public/footer-logo.png";
import FooterSocials from "./FooterSocials";

export default function Footer () {
  return (
    <footer className="footer-bg-gradient text-[#1E1E1E]">
      <div className="container mx-auto px-6 md:px-12 pt-14 lg:pt-20 pb-7 lg:pb-12">
        <div className="flex flex-col gap-6 lg:gap-7 mb-9 lg:mb-20">
          <div className="flex justify-center items-center">
            <Image src={FooterLogo} alt="logo" />
          </div>

          <div>
            <FooterLinks />
          </div>
        </div>

        <div className="h-[1px] bg-[#d9d9d9] mb-4 lg:mb-7"></div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center lg:justify-between">
          <p>&copy; 2023 fitted.ng. All rights reserved.</p>

          <FooterSocials />
        </div>
      </div>
    </footer>
  )
}
