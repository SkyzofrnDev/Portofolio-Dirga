import React, { useEffect } from "react";
import journeyData from "./dataJourney.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="xl:px-20 bg-[#0b0b0d] md:pt-44 text-white pb-52">
      <div className="flex flex-col text-center md:mb-28">
        <p className="text-4xl uppercase font-bold radio text-center">
          Exploring My Professional Adventures
        </p>
        <p className="mt-5 text-xl">A Journey Through My Experiences</p>
      </div>
      <div className="max-w-[90rem] mx-auto">
        {journeyData.map((entry, index) => (
          <div
            key={index}
            className={`px-10 sm:px-5 md:px-24 lg:px-0 lg:flex mt-36 items-stretch justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="lg:w-1/3 flex items-center justify-center px-4">
              <img
                className="w-full h-44 lg:h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="5000"
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col items-center  px-4">
              <div className="hidden lg:flex p-3 rounded-full bg-white"  data-aos="fade-up" data-aos-duration="1000"></div>
              {index !== journeyData.length - 1 && (
                <div className=" hidden lg:flex w-0.5 h-44 lg:h-[280px] bg-white"  data-aos="fade-up" data-aos-duration="3000"></div>
              )}
            </div>
            <div className="mt-10 lg:mt-0 w-full lg:w-1/3 flex px-4 h-44 lg:h-[280px]">
              <p className="text-center lg:text-left radio sm:text-base md:text-lg lg:text-xl lg:max-w-md"  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}   data-aos-duration="4000">
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
