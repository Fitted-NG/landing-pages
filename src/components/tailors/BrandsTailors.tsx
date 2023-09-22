import BrandLogo from "./BrandLogo";
import { brands } from "@/utils/brandsData";
import Button from "./Button";

export default function BrandsTailors() {
  return (
    <section className='bg-white sm:px-12 px-3 sm:py-24 py-12'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='max-w-[345px] lg:max-w-[949px] font-bold text-lg lg:text-3xl font-kotori-rose'>Exceptional tailor brands run their businesses on fitted</h2>
          <p className='max-w-[345px] mt-2 font-avenir font-normal text-sm text-[#344054]'>We’re used by some of the best in class fashion designers and tailor brands</p>
        </div>


        <div className="overflow-x-scroll no-scrollbar relative cursor-pointer mb-10">
          <div className="flex gap-24 animate-brands-carousel brand">
            <div className="flex lg:gap-24">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} src={brand.img} alt={brand.name} />
              ))}
            </div>

            <div className="flex lg:gap-24">
              {brands.map((brand) => (
                <BrandLogo key={brand.id} src={brand.img} alt={brand.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Button type="blue">Join us today</Button>
        </div>

      </div>
    </section>
  )
}
