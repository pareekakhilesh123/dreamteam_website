import React from 'react';
import { FaSearch, FaChartBar, FaFileAlt, FaCode } from 'react-icons/fa';

const services = [
  {
    
    title: 'Literom ERP',
    description:
      'School version of LITEROM is specially designed to provide a complete comprehensive solution for School Automation/Management',
    icon: <FaSearch size={24} />,
    color: 'bg-pink-500',
    filptext: 'The School version of LITEROM is a comprehensive solution for automating school management. It simplifies administration, enhances communication, and streamlines student and faculty data management—all on one secure, user-friendly platform',
  },
  {
   
    title: 'Literom ERP',
    description:
      'College version of LITEROM is specially designed to provide a complete comprehensive solution for College Automation/Management',
    icon: <FaChartBar size={24} />,
    color: 'bg-teal-500',
    filptext: 'The College version of LITEROM is a powerful ERP solution tailored for higher education management. It integrates all key functions—academic tracking, admissions, finance, and more—into a single, efficient platform, simplifying operations and enhancing campus-wide collaboration.',
  },
  {
    
    title: 'Literom ERP',
    description:
      'University version of LITEROM is an integrated automation solution to handle large data volume of a University.',
    icon: <FaFileAlt size={24} />,
    color: 'bg-yellow-500',
    filptext: 'The University version of LITEROM is a comprehensive ERP solution designed for large-scale academic management. It unifies admissions, academics, administration, and financial operations into a single platform, empowering universities to operate efficiently and foster collaboration across departments',
  },
  {
   
    title: 'Webcrafter EDU',
    description:
      'A complete one-stop solution for all web-related requirements, synchronized with ERP of any educational institution.',
    icon: <FaCode size={24} />,
    color: 'bg-orange-500',
    filptext: 'As a Web Crafter, we specialize in delivering innovative web development and product development solutions. Our team combines creativity and technical expertise to build engaging, user-friendly websites and develop products that meet our clients unique needs, driving their digital success',
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6  text-center">
      <h2 className="text-3xl font-bold mb-4 uppercase">Our Services</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        I can help you in these particular areas.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 w-3/4 mx-auto m-20">
        {services.map((service, index) => (
          <div key={index} className="perspective">
            <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-lg shadow p-6 pt-16">
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full p-4 ${service.color}`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h2 className="text-lg font-semibold mb-2 mt-6">{service.title}</h2>
                <p className="text-sm text-gray-600 pt-4">{service.description}</p>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('')",  
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-60">
                  <p className="text-white text-sm font-normal">{service.filptext}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;



