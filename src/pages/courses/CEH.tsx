
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Clock, Award, Calendar, Users, Star, ArrowLeft, ArrowRight } from "lucide-react";

const CEH = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const courseFeatures = [
    "Footprinting and Reconnaissance",
    "Scanning Networks & Systems",
    "System Hacking Techniques",
    "Malware Threats & Analysis",
    "Sniffing & Spoofing Methods",
    "Penetration Testing Framework",
    "Vulnerability Assessment",
    "Security Testing Tools"
  ];

  return (
    <>
      <Navbar />
      <ParallaxHero 
        title="Certified Ethical Hacker (CEH)"
        subtitle="Master ethical hacking techniques to identify and fix vulnerabilities in systems"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="min-h-screen bg-white">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 mb-8">
                  <div className="text-6xl mb-4">💻</div>
                  <h2 className="text-3xl font-bold text-navy mb-4">Think Like a Hacker, Act Like a Defender</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Master advanced ethical hacking techniques and penetration testing methodologies. 
                    Learn to think like an attacker to better defend systems and prepare for the 
                    industry-recognized CEH certification.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="font-semibold text-navy">16 Weeks</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Award className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="font-semibold text-navy">Advanced</div>
                      <div className="text-sm text-gray-600">Level</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Users className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="font-semibold text-navy">90+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <div>
                      <div className="font-semibold text-navy">4.8/5</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy">What You'll Learn</h3>
                <div className="grid gap-3">
                  {courseFeatures.map((feature, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-all duration-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>

            <AnimatedSection className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Become a Certified Ethical Hacker!</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Calendar className="w-5 h-5" />
                <span className="text-xl">Next Batch Starts: June 25, 2025</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                  Download Syllabus
                </Button>
              </div>
              
              <div className="border-t border-red-400 pt-6">
                <p className="text-red-100 mb-4">This course is part of our comprehensive Cyber Security Program</p>
                <Link to="/programs">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                    Explore Full Cyber Security Program
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection className="mt-12">
              <Link to="/programs" className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
                <ArrowLeft className="w-4 h-4" />
                Back to All Programs
              </Link>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
      
      <Footer />
    </>
  );
};

export default CEH;
