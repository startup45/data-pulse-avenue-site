
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jishnu",
      role: "Founder & CEO",
      expertise: "Data Science & Business Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      description: "With over 8 years in data analytics and business transformation, Jishnu founded HikeSkool with a vision to democratize data education. His passion for teaching and industry experience helps shape our practical, results-driven curriculum.",
      achievements: ["Ex-Senior Data Scientist at Google", "10+ years in Analytics", "500+ students mentored"]
    },
    {
      name: "Dinesh",
      role: "Chief Academic Officer",
      expertise: "Machine Learning & AI",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description: "Dinesh brings a perfect blend of academic rigor and industry practicality to our programs. His expertise in AI and machine learning ensures our students learn cutting-edge techniques that are immediately applicable in the workplace.",
      achievements: ["PhD in Machine Learning", "Ex-Lead ML Engineer at Microsoft", "Published researcher with 50+ papers"]
    },
    {
      name: "Priya Sharma",
      role: "Lead Data Science Mentor",
      expertise: "Statistical Analysis & Python",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      description: "Priya's enthusiasm for data storytelling is infectious. She specializes in making complex statistical concepts accessible and enjoyable, helping students build confidence in their analytical abilities through hands-on projects.",
      achievements: ["Ex-Senior Analyst at Amazon", "Statistical modeling expert", "Kaggle Grandmaster"]
    },
    {
      name: "Vikram Singh",
      role: "Industry Relations Head",
      expertise: "Business Intelligence & Consulting",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      description: "Vikram bridges the gap between classroom learning and industry requirements. His extensive network and deep understanding of market needs ensure our graduates are always job-ready and in-demand.",
      achievements: ["15+ years in BI consulting", "200+ successful placements", "Industry partnerships with 50+ companies"]
    },
    {
      name: "Ananya Reddy",
      role: "Full-Stack Development Lead",
      expertise: "Web Development & DevOps",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      description: "Ananya's passion for creating beautiful, functional web applications shines through in every lesson. She believes in learning by building and guides students through real-world projects that showcase their skills to potential employers.",
      achievements: ["Full-stack architect at Flipkart", "Open source contributor", "React & Node.js expert"]
    },
    {
      name: "Rahul Kumar",
      role: "Cybersecurity Specialist",
      expertise: "Ethical Hacking & Network Security",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      description: "Rahul brings real-world cybersecurity experience from protecting enterprise systems to the classroom. His hands-on approach to teaching ethical hacking and security practices prepares students for the dynamic cybersecurity landscape.",
      achievements: ["CISSP & CEH certified", "Security consultant for Fortune 500", "Prevented 100+ security breaches"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Amazing Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the passionate educators, industry experts, and mentors who are dedicated 
            to your success. Each team member brings unique expertise and a genuine commitment 
            to helping you achieve your career goals.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={member.name}
              className="group"
              delay={index * 150}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                    <p className="text-cyan font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 italic">{member.expertise}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2 text-sm">Key Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan rounded-full"></div>
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-cyan/10 text-cyan rounded-lg hover:bg-cyan/20 transition-colors text-sm">
                      <Mail className="w-4 h-4" />
                      Connect
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-navy/10 text-navy rounded-lg hover:bg-navy/20 transition-colors text-sm">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team Values */}
        <AnimatedSection className="mt-20 text-center bg-gradient-to-r from-navy to-purple rounded-2xl p-12 text-white" delay={800}>
          <h3 className="text-3xl font-bold mb-6">Our Commitment to You</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">🎯 Personalized Guidance</h4>
              <p className="text-gray-200">Every student receives individual attention and customized learning paths</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">💡 Industry Expertise</h4>
              <p className="text-gray-200">Learn from professionals who are actively working in their fields</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">🚀 Career Success</h4>
              <p className="text-gray-200">We're invested in your long-term career growth and success</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamSection;
