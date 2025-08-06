import React from 'react';
import { motion } from 'framer-motion';
import { FaRegSmile, FaCubes, FaUsers } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { RiBarChartGroupedLine } from "react-icons/ri";

const stats = [
  {
    icon: <RiBarChartGroupedLine className="text-4xl text-green-700" />,
    value: '17+',
    label: 'Successful Years',
  },
  {
    icon: <FaUsers className="text-4xl text-green-700" />,
    value: '250+',
    label: 'Happy Clients',
  },
  {
    icon: <FaRegSmile className="text-4xl text-green-700" />,
    value: '100%',
    label: 'Satisfaction',
  },
  {
    icon: <FaCubes className="text-4xl text-green-700" />,
    value: '55+',
    label: 'ERP Modules',
  },
  {
    icon: <BiSupport className="text-4xl text-green-700" />,
    value: '100%',
    label: 'Support',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4 " style={{
    backgroundColor: '#071e16ff',
    backgroundImage: `
      radial-gradient(at 90% 0%, #1f2d28ff 0%, transparent 60%),
      radial-gradient(at 83% 6%, #0e2215ff 0%, transparent 50%),
      radial-gradient(at 89% 43%, #2b3323ff 0%, transparent 40%),
      radial-gradient(at 82% 57%, #104d2fff 0%, transparent 30%)`
  }}>
    <div
  className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center rounded-xl p-4"
  
>

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white  shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            {stat.icon}
            <span className="mt-3 text-2xl font-extrabold text-gray-800">{stat.value}</span>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
