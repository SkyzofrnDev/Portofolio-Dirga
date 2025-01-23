import React from "react";
import Bulet from "./Bulet";

const Button = () => {
  return (
    <div className="flex">

    <div className="w-fit rounded-full px-10 py-5 bg-[#1e1e1e]">
      <p className="poppins text-white font-bold">LETS SEE</p>
    </div>
    <div className="-ml-2">

    <Bulet/>
    </div>

    </div>
  );
};

export default Button;

