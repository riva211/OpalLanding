import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Banner() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Show banner when scrolling up
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } 
        // Hide banner when scrolling down
        else if (currentScrollY > 50) {
          setIsVisible(false);
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-yellow-400 py-2 text-md text-black"
          >
            Take $50 off any order $200 USD or more with code <b className="ml-1">ANY50</b>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  

export default Banner