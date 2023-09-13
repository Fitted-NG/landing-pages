import Image from "next/image";
import ImageTag from "./ImageTag";
import CarouselImage from "./CarouselImage";
import carouselImages from "@/utils/imageCarouselData";

export default function SlickFits() {
  return (
    <section className="mt-28 mb-36">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="hidden lg:block text-dark-text text-center text-5xl font-bold mb-[70px]">
          Slick fits for the whole crew
        </h1>

        <div className="h-[480px] overflow-x-scroll no-scrollbar mb-8">
          <div className="h-full flex gap-4 animate-carousel">
            <div className="flex gap-4">
              {carouselImages.map((carouselImage) => (
                <CarouselImage key={carouselImage.id} imgData={carouselImage} />
              ))}
            </div>

            <div className="flex gap-4">
              {carouselImages.map((carouselImage) => (
                <CarouselImage key={carouselImage.id} imgData={carouselImage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
