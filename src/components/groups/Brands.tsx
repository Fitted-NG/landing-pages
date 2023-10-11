import BrandLogo from "./BrandLogo";
import { brands } from "@/utils/brandsData";

export default function Brands() {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 pt-36 lg:pt-[124px] pb-[124px]">
        <div className="max-w-[345px] mx-auto md:max-w-none mb-12">
          <h1 className="text-center text-[#1E1E1E] text-2xl md:text-4xl font-bold">
            Trusted and powered by exceptional fashion brands
          </h1>
        </div>

        <div className="max-w-[1440px] mx-auto overflow-x-scroll no-scrollbar relative cursor-pointer">
          <div className="flex gap-24 animate-brands-carousel brand">
            <div className="flex gap-24">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} img={brand.img} alt={brand.name} />
              ))}
            </div>

            <div className="flex gap-24">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} img={brand.img} alt={brand.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
