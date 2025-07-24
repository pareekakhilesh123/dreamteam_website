import React from 'react';
import { FaSearch, FaChartBar, FaFileAlt, FaCode } from 'react-icons/fa';

const services = [
  {
    number: '01',
    title: 'Literom ERP',
    description:
      'School School version of LITEROM is specially designed to provide a complete comprehensive solution for School Automation/Management',
   
    icon: <FaSearch size={24} />,
    color: 'bg-pink-500',
  },
  {
    number: '02',
    title: 'Literom ERP',
    description:
      'College version of LITEROM is specially designed to provide a complete comprehensive solution for College Automation/Management',

    icon: <FaChartBar size={24} />,
    color: 'bg-teal-500',
  },
  {
    number: '03',
    title: 'Literom ERP',
    description:
      'University An integrated automation solution to handle the large data volume of a University with security and user-friendly environment',
    
    icon: <FaFileAlt size={24} />,
    color: 'bg-yellow-500',
  },
  {
    number: '04',
    title: 'Webcrafter EDU',
    description:
      'A complete one-stop solution for all web related requirement with synchronizing data with ERP of any School/College/University ',
    
    icon: <FaCode size={24} />,
    color: 'bg-orange-500',
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 uppercase">Our Services</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
       I can help you in this particular areas.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="relative bg-gray-100 rounded-lg shadow p-6 pt-16">
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full p-4 ${service.color}`}>
              <div className="text-white">{service.icon}</div>
            </div>
            {/* <div className="text-sm font-bold text-white rounded-full px-3 py-1 inline-block mb-2" style={{ backgroundColor: service.color.replace('bg-', '') }}>
              {service.number}
            </div> */}
            <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
