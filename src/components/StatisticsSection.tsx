
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatisticsSection = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Launch Your Data Career <span className="gradient-text">Today</span></h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Join a community of data professionals and embark on a transformative learning journey with Analytics Avenue. Our industry-aligned curriculum, coupled with practical experience and placement support, ensures your career success.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-navy">Why Choose Analytics Avenue?</h3>
              <ul className="space-y-3">
                {[
                  "Learn from experienced data science practitioners",
                  "Work on real-world projects from day one",
                  "Guaranteed internship opportunities",
                  "Comprehensive career support and interview preparation",
                  "Flexible learning options with weekend batches available",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="bg-cyan/10 p-1 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-cyan text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-navy text-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-4">Highest Salary Package</h3>
                <div className="text-4xl font-bold mb-2">₹24 LPA</div>
                <p className="text-white/80">Achieved by our students in 2025</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Average</span>
                  <span className="font-semibold">₹7.8 LPA</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan to-purple text-white rounded-lg p-6 shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Batch Starting Soon</h3>
              <div className="text-2xl font-bold mb-1">May 15, 2025</div>
              <p className="mb-4 text-white/80">Weekend Batch Available</p>
              <div className="mt-auto pt-4 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span>Limited seats</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">20 spots left</span>
                </div>
              </div>
            </div>
            
            <div className="col-span-2 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-navy">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">96%</div>
                  <p className="text-gray-600">Placement Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">75%</div>
                  <p className="text-gray-600">Avg. Salary Hike</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">5000+</div>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">200+</div>
                  <p className="text-gray-600">Hiring Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
