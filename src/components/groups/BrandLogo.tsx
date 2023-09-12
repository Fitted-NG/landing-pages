import Image from "next/image";

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
    <div className="min-w-[300px] h-[230px] px-5 py-8 rounded-lg bg-white border border-[#dadada] flex flex-col justify-between gap-6">
      <div className="w-[80px] relative shrink-0 h-1/3">
        <Image
          src={img}
          fill={true}
          alt={alt}
          loading="lazy"
          className="object-contain object-center"
        />
      </div>

      <ul className="text-dark-text text-sm list-disc pl-2 h-full">
        {children}
      </ul>
    </div>
  );
}
