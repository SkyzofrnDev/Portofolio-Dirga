import React from "react";
import { Button } from "../../components";
import Bulet from "../../components/Button/Bulet";

const Heroresponsive = () => {
  return (
    <div className="mt-28 mx-5">
      <div className="text-5xl font-bold mb-8 ">
        <p>INNOVATION </p>
        <p>IN EVERY</p>
        <div className="flex items-center gap-2 ">
          <svg
            className="w-11 h-11 p-2 rounded-full bg-[#252525]"
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="52"
            viewBox="0 0 51 52"
            fill="#fff"
          >
            <path
              d="M25.4997 0.148926L18.5451 18.6944L-0.000305176 25.6489L18.5451 32.6035L25.4997 51.1489L32.4542 32.6035L50.9997 25.6489L32.4542 18.6944L25.4997 0.148926Z"
              fill="#"
              fill-opacity="0.8"
            />
          </svg>
          <p className="text-[#2a51d7]">PIXEL</p>
        </div>
      </div>
      <div className="flex gap-2 gap-y-4 w-3/4 flex-wrap">
        <div className="rounded-full border-2 border-black px-5 py-1">
          <p className="font-semibold">UI & UX</p>
        </div>
        <div className="rounded-full border-2 border-black px-5 py-1">
          <p className="font-semibold">FRONT END</p>
        </div>
        <div className="rounded-full border-2 w-36 border-black px-4 py-1">
          <p className="font-semibold">DEV OPS</p>
        </div>
      </div>
      <div className="mt-5">
        <a
          href="https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/"
          className="flex"
          target="_blank"
        >
          <div className="w-fit flex items-center justify-center rounded-full px-6 py-2 bg-[#0b0b0d]">
            <p className="poppins text-white font-bold">MY RESUME</p>
          </div>
          <div className="p-4 rounded-full bg-[#0b0b0d]">
            <img className="w-4" src="/Arrow.svg" alt=""  loading="lazy"/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Heroresponsive;
