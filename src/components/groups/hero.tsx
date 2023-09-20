import HeroBackground from "@/components/groups/heroBackground";
import Button from "./Button";

export default function GroupsHeroSection() {
  return (
    <section className="relative w-full bg-black h-[601px] lg:h-[875px] ">
      <HeroBackground />

      <div className="relative flex flex-col h-full justify-center items-center gap-[89px] lg:gap-[70px] md:px-14">
        <div className="max-w-[324px] lg:max-w-[873px] px-2 py-6 lg:py-2">
          <h1 className="text-white text-center text-[35px] lg:text-6xl font-bold">
            Get excellent Aso Ebi for any event or group
          </h1>
        </div>

        <div className="flex flex-col w-3/4 md:w-2/4 lg:w-full mx-auto lg:flex-row justify-center items-center gap-2.5 lg:gap-6">
          <a
            href="https://groups.fitted.ng/login"
            className="w-full lg:w-[initial]"
          >
            <Button type="purple">Get started</Button>
          </a>
          <a href="#group-fashion" className="w-full lg:w-[initial]">
            <Button type="white">See how it works</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
