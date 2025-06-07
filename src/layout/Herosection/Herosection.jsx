import React, { useRef, useEffect, useState } from "react";
import {
  Cursor,
  Every,
  Rotate,
  TransBTClick,
  TransButton,
} from "../../components";
import Bulet from "../../components/Button/Button";

const bintang = [
  {
    gambar: "/bintang.svg",
  },
  {
    gambar: "/bintang.svg",
  },
  {
    gambar: "/bintang.svg",
  },
];

const Herosection = () => {
  const [buttonWidth, setButtonWidth] = useState(200);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsExpanding(true);
      const startTime = Date.now();
      const duration = 300;
      const startWidth = 200;
      const endWidth = 400;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < duration) {
          const progress = elapsed / duration;
          const currentWidth = startWidth + (endWidth - startWidth) * progress;
          setButtonWidth(currentWidth);
          setCursorPosition(currentWidth - startWidth);
          requestAnimationFrame(animate);
        } else {
          setButtonWidth(endWidth);
          setCursorPosition(endWidth - startWidth);
        }
      };

      requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-52 lg:my-36 xl:my-0 px-20 h-screen bg-center flex flex-col justify-center items-start text-9xl font-[750]">
      <div className="text-[#0b0b0d] xl:grid grid-cols-2 gap-80 mt-16 ">
        <div className="tracking-tight">
          <p>INNOVATION</p>
          <div className="flex mt-10">
            <p className="font-normal mr-5">IN</p>
            <div className="flex ">
              <Every />
              <div className="relative top-40">
                <Rotate />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center mt-5 ">
            <div className="flex gap-36">
              <div className="w-0">
                <svg
                  className="mt-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="auto"
                  viewBox="0 0 96 96"
                  fill="none"
                >
                  <circle
                    cx="47.6133"
                    cy="47.6134"
                    r="47.6133"
                    fill="#0b0b0d"
                  />
                  <path
                    d="M48.2237 19.5338L39.7332 39.9553L17.0919 47.6134L39.7332 55.2715L48.2237 75.693L56.7142 55.2715L79.3554 47.6134L56.7142 39.9553L48.2237 19.5338Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="">PIXEL.</p>
            </div>
          </div>
          <div className="font-normal flex-wrap gap-y-10 px-5 text-4xl flex gap-2 text-nowrap mt-5 relative w-full">
            <TransButton name={"UI & UX"} />
            <TransButton name={"FRONT END"} />
            <div className="relative flex-grow">
              <TransBTClick width={buttonWidth} isExpanding={isExpanding} />
              <div
                className="absolute top-16 left-52"
                style={{
                  transform: `translateX(${cursorPosition}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <Cursor />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 twcen text-[35px] leading-1 tracking-normal font-normal uppercase text-justify xl:mt-5 p-5">
          Hello,You can call me Dirga. A designer and developer exploring
          creative ideas to bring concepts to life
          <div className="flex gap-28 mt-10">
            {bintang.map((item, index) => (
              <div className="w-" key={index}>
                <img className="w-16" src={item.gambar} alt="" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Bulet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
