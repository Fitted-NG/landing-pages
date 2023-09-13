export default function AsoEbiStylesHeroSection() {
  return (
    <div className="relative h-[775px]">
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <video autoPlay muted loop className="object-cover w-full h-full">
          <source src="/AFROPOLITAN_ECHE-16X9_SHORT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
