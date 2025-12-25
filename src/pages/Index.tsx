import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import JudgesSection from "@/components/JudgesSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import Footer from "@/components/Footer";
import SplineBackground from "@/components/SplineBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SplineBackground />
      <div className="relative z-10 pointer-events-auto">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ThemesSection />
          <PrizesSection />
          <JudgesSection />
          <WhyDifferentSection />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
