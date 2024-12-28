import React from "react";

const Qoute = () => {
  return (
    <div className="bg-[#131313]">
      <div className="bg-[url('/bgqoutew.png')] bg-cover text-white w-full h-full p-10 px-16 rounded-t-[60px]">
        <p className="twcen text-9xl font-extrabold h-20">“</p>
        <p className="text-6xl uppercase radio font-semibold">
          Unlock your true potential. Believe, take action, and achieve
          greatness, because you are unstoppable.
        </p>
        <div className="flex justify-between items-center">
          <div className="border-2 border-white  h-0 w-1/2"></div>
          <p className="twcen text-9xl rotate-180 font-extrabold h-20">“</p>
        </div>
        <p className="radio text-2xl font-semibold">-AGUSDEV</p>
      </div>
    </div>
  );
};

export default Qoute;
