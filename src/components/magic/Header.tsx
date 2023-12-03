import Image from "next/image";
import Link from "next/link";
import magicTagLogo from "/public/icons/magic-tag-logo.svg";

export default function Header() {
  return (
    <header className="bg-[#FCFCFD] py-3 flex justify-center items-center border-b border-[#E5E7EB]">
      <Link href="/magic">
        <Image src={magicTagLogo} alt="Fitted Magic Tag logo" loading="lazy" />
      </Link>
    </header>
  );
}
