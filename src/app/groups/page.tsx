import { Metadata } from "next";
import Header from "@/components/groups/Header";
import Sidebar from "@/components/groups/Sidebar";
import GroupsHeroSection from "@/components/groups/hero";
import SlickFits from "@/components/groups/Slickfits";
import GroupFashion from "@/components/groups/GroupsFashion";
import GroupOccasions from "@/components/groups/GroupOccasions";
import ManageDetails from "@/components/groups/ManageDetails";
import Brands from "@/components/groups/Brands";
import SendMeasurements from "@/components/groups/SendMeasurements";
import Footer from "@/components/reusable/Footer";
import SidebarProvider from "@/contexts/SidebarContext";

export const metadata: Metadata = {
  title: "Fitted Groups",
};

export default function Groups() {
  return (
    <SidebarProvider>
      <main>
        <Header />
        <Sidebar />
        <GroupsHeroSection />
        <SlickFits />
        <GroupFashion />
        <GroupOccasions />
        <ManageDetails />
        <Brands />
        <SendMeasurements />
        <Footer />
      </main>
    </SidebarProvider>
  );
}
