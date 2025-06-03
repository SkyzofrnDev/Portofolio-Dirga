import React from "react";
const Navbar = () => {
  return (
    <div className="z-[10000] flex justify-center mx-16 ">
      <div className="fixed z-50 w-[92%] max-w-full twcen text-white px-7 pr-10 pt-7 py-5 bg-[#0b0b0d] rounded-b-3xl text-3xl justify-between flex overflow-hidden">
        <div>
          <p className="">AGUSDEV</p>
        </div>
        <div>
          <ul className="flex gap-16 text-[1.5rem]">
            <li>ABOUT</li>
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
