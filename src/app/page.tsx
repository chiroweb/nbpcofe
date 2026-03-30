import Navbar from "@/components/layout/Navbar";
import HeroVideo from "@/components/sections/HeroVideo";
import EquipmentShowcase from "@/components/sections/EquipmentShowcase";
import BrandIntro from "@/components/sections/BrandIntro";
import DeliveryHistory from "@/components/sections/DeliveryHistory";
import BlogNews from "@/components/sections/BlogNews";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVideo />
        <EquipmentShowcase />
        <BrandIntro />
        <DeliveryHistory />
        <BlogNews />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
