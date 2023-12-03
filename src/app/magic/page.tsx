import { Metadata } from "next";
import SplashScreen from "@/components/magic/SplashScreen";
import Header from "@/components/magic/Header";
import MainSection from "@/components/magic/MainSection";
import Footer from "@/components/reusable/Footer";

export const metadata: Metadata = {
  title: "Fitted Magic Tags",
};

export default function MagicTag() {
  return (
    <>
      <SplashScreen />
      <div className="animate-show-in opacity-0">
        <Header />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}
