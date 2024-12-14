import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import News from "./News";

const navItems = [
  { 
    title: "Products", 
    subitems: ["Laptops", "Desktops", "Tablets"] 
  },
  { 
    title: "Services", 
    subitems: ["Consulting", "Support", "Training"] 
  },
  { 
    title: "About", 
    subitems: ["Our Story", "Team", "Careers"] 
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedMobileSection(null);
  };

  const toggleMobileSection = (index) => {
    setExpandedMobileSection(expandedMobileSection === index ? null : index);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 hidden md:block mt-10 ${
          isScrolled ? " " : "bg-transparent"
        }`}
      >
        <div className="container mx-3  py-3  flex items-start">
          {/* Logo */}
          <div className="mr-8">
            <span 
              className={`text-4xl  transition-all ${
                isScrolled ? "text-black" : "text-white opacity-75"
              }`}
            >
              Opal
            </span>
          </div>

          {/* Navigation Items */}
          <div
            className={`flex mx-[190px] pr-  space-x-6 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {navItems.map((item, index) => (
              <div
                key={item.title}
                className="group"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Navigation Title */}
                <div className="flex items-center cursor-pointer">
                  <span>{item.title}</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>

                {/* Subitems */}
                <AnimatePresence>
                  {(!isScrolled || hoveredItem === index) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute top-0 mt-2 ${
                        isScrolled 
                          ? "bg-white shadow-lg  left-36" 
                          : "bg-transparent left-64"
                      } rounded-lg p-4 min-w-[200px]`}
                    >
                      <div className={`${isScrolled ? 'bg-white' : 'bg-transparent'} rounded-lg px-8 py-6 flex justify-between items-start`}>
                        {/* Navigation Columns */}
                        <div className="flex space-x-12">
                          {navItems.map((section) => (
                            <div key={section.title}>
                              {isScrolled && (
                                <h3 className="font-semibold text-black mb-4">
                                  {section.title}
                                </h3>
                              )}
                              <ul className="space-y-2">
                                {section.subitems.map((subitem) => (
                                  <li
                                    key={subitem}
                                    className={`${
                                      isScrolled 
                                        ? 'text-gray-600 hover:text-black' 
                                        : 'text-gray-400'
                                    } cursor-pointer`}
                                  >
                                    {subitem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 md:hidden ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span 
            className={`text-4xl transition-all ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Opal
          </span>

          <button 
            onClick={toggleMobileMenu}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } z-60`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-0 left-0 w-full h-screen bg-white pt-20 px-6 overflow-y-auto"
              >
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={toggleMobileMenu}
                    className="text-black"
                  >
                    <X size={24} />
                  </button>
                </div>

                {navItems.map((section, sectionIndex) => (
                  <div key={section.title} className="mb-4">
                    <div 
                      onClick={() => toggleMobileSection(sectionIndex)}
                      className="flex justify-between items-center border-b pb-2 cursor-pointer"
                    >
                      <span className="text-xl font-semibold">{section.title}</span>
                      <ChevronDown 
                        className={`transform transition-transform ${
                          expandedMobileSection === sectionIndex 
                            ? 'rotate-180' 
                            : 'rotate-0'
                        }`} 
                      />
                    </div>

                    <AnimatePresence>
                      {expandedMobileSection === sectionIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-2 space-y-2">
                            {section.subitems.map((subitem) => (
                              <li 
                                key={subitem}
                                className="text-gray-600 hover:text-black py-2"
                              >
                                {subitem}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <News isScrolled={isScrolled}/>
    </>
  );
};

export default Navbar;