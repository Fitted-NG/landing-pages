import Image from "next/image";
import CodeInput from "./CodeInput";
import mouseCircle from "/public/icons/mouse-circle.svg";

export default function MainSection() {
  return (
    <main className="w-full min-h-[calc(100vh-60px)] pt-2">
      <div className="bg-[#F5F7FF] max-w-[393px] mx-auto p-3 rounded-lg">
        <div className="flex gap-2">
          <Image src={mouseCircle} alt="mouse circle icon" />
          <p className="text-[#5773FF] text-xs">
            You&apos;re about to make your outfit instantly discoverable
            anywhere on earth
          </p>
        </div>
      </div>

      <div className="pt-16 text-center flex flex-col justify-center items-center">
        <h1 className=" text-dark text-lg font-medium mb-[14px]">
          Input code on Tag
        </h1>
        <CodeInput />
      </div>
    </main>
  );
}
