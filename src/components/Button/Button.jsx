import React from "react";
import Bulet from "./Bulet";

const Button = () => {
  return (
      <a href="https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/" className="flex">
        <div className="w-fit rounded-full px-10 py-5 bg-[#0b0b0d]">
          <p className="poppins text-white font-bold">MY RESUME</p>
        </div>
        <div className="-ml-2">
          <Bulet />
        </div>
      </a>
  );
};

export default Button;
