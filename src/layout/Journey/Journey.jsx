import React, { useEffect } from "react";
import journeyData from "./dataJourney.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="xl:px-20 bg-[#0b0b0d] pt-44 text-white pb-52">
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
                className="w-full h-44 lg:h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="5000"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center  px-4">
              <div className="p-3 rounded-full bg-white"  data-aos="fade-up" data-aos-duration="1000"></div>
              {index !== journeyData.length - 1 && (
                <div className="w-0.5 h-44 lg:h-[280px] bg-white"  data-aos="fade-up" data-aos-duration="3000"></div>
              )}
            </div>
            <div className="w-1/3 flex px-4 h-44 lg:h-[280px]">
              <p className="radio text-xl max-w-md"  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}   data-aos-duration="4000">
                {entry.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
