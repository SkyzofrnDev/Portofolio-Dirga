import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "./dataProject.json";
import "./Style.css";
import { ShinyTextComponent } from "../../components";

const MyProject = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-20 bg-[#131313] pt-44 text-white">
      <div className="flex justify-between mb-20">
        <p className="font-bold text-5xl text-white/70">
          <ShinyTextComponent text="MY PROJECT" disabled={false} speed={3}/>
        </p>
        <p className="w-2/3 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
          repudiandae quibusdam, totam earum harum? temporibus!
        </p>
      </div>

      {projects.map((project, index) => (
        <Link to={project.href} key={index}>
          <div
            className={`HeadProject ${
              hoveredIndex === index ? "" : "mouse-leave"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div className="flex items-center text-white/50 justify-between">
                <p className="my-10 w-1/2 text-4xl Judul radio text-nowrap">
                  {project.title}
                </p>
                <p className="text-xl dirga radio mr-40 text-right">{project.desc}</p>
                <div className="containe w-fit mr-20">
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <path
                        d="M25.5 0L18.5455 18.5455L0 25.5L18.5455 32.4545L25.5 51L32.4545 32.4545L51 25.5L32.4545 18.5455L25.5 0Z"
                        fill="#686868"
                      />
                    </svg>
                  </div>
                  <div className="arrow p-5 bg-[#2A51D7] rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      className="rotate-45 text-white"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          d="M12 21l0 -17.5"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.2s"
                            values="20;0"
                          />
                        </path>
                        <path
                          stroke-dasharray="12"
                          stroke-dashoffset="12"
                          d="M12 3l7 7M12 3l-7 7"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.2s"
                            dur="0.2s"
                            values="12;0"
                          />
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className={`w-full h-[0.1rem] BGPutih ${
                  hoveredIndex === index ? "animate-enter" : "animate-exit"
                }`}
              ></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyProject;
