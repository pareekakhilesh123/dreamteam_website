import React from "react";
import { motion } from "framer-motion";
import { back, bottom, front, left, right, top } from "../assest";

const Cubethreed = ({ rotateX, rotateY }) => {
  return (
    <div className="cube-wrapper w-64 h-64 perspective-[1000px]">
      <motion.div
        className="cube-box w-full h-full relative transform-style-preserve-3d"
        style={{ rotateY, rotateX }}
      >
        {/* Front */}
        <div
          className="cube-face w-full h-full absolute bg-slate-100 "
          style={{ transform: "rotateY(0deg) translateZ(128px)" }}
        >
          <img src={front} alt="Front" className="w-full h-full object-cover " />
        </div>

        {/* Right */}
        <div
          className="cube-face w-full h-full absolute"
          style={{ transform: "rotateY(90deg) translateZ(128px)" }}
        >
          <img src={right} alt="Right" className="w-full h-full object-cover " />
        </div>

        {/* Back */}
        <div
          className="cube-face w-full h-full absolute"
          style={{ transform: "rotateY(180deg) translateZ(128px)" }}
        >
          <img src={back} alt="Back" className="w-full h-full object-cover " />
        </div>

        {/* Left */}
        <div
          className="cube-face w-full h-full absolute"
          style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
        >
          <img src={left} alt="Left" className="w-full h-full  object-cover  bg-slate-100" />
        </div>

        {/* Top */}
        <div
          className="cube-face w-full h-full absolute bg-slate-100 "
          style={{ transform: "rotateX(90deg) translateZ(128px)" }}
        >
          <img src={top} alt="Top" className="w-full h-full object-cover " />
        </div>

        {/* Bottom */}
        <div
          className="cube-face w-full h-full absolute"
          style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
        >
          <img src={bottom} alt="Bottom" className="w-full h-full object-cover " />
        </div>
      </motion.div>
    </div>
  );
};

export default Cubethreed;
