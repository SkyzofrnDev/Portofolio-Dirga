import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Style.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const wordRefs = useRef([]);
  const containerRef = useRef(null);

  const content = `I am a motivated and eager student currently studying at SMKN 1 CIBINONG. With a keen interest in Website Programing, I have developed strong skills in Website Developer. I am actively involved in Nevtik Academy and enjoy taking on challenges that help me grow both academically and personally. My goal is to continue learning and applying my skills to make a positive impact in my school and community, while preparing for future opportunities in Software Engineering.`;

  useEffect(() => {
    gsap.fromTo(
      wordRefs.current,
      { color: "#2e2e2e", opacity: 0.5, y: 20 },
      {
        color: "#ffffff",
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className=" rounded-t-[4rem] overflow-x-hidden justify-center mt-10">
      <div className="rounded bg-[#0b0b0d] text-white px-6 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row w-full gap-10 items-center lg:items-center mt-10 items justify-center">
          {/* Foto */}
          <div className="bg-white p-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <img
              src="/Profile/Profile2.jpg"
              className="w-full object-cover aspect-square"
              alt="Profile"
            />
            <p className="text-black font-semibold poppins uppercase text-lg md:text-xl mt-2">
              Dirga Hardeka Agustiantara
            </p>
          </div>

          {/* Text */}
          <p
            ref={containerRef}
            className="w-full text-xl sm:text-2xl md:text-3xl/10 mb-20 leading-relaxed  flex flex-wrap gap-x-2"
          >
            {content.split(" ").map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {word + " "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
