import Image from "next/image";

export default function BrandLogo({ img, alt }: { img: string; alt: string }) {
  return (
    <div className="max-w-[1440px] px-4 lg:px-5 py-6 lg:py-8 flex justify-center items-center">
      <div className="w-[90px] h-[85px] relative shrink-0">
        <Image
          src={img}
          fill={true}
          alt={alt}
          loading="lazy"
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
