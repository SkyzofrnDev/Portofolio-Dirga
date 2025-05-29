import React from "react";
import { CardSkill } from "../../components";

const ShinyText = ({disabled, className, animationDuration, text}) => {
  return(
  <div
    className={`text-[#1a50ffbb] bg-clip-text inline-block ${
      disabled ? "" : "animate-shine"
    } ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      animationDuration: animationDuration,
    }}
  >
    {text}
  </div>
  );
};
const MySkill = () => {
  return (
    <div className="bg-[#0b0b0d] text-white px-20">
      <div className=" lg:flex justify-between items-end ">
        <div className="uppercase">
          <p className="font-semibold text-3xl">MY SKILL</p>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
