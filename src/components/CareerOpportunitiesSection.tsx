
import { useEffect } from "react";
import { 
  DataAnalyst, 
  DataEngineer, 
  DataConsultant, 
  VisualizationEngineer, 
  DataScientist 
} from "lucide-react";

const CareerOpportunitiesSection = () => {
  // Setup intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.style.opacity = "1";
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      el.classList.remove("animate-fade-in");
      el.style.opacity = "0";
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const roles = [
    { 
      name: "Data Analyst", 
      icon: <DataAnalyst size={32} className="text-white" />,
      position: "left",
      delay: 300
    },
    { 
      name: "Data Engineer", 
      icon: <DataEngineer size={32} className="text-white" />,
      position: "left-center",
      delay: 500
    },
    { 
      name: "Visualization Engineer", 
      icon: <VisualizationEngineer size={32} className="text-white" />,
      position: "center-left",
      delay: 700
    },
    { 
      name: "Data Scientist", 
      icon: <DataScientist size={32} className="text-white" />,
      position: "center-right",
      delay: 700
    },
    { 
      name: "Python Developer/ MySQL Developer", 
      icon: <DataScientist size={32} className="text-white" />,
      position: "right-center",
      delay: 500
    },
    { 
      name: "Data Consultant", 
      icon: <DataConsultant size={32} className="text-white" />,
      position: "right",
      delay: 300
    }
  ];

  const getPositionClass = (position) => {
    switch (position) {
      case "left": return "lg:col-start-1 lg:col-end-3";
      case "left-center": return "lg:col-start-3 lg:col-end-5 lg:mt-16";
      case "center-left": return "lg:col-start-4 lg:col-end-6 lg:mt-24";
      case "center-right": return "lg:col-start-7 lg:col-end-9 lg:mt-24";
      case "right-center": return "lg:col-start-9 lg:col-end-11 lg:mt-16";
      case "right": return "lg:col-start-11 lg:col-end-13";
      default: return "";
    }
  };

  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll" style={{transitionDelay: "0ms"}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Opening the Gateway to <span className="text-blue-600">Analytics</span>
          </h2>
        </div>

        <div className="relative mb-16">
          <div className="text-center mb-12 animate-on-scroll" style={{transitionDelay: "100ms"}}>
            <h3 className="text-3xl font-bold mb-2">CAREER OPPORTUNITIES</h3>
            <h3 className="text-3xl font-bold">IN AI</h3>
          </div>
          
          {/* Career path arch - visible on lg screens */}
          <div className="hidden lg:block absolute top-32 left-0 w-full">
            <svg className="w-full animate-on-scroll" viewBox="0 0 1200 200" style={{transitionDelay: "200ms"}}>
              <path 
                d="M50,150 Q 600,0 1150,150" 
                fill="none" 
                stroke="black" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                className="path-animation"
              />
              {/* Dots on the path */}
              <circle cx="300" cy="80" r="6" fill="#1E40AF" />
              <circle cx="500" cy="40" r="6" fill="#1E40AF" />
              <circle cx="700" cy="40" r="6" fill="#1E40AF" />
              <circle cx="900" cy="80" r="6" fill="#1E40AF" />
            </svg>
          </div>
          
          {/* Role cards with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-6">
            {roles.map((role, index) => (
              <div 
                key={role.name}
                className={`text-center ${getPositionClass(role.position)} animate-on-scroll`}
                style={{transitionDelay: `${role.delay}ms`}}
              >
                <div className="mx-auto w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  {role.icon}
                </div>
                <p className="font-medium text-center">{role.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
