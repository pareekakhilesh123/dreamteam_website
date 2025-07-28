import React from 'react';
import { FaRegSmile, FaCubes, FaUsers } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { RiBarChartGroupedLine } from "react-icons/ri";

const StatsSection = () => {
  const stats = [
    { icon: <RiBarChartGroupedLine className="text-3xl text-blue-500" />, 
        value: '17+',
         label: 'Successful Years' },

    { icon: <FaUsers className="text-3xl text-blue-500" />, 
        value: '250+', 
        label: 'Happy Clients' },
    { icon: <FaRegSmile className="text-3xl text-blue-500" />,
         value: '100%',
          label: 'Satisfaction' },
    { icon: <FaCubes className="text-3xl text-blue-500" />,
         value: '55+',
          label: 'ERP Modules' },
    { icon: <BiSupport className="text-3xl text-blue-500" />,
         value: '100%', 
         label: 'Support' },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              {stat.icon}
              <span className="text-xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 ">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
