import React, { useState } from "react";
import "./Style.css";
import dataSkill from "./dataSkill.json";

const CardSkill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex mt-20 pb-20 flex-wrap gap-10 items-center justify-evenly sm:justify-between ">
      {dataSkill.map((skill, index) => (
        <div 
          key={index}
          className="card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="card-container">
            <img
              src=""
              className="w-[150px] h-[200px] md:w-[230px] md:h-[290px] xl:w-[350px] xl:h-[430px] rounded-3xl bg-gray-500 block"
              style={{ outline: 'none', border: 'none' }}
              alt=""
               loading="lazy"
            />
            <div className="absolute top-0 left-0 ml-3 mt-3 bg-[#0b0b0d] rounded-full px-1.5 xl:px-9 xl:py-2 md:px-5 py-1">
              <p className="twcen md:text-xl xl:text-3xl tracking-wide">{skill.category}</p>
            </div>
            <div 
              className="display bg-[#0b0b0d] rounded-b-3xl p-2 xl:p-7 md:p-5"
              style={{
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(100%)',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <div className="flex items-center gap-3 md:gap-5 uppercase">
                <img 
                  className="icon-svg w-5 ml-3  md:ml-0 md:w-10" 
                  src={skill.icon} 
                  alt="" 
  loading="lazy"
                />
                <p className="twcen md:text-3xl xl:text-5xl tracking-wider">{skill.skill}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkill;
