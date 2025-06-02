
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollegeLogosScroll from "@/components/CollegeLogosScroll";
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
      <CollegeLogosScroll />
      <VideoSection />
      <TestimonialsSection />
      <StatisticsSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
