import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import hero1 from '../assets/Heroimg.jpg';
import hero2 from '../assets/hero2.jpg';

function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [currentImage, setCurrentImage] = useState(window.innerWidth < 768 ? hero2 : hero1);

  useEffect(() => {
    const handleResize = () => {
      setCurrentImage(window.innerWidth < 768 ? hero2 : hero1);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className={`hero-container`}>
      <img className='w-full' src={currentImage} alt="" />
      <div className='absolute left-0 top-0 h-full w-full'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={textVariants}
          className="mx-auto h-full max-w-[1648px] grid-cols-12 gap-x-4 px-4 lg:grid relative"
        >
          <div className="col-span-10 col-start-2">
            <div className='pt-[157px] text-center md:pt-[170px] lg:pt-[27px] lg:text-left xl:pt-[315px] 2xl:pt-[305px] '>
              <p className='hero-title 4xl:text-[48px] 4xl:leading-[52px] pb-2.5 text-[24px] font-400 leading-[32px] tracking-common text-white md:text-[32px] md:font-300 md:leading-[40px] lg:text-left xl:text-[40px] xl:leading-[48px]'>
                <span className="y-w block">
                  <span className='y'>
                    The first webcam
                  </span>
                  <span className='y-w block'>
                    <span className='y'>
                      designed for laptops.
                    </span>
                  </span>
                </span>
              </p>
              <a className='hero-button mt-[15px] inline-flex h-[40px] items-center justify-center rounded-full bg-[#ffdb01] px-5 pt-[3px] text-[16px] font-400 lg:pt-0' href='#'>
                Available now for $129
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;