import React from 'react';
import { Collage, Pencil, School, University } from '../assest';
import IconCircleCard from '../IconCircleCard/IconCircleCard';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import PlexusBackground from '../../components/PlexusBackground/PlexusBackground';


const HeroSection = () => {
  const radius = 165;

  // Motion values for each icon
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);

  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);

  const x3 = useMotionValue(0);
  const y3 = useMotionValue(0);

  useAnimationFrame((t) => {
    const baseAngle = (t / 9000) * Math.PI;

    // 0° for School
    x1.set(radius * Math.cos(baseAngle));
    y1.set(radius * Math.sin(baseAngle));

    // 120° offset for College
    x2.set(radius * Math.cos(baseAngle + (2 * Math.PI) / 3));
    y2.set(radius * Math.sin(baseAngle + (2 * Math.PI) / 3));

    // 240° offset for University
    x3.set(radius * Math.cos(baseAngle + (4 * Math.PI) / 3));
    y3.set(radius * Math.sin(baseAngle + (4 * Math.PI) / 3));
  });

  return (
  <section className="relative h-screen md:h-screen flex items-center justify-center px-4 py-10 md:py-0">

  {/* Background Layer */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-800 to-slate-950 opacity-80 h-screen">
    <PlexusBackground />
  </div>

  {/* HeroSection Content Wrapper */}
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 z-10">
    
    {/* Left Side */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="relative w-[200px] mb-4">
      
        <img src={Pencil} alt="Pencil Banner" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-red-400" style={{ fontFamily: 'Alice' }}>
            LITEROM ERP
          </span>
        </div>
      </div>

      <h1 className="mt-2 text-4xl md:text-5xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400" style={{ fontFamily: 'Alice' }}>
        Intelligent <span className="text-white font-bold text-focus-in">Solutions</span>
        <br /> for Education
      </h1>

      <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md" style={{ fontFamily: 'Alice' }}>
        We Focus On Creating Value for Educational Organizations
      </p>

      <button className="mt-6 px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md hover:bg-blue-700 transition">
        ENQUIRY NOW
      </button>
    </div>

    {/* Right Side */}
   
<div className=" hidden md:flex flex-1 relative items-center justify-center">
  {/* Orbiting Icons - Behind the Text */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <motion.div style={{ x: x1, y: y1, left: '42%', top: '40%' }} className="absolute">
      <IconCircleCard icon={School} label="School" bgColor="bg-amber-700" />
    </motion.div>

    <motion.div style={{ x: x2, y: y2, left: '42%', top: '40%' }} className="absolute">
      <IconCircleCard icon={Collage} label="College" bgColor="bg-green-700" />
    </motion.div>

    <motion.div style={{ x: x3, y: y3, left: '42%', top: '40%' }} className="absolute">
      <IconCircleCard icon={University} label="University" bgColor="bg-orange-700" />
    </motion.div>
  </div>

  {/* Literom ERP Text - On Top */}
  <h1
    style={{ fontFamily: 'Anton' }}
    className="relative z-10  text-4xl md:text-4xl text-white text-center"
  >
    Literom ERP
  </h1>
</div>


{/* responsive for mobile  */}

<div className="md:hidden flex flex-row - mt-24  gap-4 items-center justify-center">
   
    <IconCircleCard icon={School} label="School" bgColor="bg-amber-700"  />
    <IconCircleCard icon={Collage} label="College" bgColor="bg-green-700" />
    <IconCircleCard icon={University} label="University" bgColor="bg-orange-700" /> 
  </div>


  </div>


  
  
  

</section>
  );
};

export default HeroSection;
