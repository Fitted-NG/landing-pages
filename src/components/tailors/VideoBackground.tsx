import Image from "next/image";

export default function HeroBackground() {
  return (
    <section> 
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
   
      
   

    // <div className="absolute inset-0 overflow-hidden">
    //   <Image
    //     src="/tailors-hero-bg-image.png"
    //     alt="women celebrating fashion"
    //     fill={true}
    //     // loading="lazy"
    //     priority
    //     className="object-cover object-center"
    //   />
    // </div>
  )
}

