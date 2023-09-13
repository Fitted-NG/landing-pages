import HeroBackground from "@/components/tailors/HeroBackground";
import Button from "./Button";

export default function TailorsHeroSection() {
  return (
    <section className="relative w-full h-[601px] lg:h-[875px]">
      <HeroBackground />

      <div className="relative flex flex-col h-full justify-center items-center px-8 md:px-14 mx-auto">
        <div className="lg:mt-[-200px] flex flex-col items-center justify-center">
          <h1 className="w-[345px] lg:w-[1103px] text-white text-center font-bold text-4xl lg:text-5xl">
            {" "}
            Simplify your <span>tailoring business,</span> <br />
            focus on what matters
          </h1>
          <p className="text-white text-center text-sm lg:w-[593px] mt-3 font-avenir">
            With Fitted, any tailor can use our app to manage their business,
            from measurements to customer info and getting new sales
          </p>

          <div className="mt-6">
            <Button type="blue">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
