import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/tailors-hero-bg-image.png"
        alt="women celebrating fashion"
        fill={true}
        // loading="lazy"
        priority
        className="object-cover object-center"
      />
    </div>
  )
}

