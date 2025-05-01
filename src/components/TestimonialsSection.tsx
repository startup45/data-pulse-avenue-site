
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aditya Kumar",
      position: "Data Analyst at Amazon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "amazon",
      text: "The data analytics program at Analytics Avenue completely transformed my career. The hands-on projects and real-world applications helped me secure a position at Amazon. The mentors were incredibly supportive throughout the placement process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Pooja Sharma",
      position: "Business Intelligence Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "microsoft",
      text: "As someone with no prior technical background, I was amazed at how quickly I picked up SQL and Power BI through Analytics Avenue's structured curriculum. Within 4 months of completing the program, I landed a job with a 120% salary hike!",
      rating: 5,
    },
    {
      id: 3,
      name: "Rajesh Verma",
      position: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      company: "tcs",
      text: "The machine learning course was comprehensive and challenging in the best way possible. The career support team went above and beyond to help me prepare for interviews and negotiate my job offer. Highly recommended for anyone serious about a data science career.",
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="internships" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transitioned into rewarding data careers
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gradient-to-br from-cyan to-purple p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white/50">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-white/80 mb-2">{testimonials[currentTestimonial].position}</p>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonials[currentTestimonial].rating ? "white" : "none"}
                        className="text-white"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">
                      Testimonial {currentTestimonial + 1} of {testimonials.length}
                    </span>
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentTestimonial ? "bg-white" : "bg-white/30"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 p-6 md:p-10">
                <svg className="text-cyan w-12 h-12 mb-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C6 11 6 9.5 6 8C6 5.8 7.8 4 10 4V6C8.9 6 8 6.9 8 8H10V11ZM16 11H12C12 11 12 9.5 12 8C12 5.8 13.8 4 16 4V6C14.9 6 14 6.9 14 8H16V11Z" fill="currentColor"/>
                </svg>
                
                <p className="text-lg text-gray-700 mb-8">{testimonials[currentTestimonial].text}</p>
                
                <div className="flex items-center gap-4">
                  <p className="font-medium">Placed at:</p>
                  <span className="text-xl font-bold text-navy">
                    {testimonials[currentTestimonial].company.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            {[
              { number: "500+", label: "Career Transitions" },
              { number: "96%", label: "Placement Rate" },
              { number: "75%", label: "Avg. Salary Hike" },
              { number: "200+", label: "Hiring Partners" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-1">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20 text-center">
          <p className="text-white/80 mb-8">Our graduates work at leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Amazon", "Microsoft", "TCS", "Infosys", "Accenture"].map((company) => (
              <div key={company} className="text-white/60 font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
