
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      icon: <Users className="w-12 h-12 text-cyan" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of real-world experience in data analytics and business intelligence."
    },
    {
      icon: <Target className="w-12 h-12 text-cyan" />,
      title: "Industry-Focused Curriculum",
      description: "Our curriculum is designed in collaboration with leading companies to ensure you learn the most relevant skills."
    },
    {
      icon: <Award className="w-12 h-12 text-cyan" />,
      title: "100% Placement Support",
      description: "We provide comprehensive placement assistance with our network of 500+ hiring partners across India."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-cyan" />,
      title: "Hands-on Learning",
      description: "Work on real projects and case studies that mirror actual industry challenges and scenarios."
    }
  ];

  return (
    <>
      <Navbar />
      <ParallaxHero 
        title="About HikeSkool"
        subtitle="Empowering the next generation of data professionals"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="min-h-screen bg-white">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Our <span className="text-cyan">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the gap between academic learning and industry requirements, 
                HikeSkool has emerged as India's most trusted data analytics training institute. We believe 
                in transforming careers through practical, hands-on education that prepares students for 
                real-world challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection direction="left" className="space-y-6">
                <h3 className="text-3xl font-bold text-navy">Why Choose HikeSkool?</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In today's data-driven world, organizations need professionals who can extract 
                  meaningful insights from complex datasets. Our comprehensive training programs 
                  are designed to equip you with cutting-edge skills in data analytics, 
                  visualization, and machine learning.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  What sets us apart is our commitment to practical learning. Every concept is 
                  taught through real-world projects, ensuring you graduate job-ready with a 
                  portfolio that showcases your capabilities to potential employers.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
                  alt="Data Analytics Training"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection 
                  key={feature.title}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  delay={index * 200}
                >
                  <div className="bg-cyan/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
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

export default About;
