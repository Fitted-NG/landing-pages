import Image from "next/image";
import ImageTag from "./ImageTag";
import { CarouselImagesType } from "@/utils/imageCarouselData";

export default function CarouselImage({
  imgData,
}: {
  imgData: CarouselImagesType;
}) {
  return (
    <div className="min-w-fit flex gap-4">
      <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
        <Image
          src={imgData.data.col1.img}
          alt="African woman in gold and white dress"
          fill={true}
          loading="lazy"
          className="object-cover object-center"
        />
        {imgData.data.col1.imgTag && (
          <ImageTag text={imgData.data.col1.imgTag} />
        )}
      </div>

      <div className="h-full flex flex-col justify-between">
        {imgData.data.col2.map((imgDatum, index) => (
          <div
            key={index}
            className="w-[300px] h-[230px] relative overflow-hidden rounded-lg"
          >
            <Image
              src={imgDatum.img}
              alt="Man with his hands in his pocket"
              fill={true}
              loading="lazy"
              className="object-cover object-center"
            />
            {imgDatum.imgTag && <ImageTag text={imgDatum.imgTag} />}
          </div>
        ))}
      </div>
    </div>
  );
}
