import React from "react";
import { CardSkill, ShinyTextComponent } from "../../components";

const MySkill = () => {
  return (
    <div className="bg-[#131313] text-white px-20">
      <div className="flex justify-between items-end  ">
        <div className="uppercase">
          <p className="font-semibold text-3xl">MY SKILL</p>
          <p className="font-bold text-6xl mt-10">
            My <span className="text-[#1299F5]"><ShinyTextComponent  text="Expertise" disabled={false} speed={3}/></span> <p>at a Glance</p>
          </p>
        </div>
        <div className="">
          <p className="text-xl">
            Explore the skills that define my professional <p>journey and drive my
            accomplishments.</p>
          </p>
          <div className="flex mt-5">
          <p className="font-semibold mr-5 text-xl">DISCOVER ME</p>
          <img src="/Arrow.svg" alt="" />
          </div>
        </div>
      </div>  
        <CardSkill/>
    </div>
  );
};

export default MySkill;
