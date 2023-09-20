import TailorsHeroSection from "@/components/tailors/TailorsHeroSection"
import ClothingTabs from "@/components/tailors/ClothingTabs"
import FashionBrand from "@/components/tailors/FashionBrand"
import BrandsTailors from "@/components/tailors/BrandsTailors"
import TailorsPricing from "@/components/tailors/TailorsPricing"
import TailorsMeasurement from "@/components/tailors/TailorsMeasurement"
import TailorsAppDownload from "@/components/tailors/TailorsAppDownload"
import ClientProfile from "@/components/tailors/ClientProfile"
import Footer from "@/components/tailors/Footer"

export default function Tailors () {
  return (
    <main>
      <TailorsHeroSection />   
      <ClothingTabs /> 
      <FashionBrand /> 
      <TailorsMeasurement />
      <BrandsTailors /> 
      <TailorsPricing />   
      <ClientProfile /> 
      <TailorsAppDownload />  
      <Footer /> 
    </main>
  )
}
