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
    <div className="bg-[#131313] text-white px-20">
      <div className="flex justify-between items-end  ">
        <div className="uppercase">
          <p className="font-semibold text-3xl">MY SKILL</p>
          <p className="font-bold text-6xl mt-10">
            My{" "}
            <span className="text-[#1299F5]">
              <ShinyText text="Expertise" disabled={false} speed={3} />
            </span>{" "}
            <p>at a Glance</p>
          </p>
        </div>
        <div className="">
          <p className="text-xl">
            Explore the skills that define my professional{" "}
            <p>journey and drive my accomplishments.</p>
          </p>
          <div className="flex mt-5">
            <p className="font-semibold mr-5 text-xl">DISCOVER ME</p>
            <img src="/Arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <CardSkill />
    </div>
  );
};

export default MySkill;
