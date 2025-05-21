
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const impactStats = [
    { number: "15k+", label: "Students Trained" },
    { number: "100+", label: "College Tie-Ups" },
    { number: "200+", label: "Hiring Partners" },
    { number: "96%", label: "Placement Rate" },
  ];

  const teamMembers = [
    {
      name: "Jishnu",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dinesh",
      position: "Chief Academic Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Singh",
      position: "Head of Industry Relations",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Ananya Reddy",
      position: "Lead Data Scientist",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">About Hike Skool</h2>
          <p className="section-subtitle">
            We're on a mission to create world-class data professionals through industry-relevant training and real-world experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple rounded-lg opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Analytics Avenue Team"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-navy">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Analytics Avenue, we bridge the gap between industry needs and academic learning by providing cutting-edge data analytics training that prepares students for real-world challenges. Our goal is to develop the next generation of data leaders who can transform businesses through data-driven decision making.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-navy">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be India's most trusted learning ecosystem for data science and analytics education, empowering professionals to harness the power of data and drive impactful business outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Industry-led curriculum", "Hands-on learning approach", "Guaranteed internships", "Lifetime career support"].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-cyan mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Image Gallery */}
        <div className="my-20 overflow-hidden relative">
          <div className="flex animate-scroll w-[250%]">
            {[
              "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/logo/2023/7/logo200758057230.jpg  ",
              "https://img.collegepravesh.com/2022/05/PSGCT-Coimbatore-Logo.png",
              "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/logo/2023/7/logo200758057230.jpg  ",
              "https://img.collegepravesh.com/2022/05/PSGCT-Coimbatore-Logo.png",
              "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/logo/2023/7/logo200758057230.jpg  ",
              "https://img.collegepravesh.com/2022/05/PSGCT-Coimbatore-Logo.png",
            ].flatMap((src, index) => [
              <div key={`1-${index}`} className="w-32 h-32 mx-6 clip-hexagon overflow-hidden shadow-xl">
                <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              </div>,
            ])}
          </div>
        </div>



        {/* Leadership Team */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-navy">Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-navy">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
