import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/groups-hero-bg-image1.png"
        alt={"Women celebrating fashion"}
        fill={true}
        loading="lazy"
        className="object-cover object-center animate-fade-in"
      />
      <Image
        src="/groups-hero-bg-image2.png"
        alt={"Men celebrating fashion"}
        fill={true}
        loading="lazy"
        className="object-cover object-center animate-fade-in animation-delay-10"
      />
    </div>
  );
}
