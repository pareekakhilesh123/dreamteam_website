import React from 'react';
import { Collage, logo1, School, University } from '../assest';
import IconCircleCard from '../IconCircleCard/IconCircleCard';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white px-4">
   
      <div className=" left-1/2 transform -translate-x-1/2">
        <img src={logo1} alt="Logo" className="w-28 md:w-full rounded-xl border-2 border-white" />
      </div>

     
      <div className="text-center z-10">
        <h1
          style={{ fontFamily: 'Anton' }}
          className="text-6xl md:text-8xl text-black"
        >
          Literom ERP

        </h1>
        <p className="text-gray-500 text-lg mt-2">Intelligent Solutions for Education 
        <span className='flex'> We Focus On Creating Value for Educational Organizations</span>
</p>
      </div>


      
     <motion.div
        className="absolute bottom-14 left-10 md:left-[765px] flex-col
"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <IconCircleCard icon={Collage} label="College" bgColor="bg-green-700" />
      </motion.div>

      {/* University Icon Animation */}
      <motion.div
        className="absolute bottom-14 right-10 md:right-[100px] md:top-[278px]"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <IconCircleCard icon={University} label="University" bgColor="bg-orange-700" />
      </motion.div>

      {/* School Icon Animation */}
      <motion.div
        className="absolute top-10 md:top-24 right-1/4 md:left-[499px]"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      >
        <IconCircleCard icon={School} label="School" bgColor="bg-amber-700" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
