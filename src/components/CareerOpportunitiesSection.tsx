
import { useEffect } from "react";
import { 
  BarChart, 
  Database, 
  Briefcase, 
  LineChart, 
  GraduationCap,
  Code
} from "lucide-react";

const CareerOpportunitiesSection = () => {
  // Setup intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.add("opacity-100");
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      el.classList.remove("animate-fade-in");
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const roles = [
    { 
      name: "Data Analyst", 
      icon: <BarChart size={32} className="text-white" />,
      description: "Extract insights from data to drive business decisions",
      delay: 300
    },
    { 
      name: "Data Engineer", 
      icon: <Database size={32} className="text-white" />,
      description: "Build and maintain data pipelines and infrastructure",
      delay: 500
    },
    { 
      name: "Visualization Engineer", 
      icon: <LineChart size={32} className="text-white" />,
      description: "Create interactive dashboards and data visualizations",
      delay: 700
    },
    { 
      name: "Data Scientist", 
      icon: <GraduationCap size={32} className="text-white" />,
      description: "Apply advanced analytics to solve complex problems",
      delay: 700
    },
    { 
      name: "Python Developer", 
      icon: <Code size={32} className="text-white" />,
      description: "Build data-driven applications with Python",
      delay: 500
    },
    { 
      name: "Data Consultant", 
      icon: <Briefcase size={32} className="text-white" />,
      description: "Advise organizations on data strategy and implementation",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy/90 to-purple/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll transition-all duration-300 delay-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Opening the Gateway to <span className="text-cyan">Analytics</span>
          </h2>
        </div>

        <div className="relative mb-16">
          <div className="text-center mb-12 animate-on-scroll transition-all duration-300 delay-100">
            <h3 className="text-3xl font-bold mb-2">CAREER OPPORTUNITIES</h3>
            <h3 className="text-3xl font-bold mb-8">IN AI</h3>
            <p className="max-w-2xl mx-auto text-gray-200">
              Explore high-demand career paths that await you after completing our comprehensive data analytics program
            </p>
          </div>
          
          {/* Career role cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div 
                key={role.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll"
                style={{animationDelay: `${role.delay}ms`}}
              >
                <div className="bg-gradient-to-br from-cyan to-purple rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {role.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-center">{role.name}</h4>
                <p className="text-center text-gray-300">{role.description}</p>
              </div>
            ))}
          </div>
          
          {/* Skills badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 animate-on-scroll transition-all duration-300 delay-800">
            {["Python", "SQL", "Machine Learning", "Data Visualization", "Statistical Analysis", "Deep Learning"].map((skill) => (
              <span 
                key={skill} 
                className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
