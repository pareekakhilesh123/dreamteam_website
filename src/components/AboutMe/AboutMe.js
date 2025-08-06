import React from 'react';
import { Aboutme } from '../assest';



const AboutMe = () => {
  return (
    <section className=" py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left side*/}
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <p className="text-lg text-blue-600 font-medium mb-4">Hello, nice to meet you!</p>

          <p className="text-xl font-semibold text-gray-300 mb-6">
            We help individuals to become their best Tech - Solutions.
          </p>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              <strong>DREAMTEAM Technologies Pvt. Ltd.</strong>, a Jodhpur (India) based Company, provides Offshore
              Education Management Software to Schools, Colleges and Universities, Software Outsourcing, Website Design
              and Web Application Development Services globally.
            </p>

            <p>
              It's an ISO 9001:2008 & ISO 27001:2005 certified company, established in 2005. Our support solution,
              <strong> LITEROM™</strong>, uses cutting-edge technology.
            </p>

            <p>
              <strong>LITEROM™</strong> automates Schools, Colleges & Universities. It covers all campus operations and
              enhances interaction between students, teachers, parents, and the management.
            </p>
          </div>
        </div>

        {/* Right Side  */}
        <div>
          <img
            src={Aboutme}
            alt="About Dreamteam"
            className="w-full h-auto rounded-xl  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
