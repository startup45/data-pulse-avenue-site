import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Award, Calendar, Users } from "lucide-react";

// const programGroups = [
//   {
//     id: "finance",
//     title: "Finance",
//     courses: [
//       {
//         id: "financial-data-analysis",
//         title: "Financial Data Analysis",
//         description: "Learn to analyze financial data using advanced tools and techniques for better decision-making.",
//         icon: "💸",
//         duration: "10 weeks",
//         difficulty: "Intermediate",
//         projects: 5,
//         features: [
//           "Financial Modeling",
//           "Data Analysis Tools",
//           "Risk Assessment",
//           "Forecasting Techniques",
//           "Investment Strategies"
//         ],
//         nextBatch: "June 5, 2025",
//       },
//     ],
//   },
//   {
//     id: "tech",
//     title: "Tech",
//     courses: [
//       {
//         id: "tech-fundamentals",
//         title: "Tech Fundamentals",
//         description: "Master the basics of technology, including programming and system architecture.",
//         icon: "💻",
//         duration: "8 weeks",
//         difficulty: "Beginner to Intermediate",
//         projects: 4,
//         features: [
//           "Programming Basics",
//           "System Design",
//           "Cloud Computing",
//           "APIs and Integration",
//           "Tech Project Management"
//         ],
//         nextBatch: "June 10, 2025",
//       },
//     ],
//   },
//   {
//     id: "cyber-security",
//     title: "Cyber Security",
//     courses: [
//       {
//         id: "cyber-security-essentials",
//         title: "Cyber Security Essentials",
//         description: "Gain skills to protect systems and networks from cyber threats and attacks.",
//         icon: "🔒",
//         duration: "12 weeks",
//         difficulty: "Intermediate",
//         projects: 6,
//         features: [
//           "Threat Detection",
//           "Network Security",
//           "Ethical Hacking",
//           "Incident Response",
//           "Cryptography Basics"
//         ],
//         nextBatch: "June 15, 2025",
//       },
//     ],
//   },
//   {
//     id: "commerce",
//     title: "Commerce",
//     courses: [
//       {
//         id: "ecommerce-strategies",
//         title: "E-Commerce Strategies",
//         description: "Learn to build and grow online businesses with effective e-commerce strategies.",
//         icon: "🛒",
//         duration: "9 weeks",
//         difficulty: "Beginner to Intermediate",
//         projects: 5,
//         features: [
//           "E-Commerce Platforms",
//           "Digital Marketing",
//           "Supply Chain Management",
//           "Customer Analytics",
//           "Payment Systems"
//         ],
//         nextBatch: "June 20, 2025",
//       },
//     ],
//   },
//   {
//     id: "marketing",
//     title: "Marketing",
//     courses: [
//       {
//         id: "digital-marketing",
//         title: "Digital Marketing",
//         description: "Master digital marketing techniques to promote brands and engage audiences online.",
//         icon: "📣",
//         duration: "10 weeks",
//         difficulty: "Intermediate",
//         projects: 5,
//         features: [
//           "SEO Strategies",
//           "Social Media Marketing",
//           "Content Creation",
//           "Analytics and Reporting",
//           "Email Campaigns"
//         ],
//         nextBatch: "June 25, 2025",
//       },
//     ],
//   },
//   {
//     id: "ai-ml",
//     title: "AI/ML",
//     courses: [
//       {
//         id: "practical-machine-learning",
//         title: "Practical Machine Learning",
//         description: "Hands-on training in building and deploying machine learning models for real-world applications.",
//         icon: "🤖",
//         duration: "12 weeks",
//         difficulty: "Intermediate to Advanced",
//         projects: 8,
//         features: [
//           "Model Building",
//           "Deployment Techniques",
//           "Real-World Applications",
//           "Data Preprocessing",
//           "Performance Evaluation"
//         ],
//         nextBatch: "June 1, 2025",
//       },
//       {
//         id: "deep-learning-fundamentals",
//         title: "Deep Learning Fundamentals",
//         description: "Master neural networks, computer vision, and natural language processing techniques.",
//         icon: "🧠",
//         duration: "10 weeks",
//         difficulty: "Advanced",
//         projects: 6,
//         features: [
//           "Neural Networks",
//           "Computer Vision",
//           "Natural Language Processing",
//           "Deep Learning Frameworks",
//           "Model Optimization"
//         ],
//         nextBatch: "July 15, 2025",
//       },
//       {
//         id: "ai-product-development",
//         title: "AI Product Development",
//         description: "Learn to design, build, and deploy AI-powered products and solutions.",
//         icon: "🚀",
//         duration: "9 weeks",
//         difficulty: "Intermediate",
//         projects: 5,
//         features: [
//           "AI Product Design",
//           "Prototyping",
//           "Deployment Strategies",
//           "User-Centric Development",
//           "Scalability Solutions"
//         ],
//         nextBatch: "August 10, 2025",
//       },
//     ],
//   },
//   {
//     id: "design",
//     title: "Design",
//     courses: [
//       {
//         id: "ui-ux-design",
//         title: "UI/UX Design",
//         description: "Learn to create user-friendly and visually appealing designs for digital products.",
//         icon: "🎨",
//         duration: "8 weeks",
//         difficulty: "Beginner to Intermediate",
//         projects: 4,
//         features: [
//           "User Research",
//           "Wireframing",
//           "Prototyping",
//           "Visual Design",
//           "Usability Testing"
//         ],
//         nextBatch: "June 30, 2025",
//       },
//     ],
//   },
// ];
const programGroups = [
  {
    id: "finance",
    title: "Finance",
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
      },
    ],
  },
  {
    id: "tech",
    title: "Tech",
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
      },
      {
        id: "power-bi",
        title: "Power BI",
        description: "Learn to create interactive dashboards and reports using Power BI.",
        icon: "📊",
        duration: "16 weeks",
        difficulty: "Beginner to Intermediate",
        projects: 3,
        features: [
          "Data Visualization",
          "Power BI Desktop",
          "DAX Basics",
          "Data Modeling",
          "Report Sharing"
        ],
        nextBatch: "June 10, 2025",
      },
      {
        id: "ios-development",
        title: "iOS Development",
        description: "Build apps for iOS using Swift and Xcode.",
        icon: "🍎",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 4,
        features: [
          "Swift Programming",
          "Xcode Essentials",
          "UI Design with SwiftUI",
          "Core Data",
          "App Store Deployment"
        ],
        nextBatch: "June 15, 2025",
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
      },
      {
        id: "mern-stack-development",
        title: "MERN Stack Development",
        description: "Build modern web applications using MongoDB, Express.js, React, and Node.js.",
        icon: "🌐",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "MongoDB Setup",
          "Express.js Routing",
          "React Components",
          "Node.js Backend",
          "Full App Integration"
        ],
        nextBatch: "June 25, 2025",
      },
      {
        id: "mean-stack-development",
        title: "MEAN Stack Development",
        description: "Develop web apps using MongoDB, Express.js, Angular, and Node.js.",
        icon: "🛠️",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "MongoDB Basics",
          "Express.js Middleware",
          "Angular Framework",
          "Node.js Server",
          "App Deployment"
        ],
        nextBatch: "June 30, 2025",
      },
      {
        id: "lamp-stack-development",
        title: "LAMP Stack Development",
        description: "Learn to build web applications using Linux, Apache, MySQL, and PHP.",
        icon: "🖥️",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 4,
        features: [
          "Linux Basics",
          "Apache Configuration",
          "MySQL Databases",
          "PHP Programming",
          "Web Deployment"
        ],
        nextBatch: "July 5, 2025",
      },
      {
        id: "python-django-stack-development",
        title: "Python & Django Stack Development",
        description: "Create robust web applications using Python and the Django framework.",
        icon: "🐍",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "Python Fundamentals",
          "Django Framework",
          "Database Integration",
          "User Authentication",
          "App Deployment"
        ],
        nextBatch: "July 10, 2025",
      },
      {
        id: "php-laravel-stack-development",
        title: "PHP & Laravel Stack Development",
        description: "Build dynamic web applications using PHP and the Laravel framework.",
        icon: "🖌️",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 4,
        features: [
          "PHP Basics",
          "Laravel Framework",
          "Eloquent ORM",
          "Blade Templating",
          "App Deployment"
        ],
        nextBatch: "July 15, 2025",
      },
      {
        id: "devops-cloud-computing",
        title: "DevOps & Cloud Computing",
        description: "Master DevOps practices and cloud computing with AWS, Docker, and Kubernetes.",
        icon: "☁️",
        duration: "16 weeks",
        difficulty: "Intermediate to Advanced",
        projects: 6,
        features: [
          "CI/CD Pipelines",
          "Docker Containers",
          "Kubernetes Orchestration",
          "AWS Services",
          "Infrastructure as Code"
        ],
        nextBatch: "July 20, 2025",
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Learn to create user-friendly and visually appealing designs for digital products.",
        icon: "🎨",
        duration: "16 weeks",
        difficulty: "Beginner to Intermediate",
        projects: 4,
        features: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Usability Testing"
        ],
        nextBatch: "July 25, 2025",
      },
    ],
  },
{
    id: "cyber-security",
    title: "Cyber Security",
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
      },
      {
        id: "soc",
        title: "Security Operations Center (SOC)",
        description: "Learn to monitor, detect, and respond to cyber threats in a Security Operations Center environment.",
        icon: "🛡️",
        duration: "16 weeks",
        difficulty: "Intermediate to Advanced",
        projects: 5,
        features: [
          "Threat Monitoring",
          "SIEM Tools",
          "Incident Analysis",
          "Log Management",
          "Response Strategies"
        ],
        nextBatch: "June 20, 2025",
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
      },
      {
        id: "c-pent",
        title: "Penetration Testing (C/PENT)",
        description: "Learn advanced penetration testing techniques to secure systems from cyber attacks.",
        icon: "🔍",
        duration: "16 weeks",
        difficulty: "Advanced",
        projects: 5,
        features: [
          "Vulnerability Assessment",
          "Exploitation Techniques",
          "Post-Exploitation",
          "Reporting and Mitigation",
          "Penetration Testing Tools"
        ],
        nextBatch: "July 1, 2025",
      },
      {
        id: "c-hfi",
        title: "Computer Hacking Forensic Investigator (C/HFI)",
        description: "Gain skills to investigate cyber crimes and recover digital evidence.",
        icon: "🕵️",
        duration: "16 weeks",
        difficulty: "Intermediate to Advanced",
        projects: 5,
        features: [
          "Digital Forensics",
          "Evidence Collection",
          "Data Recovery",
          "Forensic Tools",
          "Legal Procedures"
        ],
        nextBatch: "July 5, 2025",
      },
      {
        id: "cnd",
        title: "Certified Network Defender (CND)",
        description: "Learn to protect, detect, and respond to network security threats.",
        icon: "🌐",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 4,
        features: [
          "Network Defense Strategies",
          "Firewall Configuration",
          "Intrusion Detection",
          "VPN Setup",
          "Network Monitoring"
        ],
        nextBatch: "July 10, 2025",
      },
    ],
  },
  {
    id: "commerce",
    title: "Commerce",
    courses: [
      {
        id: "ecommerce-strategies",
        title: "E-Commerce Strategies",
        description: "Learn to build and grow online businesses with effective e-commerce strategies.",
        icon: "🛒",
        duration: "16 weeks",
        difficulty: "Beginner to Intermediate",
        projects: 5,
        features: [
          "E-Commerce Platforms",
          "Digital Marketing",
          "Supply Chain Management",
          "Customer Analytics",
          "Payment Systems"
        ],
        nextBatch: "June 20, 2025",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    courses: [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Master digital marketing techniques to promote brands and engage audiences online.",
        icon: "📣",
        duration: "12 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "SEO Strategies",
          "Social Media Marketing",
          "Content Creation",
          "Analytics and Reporting",
          "Email Campaigns"
        ],
        nextBatch: "June 25, 2025",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
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
      },
      {
        id: "ai-product-development",
        title: "AI Product Development",
        description: "Learn to design, build, and deploy AI-powered products and solutions.",
        icon: "🚀",
        duration: "16 weeks",
        difficulty: "Intermediate",
        projects: 5,
        features: [
          "AI Product Design",
          "Prototyping",
          "Deployment Strategies",
          "User-Centric Development",
          "Scalability Solutions"
        ],
        nextBatch: "August 10, 2025",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    courses: [
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Learn to create user-friendly and visually appealing designs for digital products.",
        icon: "🎨",
        duration: "16 weeks",
        difficulty: "Beginner to Intermediate",
        projects: 4,
        features: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Usability Testing"
        ],
        nextBatch: "June 30, 2025",
      },
    ],
  },
];
const ProgramsSection = () => {
  // Default to first group & first course of that group
  const [activeGroup, setActiveGroup] = useState(programGroups[0].id);
  const [activeCourse, setActiveCourse] = useState(programGroups[0].courses[0].id);

  // Find current group & course
  const currentGroup = programGroups.find((g) => g.id === activeGroup);
  const activeProgram = currentGroup.courses.find((c) => c.id === activeCourse);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our Programs & Courses</h2>
          <p className="section-subtitle">
            Comprehensive learning paths designed by industry experts to transform you into a job-ready data professional
          </p>
        </div>

        {/* Group Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {programGroups.map((group) => (
            <button
              key={group.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeGroup === group.id
                  ? "bg-navy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveGroup(group.id);
                setActiveCourse(group.courses[0].id); // reset course to first of group
              }}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Course Tabs (depend on selected group) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {currentGroup.courses.map((course) => (
            <button
              key={course.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCourse === course.id
                  ? "bg-cyan text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCourse(course.id)}
            >
              <span className="mr-2">{course.icon}</span>
              {course.title}
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