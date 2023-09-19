import Image from "next/image";
import Logo from "/public/header-logo.png";
import HeaderButtons from "./HeaderButton";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="max-w-[1440px] mx-auto sm:px-16 px-6 py-12">
        <div className="flex justify-between items-center">
            <div className="w-[110px] h-10 md:w-[175px] md:h-[62px] flex justify-center items-center">
               <Image src={Logo} alt="logo" loading="lazy" />
            </div>
        </div>

        {/* <Menu />  */}

        <div>
          <HeaderButtons />
        </div>


    </header>
  )
}
