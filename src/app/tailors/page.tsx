import Header from "@/components/tailors/Header"
import TailorsHeroSection from "@/components/tailors/TailorsHeroSection"
import TailorsPricing from "@/components/tailors/TailorsPricing"
import ClothingTabs from "@/components/tailors/ClothingTabs"
import FashionBrand from "@/components/tailors/FashionBrand"
import BrandsTailors from "@/components/tailors/BrandsTailors"
import TailorsMeasurement from "@/components/tailors/TailorsMeasurement"
import TailorsAppDownload from "@/components/tailors/TailorsAppDownload"
import ClientProfile from "@/components/tailors/ClientProfile"
import Footer from "@/components/tailors/Footer"

export default function Tailors () {
  return (
    <main>
      {/* <Header />   */}
      <TailorsHeroSection />  
      {/* <ClothingTabs />  */}
      <FashionBrand /> 
      <TailorsMeasurement />
      <BrandsTailors /> 
      {/* <TailorsPricing />    */}
      <ClientProfile /> 
      <TailorsAppDownload />  
      <Footer /> 
    </main>
  )
}
