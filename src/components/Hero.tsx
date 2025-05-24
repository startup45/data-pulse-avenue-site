
  import { Button } from "@/components/ui/button";
  import { Play } from "lucide-react";

  const Hero = () => {
    return (
      <section className="relative min-h-screen pt-28 pb-20 bg-gradient-to-br from-navy to-navy/90 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-cyan/10 blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-purple/10 blur-3xl"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-cyan/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-cyan/10 text-cyan rounded-full mb-6 font-medium animate-fade-in">
                India's Most Trusted Edutech
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in" style={{animationDelay: "0.2s"}}>
                Turn Your<span className="text-cyan"> Dream Career</span> into <span className="text-cyan">Reality</span> 
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
                Launch your career with industry-relevant curriculum, 
                real-world projects, and guaranteed internship opporxtunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Button className="btn-secondary text-base w-full sm:w-auto">Join Now</Button>
                <Button className="bg-white/10 text-white hover:bg-white/20 font-medium rounded-lg px-6 py-3 transition-all w-full sm:w-auto">
                  Book a Free Consultation
                </Button>
                <Button variant="ghost" className="text-cyan hover:text-cyan/80 flex items-center gap-2">
                  <div className="bg-cyan/20 rounded-full p-1">
                    <Play size={16} className="text-cyan ml-0.5" />
                  </div>
                  <span>Watch Video</span>
                </Button>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt="Student" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-medium">
                    <span className="text-cyan font-bold">500+</span> Students Placed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 animate-zoom-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/30 to-purple/30 blur-2xl rounded-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Data Analytics Dashboard" 
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan/20 blur-2xl rounded-full"></div>
                </div>
                
                {/* Floating stat cards */}
                <div className="absolute top-5 -left-10 bg-white p-3 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: "0.6s"}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-cyan/20 p-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Placement Rate</p>
                      <p className="font-bold text-navy">96%</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 -right-5 bg-white p-3 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: "0.7s"}}>
                  <div className="flex items-center gap-2">
                    <div className="bg-purple/20 p-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Average Salary</p>
                      <p className="font-bold text-navy">7.8 LPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trusted by companies */}
          <div className="mt-20 text-center animate-fade-in" style={{animationDelay: "0.8s"}}>
            <p className="text-gray-300 mb-6">Trusted by leading companies across India</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {["TCS", "Infosys", "Wipro", "Accenture", "IBM"].map((company) => (
                <div key={company} className="text-white/50 font-bold text-xl">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
