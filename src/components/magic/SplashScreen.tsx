import Image from "next/image";
import fittedMagicTags from "/public/icons/fitted-magic-tags.svg";

export default function SplashScreen() {
  return (
    <div className="bg-black fixed top-0 left-0 w-full h-full animate-fade-up z-10">
      <div className="max-w-[768px] mx-auto h-screen bg-splash-screen bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-10 animate-fade-down -translate-y-full opacity-0">
            <Image
              src={fittedMagicTags}
              alt="Fiited Magic Tags"
              loading="lazy"
            />
          </div>
          <h1 className="text-white text-[26px] text-center font-extrabold mb-3 animate-fade-down2 translate-y-[-150%] opacity-0">
            Expand your Wardrobe
          </h1>
          <p className="max-w-[290px] text-white text-xl text-center font-medium animate-fade-down3 translate-y-[-10px] opacity-0">
            Discover new outfits to galvanize your look with fitted Magic tags.
          </p>
        </div>
      </div>
    </div>
  );
}
