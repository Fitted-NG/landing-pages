import BrandLogo from "./BrandLogo";
import { brands } from "@/utils/brandsData";

export default function Brands() {
  return (
    <section className="mt-14 md:mt-[75px]">
      <div className="bg-light-cream container mx-auto px-6 md:px-12 pt-16 lg:pt-[124px] pb-[124px]">
        <div className="max-w-[345px] mx-auto md:max-w-none mb-12">
          <h1 className="text-center text-[#1E1E1E] text-2xl md:text-4xl font-bold">
            Trusted and powered by exceptional fashion brands
          </h1>
        </div>

        <div className="overflow-x-scroll no-scrollbar relative">
          <div className="flex gap-8 animate-brands-carousel brand">
            <div className="flex gap-8">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} img={brand.img} alt={brand.name}>
                  {brand.text}
                </BrandLogo>
              ))}
            </div>

            <div className="flex gap-8">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} img={brand.img} alt={brand.name}>
                  {brand.text}
                </BrandLogo>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
