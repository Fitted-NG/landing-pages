import Video from "../reusable/Video";
import Button from "./Button";

export default function GroupOccasions() {
  return (
    <section className="mt-16 lg:mt-28 lg:pt-24">
      <div className="px-6 md:px-12 container mx-auto">
        <div className="mb-10 lg:mb-[60px]">
          <h1 className="max-w-[345px] md:max-w-[1055px] mx-auto text-center text-2xl lg:text-5xl mb-7 lg:mb-10 font-bold">
            Over <span className="text-pink-fitted">152+</span> groups have
            gotten outfits for various occasions with fitted
          </h1>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-3 lg:gap-4 w-full md:w-2/3 lg:w-full mx-auto">
            <a href="https://groups.fitted.ng/login">
              <Button type="purple">Create a group</Button>
            </a>
            <a href="https://fitted.fashion/aso-ebi-styles">
              <Button type="white">Explore aso-ebi options</Button>
            </a>
          </div>
        </div>
      </div>

      <Video />
    </section>
  );
}
