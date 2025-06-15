import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Style.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const wordRefs = useRef([]);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const content = `I am a motivated and eager student currently studying at SMKN 1 CIBINONG. With a keen interest in Website Programing, I have developed strong skills in Website Developer. I am actively involved in Nevtik Academy and enjoy taking on challenges that help me grow both academically and personally. My goal is to continue learning and applying my skills to make a positive impact in my school and community, while preparing for future opportunities in Software Engineering.`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
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
    }
  }, [isLoading]);

  return (
    <div className="md:rounded-t-[4rem] overflow-x-hidden justify-center mt-10">
      <div className="bg-[#0b0b0d] text-white px-6 md:px-10 lg:px-20 py-1 md:py-10">
        <div className="flex flex-col xl:flex-row w-full gap-10 items-center justify-center mt-10">
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

          <div className="w-full text-xl sm:text-3xl lg:2xl/normal 2xl:text-3xl/normal mb-20 leading-relaxed">
            {isLoading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-700 rounded w-5/6"></div>
                <div className="h-6 bg-gray-700 rounded w-full"></div>
                <div className="h-6 bg-gray-700 rounded w-2/3"></div>
                <div className="h-6 bg-gray-700 rounded w-1/2"></div>
              </div>
            ) : (
              <p
                ref={containerRef}
                className="flex justify-between flex-wrap gap-x-2 text-xl md:text-3xl text-center lg:text-left xl:text-4xl"
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
