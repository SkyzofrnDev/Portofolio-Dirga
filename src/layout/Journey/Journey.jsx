import React from "react";
import journeyData from "./dataJourney.json";

const Journey = () => {
  return (
    <div className="px-20 bg-[#131313] pt-44 text-white pb-52">
      <div className="flex flex-col text-center mb-28">
        <p className="text-4xl uppercase font-bold radio px-36">
          Exploring My Professional Adventures
        </p>
        <p className="mt-5 text-xl">A Journey Through My Experiences</p>
      </div>
      <div className="max-w-7xl mx-auto">
        {journeyData.map((entry, index) => (
          <div
            key={index}
            className={`flex mt-10 items-stretch justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/3 flex items-center justify-center px-4">
              <img
                className="w-full h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
              />
            </div>
            <div className="w-1/3 flex flex-col items-center  px-4">
              <div className="p-3 rounded-full bg-white"></div>
              {index !== journeyData.length - 1 && (
                <div className="w-0.5 h-[280px] bg-white"></div>
              )}
            </div>
            <div className="w-1/3 flex   px-4 h-[280px]">
              <p className="radio text-xl max-w-md">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
