
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxHero from "@/components/ParallaxHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Target, Zap, Shield } from "lucide-react";

const Business = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Corporate Training",
      description: "Upskill your team with customized data analytics training programs designed for your business needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Data Consulting",
      description: "Expert consulting services to help you implement data-driven strategies and optimize business processes."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Talent Acquisition",
      description: "Access our pool of trained data professionals to fill your analytics and data science positions."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-12 h-12 text-cyan" />,
      title: "Customized Solutions",
      description: "Tailored training programs that align with your specific industry and business objectives."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan" />,
      title: "Rapid Implementation",
      description: "Quick deployment of training programs with measurable results in just weeks."
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan" />,
      title: "Proven Track Record",
      description: "Successfully trained 500+ professionals across 100+ companies in various industries."
    }
  ];

  return (
    <>
      <Navbar />
      <ParallaxHero 
        title="Business Solutions"
        subtitle="Empower your organization with data-driven decision making"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="min-h-screen bg-white">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Transform Your <span className="text-cyan">Business</span> with Data
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Partner with HikeSkool to build a data-literate workforce and unlock the full potential 
                of your organization's data assets through our comprehensive business solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <AnimatedSection 
                  key={service.title}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-navy to-purple text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  delay={index * 200}
                >
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </AnimatedSection>
              ))}
            </div>

            <div className="bg-gradient-to-r from-lightgray to-white rounded-2xl p-8 md:p-12 mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                    Why Choose HikeSkool for Your Business?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    We understand that every business has unique data challenges. Our enterprise solutions 
                    are designed to address your specific needs while ensuring your team gains practical, 
                    applicable skills that drive immediate results.
                  </p>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={benefit.title} className="flex gap-4">
                        <div className="bg-cyan/10 rounded-full p-3 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-navy mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="Business Team"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection className="text-center bg-navy rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Let's discuss how our data analytics solutions can drive growth and innovation in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-secondary text-lg px-8 py-3">Schedule a Consultation</Button>
                <Button variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-navy">
                  Download Brochure
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
      
      <Footer />
    </>
  );
};

export default Business;
