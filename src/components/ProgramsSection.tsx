
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Award, Calendar, Users, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const programGroups = [
  {
    id: "finance",
    title: "Finance",
    color: "from-blue-500 to-blue-600",
    courses: [
      {
        id: "financial-data-analysis",
        title: "Financial Data Analysis",
        description: "Learn to analyze financial data using advanced tools and techniques for better decision-making.",
        icon: "💸",
        duration: "12 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "Financial Modeling",
          "Data Analysis Tools",
          "Risk Assessment",
          "Forecasting Techniques",
          "Investment Strategies"
        ],
        nextBatch: "June 5, 2025",
        rating: 4.8,
        students: 150,
      },
    ],
  },
  {
    id: "tech",
    title: "Tech",
    color: "from-purple-500 to-purple-600",
    courses: [
      {
        id: "flutter-development",
        title: "Flutter Development",
        description: "Learn to build cross-platform mobile apps using Flutter and Dart.",
        icon: "📱",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 4,
        features: [
          "Flutter Basics",
          "Dart Programming",
          "UI Design with Flutter",
          "State Management",
          "App Deployment"
        ],
        nextBatch: "June 1, 2025",
        rating: 4.9,
        students: 200,
      },
      {
        id: "react-native-development",
        title: "React (Native) Development",
        description: "Master React and React Native to build web and mobile applications.",
        icon: "⚛️",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "React Fundamentals",
          "React Native Basics",
          "Component Design",
          "State Management",
          "API Integration"
        ],
        nextBatch: "June 5, 2025",
        rating: 4.8,
        students: 180,
      },
      {
        id: "fullstack-development",
        title: "Fullstack Development",
        description: "Become a fullstack developer by learning both frontend and backend technologies.",
        icon: "💻",
        duration: "16 weeks",
        difficulty: "Intermediate to Advanced",
        projects: 6,
        features: [
          "HTML/CSS/JavaScript",
          "Node.js Basics",
          "Database Management",
          "REST APIs",
          "Deployment"
        ],
        nextBatch: "June 20, 2025",
        rating: 4.7,
        students: 250,
      },
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    color: "from-red-500 to-red-600",
    courses: [
      {
        id: "cyber-security-essentials",
        title: "Cyber Security Essentials",
        description: "Gain skills to protect systems and networks from cyber threats and attacks.",
        icon: "🔒",
        duration: "12 weeks",
        difficulty: "Intermediate",
        projects: 6,
        features: [
          "Threat Detection",
          "Network Security",
          "Ethical Hacking",
          "Incident Response",
          "Cryptography Basics"
        ],
        nextBatch: "June 15, 2025",
        rating: 4.9,
        students: 120,
      },
      {
        id: "ceh",
        title: "Certified Ethical Hacker (CEH)",
        description: "Master ethical hacking techniques to identify and fix vulnerabilities in systems.",
        icon: "💻",
        duration: "16 weeks",
        difficulty: "Advanced",
        projects: 6,
        features: [
          "Footprinting and Reconnaissance",
          "System Hacking",
          "Malware Threats",
          "Sniffing and Spoofing",
          "Penetration Testing"
        ],
        nextBatch: "June 25, 2025",
        rating: 4.8,
        students: 90,
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    color: "from-green-500 to-green-600",
    courses: [
      {
        id: "practical-machine-learning",
        title: "Practical Machine Learning",
        description: "Hands-on training in building and deploying machine learning models for real-world applications.",
        icon: "🤖",
        duration: "16 weeks",
        difficulty: "Intermediate to Advanced",
        projects: 8,
        features: [
          "Model Building",
          "Deployment Techniques",
          "Real-World Applications",
          "Data Preprocessing",
          "Performance Evaluation"
        ],
        nextBatch: "June 1, 2025",
        rating: 4.9,
        students: 300,
      },
      {
        id: "deep-learning-fundamentals",
        title: "Deep Learning Fundamentals",
        description: "Master neural networks, computer vision, and natural language processing techniques.",
        icon: "🧠",
        duration: "16 weeks",
        difficulty: "Advanced",
        projects: 6,
        features: [
          "Neural Networks",
          "Computer Vision",
          "Natural Language Processing",
          "Deep Learning Frameworks",
          "Model Optimization"
        ],
        nextBatch: "July 15, 2025",
        rating: 4.8,
        students: 180,
      },
    ],
  },
];

const ProgramsSection = () => {
  const [activeGroup, setActiveGroup] = useState(programGroups[0].id);

  const currentGroup = programGroups.find((g) => g.id === activeGroup);

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Explore Our Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your career with industry-leading courses designed by experts. 
            From beginner to advanced, we have the perfect learning path for you.
          </p>
        </AnimatedSection>

        {/* Category Navigation */}
        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12" delay={200}>
          {programGroups.map((group) => (
            <button
              key={group.id}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeGroup === group.id
                  ? `bg-gradient-to-r ${group.color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              }`}
              onClick={() => setActiveGroup(group.id)}
            >
              {group.title}
            </button>
          ))}
        </AnimatedSection>

        {/* Course Cards Grid */}
        <AnimatedSection delay={400}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentGroup.courses.map((course, index) => (
              <Card 
                key={course.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentGroup.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {course.icon}
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-yellow-700">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-navy group-hover:text-purple transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan" />
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple" />
                      <span className="text-sm text-gray-600">{course.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan" />
                      <span className="text-sm text-gray-600">{course.students}+ Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple" />
                      <span className="text-sm text-gray-600">{course.projects} Projects</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Batch */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Next Batch Starts</div>
                    <div className="font-semibold text-navy">{course.nextBatch}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className={`flex-1 bg-gradient-to-r ${currentGroup.color} hover:opacity-90 text-white font-medium group`}>
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                      Syllabus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center bg-gradient-to-r from-navy to-purple rounded-2xl p-12 text-white" delay={600}>
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our expert-led programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy hover:bg-gray-100 font-semibold px-8">
              View All Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
              Book Free Consultation
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProgramsSection;
