import HeroBackground from "@/components/groups/heroBackground";

export default function GroupsHeroSection() {
  return (
    <div>
      <div className="relative">
        <HeroBackground />

        <div className="relative min-h-[875px] flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h1 className="text-white text-5xl font-bold">
              Get excellent aso ebi for any event or group
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
