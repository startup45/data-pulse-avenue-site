
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import SuccessStrategySection from "@/components/SuccessStrategySection";
import CareerOpportunitiesSection from "@/components/CareerOpportunitiesSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      {/* <SuccessStrategySection /> */}
      {/* <CareerOpportunitiesSection /> */}
      <VideoSection />
      <TestimonialsSection />
      <StatisticsSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
