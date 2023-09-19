import Image from "next/image";

interface IBrand {
  src: string;
  alt: string;
}

export default function BrandLogo({ src, alt }: IBrand) {
  return (
    <div className="flex justify-center items-center px-4 lg:px-5 py-6 lg:py-8">
      <div className="w-[90px] h-[85px] relative shrink-0">
        <Image
          src={src}
          alt={alt}
          fill={true}
          loading="lazy"
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
