import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pro from './components/Pro'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Footer from './components/Footer'

const Loader = () => {
  const loaderVariants = {
    initial: { opacity: 1, scale: 1 },
    animate: { 
      opacity: [1, 0.7, 1],
      scale: [1, 1.1, 1],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        variants={loaderVariants}
        initial="initial"
        animate="animate"
        className="w-24 h-24 bg-blue-500 rounded-full"
      />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black "
        >
        <Banner/>
        <Hero/>
        <Pro/>
        <Footer/>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;