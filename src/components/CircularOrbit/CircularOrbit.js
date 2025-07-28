import React from "react";
import { motion } from "framer-motion";

const orbitItems = [
  "Attendance", "Registration", "LMS", "Digital Content", "Time Table",
  "Exam", "Fee", "Admission", "Report Card", "Transport", "Library"
];

const CircularOrbit = () => {
  const radius = 160; 

  return (
    <div className="relative w-[500px] h-[500px] mx-auto my-10">
      
      {/* Rotating Items Wrapper */}
      <motion.div
        className="absolute w-full h-full top-0 left-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {orbitItems.map((item, index) => {
          const angle = (360 / orbitItems.length) * index;
          const angleInRad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(angleInRad);
          const y = radius * Math.sin(angleInRad);

          return (
            <div
              key={index}
              className="absolute w-24 h-24 rounded-full flex items-center justify-center text-sm text-center bg-white border shadow-md"
              style={{
                top: `calc(50% + ${y}px - 48px)`, // 48 = half of item height
                left: `calc(50% + ${x}px - 48px)`, // 48 = half of item width
              }}
            >
              {item}
            </div>
          );
        })}
      </motion.div>

     
    </div>
  );
};

export default CircularOrbit;
