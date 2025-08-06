import React, { useState } from 'react';
import { Collage, Pencil, School, University } from '../assest';
import IconCircleCard from '../IconCircleCard/IconCircleCard';
import { motion, useMotionValue, useAnimationFrame , useScroll } from 'framer-motion';
import PlexusBackground from '../../components/PlexusBackground/PlexusBackground';
import Header from '../Header/Header';
import EnquireNow from '../EnquireNow/EnquireNow';
import { FaEnvelope  } from 'react-icons/fa';
 import { FaWhatsapp } from "react-icons/fa";


const HeroSection = () => {
  const radius = 165;
  const [showForm, setShowForm] = useState(true);
const { scrollYProgress } = useScroll();
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const x3 = useMotionValue(0);
  const y3 = useMotionValue(0);

  useAnimationFrame((t) => {
    const baseAngle = (t / 9000) * Math.PI;
    x1.set(radius * Math.cos(baseAngle));
    y1.set(radius * Math.sin(baseAngle));
    x2.set(radius * Math.cos(baseAngle + (2 * Math.PI) / 3));
    y2.set(radius * Math.sin(baseAngle + (2 * Math.PI) / 3));
    x3.set(radius * Math.cos(baseAngle + (4 * Math.PI) / 3));
    y3.set(radius * Math.sin(baseAngle + (4 * Math.PI) / 3));
  });

  return (
    
    <section className="relative h-screen flex items-center justify-center px-4 py-10">
     <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    borderRadius: "0 0 10px 10px",
                    originX: 0,
                    
                    zIndex: 1000,
                }}
            />
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 to-gray-900 opacity-70 h-screen">
        <PlexusBackground />
        <Header />
      </div>

      {/* Main Content */}
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
            Intelligent <span className="text-white font-bold text-focus-in">Solutions</span><br />
            for Education
          </h1>

          <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md" style={{ fontFamily: 'Alice' }}>
            We Focus On Creating Value for Educational Organizations
          </p>

          <button
     onClick={() => setShowForm(prev => !prev)}
 
            className="mt-6 px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            ENQUIRY NOW
          </button>
          
        </div>

        {/* Right Side Icons */}
        <div className="hidden md:flex flex-1 relative items-center justify-center">
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
          <h1 style={{ fontFamily: 'Anton' }} className="relative z-10 text-4xl text-white text-center">Literom ERP</h1>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex flex-row mt-6 gap-4 items-center justify-center">
          <IconCircleCard icon={School} label="School" bgColor="bg-amber-700" />
          <IconCircleCard icon={Collage} label="College" bgColor="bg-green-700" />
          <IconCircleCard icon={University} label="University" bgColor="bg-orange-700" />
        </div>
      </div>

      {/* Floating Enquiry Form */}
   <motion.div
  initial={{ x: '100%' }}
  animate={{ x: showForm ? 0 : '100%' }}
  transition={{ type: 'tween', duration: 0.5}}
  className="fixed top-4 right-0 z-50 h-full w-full sm:w-[400px]  shadow-lg overflow-y-auto"
>
  <EnquireNow onClose={() => setShowForm(false)} />
</motion.div>



      {/* Floating Icon Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-20 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <FaEnvelope size={20} />
        </button>
       

      )}
    <a
  href="https://wa.me/919413957281?text=I%20wish%20to%20enquire%20about%20Education%20ERP%20from%20DreamTeam%20Technologies"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4  z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
>
  <FaWhatsapp size={20} />
</a>

          
    </section>
  );
};

export default HeroSection;
