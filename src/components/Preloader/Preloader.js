import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "DREAMTEAM";

const Preloader = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const totalDuration = 2000;
    const intervalTime = totalDuration / text.length;

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 500);
        return prev;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0  bg-gradient-to-r from-slate-800 to-slate-950 opacity-80  flex items-center justify-center z-50"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
        >
          <h1
            className="text-white text-center tracking-widest font-[Anton]
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(0px)", scale: 1.3 }}
                animate={
                  index < visibleChars
                    ? {
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: [1.4, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.01,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
