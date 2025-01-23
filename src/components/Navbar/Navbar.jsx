import React from "react";
import "../../index.css";
const Navbar = () => {
  return (
    <div className="z-10 flex justify-center mx-16 ">
      <div className="fixed z-10 w-[92%] max-w-full twcen text-white px-7 pr-10 pt-7 py-5 bg-[#1E1E1E] rounded-b-3xl text-3xl justify-between flex overflow-hidden">
        <div>
          <p className="">AGUSDEV</p>
        </div>
        <div>
          <ul className="flex gap-16 text-[1.5rem]">
            <li>ABOUT</li>
            <li>ACHIEVEMENTS</li>
            <li>EXPERIENCE</li>
            <li>SKILL</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
