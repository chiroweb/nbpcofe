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
        {/* Hero stays fixed behind */}
        <div className="sticky top-0 z-0">
          <HeroVideo />
        </div>

        {/* Content slides up over hero */}
        <div className="relative z-10 bg-background rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
          <EquipmentShowcase />
          <BrandIntro />
          <DeliveryHistory />
          <BlogNews />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  );
}
