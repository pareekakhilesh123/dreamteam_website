import React from "react";
import { motion } from "framer-motion";

const waveCount = 100;

const Footer = () => {
  return (
     <div className="relative h-screen bg-black flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Dreamteam Literom
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg md:text-xl text-gray-400">
        Transforming Education, One Campus at a Time
      </p>

      {/* Waves at Bottom */}
      <div className="absolute bottom-50 left-0 w-full flex justify-between drop-shadow-[0_-7px_10px_white] blur-sm contrast-[5]">
        {Array.from({ length: waveCount }).map((_, index) => {
          const delay = index * -0.02;

          return (
            <>
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 200, skewY: "-17deg" }}
              animate={{
                opacity: 0.05,
                y: -50,
                skewY: "17deg",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
              }}
              className="w-[14px] h-12 bg-gradient-to-b from-green-700/50 to-blue-700/20 "
            /> 

            <motion.div
              key={index}
              initial={{ opacity: 1, y: 200, skewY: "-17deg" }}
              animate={{
                opacity: 0.05,
                y: -50,
                skewY: "50deg",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
              }}
              className="w-[14px] h-12 bg-gradient-to-b from-green-700/50 to-blue-700/20"
            /> 

             <motion.div
              key={index}
              initial={{ opacity: 1, y: 200, skewY: "-17deg" }}
              animate={{
                opacity: 0.05,
                y: -50,
                skewY: "50deg",
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
              }}
              className="w-[14px] h-12 bg-gradient-to-b from-green-700/50 to-blue-700/20"
            /> 
             
         </>    
          );
        })}

        
      </div>
    </div>
  );
};

export default Footer;
