import React from 'react';
import { motion } from 'framer-motion';
import { Hero1, Hero3, ourservies, ourservies2, ourservies3 } from '../assest';

const FeatureCatalogSection = () => {
  const images = [ourservies, ourservies2, ourservies3, Hero1, Hero3];

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-12">
 
        <h2 className="text-3xl md:text-8xl font-bold text-center my-12">Our Feature</h2>

        <h1 className="text-5xl font-extrabold text-purple-500 mt-2">
          Feature & Catalog
        </h1>
        <p className="text-sm mt-2 text-gray-400">Literom ERP</p>
      </div>

      <div className="flex justify-center items-center gap-3 px-4 overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, height: "200px", width: "200px" }}

            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-[120px] h-[400px] overflow-hidden rounded-md cursor-pointer"
          >
            <img
              src={img}
              alt={`feature-${index}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCatalogSection;
