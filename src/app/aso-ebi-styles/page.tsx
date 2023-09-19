import AsoEbiStylesHeroSection from "@/components/asoEbiStyles/heroSection";
import AsoEbiStylesNavbar from "@/components/asoEbiStyles/navbar";
import AsoEbiStylesTailoring from "@/components/asoEbiStyles/tailoring";
import { AsoEbiStylesFooter } from "@/components/asoEbiStyles/footer";

export default function Groups() {
  return (
    <main className="text-lg">
      <AsoEbiStylesNavbar />
      <AsoEbiStylesHeroSection />
      <AsoEbiStylesTailoring />
      <AsoEbiStylesFooter />
    </main>
  );
}
