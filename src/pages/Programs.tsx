
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, BookOpen } from "lucide-react";

const Programs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const programs = [
    {
      title: "Data Analytics Fundamentals",
      duration: "3 Months",
      students: "150+ Students",
      level: "Beginner",
      description: "Perfect for beginners, this program covers the basics of data analytics, Excel, SQL, and basic visualization techniques.",
      features: ["Excel Mastery", "SQL Fundamentals", "Data Visualization", "Basic Statistics"],
      price: "₹25,000"
    },
    {
      title: "Advanced Data Science",
      duration: "6 Months",
      students: "200+ Students",
      level: "Intermediate",
      description: "Comprehensive program covering Python, machine learning, advanced analytics, and real-world project implementation.",
      features: ["Python Programming", "Machine Learning", "Deep Learning", "Portfolio Projects"],
      price: "₹45,000"
    },
    {
      title: "Business Intelligence Professional",
      duration: "4 Months",
      students: "120+ Students",
      level: "Intermediate",
      description: "Specialized program focusing on BI tools, dashboard creation, and business analytics for corporate environments.",
      features: ["Power BI Mastery", "Tableau", "Business Analytics", "Dashboard Design"],
      price: "₹35,000"
    }
  ];

  return (
    <>
      <Navbar />
      <ParallaxHero 
        title="Our Programs"
        subtitle="Choose the perfect path for your data analytics journey"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="min-h-screen bg-white">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Choose Your <span className="text-cyan">Learning Path</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our carefully crafted programs are designed to take you from beginner to professional, 
                with hands-on projects and industry mentorship every step of the way.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <AnimatedSection 
                  key={program.title}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  delay={index * 200}
                >
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-cyan/10 text-cyan rounded-full text-sm font-medium mb-3">
                      {program.level}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan" />
                      <span className="text-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-cyan" />
                      <span className="text-gray-600">{program.students}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-cyan" />
                      <span className="text-gray-600">Certificate Included</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-cyan" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-navy">{program.price}</span>
                      <span className="text-gray-500 ml-2">One-time fee</span>
                    </div>
                    <Button className="btn-primary w-full">Enroll Now</Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <Footer />
    </>
  );
};

export default Programs;
