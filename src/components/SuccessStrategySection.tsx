
import { useEffect } from "react";
import { 
  Cloud, 
  Code,
  Database,
  BarChart,
  LineChart,
  Briefcase,
  GraduationCap,
  Users,
  Laptop,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const SuccessStrategySection = () => {
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

  // Define learning phases and career paths
  const learningPhases = [
    {
      phase: "Foundation",
      number: 1,
      skills: ["Python", "SQL", "Power BI", "Statistics"],
      color: "from-blue-500 to-cyan"
    },
    {
      phase: "Advanced",
      number: 2,
      skills: ["Cloud Computing", "Data Science", "Machine Learning", "MLflow"],
      color: "from-cyan to-purple"
    }
  ];

  const careerPaths = [
    { 
      path: "Data Engineering", 
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-600"
    },
    { 
      path: "Data Analysis", 
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-cyan"
    },
    { 
      path: "Data Visualization", 
      icon: <LineChart className="h-6 w-6" />,
      color: "bg-teal-600"
    },
    { 
      path: "Data Science", 
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-purple"
    },
    { 
      path: "Cloud Engineering", 
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-indigo-600"
    },
    { 
      path: "AI Development", 
      icon: <Code className="h-6 w-6" />,
      color: "bg-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll transition-all duration-300 delay-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Success Strategy <span className="text-blue-600">Module</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Prepared exclusively for freshers, immediate job seekers, and career transition candidates from our core data scientist panel
          </p>
        </div>

        {/* Learning Journey */}
        <div className="mb-20">
          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan to-purple hidden md:block"></div>
            
            {/* Learning Phases */}
            <div className="space-y-20 md:space-y-40 relative">
              {learningPhases.map((phase, index) => (
                <div 
                  key={phase.phase}
                  className={cn(
                    "flex flex-col md:flex-row items-center animate-on-scroll transition-all duration-500",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                  style={{transitionDelay: `${index * 300}ms`}}
                >
                  {/* Phase Number */}
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 md:mb-0 z-10",
                    `bg-gradient-to-br ${phase.color}`
                  )}>
                    {phase.number}
                  </div>
                  
                  {/* Phase Content */}
                  <div className={cn(
                    "bg-gray-100 rounded-xl shadow-lg p-8 w-full md:w-5/12",
                    index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                  )}>
                    <h3 className="text-2xl font-bold mb-4 text-navy">Phase {phase.number}: {phase.phase}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {phase.skills.map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            `bg-gradient-to-br ${phase.color}`
                          )}></div>
                          <span className="font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 animate-on-scroll transition-all duration-300 delay-600">
            Career Paths After Completion
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {careerPaths.map((career, index) => (
              <div 
                key={career.path}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-2 transition-transform duration-300 animate-on-scroll"
                style={{transitionDelay: `${700 + index * 100}ms`}}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4",
                  career.color
                )}>
                  {career.icon}
                </div>
                <h4 className="font-medium">{career.path}</h4>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll transition-all duration-300 delay-[1400ms]">
            <div className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold">
              + 1 lakh worth digital learning resources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStrategySection;
