
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Analytics<span className="text-cyan">Avenue</span></h3>
            <p className="text-white/70 mb-6">
              India's leading data analytics training institute, empowering professionals with cutting-edge skills for today's data-driven world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-cyan transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {[
                "Data Analytics Mastery",
                "Python for Data Science",
                "Applied Machine Learning",
                "Big Data Analytics",
                "Power BI Specialization",
                "SQL Masterclass",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Testimonials",
                "Careers",
                "Blog",
                "Contact",
                "FAQs",
                "Privacy Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <Mail size={18} className="text-cyan flex-shrink-0 mt-1" />
                <span className="text-white/70">info@analyticsavenue.in</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="text-cyan flex-shrink-0 mt-1" />
                <span className="text-white/70">+91 98765 43210</span>
              </p>
              <div className="pt-4">
                <h4 className="font-medium mb-2">Subscribe to Newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 focus:outline-none focus:border-cyan flex-1 text-sm"
                  />
                  <Button className="bg-cyan hover:bg-cyan/90 text-navy font-medium rounded-r-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} Analytics Avenue. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-cyan text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-cyan text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-cyan text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
