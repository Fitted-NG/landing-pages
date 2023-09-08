import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className={"absolute top-0 bottom-0 right-0 left-0"}>
      <Image
        src={"/groups-hero-bg-image.png"}
        alt={"women celebrating fashion"}
        fill={true}
        loading="lazy"
        className={"top-0 bottom-0 right-0 left-0 object-cover"}
      />
    </div>
  );
}
