import React, { useState } from "react";
import "./Style.css";
import dataSkill from "./dataSkill.json";

const CardSkill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-20 pb-20 flex flex-wrap gap-10 justify-between">
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
              className="w-[230px] h-[290px] rounded-3xl bg-gray-500 block"
              style={{ outline: 'none', border: 'none' }}
              alt=""
            />
            <div className="absolute top-0 left-0 ml-3 mt-3 bg-[#0b0b0d] rounded-full px-5 py-1">
              <p className="twcen text-xl tracking-wide">{skill.category}</p>
            </div>
            <div 
              className="display bg-[#0b0b0d] rounded-b-3xl p-5"
              style={{
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(100%)',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <div className="flex items-center gap-5 uppercase">
                <img 
                  className="icon-svg" 
                  src={skill.icon} 
                  alt="" 
                  width={32} 
                  height={32} 
                />
                <p className="twcen text-3xl tracking-wider">{skill.skill}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkill;
