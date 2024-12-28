import React from "react";
import "./Style.css";
const About = () => {
  return (
    <div className="overflow-x-hidden  `justify-center mt-10">
      <div className="ronded bg-[#131313] text-white px-20 p-10">
        <div className="flex gap-16 items-center mt-20">
          <div className="bg-white p-5 w-fit h-fit">
            <img src="/Profile.jpg" className="w-[900px]" alt="" />
            <p className="text-black font-semibold poppins uppercase text-xl mt-2">
              Dirga Hardeka Agustiantara
            </p>
          </div>
          <p className="Desc">
            I am a motivated and eager student currently studying at SMKN 1
            CIBINONG. With a keen interest in Website Programing, I have
            developed strong skills in Website Developer. I am actively involved in Nevtik
            Academy and enjoy taking on challenges that help me grow both
            academically and personally. My goal is to continue learning and
            applying my skills to make a positive impact in my school and
            community, while preparing for future opportunities in Software
            Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
