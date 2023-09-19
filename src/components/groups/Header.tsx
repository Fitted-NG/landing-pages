import Image from "next/image";
import HeaderButtons from "./HeaderButtons";
import Menu from "./Menu";
import Logo from "/public/header-logo.png";

export default function Header() {
  return (
    <header className="absolute container px-6 md:px-0 mx-auto z-10 top-0 left-0 right-0 py-[18px] lg:py-[38px]">
      <div className="flex justify-between items-center">
        <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
          <Image src={Logo} alt="logo" loading="lazy" />
        </div>

        <Menu />

        <HeaderButtons />
      </div>
    </header>
  );
}
