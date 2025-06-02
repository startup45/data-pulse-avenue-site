
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Business", to: "/business" },
    { name: "Contact", to: "/contact" },
  ];

  const courseLinks = [
    { name: "Financial Data Analysis", to: "/courses/financial-data-analysis" },
    { name: "Flutter Development", to: "/courses/flutter-development" },
    { name: "React Development", to: "/courses/react-development" },
    { name: "Fullstack Development", to: "/courses/fullstack-development" },
    { name: "Cyber Security Essentials", to: "/courses/cyber-security-essentials" },
    { name: "Certified Ethical Hacker", to: "/courses/ceh" },
    { name: "Machine Learning", to: "/courses/practical-machine-learning" },
    { name: "Deep Learning", to: "/courses/deep-learning-fundamentals" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 mx-2 my-2 rounded-2xl" 
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="text-navy text-2xl font-bold tracking-tight">
                Hike<span className="text-cyan">Skool</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-purple transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link to={link.to}>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:text-cyan hover:bg-gray-50 transition-all duration-300 relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-purple transition-all duration-300 group-hover:w-full"></span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-cyan bg-transparent hover:bg-gray-50 transition-all duration-300 rounded-lg">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100">
                      <div className="grid grid-cols-2 gap-2">
                        {courseLinks.map((course) => (
                          <Link
                            key={course.name}
                            to={course.to}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan/10 hover:to-purple/10 hover:shadow-md group"
                          >
                            <div className="text-sm font-medium leading-none text-navy group-hover:text-cyan transition-colors">
                              {course.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          to="/programs"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-navy to-cyan rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          View All Programs
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="ml-6">
              <Link to="/apply-as-mentor">
                <Button className="bg-gradient-to-r from-navy to-cyan hover:from-cyan hover:to-navy text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border-0">
                  Apply as Mentor
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-navy hover:text-cyan transition-all duration-300 rounded-lg hover:bg-gray-50"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
              <div className="py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="block px-6 py-3 text-gray-700 hover:text-cyan hover:bg-gray-50 transition-all duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:text-cyan hover:bg-gray-50 transition-all duration-300 font-medium">
                    Programs
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl ml-6">
                    {courseLinks.map((course) => (
                      <DropdownMenuItem key={course.name} asChild>
                        <Link 
                          to={course.to}
                          className="px-4 py-3 text-sm text-gray-700 hover:text-cyan hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          {course.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <DropdownMenuItem asChild>
                        <Link 
                          to="/programs"
                          className="px-4 py-3 text-sm font-medium text-cyan hover:bg-cyan/10 transition-all duration-300 cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Programs
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <div className="px-6 pt-4 border-t border-gray-100 mt-4">
                  <Link to="/apply-as-mentor" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-navy to-cyan hover:from-cyan hover:to-navy text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                      Apply as Mentor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
