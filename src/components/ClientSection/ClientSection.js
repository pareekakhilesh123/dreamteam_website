import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { client1, client2, client3, client4 } from "../assest";

const heading = "Meet Our Client's";

const ClientSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const clients = [
    { id: 1, img: client1, alt: "First Crack", link: "https://www.firstcrackcoffeeroasters.com/" },
    { id: 2, img: client2, alt: "Pearson", link: "https://www.pearsonvue.com/" },
    { id: 3, img: client3, alt: "St. Xavier's", link: "https://xaviersbokaro.com/" },
    { id: 4, img: client4, alt: "Yearbook Canvas", link: "https://www.yearbookcanvas.com" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-12 px-4 md:px-8 lg:px-20 text-center"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex justify-center flex-wrap gap-1"
      >
        {heading.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Divider with diamond */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-[1px] w-16 sm:w-20 bg-white"></div>
        <div className="mx-2 w-3 h-3 bg-white rotate-45"></div>
        <div className="h-[1px] w-16 sm:w-20 bg-white"></div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-10 sm:mb-12">
        Together With Educators, We&apos;re Shaping <br className="hidden sm:block" />
        the Future of Education
      </p>

      {/* Client logos with scroll animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 place-items-center">
        {clients.map((client, index) => (
          <motion.a
            key={client.id}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={client.img}
              alt={client.alt}
              className="object-contain max-h-full max-w-full"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
