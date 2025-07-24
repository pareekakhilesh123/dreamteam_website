import React, { useState, useEffect } from "react";
import { Hero1 , Hero2, Hero3 } from "../assest";

const slides = [
  {
    heading: "LITEROM ERP for Schools",
    points: [
      "Streamline attendance, academics & communication",
      "Boost efficiency with real-time reports",
      "Secure & centralized data management",
    ],
    img: Hero1,
  },
  {
    heading: "LITEROM ERP for Colleges",
    points: [
      "Simplified admissions & academic tracking",
      "Integrated financial and admin modules",
      "Collaboration across departments",
    ],
    img: Hero2,
  },
  {
    heading: "LITEROM ERP for Universities",
    points: [
      "Scalable ERP for large educational ecosystems",
      "All-in-one platform for multi-department needs",
      "Advanced security & user management",
    ],
    img: Hero3,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div className="relative w-full bg-white px-4 py-8 md:py-16 overflow-hidden ">
      {/* Enquire Box (Static) */}
      <div className="absolute bottom-4 right-4 md:right-16 z-10 bg-white shadow-2xl rounded-xl p-6 w-[90%] md:w-80">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Enquire Now</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-sm">Contact Us Today</p>
          <button className="bg-blue-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap ml-2">
            CLICK HERE
          </button>
        </div>
      </div>

      {/* Slide Content (Fixed Layout: Content Left, Image Right) */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 transition-all duration-700 ease-in-out h-full">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            {slide.heading}
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
            {slide.points.map((point, idx) => (
              <li key={idx}>• {point}</li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={slide.img}
            alt="hero-img"
            className="w-full h-full max-h-[400px] md:max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
