import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const navItems = [
  {
    title: 'Products',
    subitems: ['Laptops', 'Desktops', 'Tablets']
  },
  {
    title: 'Services',
    subitems: ['Consulting', 'Support', 'Training']
  },
  {
    title: 'About',
    subitems: ['Our Story', 'Team', 'Careers']
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed left-0 w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <div className="mr-8">
          <img 
            src="/api/placeholder/100/50" 
            alt="Logo" 
            className="h-10"
          />
        </div>

        {/* Navigation Items */}
        <div 
          className={`
            flex items-center space-x-6 
            ${isScrolled ? 'text-black' : 'text-white'}
          `}
          onMouseLeave={() => setActiveNavItem(null)}
        >
          {navItems.map((item, index) => (
            <div 
              key={item.title}
              className="relative group"
              onMouseEnter={() => setActiveNavItem(index)}
            >
              <div className="flex items-center cursor-pointer">
                <span>{item.title}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>

              <AnimatePresence>
                {(isScrolled ? activeNavItem === index : true) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`
                      absolute top-full left-0 mt-2 
                      ${isScrolled 
                        ? 'bg-white shadow-lg' 
                        : 'bg-black/50 backdrop-blur-md'}
                      rounded-lg p-4 min-w-[200px]
                      transition-all duration-300
                    `}
                  >
                    {item.subitems.map((subitem) => (
                      <div 
                        key={subitem} 
                        className="py-2 hover:bg-gray-100 rounded-md"
                      >
                        {subitem}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;