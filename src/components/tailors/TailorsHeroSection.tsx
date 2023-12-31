import VideoBackground from "@/components/tailors/VideoBackground";
import Button from "./Button";
import Header from "./Header";
import Menu from "./Menu";
import Link from "next/link";

export default function TailorsHeroSection() {
  return (
    <section className="relative w-full max-auto h-[601px] lg:h-[700px] mx-auto sm:px-16 px-6 py-12">
      <VideoBackground />

      <div className="absolute inset-0">
        <Header />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white mt-36">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl text-center lg:text-5xl font-bold font-kotori-rose">
              Simplify your
              <span className="roll-in_wrapper">
                <span className="roll-in">
                  <span>tailoring business,</span>
                  <span>payments,</span>
                  <span>measurements,</span>
                  <span>products,</span>
                </span>
              </span>
            </h1>
          </div>

          {/* <h1 className="text-4xl text-center lg:text-5xl font-bold font-kotori-rose">
            Simplify your <span>tailoring business</span> 
          </h1> */}

          <h1 className="text-3xl text-center lg:text-5xl font-bold font-kotori-rose lg:mt-2">
            focus on what matters
          </h1>
          <p className="text-white text-sm mt-6 w-[345px] lg:w-[593px] font-avenir">
            With Fitted, any tailor can use our app to manage their business,
            from measurements to customer info and getting new sales
          </p>

          <div className="mt-6">
            <Link href="https://tailors.fitted.fashion/signup">
              <Button type="purple">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
