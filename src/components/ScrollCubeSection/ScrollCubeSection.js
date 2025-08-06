import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cubethreed from "./Cubethreed";
import mobileBackground from "../assest/OurServices/background.png"

const sections = [
  {
    title: "School",
    shortDesc:
      "School version of LITEROM is specially designed to provide a complete comprehensive solution for School Automation/Management",
    longDesc:
      "The School version of LITEROM is a comprehensive solution for automating school management. It simplifies administration, enhances communication, and streamlines student and faculty data management—all on one secure, user-friendly platform.",
  },
  {
    title: "College",
    shortDesc:
      "A Unique version specifically developed to organizing day to day administrative and academic requirements of a College",
    longDesc:
      "The College version of LITEROM is a powerful ERP solution tailored for higher education...",
  },
  {
    title: "University",
    shortDesc:
      "An integrated automation solution to handle the large data volume of a University...",
    longDesc:
      "The University version of LITEROM is a comprehensive ERP solution designed for large-scale academic management...",
  },
  {
    title: "Webcrafter EDU",
    shortDesc:
      "A complete one-stop solution for all web related requirement with synchronizing data...",
    longDesc:
      "As a Web Crafter, we specialize in delivering innovative web development and product development solutions...",
  },
];

const ScrollCubeSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sectionProgress = useTransform(scrollYProgress, [0, 1], [0, sections.length]);

  useEffect(() => {
    const unsubscribe = sectionProgress.on("change", (val) => {
      const index = Math.min(Math.floor(val), sections.length - 1);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, []);
  

  const mobileContainerRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (mobileContainerRef.current) {
      const container = mobileContainerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;

      const scrollPercent = scrollTop / scrollHeight;
      const newIndex = Math.min(
        sections.length - 1,
        Math.floor(scrollPercent * sections.length)
      );

      setActiveIndex(newIndex);
    }
  };

  const container = mobileContainerRef.current;
  container?.addEventListener("scroll", handleScroll);

  return () => container?.removeEventListener("scroll", handleScroll);
}, []);


  const leftTextX = useTransform(scrollYProgress, [0, 1], [430, -400]);
  const rightTextX = useTransform(scrollYProgress, [0, 1], [-400, 430]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [360, 1080]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 520]);

  return (
    <>
      {/*  For Desktop / Laptop  */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full h-[400vh] text-white px-4"
         
        style={{
          backgroundColor: "#070f2b",
          backgroundImage: `
            radial-gradient(at 8% 77%, #070f2b 0%, transparent 60%),
            radial-gradient(at 0% 82%, #1b1a55 0%, transparent 50%),
            radial-gradient(at 38% 56%, #535c91 0%, transparent 40%),
            radial-gradient(at 12% 79%, #9290c3 0%, transparent 30%)
          `,
        }}
      >
        <h2 className="text-center text-6xl font-bold z-10 pt-20">Our Services</h2>

        <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* Left Text */}
          <motion.div
            style={{ x: leftTextX, opacity: leftOpacity }}
            className="absolute top-10 md:top-20 w-full md:w-1/3 text-left"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{sections[activeIndex].title}</h1>
            <p className="text-base md:text-lg">{sections[activeIndex].shortDesc}</p>
          </motion.div>

          {/* Cube */}
          <Cubethreed rotateX={rotateX} rotateY={rotateY} />

          {/* Right Text */}
          <motion.div
            style={{ x: rightTextX, opacity: rightOpacity }}
            className="absolute bottom-10 md:bottom-20 w-full md:w-1/3 text-left md:text-right"
          >
            <p className="text-base md:text-lg">{sections[activeIndex].longDesc}</p>
          </motion.div>
        </div>
      </div>

      {/*  For Mobile (below md) */}
      {/*  Mobile View with scroll-based section change */}
{/*  Mobile View with fixed heading and scroll-based sections */}


<div
  ref={mobileContainerRef}
  className="block md:hidden w-full h-screen overflow-y-scroll bg-cover bg-center text-white relative"
  style={{
    backgroundImage: `url(${mobileBackground})`,
  }}
>
  {/*  Fixed Heading on Top */}
  <div className="sticky top-10 z-10   py-4 text-center">
    <h2 className="text-5xl font-bold">Our Services</h2>
  </div>

  {/*  Scrollable Sections */}
  {sections.map((section, index) => (
    <div
      key={index}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 transition-all duration-1000 ease-in-out"
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4">{section.title}</h1>
        <p className="text-base mb-4">{section.shortDesc}</p>
        <p className="text-sm">{section.longDesc}</p>
      </motion.div>
    </div>
  ))}
</div>


    </>
  );
};

export default ScrollCubeSection;
