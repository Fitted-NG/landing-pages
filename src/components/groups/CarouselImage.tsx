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
          alt={imgData.data.col1.imgTag}
          fill={true}
          loading="lazy"
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              alt={imgDatum.imgTag}
              fill={true}
              loading="lazy"
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {imgDatum.imgTag && <ImageTag text={imgDatum.imgTag} />}
          </div>
        ))}
      </div>
    </div>
  );
}
