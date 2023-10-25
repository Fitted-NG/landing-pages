import Link from "next/link";
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
            <Link
              href="https://groups.fitted.fashion/login"
              className="w-full lg:w-[initial]"
            >
              <Button type="purple">Create a group</Button>
            </Link>
            <Link href="/aso-ebi-styles" className="w-full lg:w-[initial]">
              <Button type="white">Explore aso-ebi options</Button>
            </Link>
          </div>
        </div>
      </div>

      <Video />
    </section>
  );
}
