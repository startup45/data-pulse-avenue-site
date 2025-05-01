
import { useEffect } from "react";
import { 
  Cloud, 
  Code,
  Database,
  BarChart,
  ChartLine,
  Briefcase,
  GraduationCap,
  Users,
  User,
  Laptop,
  Monitor,
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

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll transition-all duration-300 delay-[0ms]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Success Strategy <span className="text-blue-600">Module</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Prepared exclusively for freshers, immediate job seekers, and career transition candidates from our core data scientist panel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* AI Tools */}
          <div className="lg:col-span-2 text-center animate-on-scroll transition-all duration-300 delay-[200ms]">
            <div className="text-blue-600 font-bold text-6xl md:text-8xl leading-none">AI</div>
            <div className="text-blue-600 font-bold text-4xl md:text-6xl leading-none">Tools</div>
          </div>

          {/* Phase 1 */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-6 animate-on-scroll transition-all duration-300 delay-[300ms]">
              <div className="w-1 bg-blue-600 h-32 rounded-full relative">
                <div className="absolute top-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                <div className="absolute bottom-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="space-y-5 flex-1">
                {[
                  { name: "Python", icon: null },
                  { name: "SQL", icon: null },
                  { name: "Power BI", icon: null },
                  { name: "Statistics", icon: null }
                ].map((tool, index) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center gap-4 animate-on-scroll transition-all duration-300"
                    style={{transitionDelay: `${400 + index * 100}ms`}}
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center animate-on-scroll transition-all duration-300 delay-[500ms]">
                <div className="h-32 w-1 bg-blue-600 rounded-full"></div>
                <div className="py-2 px-6 border-2 border-blue-600 rounded-xl font-semibold text-blue-600 mt-2">
                  Phase 1
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-center gap-6 animate-on-scroll transition-all duration-300 delay-[800ms]">
              <div className="w-1 bg-blue-600 h-32 rounded-full relative">
                <div className="absolute top-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                <div className="absolute bottom-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="space-y-5 flex-1">
                {[
                  { name: "Cloud", icon: <Cloud className="text-blue-600" /> },
                  { name: "Data Science", icon: null },
                  { name: "Machine Learning", icon: <Code className="text-blue-600" /> },
                  { name: "MLflow", icon: <TrendingUp className="text-blue-600" /> }
                ].map((tool, index) => (
                  <div 
                    key={tool.name} 
                    className="flex items-center gap-4 animate-on-scroll transition-all duration-300"
                    style={{transitionDelay: `${900 + index * 100}ms`}}
                  >
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center animate-on-scroll transition-all duration-300 delay-[1000ms]">
                <div className="h-32 w-1 bg-blue-600 rounded-full"></div>
                <div className="py-2 px-6 border-2 border-blue-600 rounded-xl font-semibold text-blue-600 mt-2">
                  Phase 2
                </div>
              </div>
            </div>
          </div>

          {/* Career Paths */}
          <div className="lg:col-span-6">
            <div className="flex gap-6">
              {/* First career path group */}
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-1 bg-blue-600 h-44 rounded-full relative animate-on-scroll transition-all duration-300 delay-[1100ms]">
                    <div className="absolute top-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="space-y-5 flex-1">
                    {[
                      { name: "Data Engineer", icon: <Database className="text-blue-600" /> },
                      { name: "Data Analyst", icon: <BarChart className="text-blue-600" /> },
                      { name: "Visualization Engineer", icon: <ChartLine className="text-blue-600" /> },
                      { name: "Data Consultant", icon: <Briefcase className="text-blue-600" /> }
                    ].map((role, index) => (
                      <div 
                        key={role.name}
                        className="flex items-center gap-4 animate-on-scroll transition-all duration-300"
                        style={{transitionDelay: `${1200 + index * 100}ms`}}
                      >
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="font-medium">{role.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-1 bg-blue-600 h-44 rounded-full relative animate-on-scroll transition-all duration-300 delay-[1600ms]">
                    <div className="absolute top-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 -left-2 w-5 h-5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="space-y-5 flex-1">
                    {[
                      { name: "Data Specialist", icon: null },
                      { name: "Data Scientist", icon: <GraduationCap className="text-blue-600" /> },
                      { name: "ML Engineer", icon: <Laptop className="text-blue-600" /> },
                      { name: "Cloud Engineer", icon: <Cloud className="text-blue-600" /> }
                    ].map((role, index) => (
                      <div 
                        key={role.name}
                        className="flex items-center gap-4 animate-on-scroll transition-all duration-300"
                        style={{transitionDelay: `${1700 + index * 100}ms`}}
                      >
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="font-medium">{role.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Plus section */}
              <div className="flex flex-col justify-center gap-12">
                <div className="text-center animate-on-scroll transition-all duration-300 delay-[2100ms]">
                  <div className="text-5xl text-blue-600 font-bold mb-2">+</div>
                  <div className="text-center">
                    <p className="font-medium">SQL Developer</p>
                    <p className="font-medium">&</p>
                    <p className="font-medium">Python Developer</p>
                  </div>
                </div>
                
                <div className="text-center animate-on-scroll transition-all duration-300 delay-[2200ms]">
                  <div className="text-5xl text-blue-600 font-bold mb-2">+</div>
                  <div className="text-center">
                    <p className="font-medium">1 lakh worth</p>
                    <p className="font-medium">digital notes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStrategySection;
