import Button from "./Button";

export default function GroupOccasions() {
  return (
    <section className="mt-16 lg:mt-28 lg:pt-24">
      <div className="px-6 md:px-12 container mx-auto">
        <div className="mb-10 lg:mb-[60px]">
          <h1 className="max-w-[345px] md:max-w-[1055px] mx-auto text-center text-2xl lg:text-5xl mb-7 lg:mb-10 font-bold">
            Over <span className="text-new-purple">152+</span> groups have
            gotten outfits for various occasions with fitted
          </h1>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-3 lg:gap-4 w-full md:w-2/3 lg:w-full mx-auto">
            <Button type="purple">Create a group</Button>
            <Button type="white">Explore aso-ebi options</Button>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] aspect-video mx-auto cursor-pointer">
        <iframe
          src="/videos/group-occasions.mp4"
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          name="Fitted Group Occasions"
        ></iframe>
      </div>
    </section>
  );
}
