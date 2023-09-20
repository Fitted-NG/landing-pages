import Image from "next/image";

export default function HeroBackground() {
  return (
      <div className="absolute mx-auto top-0 left-0 w-full h-full -z-0">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>
      </div>
  )
}

