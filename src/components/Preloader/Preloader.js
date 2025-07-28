import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "DREAMTEAM";

const Preloader = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds
    const intervalTime = totalDuration / text.length; // 200ms

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 500); // small pause after animation
        return prev;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1
            className="text-black text-center tracking-widest"
            style={{ fontFamily: "Anton", fontSize: "100px" }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(5px)", scale: 1.3 }}
                animate={
                  index < visibleChars
                    ? {
                        opacity: 1,
                        filter: "blur(1px)",
                        scale: [1.4, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.01, // much faster delay between characters
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
