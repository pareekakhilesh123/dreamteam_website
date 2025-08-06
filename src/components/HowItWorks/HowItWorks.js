import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We work closely with you to understand your specific requirements and goals. We craft a custom strategy tailored to meet your unique needs.",
    color: "bg-red-500",
    border: "border-red-500",
    alignment: "right",
  },
  {
    title: "Design & Development",
    description:
      "Our skilled developers and designers create a blueprint of the solution and start working on the code and design, transforming your vision into an interactive and user-friendly software.",
    color: "bg-green-600",
    border: "border-green-600",
    alignment: "left",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Quality assurance is a crucial part of our process. Our QA team rigorously tests the product to ensure all functionalities work flawlessly, delivering the best quality software.",
    color: "bg-orange-500",
    border: "border-orange-500",
    alignment: "right",
  },
  {
    title: "Deployment & Support",
    description:
      "Once the product is ready, we ensure a smooth deployment and provide you with training and ongoing support. Our goal is to build a long-term partnership and offer continuous assistance whenever you need it.",
    color: "bg-indigo-800",
    border: "border-indigo-800",
    alignment: "left",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const animatedHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white py-16 px-4 md:px-12 relative"
    >
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">How it works?</h2>
        <p className="text-xl text-purple-400 font-semibold mt-2">
          Our Proven Process for Successful Project Delivery
        </p>
      </div>

      {/* Stepper Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Static white line */}
        <div className="absolute top-16 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/20 rounded-full" />

        {/* Animated progress line */}
      <motion.div
  style={{ height: animatedHeight }}
  className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-full sm:z-10 z-[-10]"
/>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`mb-24 flex flex-col md:flex-row ${
              step.alignment === "right" ? "md:justify-end" : "md:justify-start"
            } items-center relative`}
          >
            {/* Dot outline */}
            <div className="hidden md:block absolute w-5 h-5 rounded-full z-10 border-4 border-white bg-black left-1/2 transform -translate-x-1/2" />
            {/* Dot color */}
            <div
              className={`hidden md:block absolute w-4 h-4 rounded-full ${step.color} z-20 left-1/2 transform -translate-x-1/2`}
            />

            {/* Animated Card */}
            <motion.div
              whileInView={{ borderColor: step.border.replace("border-", "") }}
              transition={{ duration: 0.5 }}
              className={`relative bg-black border-2 p-6 rounded-xl w-full md:w-1/2 transition-all duration-500 ease-in-out ${
                step.alignment === "right"
                  ? "md:ml-12 md:text-left"
                  : "md:mr-12 md:text-right"
              } ${step.border}`}
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-300 mt-2">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
