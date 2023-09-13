import Header from "@/components/tailors/Header"
import TailorsHeroSection from "@/components/tailors/Hero"
import TailorsPricing from "@/components/tailors/TailorsPricing"
import FashionBrand from "@/components/tailors/FashionBrand"
import TailorsMeasurement from "@/components/tailors/TailorsMeasurement"
import TailorsAppDownload from "@/components/tailors/TailorsAppDownload"
import Footer from "@/components/tailors/Footer"

export default function Tailors () {
  return (
    <main>
      <Header />
      <TailorsHeroSection />
      <FashionBrand />
      <TailorsMeasurement />
      <TailorsAppDownload /> 
      <Footer /> 
    </main>
  )
}
