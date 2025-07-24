import React from 'react';
import { Hero1, Hero2, Hero3 } from '../assest';

const PartnersSection = () => {
  return (
    <section className="py-8 bg-white text-center">
      <h2 className="text-xl font-semibold mb-6">
        Technical Partners & Recognised by
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        <img src={Hero1} alt="" className="h-20 object-contain" />
        <img src={Hero2} alt="" className="h-20 object-contain" />
        <img src={Hero3} alt="" className="h-20 object-contain" />
        {/* <img src={yourstoryLogo} alt="YourStory" className="h-10 object-contain" /> */}
      </div>
    </section>
  );
};

export default PartnersSection;
