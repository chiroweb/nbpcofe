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
        {/* Hero — fixed behind everything */}
        <div className="sticky top-0 z-0">
          <HeroVideo />
        </div>

        {/* Each section covers the previous one */}
        <div className="relative z-10 rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] bg-background">
          <div className="sticky top-0 z-[1]">
            <EquipmentShowcase />
          </div>
        </div>

        <div className="relative z-20 rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.08)]">
          <BrandIntro />
        </div>

        <div className="relative z-30 rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.06)] bg-background">
          <div className="sticky top-0 z-[3]">
            <DeliveryHistory />
          </div>
        </div>

        <div className="relative z-40 rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.06)] bg-background">
          <div className="sticky top-0 z-[4]">
            <BlogNews />
          </div>
        </div>

        <div className="relative z-50 rounded-t-[2rem] -mt-8 shadow-[0_-20px_60px_rgba(0,0,0,0.08)]">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  );
}
