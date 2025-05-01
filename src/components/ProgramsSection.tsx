
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Award, Calendar, Users } from "lucide-react";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("data-analytics");

  const programs = [
    {
      id: "data-analytics",
      title: "Data Analytics Mastery",
      description: "Master data analysis techniques using SQL, Excel, and Power BI with real-world projects and internship opportunities.",
      icon: "📊",
      duration: "3 months",
      difficulty: "Beginner to Intermediate",
      projects: 8,
      features: ["SQL Database Management", "Excel Advanced Functions", "Power BI Dashboards", "Case Studies", "Live Projects"],
      nextBatch: "June 10, 2025",
    },
    {
      id: "python",
      title: "Python for Data Science",
      description: "Learn Python programming fundamentals and libraries like Pandas, NumPy, and Matplotlib for data analysis and visualization.",
      icon: "🐍",
      duration: "4 months",
      difficulty: "Intermediate",
      projects: 10,
      features: ["Python Fundamentals", "Data Manipulation with Pandas", "Statistical Analysis", "Data Visualization", "Machine Learning Basics"],
      nextBatch: "May 15, 2025",
    },
    {
      id: "machine-learning",
      title: "Applied Machine Learning",
      description: "Dive deep into machine learning algorithms, model development, and deployment for real-world applications.",
      icon: "🤖",
      duration: "5 months",
      difficulty: "Advanced",
      projects: 6,
      features: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Deployment", "MLOps Introduction"],
      nextBatch: "July 5, 2025",
    },
    {
      id: "big-data",
      title: "Big Data Analytics",
      description: "Master big data technologies including Hadoop, Spark, and cloud-based data solutions for enterprise applications.",
      icon: "☁️",
      duration: "4 months",
      difficulty: "Intermediate to Advanced",
      projects: 5,
      features: ["Hadoop Ecosystem", "Apache Spark", "NoSQL Databases", "Data Lakes", "Cloud Data Platforms"],
      nextBatch: "August 20, 2025",
    },
  ];

  const activeProgram = programs.find(program => program.id === activeTab) || programs[0];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our Programs & Courses</h2>
          <p className="section-subtitle">
            Comprehensive learning paths designed by industry experts to transform you into a job-ready data professional
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === program.id
                  ? "bg-navy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(program.id)}
            >
              <span className="mr-2">{program.icon}</span>
              {program.title}
            </button>
          ))}
        </div>

        {/* Active Program Details */}
        <div className="bg-lightgray rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Program Info */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4 text-navy">{activeProgram.title}</h3>
              <p className="text-gray-700 mb-6">{activeProgram.description}</p>
              
              {/* Program Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan/10 p-2 rounded-full">
                    <Clock className="text-cyan" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{activeProgram.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-2 rounded-full">
                    <Award className="text-purple" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="font-semibold">{activeProgram.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-cyan/10 p-2 rounded-full">
                    <Calendar className="text-cyan" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Batch</p>
                    <p className="font-semibold">{activeProgram.nextBatch}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-2 rounded-full">
                    <Users className="text-purple" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projects</p>
                    <p className="font-semibold">{activeProgram.projects} Projects</p>
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-navy">What You'll Learn</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-cyan rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">Enroll Now</Button>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy/5">
                  Download Syllabus
                </Button>
              </div>
            </div>
            
            {/* Program Image */}
            <div className="w-full lg:w-1/2 bg-navy relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/70 mix-blend-multiply"></div>
              <img 
                src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80`}
                alt={activeProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white max-w-md text-center">
                  <h4 className="text-xl font-bold mb-3">Guaranteed Internship</h4>
                  <p className="mb-4">Complete this program and gain real-world experience through our guaranteed internship program with top companies.</p>
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                    Average Stipend: ₹15,000 - ₹25,000/month
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

export default ProgramsSection;
