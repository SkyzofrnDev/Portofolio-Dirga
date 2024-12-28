import React from "react";
import Block from "../Block/Block";
import Rotate from "../Rotate/Rotate";

const Every = () => {
  return (
    <div className="-z-10 bg-[#1299F5] px-5 pr-7 text-white  border-black border-4 rotate-6 shadow-[0px_10px_8px_10px_#00000030]">
      <div className="absolute bottom-[7.6rem] right-[26.3rem]">
        <Block />
      </div>
      <div className="absolute bottom-[7.5rem] left-[26.5rem]">
        <Block />
      </div>
      <div className="absolute top-[7.5rem] left-[26.5rem]">
        <Block />
      </div>
      <div className="absolute top-[7.6rem] right-[26.3rem]">
        <Block />
      </div>
      <div className="poppins font-bold">
        EVERY
      </div>

    </div>
  );
};

export default Every;
