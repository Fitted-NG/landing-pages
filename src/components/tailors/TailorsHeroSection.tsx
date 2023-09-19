import VideoBackground from "@/components/tailors/VideoBackground";
import Button from "./Button";
import Header from "./Header";

export default function TailorsHeroSection() {
  return (
    <section className="relative w-full max-auto h-[875px]">
      <VideoBackground />

      <div className="absolute inset-0">
        <Header />
      </div>

    

      <div className="absolute  inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center w-[345px] lg:w-[1103px] h-[131px] lg:h-[168px] flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center lg:text-5xl font-bold font-kotori-rose">
            Simplify your <span>tailoring business</span> 
          </h1>
          <h1 className="text-3xl text-center lg:text-5xl font-bold font-kotori-rose mt-2">focus on what matters</h1> 
          <p className="text-white text-sm mt-6 w-[345px] lg:w-[593px] font-avenir">
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
