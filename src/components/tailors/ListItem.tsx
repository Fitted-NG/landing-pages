import Image from "next/image";
import CheckIcon from "/public/check-icon.png";

interface IList {
    children: string;
  }
  

export default function ListItem({ children } : IList ) {
  return (
    <ul>
      <li className="flex flex-row w-[300px] gap-3 text-sm py-1">
        <Image
          src={CheckIcon}
          alt="gjjgjgjg"
          sizes="10vw"
          style={{
            width: "6%",
            height: "5%",
          }}
        />
        {children}
      </li>
    </ul>
  )
}