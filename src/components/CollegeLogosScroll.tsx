
import { useEffect, useState } from "react";

const CollegeLogosScroll = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colleges = [
    {
      name: "PSG College of Arts and Science",
      shortName: "PSG CAS",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sree Krishna College of Engineering",
      shortName: "SKCE",
      logo: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ramakrishna College of Engineering",
      shortName: "RCE",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Karpagam College of Engineering",
      shortName: "KCE",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedColleges = [...colleges, ...colleges, ...colleges];

  return (
    <section className="py-16 bg-gradient-to-r from-lightgray to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our <span className="text-cyan">Partner</span> Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with premier educational institutions to provide world-class data analytics education
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedColleges.map((college, index) => (
            <div
              key={`${college.shortName}-${index}`}
              className="flex-shrink-0 mx-8 transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`
                  bg-white rounded-2xl p-6 shadow-lg border border-gray-100 
                  transition-all duration-500 ease-out cursor-pointer
                  ${hoveredIndex === index 
                    ? 'transform scale-110 shadow-2xl -translate-y-2 bg-gradient-to-br from-cyan/5 to-purple/5' 
                    : 'hover:shadow-xl hover:scale-105'
                  }
                `}
                style={{ minWidth: '280px' }}
              >
                <div className="text-center">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className={`
                        w-full h-32 object-cover transition-all duration-500
                        ${hoveredIndex === index ? 'scale-110' : ''}
                      `}
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent
                      transition-opacity duration-300
                      ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>
                  <h3 className={`
                    font-bold text-navy mb-2 transition-all duration-300
                    ${hoveredIndex === index ? 'text-lg text-cyan' : 'text-base'}
                  `}>
                    {college.shortName}
                  </h3>
                  <p className={`
                    text-gray-600 text-sm transition-all duration-300
                    ${hoveredIndex === index ? 'text-gray-700' : ''}
                  `}>
                    {college.name}
                  </p>
                  
                  {/* Animated indicator */}
                  <div className={`
                    mt-3 mx-auto bg-gradient-to-r from-cyan to-purple rounded-full
                    transition-all duration-500 ease-out
                    ${hoveredIndex === index ? 'w-12 h-1 opacity-100' : 'w-0 h-1 opacity-0'}
                  `} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-lightgray to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default CollegeLogosScroll;
