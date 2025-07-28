import React from 'react';

const IconCircleCard = ({ icon, label, bgColor }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center flex-col ${bgColor}`}>
        <img src={icon} alt="Icon" className="w-10 h-10" />
         <p className=" font-semibold text-white">{label}</p>
      </div>
     
    </div>
  );
};

export default IconCircleCard;
