import Image from "next/image";
import Logo from "/public/header-logo.png";
import HeaderButtons from "./HeaderButton";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="absolute z-10 top-0 left-0 w-full pt-[18px] lg:top-[38px]">
        <div className="px-6 md:px-12 flex justify-between items-center">
            <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
               <Image src={Logo} alt="logo" loading="lazy" />
            </div>
        </div>

        {/* <Menu />  */}

        <HeaderButtons />

    </header>
  )
}
