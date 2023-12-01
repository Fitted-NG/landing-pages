import ClothingTabsSwitch from "./ClothingTabsSwitch";

export default function ClothingTabs() {
  return (
    <section className="bg-white sm:px-16 px-8 sm:py-24 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="w-full max-w-[345px] md:max-w-[1036px] font-kotori-rose text-[#152C5B] text-2xl lg:text-4xl font-bold">
            Delight customers with seamless measurement management, whether
            ready to wear or custom
          </h1>
          <p className="w-full max-w-[344px] lg:w-[665px] font-avenir font-light text-base text-[#4F4F4F] mt-4">
            Impress customers with virtual measurements collection. Take charge
            of how you manage measurements. seamless is better.
          </p>
        </div>

        <ClothingTabsSwitch />
      </div>
    </section>
  );
}
