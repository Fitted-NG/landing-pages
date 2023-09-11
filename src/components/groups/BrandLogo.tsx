import Image from "next/image";
import { StaticImageData } from "next/image";

export default function BrandLogo({
  img,
  alt,
  children,
}: {
  img: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-[280px] h-[230px] px-5 py-8 rounded-lg bg-white border border-[#dadada] flex flex-col justify-center">
      <div className="w-[80px] h-[60px] mb-8 relative shrink-0">
        <Image
          src={img}
          fill={true}
          alt={alt}
          loading="lazy"
          className="object-contain object-center"
        />
      </div>

      <ul className="text-dark-text text-sm list-disc">{children}</ul>
    </div>
  );
}
